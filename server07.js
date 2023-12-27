const http = require('http')
const favicon = require('serve-favicon')
const finalhandler = require('finalhandler')
const path = require('path')

const _favicon = favicon(path.join(__dirname, 'public', 'favicon.ico'))

const server = http.createServer(function onRequest (req, res) {
  const done = finalhandler(req, res)

  _favicon(req, res, function onNext (err) {
    if (err) return done(err)

    // Main code
    switch(req.url) {
        default : {
            res.write('404 Not Found')
            res.end()
        }
    }
    // End main code

    res.statusCode = 404
    res.end('oops')
  })
})

server.listen(3000)