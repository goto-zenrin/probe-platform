
var log4js = require('log4js');
var LatestPositionModel = require('../model/latest-position-model');

var logger = log4js.getLogger();

module.exports = class SearchLatestPositionController{
    constructor(){}
    search(req){
        logger.info("SearchLatestPositionController.search() start");

        var latestPositionModel = new LatestPositionModel();
        var response = latestPositionModel.search(req);

        logger.info("SearchLatestPositionController.search() finish");
        return response;
    }
}
