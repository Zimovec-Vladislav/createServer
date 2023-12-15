const http = require('http')

const server = http.createServer((res, req) => {
    req.write('Communizm suck')
    req.end()
}).listen(3000)