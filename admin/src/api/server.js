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

function readFile (name, crud) {
  const base = getBase(crud)

  return JSON.parse(fs.readFileSync(resolve(`${base}/${name}`), 'utf8'))
}

function writeFile (name, data, crud) {
  const base = getBase(crud)

  fs.writeFileSync(resolve(`${base}/${name}`), JSON.stringify(data, null, 2), {
    encoding: 'utf8',
    flags: 'a'
  })
}

function getBase(crud = false) {
  return crud
    ? '../cruds'
    : '../../../data'
}

app.get('/api/read', (req, res) => {
  const { file, crud } = req.query

  res.json(readFile(file, crud))
})

app.post('/api/write', (req, res) => {
  const { data } = req.body
  let read

  try {
    read = readFile(data.file, data.crud)
  } catch (e) {
    read = []
  }

  read.push(data)

  writeFile(data.file, read, data.crud)

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
