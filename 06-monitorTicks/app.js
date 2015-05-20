var pubnub = require("pubnub")({
    ssl           : true,  // <- enable TLS Tunneling over TCP
    publish_key   : "demo",
    subscribe_key : "demo"
});

// U data upisujemo message koji ce biti poslat na pubnub
  var msg = "Sve sto smo dobili sa seriske";

pubnub.subscribe ({
  	channel: 'Live',
   	message: function(data){console.log(data);}
});

  pubnub.publis({
  	channel: 'Live',
  	message: msg,
  	callback  : function(e) { console.log( "SUCCESS!", e ); },
    error     : function(e) { console.log( "FAILED! RETRY PUBLISH!", e ); }
});
  

  