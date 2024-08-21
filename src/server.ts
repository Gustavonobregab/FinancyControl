import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
const FinancialSituation = require('./src/models/financialSituationSchema')

const app = express()
const port = 3000

app.use(express.json())

mongoose
  .connect(
    'mongodb+srv://gustavonobg:anurb24244@financycontrol.zukq0.mongodb.net/?retryWrites=true&w=majority&appName=FinancyControl'
  )
  .then(() => console.log('Connected!'))
  .catch((err) => console.error('Connection error:', err))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/financy', async (req: Request, res: Response) => {
  try {
    const financy = await FinancialSituation.find({})
    res.status(200).json(financy)
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
})

app.post('/financialsituation', async (req: Request, res: Response) => {
  try {
    const situation = await FinancialSituation.create(req.body)
    console.log(req.body)
    res.status(200).json(situation)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: (error as Error).message })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
