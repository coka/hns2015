void LM19_INC()
{
  celzijusi = analogRead(2);
  float val;
  val = (5.0 * celzijusi) / 1024.0;
  TEMP_INC = (1.8663 - val) / 0.01169;
}

void LM19()
{
  celzijusi = analogRead(2);
  float val;
  val = (5.0 * celzijusi) / 1024.0;
  TEMP = (1.8663 - val) / 0.01169;
}

void STEPS()
{
  if (digitalRead(PIN) && flgprek == 0) { STEP++; flgprek = 1; }
  if (!digitalRead(PIN)) { flgprek = 0; }
}

void INFRA()
{
  if (irrecv.decode(&results))
  {
    irrecv.resume();
    Serial.println(results.value, HEX);
  }
}

void HUMIDITY()
{
 val = analogRead(0);
 RH = ((((val/1023)*5)-0.8)/3.1)*100;
}

void SOUND() { SAUND = analogRead(3); }

void RFIDI()
{
  MFRC522::MIFARE_Key key;
  for (byte i = 0; i < 6; i++) { key.keyByte[i] = 0xFF; }
  if (!mfrc522.PICC_ReadCardSerial()) { return; }
  for (byte i = 0; i < mfrc522.uid.size; i++) { RFID[i] =(mfrc522.uid.uidByte[i]); }
  mfrc522.PICC_HaltA();
  mfrc522.PCD_StopCrypto1();
}

void MAG()
{
  int x = analogRead(PinMagnet);
  long jedno = x - NOFIELD;
  MAGNET = jedno * TOMILLIGAUSS / 1000;
}
