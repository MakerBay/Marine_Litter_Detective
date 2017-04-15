/***************************************************
  Adafruit IO FONA 808 GPS DEMO
  Designed specifically to work with the Adafruit FONA 808
  ----> https://www.adafruit.com/products/2542

  These cellular modules use TTL Serial to communicate, 2 pins are
  required to interface.

  Adafruit invests time and resources providing this open source code,
  please support Adafruit and open-source hardware by purchasing
  products from Adafruit!

  Written by Todd Treece for Adafruit Industries.
  MIT license, all text above must be included in any redistribution
 ****************************************************/

#include <SoftwareSerial.h>
#include "Adafruit_FONA.h"
#include "Adafruit_MQTT.h"
#include "Adafruit_MQTT_FONA.h"

#include "LowPower.h"
#include <avr/wdt.h>                  // add this for watchdog function

/*************************** Compile options ***********************************/

//#define _USE_TEST_PIN_  1
#define _OUTPUT_DEBUG_  1

/*************************** System definition ***********************************/
// One unique ID for each device
// 1xxx - Arduino UNO + Adafruit Fona 808
// 2xxx - Arduino UNO + Seeed (obsolete)
// 3xxx - Arduino Pro Mini + Seeed
//        3002 - sending to Adafruit IO
//        3012 - sending to Adafruit IO, mySQL
//        3022 - sending to Adafruit IO, mySQL and Thingspeak
// assign a new ID for each device to avoid messing up with existing data

// Custom info: it should be a 4-digit ID
#define PROJECT_DEVICE_ID xxxx

/*************************** FONA Pins and class init ***********************************/

#define FONA_RX     2
#define FONA_TX     3
#define FONA_RST    4

SoftwareSerial fonaSS = SoftwareSerial(FONA_TX, FONA_RX);

// GO! we define two pins for the same function
// Pin 8 is for use with UNO
// Pin 6 is for use with Pro Mini
// Status is skipped now

#define PIN_GSM_POWER 8
#define PIN_GSM_POWER_2 6
#define PIN_GSM_STATUS_POWER 7
#define PIN_ONBOARD_LED 13
#define PIN_TEST_01 A0

Adafruit_FONA fona = Adafruit_FONA(FONA_RST);

/*************************** Cellular APN *************************************/

  // Optionally configure a GPRS APN, username, and password.
  // You might need to do this to access your network's GPRS/data
  // network.  Contact your provider for the exact APN, username,
  // and password values.  Username and password are optional and
  // can be removed, but APN is required.
  // GO! for the China Motion SIM card... this is the settings

// Custom info: put in the carrier APN and password
#define FONA_APN       "CMHK"
#define FONA_USERNAME  ""
#define FONA_PASSWORD  ""

/************************* Adafruit.io Setup *********************************/
/* Use new feeds for new devices to avoid messing up with existing feeds     */
/*****************************************************************************/

#define AIO_SERVER      "io.adafruit.com"
#define AIO_SERVERPORT  1883
// Custom info: put in AIO username and AIO_KEY
#define AIO_USERNAME    "xxxxxxx"    // "...your AIO username (see https://accounts.adafruit.com)..."
#define AIO_KEY         "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

/************************* definitions for mySQL *********************************/

// Custom info: the link to the mySQL database via php, change the domain name as well
#define STRING_HTTP_LEADING "makerbench.org/xxxxxxxxxxxxxx.php?"

/************************* Thingspeak ****************************************/
/* Use new feeds for new devices to avoid messing up with existing feeds     */
/*****************************************************************************/

// Custom info: specify an API key to send to thingspeak
#define STRING_THINGSPEAK_LEADING "api.thingspeak.com/update?api_key=XXXXXXXXXXXXXXXX"

/************************* GPS *********************************/

#define GPS_NUM_ATTEMPTS        10
#define GPS_ATTEMPT_INTERVAL_MS  6000
int gpsAttemptCount;
int gpsCount;
boolean gps_success;

/************************* Sleep time management *********************************/

int sleepTime;
unsigned char smSlpTime = 0;

/************ Global State (you don't need to change this!) ******************/

// Store the MQTT server, client ID, username, and password in flash memory.
// This is required for using the Adafruit MQTT library.
// GO! do not use PROGMEM const char MQTT_SERVER[] PROGMEM    = AIO_SERVER;
// Set a unique MQTT client ID using the AIO key + the date and time the sketch
// was compiled (so this should be unique across multiple devices for a user,
// alternatively you can manually set this to a GUID or other random value).
const char MQTT_CLIENTID[] PROGMEM  = __TIME__ AIO_USERNAME;
// GO! do not use PROGMEM const char MQTT_USERNAME[] PROGMEM  = AIO_USERNAME;
// GO! do not use PROGMEM const char MQTT_PASSWORD[] PROGMEM  = AIO_KEY;

// Setup the FONA MQTT class by passing in the FONA class and MQTT server and login details.
Adafruit_MQTT_FONA mqtt(&fona, AIO_SERVER, AIO_SERVERPORT, AIO_USERNAME, AIO_KEY);
// GO! do not use PROGMEM Adafruit_MQTT_FONA mqtt(&fona, MQTT_SERVER, AIO_SERVERPORT, MQTT_CLIENTID, MQTT_USERNAME, MQTT_PASSWORD);

// You don't need to change anything below this line!
// shortened to 100ms now
//#define halt(s) { Watchdog.enable(100); Serial.println(F( s )); while(1) digitalWrite(PIN_TEST_01,!digitalRead(PIN_TEST_01));  }
#define halt(s) { wdt_enable(WDTO_250MS); Serial.println(F( s )); while(1); }

// FONAconnect is a helper function that sets up the FONA and connects to
// the GPRS network. See the fonahelper.cpp tab above for the source!
boolean FONAconnect(const __FlashStringHelper *apn, const __FlashStringHelper *username, const __FlashStringHelper *password);

/****************************** Feeds ***************************************/

// examples from Geofence
//Adafruit_MQTT_Publish location_feed = Adafruit_MQTT_Publish(&mqtt, AIO_USERNAME "/feeds/" LOCATION_FEED_NAME "/csv");
//Adafruit_MQTT_Publish battery_feed = Adafruit_MQTT_Publish(&mqtt, AIO_USERNAME "/feeds/battery");
//Adafruit_MQTT_Publish alerts_feed = Adafruit_MQTT_Publish(&mqtt, AIO_USERNAME "/feeds/alerts");

// original for gps
// Notice MQTT paths for AIO follow the form: <username>/feeds/<feedname>/csv
//const char GSMLOC_FEED[] PROGMEM = AIO_USERNAME "/feeds/gsmloc/csv";
//Adafruit_MQTT_Publish gsmloc = Adafruit_MQTT_Publish(&mqtt, GSMLOC_FEED);
//const char GPSLOC_FEED[] PROGMEM = AIO_USERNAME "/feeds/gps/csv";
//Adafruit_MQTT_Publish gpsloc = Adafruit_MQTT_Publish(&mqtt, GPSLOC_FEED);

// GO! combine the two and make these
Adafruit_MQTT_Publish gsmloc = Adafruit_MQTT_Publish(&mqtt, AIO_USERNAME "/feeds/gsm3022/csv");
Adafruit_MQTT_Publish gpsloc = Adafruit_MQTT_Publish(&mqtt, AIO_USERNAME "/feeds/gps3022/csv");
Adafruit_MQTT_Publish batlevel = Adafruit_MQTT_Publish(&mqtt, AIO_USERNAME "/feeds/battery3022");   // omit the /csv

char gpsbuffer[160];

/*************************** Sketch Code ************************************/

// How many transmission failures in a row we're willing to be ok with before reset
uint8_t txfailures = 0;
#define MAXTXFAILURES 3

void setup() {

  digitalWrite(PIN_GSM_POWER, HIGH);  // set to high
  digitalWrite(PIN_GSM_POWER_2, HIGH);  // set to high
  pinMode(PIN_GSM_POWER, OUTPUT);     // ensure output mode for GSM power pin
  pinMode(PIN_GSM_POWER_2, OUTPUT);     // ensure output mode for GSM power pin
  pinMode(PIN_GSM_STATUS_POWER, INPUT); // read GSM module power status
  pinMode(PIN_ONBOARD_LED, OUTPUT);   // just to make sure this LED remains OFF
  digitalWrite(PIN_ONBOARD_LED, LOW); // ensure the D13 LED won't turn on so as to conserve power

#if defined(_USE_TEST_PIN_)
  pinMode(PIN_TEST_01, OUTPUT);
  digitalWrite(PIN_TEST_01, LOW);   // test pin set to low at reset
#endif

  while (!Serial);
  Serial.begin(115200);

  Serial.println(F("Green Orange: GPS tracker System"));
  Serial.println(F("Power ON GSM system"));

  // do a negative pulse to turn ON GSM if GSM is currently off
  // the exit condition is that the power status pin goes high
  // if for some reasons the Fona fails to be turned on, the Arduino never stop
  
//  if (!digitalRead(PIN_GSM_STATUS_POWER))
//    {
    digitalWrite(PIN_GSM_POWER, LOW);  // set to low
    digitalWrite(PIN_GSM_POWER_2, LOW);  // set to low
    delay(1300);                         // spec requirement is 1 sec
    digitalWrite(PIN_GSM_POWER, HIGH);  // set to high
    digitalWrite(PIN_GSM_POWER_2, HIGH);  // set to high
    // should have turned ON, delay for module stability - delay time still to be finalized
    // wdt_reset();
    delay(5000);      // before it was 5000, think no need that long - hmmm.  wondering if 2000 would cause any problem. let's keep it 5000
//    }
    //wdt_reset();

  // attempt to get in touch with Fona on serial port
  // watchdog is enabled only inside the below
  // if done properly, the below is confirmed
  // - Fona is talking via UART
  // - Fona is registered to a network - 2G (if no 2G available this is not a pass here)
  // - GPRS is enabled also

  if (! FONAconnect(F(FONA_APN), F(FONA_USERNAME), F(FONA_PASSWORD)))
    {
    //halt("Retrying FONA");
    restIdle();                     // now instead of halting for a reset immediately, we rest for idle
    }
    
  Serial.println(F("Connected to Cellular!"));

  fona.enableGPS(true);

  wdt_reset();
  delay(3000);  // wait a few seconds to stabilize connection
  wdt_reset();

  // connect to adafruit io
  connect();
  sleepTime = 0;
}

uint32_t x=0;

void loop() {

  char sendbuffer[120];
          uint16_t statuscode;
          int16_t length;
          char url[160];

  // Make sure to reset watchdog every loop iteration!
  wdt_reset();

  // ping adafruit io a few times to make sure we remain connected
  if(! mqtt.ping(3)) {
    // reconnect to adafruit io
    if(! mqtt.connected())
      connect();
  }

  float latitude, longitude, speed_kph, heading, speed_mph, altitude;
  float gpsLatitude, gpsLongitude;
  
  // if you ask for an altitude reading, getGPS will return false if there isn't a 3D fix
  // GO! it takes time for the GPS to get a fix after power-cycle so we need to attempt multiple times

  gpsAttemptCount = 0;
  while (gpsAttemptCount < GPS_NUM_ATTEMPTS)
  {
  gps_success = fona.getGPS(&latitude, &longitude, &speed_kph, &heading, &altitude);
  gpsLatitude = latitude;
  gpsLongitude = longitude;
  
  if (gps_success && !(longitude == 0 || altitude ==0 )) {

    gpsCount = gpsAttemptCount + 1;
    gpsAttemptCount = GPS_NUM_ATTEMPTS + 8;       // confirms that we don't need to do it again
    fona.enableGPS(false);    // no need to keep GPS on when sending data to cloud

#if defined(_OUTPUT_DEBUG_)
    Serial.print("GPS lat:");
    Serial.println(latitude);
    Serial.print("GPS long:");
    Serial.println(longitude);
    Serial.print("GPS speed KPH:");
    Serial.println(speed_kph);
    Serial.print("GPS speed MPH:");
    speed_mph = speed_kph * 0.621371192;
    Serial.println(speed_mph);
    Serial.print("GPS heading:");
    Serial.println(heading);
    Serial.print("GPS altitude:");
    Serial.println(altitude);
#endif

    // snprintf(sendbuffer, 120, "%d,%f,%f,0", x, latitude, longitude);
    // but that doesnt work in arduino
    char *p = sendbuffer;
    // add speed value
    // GO! borrow the value of speed_mph as private ID value
    speed_mph = PROJECT_DEVICE_ID;
    dtostrf(speed_mph, 4, 0, p);
    p += strlen(p);
    p[0] = ','; p++;
    // concat latitude
    dtostrf(latitude, 2, 6, p);
    p += strlen(p);
    p[0] = ','; p++;
    // concat longitude
    dtostrf(longitude, 3, 6, p);
    p += strlen(p);
    p[0] = ','; p++;
    // concat altitude
    dtostrf(altitude, 2, 6, p);
    p += strlen(p);
    // null terminate
    p[0] = 0;

    Serial.print("Sending: "); Serial.println(sendbuffer);

    if (! gpsloc.publish(sendbuffer)) {
      Serial.println(F("Failed"));
      txfailures++;
    } else {
      Serial.println(F("OK!"));
      txfailures = 0;
    }
    wdt_reset();
  }
  else
      {
        wdt_reset();
        delay(GPS_ATTEMPT_INTERVAL_MS);
        wdt_reset();
        gpsAttemptCount++;
        }
  } // ending while loop
  fona.enableGPS(false);
  
        uint16_t vbat;
        if (! fona.getBattVoltage(&vbat)) {
          Serial.println(F("Failed to read Batt"));
        } else {
          Serial.print(F("VBat = ")); Serial.print(vbat); Serial.println(F(" mV"));
          char *p = sendbuffer;
          // add voltage value
          dtostrf(vbat, 2, 1, p);
          p += strlen(p);
          // null terminate
          p[0] = 0;
          if (! batlevel.publish(sendbuffer)) {
              Serial.println(F("Failed"));
              txfailures++;
          } else {
              Serial.println(F("OK! voltage sent"));
              txfailures = 0;
                }
          wdt_reset();
        }

  boolean gsmloc_success = fona.getGSMLoc(&latitude, &longitude);

  if (gsmloc_success) {

    Serial.print("GSMLoc lat:");
    Serial.println(latitude);
    Serial.print("GSMLoc long:");
    Serial.println(longitude);

    // snprintf(sendbuffer, 120, "%d,%f,%f,0", x, latitude, longitude);
    // but that doesnt work in arduino
    char *p;

    // paste in 'value' first, just an incrementer for GSMLoc
    itoa(x, sendbuffer, 10);
    p = sendbuffer+strlen(sendbuffer);
    p[0] = ','; p++;
    // concat latitude
    dtostrf(latitude, 2, 6, p);
    p += strlen(p);
    p[0] = ','; p++;
    // concat longitude
    dtostrf(longitude, 3, 6, p);
    p += strlen(p);
    p[0] = ','; p++;
    p[0] = '0'; p++;  // 0 altitude
    // null terminate
    p[0] = 0;

  if (gpsAttemptCount != (GPS_NUM_ATTEMPTS + 8))    // if GPS has been sent, we don't send GSM
  {
    Serial.print("Sending: "); Serial.println(sendbuffer);
    if (! gsmloc.publish(sendbuffer)) {
      Serial.println(F("Failed"));
      txfailures++;
    } else {
      Serial.println(F("OK!"));
      txfailures = 0;
    }
  }
  }

  wdt_reset();

  // GO! here the added portion to send the whole thing to mySQL

    char  *url_;
    url_ = url;
    // The leading string
    sprintf(url_, STRING_HTTP_LEADING);
    url_ += strlen(url_);
    // The ID
    sprintf(url_, "M_id=%d", PROJECT_DEVICE_ID);
    url_ += strlen(url_);
    // The battery level
    sprintf(url_, "&M_Batt=%4.0d", vbat);
    url_ += strlen(url_);
    // The latitude
    sprintf(url_, "&M_Lat=");                     //, gpsLatitude);
    url_ += strlen(url_);
    if (gpsLatitude > 1 && gpsLatitude < 99)
          {
          dtostrf(gpsLatitude, 2, 6, url_);
          url_ += strlen(url_);
          }
    // The longitude
    sprintf(url_, "&M_Long=");                    //, gpsLongitude);
    url_ += strlen(url_);
    if (gpsLongitude > 1 && gpsLongitude < 199)
        {
          dtostrf(gpsLongitude, 3, 6, url_);
          url_ += strlen(url_);
        }
    // The gsm latitude
    if (latitude == 0) latitude = 99;
    sprintf(url_, "&G_Lat=");                     //, latitude);
    url_ += strlen(url_);
    dtostrf(latitude, 2, 6, url_);
    url_ += strlen(url_);
    // The gsm longitude
    if (longitude == 0) longitude = 999;
    sprintf(url_, "&G_Long=");                    //, longitude);
    url_ += strlen(url_);
    dtostrf(longitude, 3, 6, url_);
    url_ += strlen(url_);
    // The GPS retrial record
    sprintf(url_, "&GPS_cnt=%d", gpsCount);
    url_ += strlen(url_);
    // null termination
    url_[0] = 0;
    //url[0] = ','; url++;

        // print out for testing
        
        Serial.println(url);
        wdt_reset();
        wdt_disable();
          if (!fona.HTTP_GET_start(url, &statuscode, (uint16_t *)&length)) {
          Serial.println("Failed!");
        }
        else  {
        while (length > 0) {
          while (fona.available()) {
            char c = fona.read();

            embeddedCmd(c);
            
            // Serial.write is too slow, we'll write directly to Serial register!
#if defined(__AVR_ATmega328P__) || defined(__AVR_ATmega168__)
            loop_until_bit_is_set(UCSR0A, UDRE0); /* Wait until data register empty. */
            UDR0 = c;
#else
            Serial.write(c);
#endif
            length--;
            wdt_reset();
            if (! length) break;
          }
        }
        }
        wdt_enable(WDTO_8S);

  x++;

  /* send to thingspeak */

    url_ = url;
    // The leading string
    sprintf(url_, STRING_THINGSPEAK_LEADING);
    url_ += strlen(url_);
    // The ID
    sprintf(url_, "&field1=%d", PROJECT_DEVICE_ID);
    url_ += strlen(url_);
    // The battery level
    sprintf(url_, "&field2=%4.0d", vbat);
    url_ += strlen(url_);
    // The latitude
    sprintf(url_, "&field3=");                     //, gpsLatitude);
    url_ += strlen(url_);
    if (gpsLatitude > 1 && gpsLatitude < 99)
          {
          dtostrf(gpsLatitude, 2, 6, url_);
          url_ += strlen(url_);
          }
    // The longitude
    sprintf(url_, "&field4=");                    //, gpsLongitude);
    url_ += strlen(url_);
    if (gpsLongitude > 1 && gpsLongitude < 199)
        {
          dtostrf(gpsLongitude, 3, 6, url_);
          url_ += strlen(url_);
        }
    // The gsm latitude
    if (latitude == 0) latitude = 99;
    sprintf(url_, "&field5=");                     //, latitude);
    url_ += strlen(url_);
    dtostrf(latitude, 2, 6, url_);
    url_ += strlen(url_);
    // The gsm longitude
    if (longitude == 0) longitude = 999;
    sprintf(url_, "&field6=");                    //, longitude);
    url_ += strlen(url_);
    dtostrf(longitude, 3, 6, url_);
    url_ += strlen(url_);
    // null termination
    url_[0] = 0;
    //url[0] = ','; url++;

            Serial.println(url);
            wdt_reset();
            wdt_disable();
            if (!fona.HTTP_GET_start(url, &statuscode, (uint16_t *)&length)) 
              {
              Serial.println(F("Get Failed!"));
              } 
           fona.HTTP_GET_end();  
        wdt_enable(WDTO_8S);
        Serial.println(F("\n****"));
        fona.HTTP_GET_end();

  // wait a couple seconds before starting over
  wdt_reset();
  delay(2000);
  wdt_reset();
  // everything done successfully, rest idle before resetting for the next round
  restIdle();
}

void restIdle(void)
{
int ii,jj;
int sleepMS;

// do a negative pulse to turn OFF GSM
//  if (digitalRead(PIN_GSM_STATUS_POWER))
//    {
    Serial.println(F("Turn off GSM..."));
    digitalWrite(PIN_GSM_POWER, LOW);  // set to low
    digitalWrite(PIN_GSM_POWER_2, LOW);  // set to low
    delay(1300);                         // spec requirement is 1 sec
    digitalWrite(PIN_GSM_POWER, HIGH);  // set to low
    digitalWrite(PIN_GSM_POWER_2, HIGH);  // set to low
//    }
  // wait for 15 minutes or whatever, during this time, Arduino should be sleep also

  wdt_reset();
  Serial.println(F("System Hibernates"));

  delay(500);                 // delay for printing
  wdt_disable();
  if (sleepTime <= 10)
    sleepTime = 10;
  if (sleepTime >= 60)
    sleepTime = 60;
  Serial.print(sleepTime);
  Serial.println(F(" minutes"));
  delay(500);
  for (jj=0; jj<sleepTime; jj++)     // this is roughly a minute count
  for (ii=0; ii<8; ii++)                // wait for 8x8=64 seconds (measured to be 68 seconds?) - say it is a minute
    LowPower.powerDown(SLEEP_8S, ADC_OFF, BOD_OFF);  
  halt("System restart!");
  }

// connect to adafruit io via MQTT
void connect() {

  // check if we're still connected
  // and make sure there aren't a bunch
  // of send failures
  // GO! txfailures keeps tracks of # of failures sending actual GPS and GSMLOC data (every time a send is successful the counter will reset)
  // So, here it means that if TCP is still connected (true), and the number of consecutive tx failures is < 3, no need to do mqtt.connect() again
  
  if(fona.TCPconnected() && txfailures < MAXTXFAILURES)
    return;

  Serial.println(F("Connecting to MQTT..."));

  int8_t ret, retries = 5;

  // once mqtt.connect() returns 0 while loop is done
  wdt_disable();
  while (retries && (ret = mqtt.connect()) != 0) {
    switch (ret) {
      // error cases
      case 1: Serial.println(F("Wrong protocol")); break;
      case 2: Serial.println(F("ID rejected")); break;
      case 3: Serial.println(F("Server unavail")); break;
      case 4: Serial.println(F("Bad user/pass")); break;
      case 5: Serial.println(F("Not authed")); break;
      case 6: Serial.println(F("Failed to subscribe")); break;
      default: Serial.println(F("Connection failed")); break;
    }
    Serial.println(F("Retrying MQTT connection"));
    wdt_reset();
    retries--;
    Serial.print(F("Retry MQTT remains:"));
    Serial.println(retries);
    delay(5000);
  } // GO! if mqtt.connect returns 0, the loop terminates at here

  wdt_enable(WDTO_8S);
  //if (retries == 0) halt("Resetting system");   // immediate reboot - actually should delay 10 minutes here too
  if (retries == 0) restIdle();   // immediate reboot - actually should delay 10 minutes here too
  Serial.println(F("MQTT Connected!"));
  txfailures = 0;
}

int embeddedCmd(char ch)
{
  switch  (smSlpTime)
  {
     case (0):
      if (ch=='<')  smSlpTime++;
        else  smSlpTime = 0;
      break;
     case (1):
      if (ch=='S')  smSlpTime++;
        else  smSlpTime = 0;
      break;
     case (2):
      if (ch=='=')  smSlpTime++;
        else  smSlpTime = 0;
      break;
     case (3):
      if (ch >= 0x30 && ch<= 0x39)
        {
        sleepTime += (ch-0x30)*100;
        smSlpTime++;
        }
      else
        smSlpTime = 0;
      break;
     case (4):
      if (ch >= 0x30 && ch<= 0x39)
        {
        sleepTime += (ch-0x30)*10;
        smSlpTime++;
        }
      else
        smSlpTime = 0;
      break;
     case (5):
      if (ch >= 0x30 && ch<= 0x39)
        {
        sleepTime += (ch-0x30);
        smSlpTime=0;
        }
      else
        smSlpTime = 0;
      break;
     default:
      break;
  }  
}

