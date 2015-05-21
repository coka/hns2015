void examine_treasures()
{
  String temporary = "000000";
  if (examine_frequency())     { temporary[0] = '1'; }
  if (examine_ultrasound())    { temporary[1] = '1'; }
  if (examine_magneticField()) { temporary[2] = '1'; }
  if (examine_blinkRate())     { temporary[3] = '1'; }
  if (examine_infrared())      { temporary[4] = '1'; }
  if (examine_temparature())   { temporary[5] = '1'; }
  treasure = temporary;
}

bool examine_frequency()
{
  return true;
  /*int brojac1 = 0;
  byte freq[3];
  for (int i = 0; i < 5; i++)
  {
    freq[i] = SAUND;
    if(freq[1] == freq[2] && freq[2] == freq[3]) { brojac1++; }
  }
  if (brojac1 > 3) { return true; }
  else { return false; }*/
}

bool examine_ultrasound()
{
  return true;
}

bool examine_magneticField()
{
  return true;
}

bool examine_blinkRate()
{
  return true;
}

bool examine_infrared()
{
  return true;
}

bool examine_temparature()
{
  return true;
  /*int brojac = 0;
  for (int i = 0; i < 10; i++) { if(abs(TEMP_INC - TEMP) > 2) { brojac++; } }
  if (brojac > 5) { return true; }
  else { return false; }*/
}
