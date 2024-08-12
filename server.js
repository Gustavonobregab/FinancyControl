const express = require('express')
const mongoose = require('mongoose')
const FinancialSituation = require('./src/models/financialSituationSchema')
const app = express()
const port = 3000
app.use(express.json())

mongoose
  .connect(
    'mongodb+srv://gustavonobg:anurb24244@financycontrol.zukq0.mongodb.net/?retryWrites=true&w=majority&appName=FinancyControl'
  )
  .then(() => console.log('Connected!'))

app.get('', (req, res) => {
  res.send('Hello World!')
})

app.get('/financy', async (req, res) => {
  try {
    const financy = await FinancialSituation.find({})
    res.status(200).json(financy)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

app.post('/financialsituation', async (req, res) => {
  try {
    const situation = await FinancialSituation.create(req.body)
    console.log(req.body)
    res.status(200).json(situation)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
