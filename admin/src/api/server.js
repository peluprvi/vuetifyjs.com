const bodyparser = require('body-parser')
const cors = require('cors')
const express = require('express')
const fs = require('fs-extra')
require('dotenv').config()
const path = require('path')

const app = express()
const resolve = file => path.resolve(__dirname, `${file}.json`)

app.use(bodyparser.json())
app.use(cors())

function readFile (file) {
  const path = resolve(file)

  return new Promise((resolve, reject) => {
    if (!fs.existsSync(path)) reject(`Unable to find file located at ${path}`)
    else resolve(JSON.parse(fs.readFileSync(path, 'utf8')))
  })
}

function writeFile (file, data) {
  const path = resolve(file)
  data = JSON.stringify(data, null, 2)

  return new Promise(async (resolve, reject) => {
    await fs.ensureFile(path)

    fs.writeFileSync(path, data, 'utf8')
  })
}

app.get('/api/read', (req, res) => {
  return readFile(req.query.file)
    .then(data => res.json(data))
    .catch(e => res.status(500).send(e))
})

app.post('/api/write', (req, res) => {
  const { data, file } = req.body

  return writeFile(file, data)
    .then(() => res.status(200).send('Ok'))
    .catch(e => res.status(500).send(e))
})

const {
  VUE_APP_HOST,
  VUE_APP_API_PORT
} = process.env

app.listen(VUE_APP_API_PORT, '0.0.0.0', () => {
  console.log(`API Server is running at http://${VUE_APP_HOST}:${VUE_APP_API_PORT}`)
})
