const https = require("https");

const cors = require('cors')
const express = require('express');
const app = express();
const port = 3000;

app.use(cors({
  origin: '*',
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/get-carriers/:trackId', async (req, res) => {
  const trackId = req.params.trackId;

  var options = {
    host: 'moyaposylka.ru',
    port: 443,
    path: `https://moyaposylka.ru/api/v1/carriers/${trackId}`,
    method: 'GET',
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
      'X-Api-Key': '2e1e2dddae2c6506c06e1094ae3e6de0',
    }
  };

  const httpsreq = https.request(options, function (response) {
    response.setEncoding('utf8');
    response.on('error', (err) => {
      console.log("err");
      res.json(err);
    })
    response.on('data', function (data) {
      console.log("httpsreq body: " + data);
      res.json(data);
    });
  });
  httpsreq.end();
})

app.get('/find-by-track/:carrier/:trackId', async (req, res) => {
  const trackId = req.params.trackId;
  const carrier = req.params.carrier;

  var options2 = {
    host: 'moyaposylka.ru',
    port: 443,
    path: `https://moyaposylka.ru/api/v1/trackers/${carrier}/${trackId}`,
    method: 'GET',
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
      'X-Api-Key': '2e1e2dddae2c6506c06e1094ae3e6de0',
    }
  };

  const httpsreq2 = https.request(options2, function (response) {
    response.setEncoding('utf8');
    response.on('error', (err) => {
      console.log("err");
      res.json(err);
    })
    response.on('data', function (data) {
      console.log("httpsreq2 body: " + data);
      res.json(data);
    });
  });
  httpsreq2.end();
})