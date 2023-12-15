const http = require('http')

const server = http.createServer((req, res) => {
    res.write('It`s my server and he is alive')
    res.end()
})

server.listen(7077)