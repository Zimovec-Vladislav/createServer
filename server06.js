const http = require('http')

const server = http.createServer((req, res) =>{

    switch (req.url) {
        
        case '/home' : {
            setTimeout(() => {
                const data = "It's possible"
                res.write(data)
                res.end()
            },5000)
            break
        } 
        default : {
            res.write('404 not found')
            res.end()
        }
    }
})

server.listen(3000)