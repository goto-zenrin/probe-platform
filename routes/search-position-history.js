var express = require('express');
var SearchPositionHistoryController = require('../controller/search-position-history-controller');
var router = express.Router();

router.get('/probe/search-position-history', function(req, res) {
  var searchPositionHistoryController = new SearchPositionHistoryController();
  res.send(searchPositionHistoryController.search());
});

module.exports = router;