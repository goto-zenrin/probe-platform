var express = require('express');
var SearchDevicesHistoryController = require('../controller/search-devices-history-controller');

var router = express.Router();

router.get('/probe/search-devices-history', function(req, res) {
  var searchDevicesHistoryController = new SearchDevicesHistoryController();
  res.send(searchDevicesHistoryController.search());
});

module.exports = router;