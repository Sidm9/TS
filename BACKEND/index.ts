import express from 'express';
import bodyParser from 'body-parser';
const router = express.Router();
const app = express()
const port = 3000

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("woeking");
  res.send("OK");
})

app.post("/p", (req, res) => {
  var data = req.body;
  console.log(data);
  res.send("OK")
})

app.put('/put', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

