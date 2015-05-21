/*
 * 00-helloAdina
 */

// inits
var SerialPort = require('serialport').SerialPort;
var port = '/dev/ttyMFD1'; // breakout board's UART1 device name
var baud = 115200; // can be changed, as long as it's in sync with Arduino Uno
var opensImmediately = false;
var serialPort = new SerialPort(port, { baudrate : baud }, opensImmediately);

var Twitter = require('twitter');
var twitterClient = new Twitter
({
  consumer_key       : 'o13x18XJMMpljgXFdN08MFIsz',
  consumer_secret    : 'TIljUZnvanbSya99jiJLZ9Cy0WT498kwZ7uyMVd8BvroasUovP',
  access_token_key   : '3288108405-CWzNWQd4Q1hrBwlbHlTKkMbT9KLIiwlh6QMFbMd',
  access_token_secret: 'vn8ku4ERGMMrG4FmCp7xJKDuofKqomlldgBwWwQfT6kz8'
});

var PubNub = require('pubnub')
({
  ssl           : true,  // enable TLS tunneling over TCP
  publish_key   : 'pub-c-b38d8e57-ce7b-4896-9795-db9a2c494e1c',
  subscribe_key : 'sub-c-fcb17716-fefc-11e4-bb05-02ee2ddab7fe'
});

// globals
var tags = ["TEMP", "KORAK", "INFR", "HUMY", "SOUND", "RFID"];

console.log('Opening a port at '+ port + '...'); // checkpoint

var parseSerialData = function(dataString, tagArray)
{
  // TODO: var output; (JSON)
  for (i = 0; i < tags.length; i++)
  {
    // TODO: parser ignore logic
    var tag = tags[i];
    var split = dataString.split(tag);
    var value = split[1];
    dataString = split[2];
    console.log(tag + ":" + value); // this should be output+=...
  }
  // return output;
};

var serialEvent = function(data) // callback argument
{
  console.log('Data recived: ' + data);
  for (i = 0; i < tags.length; i++)
  {
   var tag = tags[i];
   var split = data.split(tag);
   var value = split[1];
   data= split[2];
   console.log(tag + ":" + value);
 }
};

// upon receving data through a serial port
serialPort.open(function (error)
{
  if (error) { console.log('Failed to open port.\n Reason: ' + error); }
  else
  {
    serialPort.on('data', serialEvent);
  }
});

// tweet every minute
/*
 * TODO
 */
