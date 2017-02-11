var express = require('express');
var router = express.Router();

var api_key = process.env.MAILGUN_API_KEY;
var domain = process.env.MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/email', function(req,res,next){
  var data = {
    from: 'darien.lombardi@gmail.com',
    to: 'darien.lombardi@gmail.com',
    subject: req.body.title,
    text: "from " + req.body.sender + " at " + req.body.email + "\n" + req.body.content
  };
  mailgun.messages().send(data, function (error, body) {
    res.send(body);
  });
});

module.exports = router;
