var pubnub = require("pubnub")({
    ssl           : true,  // <- enable TLS Tunneling over TCP 
    publish_key   : "pub-c-710eb30d-6027-40bb-bcc5-aca1bf4fc7a0",
    subscribe_key : "sub-c-ace45594-fe18-11e4-bb05-02ee2ddab7fe"
});


var msg = {"Test!"};
function(error){
	if(error) {console.log('Fail!\n' + error);}
	else
	{
		pubnub.publish({
		channel : 'novisadhardnsoft' ,
		message : msg,
		callback : function (e) {console.log ( "uspelo :D",e);},
		error : function (e) {console.log ("Nije uspelo! :(",e);}} 
})}



