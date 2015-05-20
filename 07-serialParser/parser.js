var testString = "rfidRFIDTAGrfidtempa1231tempatempb456tempbhumidity996humidity"

var tags = ["rfid", "tempa", "tempb", "humidity"];

for (i = 0; i < tags.length; i++)
{
  var tag = tags[i];
  var split = testString.split(tag);
  var value = split[1];
  testString = split[2];
  console.log(tag + ":" + value);
}
