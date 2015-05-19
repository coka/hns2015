var SerialPort = require("serialport").SerialPort;  
var port = "/dev/ttyMFD1";  
var serialPort = new SerialPort(port, {  
  baudrate: 9600 
}, false);  

console.log("Open port: "+ port);  
serialPort.open(function (error) {  
  if (error) {  
    console.log('Failed to open: '+error);  
  } else {  
    console.log('open');  
    serialPort.on('data', function(data) {  
      console.log('data received: ' + data);  
    });  
    //write data to serial port every second  
    var counter = 90;  
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
    }, 1000);  
  }  
});
