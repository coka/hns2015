var pubnub = require("pubnub")({
    ssl           : true,  // <- enable TLS Tunneling over TCP 
    publish_key   : "pub-c-b38d8e57-ce7b-4896-9795-db9a2c494e1c",
    subscribe_key : "sub-c-fcb17716-fefc-11e4-bb05-02ee2ddab7fe"
});

// U data upisujemo message koji ce biti poslat na pubnub
  var msg = "Sve sto smo dobili sa seriske";

pubnub.subscribe ({
  	channel: 'my_channel',
   	message: function(data){console.log(data);}
});

  pubnub.publis({
  	channel: 'my_channel',
  	message: msg,
  	callback  : function(e) { console.log( "SUCCESS!", e ); },
    error     : function(e) { console.log( "FAILED! RETRY PUBLISH!", e ); }
});
  

  