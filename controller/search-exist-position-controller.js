
var log4js = require('log4js');
var ExistPositionModel = require('../model/exist-position-model');

var logger = log4js.getLogger();

module.exports = class SearchExistPositionController{
    constructor(){}
    search(req){
        logger.info("SearchExistPositionController.search() start");

        var existPositionModel = new ExistPositionModel();
        var response = existPositionModel.search(req);

        logger.info("SearchExistPositionController.search() finish");
        return response;
    }
}
