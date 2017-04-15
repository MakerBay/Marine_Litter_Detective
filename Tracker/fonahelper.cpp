#include <SoftwareSerial.h>
#include "Adafruit_FONA.h"

#include <avr/wdt.h>                  // add this for watchdog function

#define halt(s) { Serial.println(F( s )); while(1);  }

extern Adafruit_FONA fona;
extern SoftwareSerial fonaSS;

boolean FONAconnect(const __FlashStringHelper *apn, const __FlashStringHelper *username, const __FlashStringHelper *password) {

  int retry;

  wdt_enable(WDTO_8S);
  wdt_reset();

  Serial.println(F("Initializing FONA....(May take a few seconds)"));
  fonaSS.begin(4800);

  if (! fona.begin(fonaSS)) {
    Serial.println(F("Couldn't find FONA"));
    return false;
  }

  fonaSS.println("AT+CMEE=2");
  Serial.println(F("FONA is OK"));

  wdt_reset();
  Serial.println(F("Checking for network..."));

  // try to get valid reply for AT+CREG
  // here we modify the codes such that even there is no locked carrier we
  // still go back to sleep until another time, this is for power conservation
  // simple test, even without the SIM card, system should sleep
  // this effectively will retry until watchdog is activated - no good
  retry = 80;     // 40 times retry is like 8 seconds like before, changed to 80 on 20170219
  while ((fona.getNetworkStatus() != 1) && retry)
  {
   delay(200);
   wdt_reset();
   retry--;
  }
  if (!retry) return false;
  
  wdt_reset();
  fona.setGPRSNetworkSettings(apn, username, password);

  // GO!  add a delay here
  delay(4000);
  // GO! do not disable GPRS.
  //Serial.println(F("Disabling GPRS"));
  //fona.enableGPRS(false);

  wdt_reset();

  Serial.println(F("Enabling GPRS"));
  // GO! we want to do it our way: turn ON GPRS and then delay for a while
  Serial.println(F("GO! enable GPRS now and then delay!"));
  int ret = fona.enableGPRS(true);
  delay(2000);
  wdt_reset();
  delay(2000);
  wdt_reset();
  delay(2000);
  wdt_reset();
  delay(2000);
  wdt_reset();
  Serial.println(F("GO! our delay is done. Is the Blue LED flashing rapidly?"));
  
  if (!ret) {
    Serial.println(F("Failed to turn GPRS on"));
    return false;
  }
  wdt_reset();

  return true;

}
