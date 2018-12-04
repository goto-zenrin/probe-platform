
var log4js = require('log4js');
var logger = log4js.getLogger();
// var probeLogger = log4js.getLogger("probe");
var PositionHistory = require('../entity/position-history');
var positionHistory = new PositionHistory;

console.log(PositionHistory);

module.exports = class PositionHistoryModel{
    constructor(){}
    search(){
        logger.info("PositionHistoryModel.search() start");

        var response = {
            positions : positionHistory
        }
        
        logger.info("PositionHistoryModel.search() finish");
        return JSON.stringify(response);
    }
}
