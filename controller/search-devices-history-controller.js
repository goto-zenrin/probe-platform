
var log4js = require('log4js');
var ValidationModel = require('../model/validation-model');
var DevicesHistoryModel = require('../model/devices-history-model');

var logger = log4js.getLogger();

module.exports = class SearchDevicesHistoryController{
    constructor(){}
    search(req){
        logger.info("SearchDevicesHistoryController.search() start");

        var validationModel = new ValidationModel();
        var response = validationModel.search(req);

        var devicesHistoryModel = new DevicesHistoryModel();
        var response = devicesHistoryModel.search(req);

        logger.info("SearchDevicesHistoryController.search() finish");
        return response;
    }
}
