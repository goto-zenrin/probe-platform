var express = require('express');
var SearchExistPositionController = require('../controller/search-exist-position-controller');

var router = express.Router();

router.get('/probe/search-exist-position', function(req, res) {
  var searchExistPositionController = new SearchExistPositionController();
  res.send(searchExistPositionController.search());
});

module.exports = router;