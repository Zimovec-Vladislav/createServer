const http  = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/home' : {
            const data = fs.readFileSync()
            res.write(data)
            break
        }

        default : {
            res.write('404 page not found')
            break
        }
    }
    res.end()
})

server.listen(3003)