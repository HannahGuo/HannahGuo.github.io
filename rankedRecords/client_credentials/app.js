  /* Load the HTTP library */
  var http = require("http");

  /* Create an HTTP server to handle responses */

  http.createServer(function (request, response) {
    response.writeHead(200, {
      "Content-Type": "text/plain"
    });
    response.write('<span id="testID"></span>');
    response.end();
  }).listen(8888);

  var request = require('request'); // "Request" library

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer.from("0bb76f3c5c634f2a87ee22115cca5ebf" + ':' + "0ad6b24acd504757bc73bb8986589354").toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var token = body.access_token;
      var options = {
        url: 'https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request.get(options, function (error, response, body) {
        console.log(body);
      });
    }
  });