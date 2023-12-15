const http = require('http')

const server = http.createServer((req, res) =>{

    switch (req.url) {
        case ('/undefined') : res.write('undefined')
        break
        case ('/boolean') : res.write('true and false')
        break
        case ('/number') : res.write('9346432')
        break
        default : res.write('Type of data')
    }

    res.end()
})

server.listen(3000)