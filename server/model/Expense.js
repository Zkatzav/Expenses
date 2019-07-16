const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema


const expenseSchema = new Schema({
    name: String,
    amount: Number,
    date: Date,
    group: String
})

const Expense = mongoose.model("Expense", expenseSchema)


module.exports = Expense
