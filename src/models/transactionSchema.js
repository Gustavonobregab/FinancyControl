const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Transaction = new Schema({
  date: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: [Debit, Credit, Cash],
    default: [],
  },
  category: {
    type: String,
  },
  description: {
    type: mixed,
  },
  installments: {
    type: [],
  },
})

const Month = mongoose.model('Month', monthSchema)
module.exports = Month
