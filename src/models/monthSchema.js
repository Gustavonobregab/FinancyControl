const mongoose = require('mongoose')
const Schema = mongoose.Schema

const monthSchema = new Schema({
  month: Number,
  year: Number,
  expenses: Boolean,
  income: Boolean,
})

const Month = mongoose.model('Month', monthSchema)
module.exports = Month
