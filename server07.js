const http = require('http')
const favicon = require('serve-favicon')
const finalhandler = require('finalhandler')
const path = require('path')
const fs = require('fs')

const _favicon = favicon(path.join(__dirname, 'public', 'favicon.ico'))

const server = http.createServer(function onRequest (req, res) {
  const done = finalhandler(req, res)

  _favicon(req, res, function onNext (err) {
    if (err) return done(err)

    // Main code
    switch(req.url) {
        case '/home' : {
            fs.readFile('pages/home.html', (err, data) => {
              if (data) res.write(data)
              else res.write('some error')
              res.end()
            })
            break
        }

        case '/about' : {
            res.write('About this site')
            res.end()
            break
        }

        default : {
            res.write('404 Not Found')
            res.end()
        }
    }
    // End main code
  })
})

server.listen(3000)