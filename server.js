const express = require('express')
const mongoose = require('mongoose')
const FinancialSituation = require('./src/models/financialSituationSchema')
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

app.get('/months', async (req, res) => {
  try {
    const months = await Month.find({})
    res.status(200).json(months)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

app.post('/gastos', async (req, res) => {})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
