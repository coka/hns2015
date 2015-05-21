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
  return false;
}

bool examine_ultrasound()
{
  return false;
}

bool examine_magneticField()
{
  int brojac1 = 0;
  long mag[3];
  for (int i = 0; i < 5; i++)
  {
    mag[i] = MAGNET;
    if(mag[0] == mag[1] && mag[1] == mag[2]) { brojac1++; }
  }
  if (brojac1 > 3) { return true; }
  else { return false; }
}

bool examine_blinkRate()
{
  return false;
}

bool examine_infrared()
{
  return false;
}

bool examine_temparature()
{
  int brojac = 0;
  for (int i = 0; i < 10; i++) { if(abs(TEMP_INC - TEMP) > 2) { brojac++; } }
  if (brojac > 5) { return true; }
  else { return false; }
}
