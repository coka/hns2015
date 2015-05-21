/////////////////////	Requires

//	SERIAL
var SerialPort = require("serialport").SerialPort;
var port = "/dev/ttyMFD1";
var serialPort = new SerialPort(port,{baudrate:115200},false);

//	TWITTER
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'o13x18XJMMpljgXFdN08MFIsz',
  consumer_secret: 'TIljUZnvanbSya99jiJLZ9Cy0WT498kwZ7uyMVd8BvroasUovP',
  access_token_key: '3288108405-CWzNWQd4Q1hrBwlbHlTKkMbT9KLIiwlh6QMFbMd',
  access_token_secret: 'vn8ku4ERGMMrG4FmCp7xJKDuofKqomlldgBwWwQfT6kz8'
});

//	PUBNUB
var pubnub = require("pubnub")({
    ssl           : true,  // <- enable TLS Tunneling over TCP
    publish_key   : "pub-c-b38d8e57-ce7b-4896-9795-db9a2c494e1c",
    subscribe_key : "sub-c-fcb17716-fefc-11e4-bb05-02ee2ddab7fe"
});

/////////////////////

//Start

console.log("Starting...."+ port);

serialPort.open(function (error){
	if (error) {
    console.log('Failed to open: '+error);
  } else
  {
    console.log('Open:');
    serialPort.on('data', function(data) {
    	console.log('Data recived: ' + data);

    	var tags = ["TEMP", "KORAK", "INFR", "HUMY","SOUND","RFID"];

		for (i = 0; i < tags.length; i++)
		{
  			var tag = tags[i];
  			var split = data.split(tag);
  			var value = split[1];
  			data= split[2];
  			console.log(tag + ":" + value);
		} });
  }
});
