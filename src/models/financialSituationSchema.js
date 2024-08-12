const mongoose = require('mongoose')
const Schema = mongoose.Schema

const financialSituationSchema = new Schema({
  month: Number,
  year: Number,
  expenses: Number,
  income: Number,
})

const FinancialSituation = mongoose.model(
  'FinancialSituation',
  financialSituationSchema
)
module.exports = FinancialSituation
