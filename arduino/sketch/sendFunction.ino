void send_data()
{
  String data = "";
  data += String("TEMP") + String(TEMP) + String("TEMP");
  data += String("KORAK") + String(STEP) + String("KORAK");
  data += String("INFR") + String(results.value) + String("INFR");
  data += String("HUMY") + String(RH) + String ("HUMY");
  data += String("SOUND") + String(SAUND) + String("SOUND");
  data += String("RFID") + RFID[0] + RFID[1] + RFID[2] + RFID[3] + RFID[4] + RFID[5] + RFID[6] + RFID[7] + RFID[8] + RFID[9] + String("RFID");
  data += String ("TREASURE") + String(treasure) + String("TREASURE");
  data += String("MAGNET") + String(MAGNET) + String("MAGNET");
  Serial.println(data);
}
