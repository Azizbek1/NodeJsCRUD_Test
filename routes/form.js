var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/register', function(req, res, next) {
    res.send('respond with a resource');
  });
router.post('/register', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
