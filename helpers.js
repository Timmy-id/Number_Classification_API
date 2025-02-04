export const isArmstrong = (number) => {
    const sum = Math.abs(number).toString().split('').reduce((acc, num) => acc + Math.pow(parseInt(num), number.length), 0)
    
    return sum == number
}

export const isPrimeNumber = (number) => {
    if (number < 2) return false
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false
    }
    return true
}

export const isPerfectNumber = (number) => {
    if (number < 2) {
        return false
    }

    let sum = 1

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sum += i
            if (i !== number / i) {
                sum += number / i
            }
        }
    }

    return sum === number
}
