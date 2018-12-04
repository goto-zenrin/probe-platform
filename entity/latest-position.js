// postgresから値を取得する
// var pg = require('pg'); //native libpq bindings = `var pg = require('pg').native`
// var conString = "tcp://postgres:postgres@localhost:3000";

// var client = new pg.Client(conString);
// client.connect();

// var query = client.query("SELECT client_id, device_id, ST_AsText(lat_lon),ST_Distance('SRID=4326;POINT(139.777254 35.713768)', lat_lon) as dist FROM latest_position WHERE ST_DWithin(lat_lon, ST_GeographyFromText('SRID=4326;POINT(139.777254 35.713768)'), 1000.0) ORDER BY dist; ");

// query.on('row', function(row) {
//     response.write(client_id); 
//     response.write(device_id); 
// });

// 値をはめ込む
module.exports = class LatestPosition{
    constructor(){
        this.deviceId = 0;
        this.time = 0;
        this.lat = 0;
        this.lon = 0;
        this.accuracy = 0;
        this.bearing = 0;
        this.alttitude = 0;
        this.speed = 0;
        this.extra = 0;
        this.unsearchableExtra = 0;
    }
}










