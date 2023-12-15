const http = require('http')

const server = http.createServer((req, res) =>{
    res.write('Its answer to client. ')
    res.end('Its the end')
})

server.listen(3000)