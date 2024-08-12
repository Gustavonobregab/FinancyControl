const mongoose = require('mongoose')
const Schema = mongoose.Schema

const financialSituationSchema = new Schema({
  month: {
    type: Number,
    min: 1,
    max: 12,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  income: {
    type: Number,
    default: 0,
  },
  expenses: {
    type: Number,
    default: 0,
  },
  balance: {
    type: Number,
    default: function () {
      return this.income - this.expenses
    },
  },
  transactions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Transaction',
    },
  ],
})

const FinancialSituation = mongoose.model(
  'FinancialSituation',
  financialSituationSchema
)
module.exports = FinancialSituation
