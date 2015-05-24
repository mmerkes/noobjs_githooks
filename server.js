var express = require('express'),
    app = express();

app.set('port', process.env.PORT || 5000);

app.get('/', function(req, res) {
  response.send("It's alive!");
});

app.listen(app.get('port'), function() {
  console.log("Node app is running on port:" + app.get('port'))
});