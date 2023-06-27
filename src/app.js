'use strict'

const express = require('express')
const { pdf } = require('./utils/pdf')

const app = express()
const PORT = process.env.PORT || 8080

app.get('/pdf', pdf)

// eslint-disable-next-line no-console
app.listen(PORT, () => console.info(`App listening on port ${PORT}`))

module.exports = app
