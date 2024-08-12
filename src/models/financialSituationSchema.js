const mongoose = require('mongoose')
const Schema = mongoose.Schema

const financialSituationSchema = new Schema({
  month: Number,
  year: Number,
  expenses: Boolean,
  income: Boolean,
})

const FinancialSituation = mongoose.model(
  'FinancialSituation',
  financialSituationSchema
)
module.exports = FinancialSituation
