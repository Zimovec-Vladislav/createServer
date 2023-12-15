const http = require('http')

let number = 256

const server = http.createServer((req, res) => {
    res.write(`Number: ${number}. `)

    if (req.url !== '/favicon.ico') {
        number = Math.sqrt(number)
    }

    res.write(`Root number: ${number}`)
    res.end()
})

server.listen(3000)