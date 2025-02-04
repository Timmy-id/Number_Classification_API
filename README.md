Number_Classification_API
-----

## Introduction

This project documents a public API that takes a number and returns interesting mathematical properties about it, along with a fun fact.
The live link for the project can be found [here](https://number-classification-api-ten.vercel.app/api/classify-number?number=371)
 
## Tech Stack (Dependencies)

### 1. Dependencies
The tech stack used includes the following:
 * **Node** **v22.13.1** and **Express** **v4.21.2** as our server language and server framework
You can download and install the dependencies mentioned above using `npm` as:
The node installer can be downloaded from the [official website](https://nodejs.org/en/download/current)
```
npm install express
```

## Development Setup
1. **Download the project and run the code locally**
```
git clone https://github.com/Timmy-id/Number_Classification_API.git
cd Number_Classification_API/
```

2. **Install the dependencies:**
```
npm install
```

3. **Run the server**
```
npm start
```

## Resource Endpoint
### Success
```
GET http://localhost:3000/api/classify-number?number=33
```
#### Sample Response
```
200
```

```
{
    "number": 33,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["odd"],
    "digit_sum": 6,
    "fun_fact": "33 is the largest number that is not a sum of distinct triangular numbers."
}
```

### Bad Request
```
GET http://localhost:3000/api/classify-number?number=a
```
#### Sample Response
```
400
```

```
{
    "number": "a",
    "error": true
}
```

### Not Found
```
GET http://localhost:3000/new
```
#### Sample Response
```
404
```

```
{
  error: "Route not found"
}
```
