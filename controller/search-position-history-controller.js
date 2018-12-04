
var log4js = require('log4js');
var PositionHistoryModel = require('../model/position-history-model');

var logger = log4js.getLogger();

module.exports = class SearchPositionHistoryController{
    constructor(){}
    search(req){
        logger.info("SearchPositionHistoryController.search() start");

        var positionHistoryModel = new PositionHistoryModel();
        var response = positionHistoryModel.search(req);

        logger.info("SearchPositionHistoryController.search() finish");
        return response;
    }
}
