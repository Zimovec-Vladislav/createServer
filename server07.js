const http = require('http')
const favicon = require('serve-favicon')
const finalhandler = require('finalhandler')
const path = require('path')
const fs = require('fs')

const _favicon = favicon(path.join(__dirname, 'public', 'favicon.ico'))

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (data) resolve(data)
      else reject(err)
    })
  })
}

const server = http.createServer(async function onRequest (req, res) {
  const done = finalhandler(req, res)

  _favicon(req, res, async function onNext (err) {
    if (err) return done(err)

    // Main code
    switch(req.url) {
        case '/home' : {
          try {
            const data = await readFile('pages/home.html')
            res.write(data)
            res.end()
          } catch {
            res.write('some error, 500')
            res.end()
          }
          break
        }

        case '/about' : {
          await delay(3000)
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