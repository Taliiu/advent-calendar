const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
//const { render } = require('../app');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
//const doors = require('../public/javascripts/doors/doors')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/*router.post('/answer', urlencodedParser, (req, res) => {

  res.render('answer');
});*/

module.exports = router;
