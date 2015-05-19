var SerialPort = require("serialport").SerialPort;
var port = "/dev/ttyMFD1";
var serialPort = new SerialPort(port, {
  baudrate: 115200
}, false);

console.log("Open port: "+ port);
serialPort.open(function (error) {
  if (error) {
    console.log('Failed to open: '+error);
  } else {
    console.log('open');
    serialPort.on('data', function(data) {
      console.log("data recieved: " + data);
    });
    ///*while (true) {
    //serialPort.write("ejlelele igoreu\r"); }*/
    // write data to serial port every second
    /*var counter = 90;
    setInterval(function () {
      serialPort.write(String(counter)+ "\r\n", function(err) {
        if(err) {
          console.log('err ' + err);
        }else{
          console.log('Writing data ');
        }
      });
      counter++;
      if(counter>100)
        counter =90;
    }, 1000);*/
  }
});
