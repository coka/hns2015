var Twitter = require('twitter');
var SerialPort = require('serialport').SerialPort;

var client = new Twitter
({
  consumer_key: 'o13x18XJMMpljgXFdN08MFIsz',
  consumer_secret: 'TIljUZnvanbSya99jiJLZ9Cy0WT498kwZ7uyMVd8BvroasUovP',
  access_token_key: '3288108405-CWzNWQd4Q1hrBwlbHlTKkMbT9KLIiwlh6QMFbMd',
  access_token_secret: 'vn8ku4ERGMMrG4FmCp7xJKDuofKqomlldgBwWwQfT6kz8'
});

var port = '/dev/ttyMFD1';
var serialPort = new SerialPort(port, { baudRate: 115200 }, true);

console.log('Opening port ' + port + '...');
serialPort.open(function(error) {
  if (error) { console.log('FAIL!\n' + error); }
  else
  {
    console.log('Successfully opened the port.');
    serialPort.on('data', function(data) {
      var divisor = 30;


        console.log('TWEETING ' + data + Date.now() + '!');
        client.post('statuses/update', {status: String(data)},  function(error, tweet, response) {
          if (error) { console.log('jebada'); }
        });


    });
  }
});
