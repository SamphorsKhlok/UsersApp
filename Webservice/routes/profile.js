var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let data = {};
  data = JSON.parse(fs.readFileSync('./data/list.json', 'utf8'));

  console.log(data);
  res.json({'result': data.result});
});


module.exports = router;
