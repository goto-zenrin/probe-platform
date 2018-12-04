// DynamoDBから値を取得する
var AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-northeast-1",
  endpoint: "http://localhost:3000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "probe_platform";

// PK　LOCATION#クライアントID#デバイスID形式の文字列
// SK　yyyy-MM-ddThh:mm:ss形式の文字列
var PK = "1111";
var SK = "2222";

var params = {
    TableName: table,
    Key:{
        "PK": PK,
        "SK": SK
    }
};

docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
});

// 値をはめ込む
module.exports = class PositionHistory{
    constructor(){
        this.deviceId = 0;
        this.position = 0;
    }
}










