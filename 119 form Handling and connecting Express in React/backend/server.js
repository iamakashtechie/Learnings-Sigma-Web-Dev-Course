import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Hello World! from POST')
    console.log(req.body);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})