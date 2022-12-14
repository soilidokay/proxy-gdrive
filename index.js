/*
  forward-proxy.js: Example of proxying over HTTP with additional forward proxy
  Copyright (c) 2013 - 2016 Charlie Robbins, Jarrett Cruger & the Contributors.
  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:
  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const https = require("https"),
  httpProxy = require("http-proxy");
require("colors");
//
// Setup proxy server with forwarding
//

const proxy = httpProxy
  .createProxyServer({
    target: "https://drive.google.com",
    agent: https.globalAgent,
    headers: {
      host: "drive.google.com",
    },
  })
  .listen(process.env.PORT || 5000);

console.log(
  "http proxy server".blue +
    " started ".green.bold +
    "on port ".blue +
    `${process.env.PORT || 5000}`.yellow
);
