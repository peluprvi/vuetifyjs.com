const bodyparser = require('body-parser')
const cors = require('cors')
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const resolve = file => path.resolve(__dirname, `../../../data/${file}.json`)

app.use(bodyparser.json())
app.use(cors())

function getFile (name) {
  return JSON.parse(fs.readFileSync(resolve(name), 'utf8'))
}

function writeFile (name, data) {
  fs.writeFileSync(resolve(name), JSON.stringify(data, null, 2), 'utf8')
}

app.get('/api/company/supporters', (req, res) => {
  res.json(getFile('company/supporters'))
})

app.patch('/api/company/supporters', (req, res) => {
  writeFile('company/supporters', req.body)

  res.status(200).send('Ok')
})

app.listen(3333, '0.0.0.0', () => {
  console.log('Listening on port 3333')
})
