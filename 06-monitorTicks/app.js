var pubnub = require("pubnub")({
    ssl           : true,  // <- enable TLS Tunneling over TCP
    publish_key   : "pub-c-710eb30d-6027-40bb-bcc5-aca1bf4fc7a0",
    subscribe_key : "sub-c-ace45594-fe18-11e4-bb05-02ee2ddab7fe"
  });

// U data upisujemo message koji ce biti poslat na pubnub
  var msg = "Sve sto smo dobili sa seriske"

  pubnub.publis({
  	channel: 'Live',
  	message: msg
  });

  pubnub.subscribe ({
  	channel: 'Live',
  	message: function(data){console.log(data)}
  });