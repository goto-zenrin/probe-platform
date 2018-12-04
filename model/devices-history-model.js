
var log4js = require('log4js');
var logger = log4js.getLogger();
// var probeLogger = log4js.getLogger("probe");
var ValidationResult = require('../entity/validation-result.js');
var validationResult = new ValidationResult;
var DevicesHistory = require('../entity/devices-history.js');
var devicesHistory = new DevicesHistory;

module.exports = class DevicesHistoryModel{
    constructor(){}
    search(){
        logger.info("DevicesHistoryModel.search() start");

        var response = {
            status: validationResult,
            positions : devicesHistory
        }
        
        logger.info("DevicesHistoryModel.search() finish");
        return JSON.stringify(response);
    }
}
