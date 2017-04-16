# Marine Litter Detective

![Arduino in coconut](https://c1.staticflickr.com/3/2940/32739309070_780d739c2a_z.jpg)
![Map of Drifter in HK Waters](https://c2.staticflickr.com/4/3695/32739310090_6fef4b8bc1_z.jpg)

## Goal
The goal of the Ocean Trashtrackers is to deploy more than a 100 GPS tracker devices to: 
- map the movement of trash from the land, into the drain system, into the river system, into the ocean in Hong Kong waters
- create a map of coastal marine litter, where the trash is coming from, where it is going, how quickly it travels, how frequently the same trash is observed on different beaches, how much of the trash goes in the ocean / gets stranded on the beach and more data 
- improve ocean current simulations and computer models
- open hardware and software to enable more costal research and marine litter in the future

Our pririties are to make
- <b>reliable</b> GPS tracker fleet that give us frequent updates
- <b>environmentally friendly</b> electronics and casing (biodegrable)
- <b>low cost</b> 2G connected devices to operate in mobile phone range (this is not good for deep sea)
- <b>simple</b> to build so that hundred of children can build and deploy these sensors, collect data, analyse and share their findings

<hr>

## [Data visualisation](https://github.com/MakerBay/Trashtracker/tree/master/Dataviz)
![Student Drifters](https://c1.staticflickr.com/3/2937/33684581620_3e84727a2c_z.jpg)

We have been very impressed with the work of student drifters and we are learning a lot from them, principally about from their 
- Python scripts and
- Leaflet-powered data visualisation: studentdrifters.org/huanxin/leaflet/examples/drifter.html
We are  in the process of setting up a collaboration.

## [Software server side](https://github.com/MakerBay/Trashtracker/tree/master/Server)
![Server](https://c1.staticflickr.com/3/2922/33257374233_097e389557_z.jpg)

We are using a simple MySQL Server to collect the data via ftp/http request.
We are currently using a PHP script to extract the data and prepare it for data visualisation via a Json, or CSV file. 

## [Software on device](https://github.com/MakerBay/Trashtracker/tree/master/Tracker)
![Device](https://c1.staticflickr.com/3/2909/33257361673_d1350ff440_z.jpg)

On the device we are using the Arduino IDE: https://www.arduino.cc/en/main/software

## [Electronics](https://github.com/MakerBay/Trashtracker/tree/master/Electronics)
![Electonics](https://c1.staticflickr.com/3/2911/33684464920_3e7cd0a56f_z.jpg)

The device is equiped with an 3.3V arduino pro mini that

## [Coconut](https://github.com/MakerBay/Trashtracker/tree/master/Coconut)
![supermarket coconut](https://c1.staticflickr.com/1/743/32590198664_fbb815bce5_z.jpg)

We are trying to get our electronics are "eco" as possible, so the housing of our electronics is
- Coconut shell: for protection against impact
- Recycled cork chips: for flotation
- Wax / Paraffin: to make the electronics fully waterproofed
- Bicycle tyres (vulcanised rubber): to keep device closed

<hr>

## Credits
- [WWF-Hong Kong](https://wwf.org.hk)
- [MakerBay](https://www.makerbay.org)

## Team
- Patrick Yeung [WWF] pyeung@wwf.org.hk
- Cesar Jung-Harada [MakerBay] +852 9610 7593, contact@cesarharada.com
- Eddie Yung [MakerBay] eddieyung2006@gmail.com
- Rohak Singhal [MakerBay] rohaksinghal14@gmail.com
- Jackie Wong [MakerBay] chinsun91@gmail.com
- Michael CY CHENG [INDEPENDENT] +852 9809 8736, mic.cycheng@gmail.com
Special thanks to 
- [Seeed Studio](https://www.seeedstudio.com)
- [Student Drifter](studentdrifters.org)
- Prof James Manning NOAA
- Xavier Huanxin Xu

<hr>

## Locations of launch
![Classes Locations](https://c2.staticflickr.com/4/3945/34068780145_6b6453739d_z.jpg)


## [Classes Run Down](https://github.com/MakerBay/Trashtracker/tree/master/Classes)
![Classes Kits](https://c2.staticflickr.com/4/3763/33049914560_2f45c87649_z.jpg)

- 11 Schools in Hong Kong all over the territory
- 120 Devices
- 10 devices per schools
- 1 device per 2 to 3 students

- 30 mins - Summary of last survey. recap on marine litter. Value on citizen science and the project (students will have another workshop in advanced to know about marine litter)
- 30 mins - introduction GPS tracking system
- 1-1.5hours - build (depends on how much we want students to be involved)
- 1.5 hour - Launch (including travelling time)
- 30-45mins -data collection and estimation of route
- 30 mins - wrap up So it would be around 5 hours . Rundown is not fixed at the moment so we can discuss to modify it
