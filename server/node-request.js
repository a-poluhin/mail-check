// const http = require("http");
const https = require("https");

const hostname = '127.0.0.1';
// const port = 3000;

const express = require('express');
const app = express();
const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Request-Method', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
//   res.setHeader('Access-Control-Allow-Headers', '*');

//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, (req, res) => {
//   console.log(`Server running at http://${hostname}:${port}/`);

//   if (res) {
//     process.stdout.write('Tumba')
//     res.end('Tumba\n');
//     switch (req.url) {
//       case '/find-track':
//           const queryObject = url.parse(req.url, true).query;
//           const url = `https://gdeposylka.ru/api/v4/tracker/detect/${queryObject.trackNumber}`;
          
//           https.get(url, (response) => {
//             console.log('statusCode:', response.statusCode);
//             console.log('headers:', response.headers);
  
//             response.on('data', (d) => {
//               res.writeHead(200);
//               res.setHeader("Content-Type", "application/json");
//               res.end(d);
//             });
//           })
//           .on('error', (e) => {
//             console.error(e);
//           });
//           break
//       default:
//           res.writeHead(404);
//           res.end(JSON.stringify({error:"Resource not found"}));
//     }
//   }
// });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/find-track/:trackId', (req, res) => {
  const trackId = req.params.trackId;
  res.send(`track: ${trackId}`)

  var options = {
    // host: 'requestb.in',
    // port: 80,
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
      res.json(err);
    })
    response.on('data', function (data) {
      console.log("body: " + data);
      res.json(data);
    });
    response.on('end', function() {
      res.send('ok');
    })
  });


})