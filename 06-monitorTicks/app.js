var pubnub = require("pubnub")({
    ssl           : true,  // <- enable TLS Tunneling over TCP
    publish_key   : "pub-c-93ff324d-77f1-4abe-8c6b-accfcf68e1c3",
    subscribe_key : "sub-c-aca0eeb0-fdf2-11e4-b699-02ee2ddab7fe"
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
  

  