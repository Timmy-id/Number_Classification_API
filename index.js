import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

import { isArmstrong, isPrimeNumber } from './helpers.js'

const app = express()

const PORT = 3000

app.use(cors())

app.get('/api/classify-number', async (req, res) => {
    const { number } = req.query

    const isInteger = Number.isInteger(parseInt(number))

    if (!isInteger) {
        return res.status(400)
            .json({
                number,
                error: true
            })
    }

    const NUMBERS_API_URL = `http://numbersapi.com/${Math.abs(number)}/math`

    const funFact = await fetch(NUMBERS_API_URL)
    const data = await funFact.text()

    const properties = []

    const sumDigits = Math.abs(number).toString().split('').reduce((acc, num) => acc + parseInt(num), 0)

    const isArmstrongNumber = isArmstrong(number) ? 'armstrong' : null
    const checkIsOddOrEven = number % 2 !== 0 ? 'odd' : 'even'
    const is_prime = isPrimeNumber(number)

    if (isArmstrongNumber) {
        properties.push(isArmstrongNumber, checkIsOddOrEven)
    } else {
        properties.push(checkIsOddOrEven);
    }

    return res.status(200)
        .json({
            "number": parseInt(number),
            is_prime,
            "is_perfect": false,
            properties,
            "digit_sum": sumDigits,
            "fun_fact": data
        })
})

app.use('*', (_req, res) => {
    res.status(404)
        .json({
            error: true
        })
    return
})

app.listen(PORT, () => {
    console.log('Server is running on port 3000')
})