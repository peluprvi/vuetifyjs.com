const bodyparser = require('body-parser')
const cors = require('cors')
const express = require('express')
const fs = require('fs')
require('dotenv').config()
const path = require('path')

const app = express()
const resolve = file => path.resolve(__dirname, `${file}.json`)

app.use(bodyparser.json())
app.use(cors())

function readFile (name, base = '../../../data') {
  return JSON.parse(fs.readFileSync(resolve(`${base}/${name}`), 'utf8'))
}

function writeFile (name, data, base = '../../../data') {
  fs.writeFileSync(resolve(`${base}/${name}`), JSON.stringify(data, null, 2), 'utf8')
}

app.get('/api/:path/:file', (req, res) => {
  const { path, file } = req.params
  const { crud } = req.query

  res.json(readFile(`${path}/${file}`, crud ? '../cruds' : undefined))
})

app.patch('/api/:path/:file', (req, res) => {
  const { path, file } = req.params
  const { crud } = req.query

  writeFile(`${path}/${file}`, req.body, crud ? '../cruds' : undefined)

  res.status(200).send('Ok')
})

app.post('/api/crud', (req, res) => {
  const body = req.body
  const file = readFile(body.file, '../cruds')

  file.push(body.scaffold)

  writeFile(body.file, file, '../cruds')

  res.status(200).send('Ok')
})

const {
  VUE_APP_HOST,
  VUE_APP_API_PORT
} = process.env

app.listen(VUE_APP_API_PORT, '0.0.0.0', () => {
  console.log(`API Server is running at http://${VUE_APP_HOST}:${VUE_APP_API_PORT}`)
})
