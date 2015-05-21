#define NOFIELD 505L
#define TOMILLIGAUSS 1953L

#include <IRremote.h>

#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 53
#define RST_PIN 34

/**** globals ****/
int PinMagnet = A1;
long MAGNET;
MFRC522 mfrc522(SS_PIN, RST_PIN);
byte RFID[10]={0,0,0,0,0,0,0,0,0,0};
//SOUND
int SAUND = 0;
//HUMIDTY
float val = 0;
float RH = 0;
//STEP
#define PIN 5
int STEP = 0;
//INFR
int RECV_PIN = 7;
IRrecv irrecv(RECV_PIN);
decode_results results;
int INFR = 0 ;

//INTERUPT
int vreme = 0;
int flg100, flg1000;
int flgprek = 0;
char yu[2];

//TEMP
float celzijusi = 0;
float TEMP = 0;
float TEMP_INC = 0;
// start flag
int courseStarted = 0;
bool flegsen = true;
//exemin treasur
String treasure = "000000";
String treasureBase = "000000";
/**** globals ****/

/**** interrupt routines ****/
void init_interrupts()
{
  noInterrupts();
  TCCR1A = 0;
  TCCR1B = 0;
  // preload timer 65536-16MHz/256/2Hz
  TCNT1 = 65474 ; // || 34286
  TCCR1B |= (1 << CS12); // 256 prescaler
  TIMSK1 |= (1 << TOIE1); // enable timer overflow interrupt
  interrupts();
}

ISR(TIMER1_OVF_vect)
{
  TCNT1 = 65474; // preload timer
  vreme++;
  if (vreme % 100 == 0) { flg100 = 1; }
  if (vreme % 1000 == 0) { flg1000 = 1; }
}

/**** interrupt routines ****/

void init_sensors()
{
  LM19_INC();
}

void READ_SEN()
{
  STEPS();
  LM19();
  INFRA();
  HUMIDITY();
  SOUND();
  RFIDI();
  MAG();
}



void setup()
{
  init_interrupts();
  Serial.begin(115200);

  // MAGNET
  pinMode(PinMagnet, INPUT);

  // IR
  irrecv.enableIRIn();
  pinMode(PIN, INPUT);

  // RFID
  SPI.begin();
  mfrc522.PCD_Init();
  pinMode(SS_PIN,OUTPUT);
  pinMode(RST_PIN,OUTPUT);

  init_sensors();

}

void loop()
{
  READ_SEN();
  if (flg100)
  {
    flg100 = 0;
    READ_SEN();
    if (mfrc522.PICC_IsNewCardPresent())
    {
      if (courseStarted == false)
      {
        courseStarted = true;
        return;
      }
      examine_treasures(); // takes time, requires interrupts
    }
  }
  if (flg1000)
  {
    flg1000 = 0;
    send_data();
    if (treasure != treasureBase) { treasure = treasureBase; }
  }
}
