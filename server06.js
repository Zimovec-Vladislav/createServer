const http = require('http')

const server = http.createServer((req, res) => {
    
    switch (req.url) {
        
        case '/home' : {
            setTimeout(() => {
                const data = 'Sell'
                res.write(data)
                res.end()
            },5000)
            break
        }

        default : {
            res.write("404 fuck off")
            res.end()
        }
        
    }
})

server.listen(3003)