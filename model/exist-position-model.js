
var log4js = require('log4js');
var logger = log4js.getLogger();
// var probeLogger = log4js.getLogger("probe");
var ExistPosition = require('../entity/exist-position');
var existPosition = new ExistPosition;

module.exports = class ExistPositionModel{
    constructor(){}
    search(){
        logger.info("ExistPositionModel.search() start");

        var response = {
            positions : existPosition
        }
        
        logger.info("ExistPositionModel.search() finish");
        return JSON.stringify(response);
    }
}
