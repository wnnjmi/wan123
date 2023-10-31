const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
 res.send('Hello World!')
})

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send('Login Success')
}

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})