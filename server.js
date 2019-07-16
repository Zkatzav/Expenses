// Server setup
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const moment = require('moment')
const api = require('./server/routes/api')
const data = require("./expenses.json")
const Expense = require('./server/model/Expense')

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/expenseDB', { useNewUrlParser: true })

app.use('/', api)


data.forEach(item => {  
    const expense = new Expense({
        name: item.item,
        amount: item.amount,
        date: item.date,
        group: item.group
    }) 
    expense.save()
})


const port = 4200
app.listen(port, () =>
    console.log(`Running on port ${port}`))

