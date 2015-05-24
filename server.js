var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send("It's alive!");
});

app.post('/api/github-hooks', function (req, res) {
  console.log(JSON.stringify(req.body));
  return res.status(204).end();
});

app.listen(app.get('port'), function() {
  console.log("Node app is running on port:" + app.get('port'))
});