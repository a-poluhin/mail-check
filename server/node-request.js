const http = require("http");
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

app.get('/find-track/:trackId', async (req, res) => {
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
      console.log("body: " + data);
      res.json(data);
    });
    response.on('end', function() {
      console.log("ok");
      res.send('ok');
    })
  });

  httpsreq.end();

  // var options = {
  //   host: 'api.trackru.ru',
  //   port: 80,
  //   path: 'http://api.trackru.ru/v1/carriers/',
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Api-Key': '8890bff2-2494-4213-8b6e-7a1282d478a3',
  //   }
  // };

  // const httpreq = http.request(options, function (response) {
  //   response.setEncoding('utf8');
  //   response.on('error', (err) => {
  //     console.log("err: ", err);
  //   })
  //   response.on('data', function (data) {
  //     console.log("body: ", data);
  //     res.json(data);
  //   });
  //   response.on('end', function() {
  //     console.log('ok');
  //     res.end();
  //   })
  // });

  // httpreq.end();
})