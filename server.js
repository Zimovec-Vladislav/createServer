const http = require('http')

let faviconCount = 0

let requestCount = 0

const server = http.createServer((request, response) =>{
    if(request.url !== '/favicon.ico'){
        requestCount++
    } else faviconCount++

    response.write(`Count request: ${requestCount}/favicon request: ${faviconCount}`)
    response.end()
}).listen(3000)