const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello About World!')
  })

  app.get('/signin', (req, res) => {
    res.send('Hello Signin ')
  })

  app.get('/signup', (req, res) => {
    res.send('Hello Signup World!')
  })

app.get('/contact', (req, res) => {
    res.send('Hello Contact  World!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})