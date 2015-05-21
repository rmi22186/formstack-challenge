var express = require('express');
var app = express();

app.use(express.static(__dirname));
module.exports = app;

var server = app.listen(process.env.PORT || 3000, function() {
  console.log('express server listening on port ' + server.address().port);
});