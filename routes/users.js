var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log('Request URL:', req.user);
  console.log('Request URL:', req);
});

module.exports = router;
