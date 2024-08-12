const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

mongoose
  .connect(
    'mongodb+srv://gustavonobg:anurb24244@financycontrol.zukq0.mongodb.net/?retryWrites=true&w=majority&appName=FinancyControl'
  )
  .then(() => console.log('Connected!'))

app.get('', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
