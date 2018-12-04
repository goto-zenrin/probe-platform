var express = require('express');
var SearchLatestPositionController = require('../controller/search-latest-position-controller');

var router = express.Router();

router.get('/probe/search-latest-position', function(req, res) {
  var searchLatestPositionController = new SearchLatestPositionController();
  res.send(searchLatestPositionController.search());
});

module.exports = router;