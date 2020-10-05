// server.js
const express = require("express");
const app = express();
const axios = require('axios');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public"));

app.post('/', async (req, res) => {
  
  const joke = await axios.get('https://icanhazdadjoke.com/slack');
  delete joke.data.attachments[0].footer;
  return res.json(joke.data);
  
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
