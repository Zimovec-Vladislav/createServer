const http = require('http')

const server = http.createServer((req, res) => {
    switch(req.url) {
        case '/Fe': res.write('Fe its iron')
        break;
        case '/Cu': res.write('Cu its copper')
        break;
        case '/Au': res.write('Au its gold')
        break;
        default: res.write('All elements')
    }

    res.end()
})

server.listen(3000)