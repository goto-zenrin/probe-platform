
var log4js = require('log4js');
var logger = log4js.getLogger();
// var probeLogger = log4js.getLogger("probe");
var LatestPosition = require('../entity/latest-position');
var latestPosition = new LatestPosition;

console.log(LatestPosition);

module.exports = class LatestPositionModel{
    constructor(){}
    search(){
        logger.info("LatestPositionModel.search() start");

        var response = {
            positions : latestPosition
        }
        logger.info("LatestPositionModel.search() finish");
        return JSON.stringify(response);
    }
}
