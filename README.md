# [Marine Litter Detective](http://marinelitterdetective.net/)

[Webpage Active now!](http://marinelitterdetective.net/)

http://marinelitterdetective.net/

Do you know where marine litter comes from?  A lot of litter generated on land actually ends up in the ocean, but how? WWF-Hong Kong, in cooperation with MakerBay, has designed a tracking device to simulate how litter enters the sea through storm drains and rivers, and is working with students from 11 schools to trace the journey of litter. This helps us understand the source of marine litter in Hong Kong and solve the problem together. If you find this device washed onto the shore, please pick it up and contact WWF (pyeung@wwf.org.hk) for collection. This project is sponsored by the Environment and Conservation Fund and the Environmental Campaign Committee of Hong Kong SAR Government.

![wwf-logo-coconut](https://c1.staticflickr.com/5/4217/35207853011_aef241f200_z.jpg)



## Goal
![Arduino in coconut](https://c1.staticflickr.com/3/2940/32739309070_780d739c2a_z.jpg)
![Map of Drifter in HK Waters](https://c1.staticflickr.com/5/4237/34527245533_3083b3c8c5_z.jpg)

The goal of the Marine Litter Detective is to deploy more than a 100 GPS tracker devices to:
- Simulate the movement of trash from the land, into the drain system, into the river system, and into the sea of Hong Kong waters
- Create a map of coastal marine litter, to indicate where the trash comes from, where it goes, how quickly it travels, how frequently the same trash is observed on different beaches, how much of the trash goes in the ocean / gets stranded on the beach and more data
- Improve ocean current simulations and computer models
- Open hardware and software to enable more costal research and marine litter in the future

Our priorities are to make
- <b>reliable</b> GPS tracker fleets that give us frequent updates
- <b>environmentally friendly</b> casing (biodegradable)
- <b>low cost</b> 2G connected devices to operate in mobile phone range (good for coastal waters)
- devices which are <b>simple</b> to build so that over a hundred of students can build and deploy these sensors, collect data, analyse and share their findings

<hr>

## [Data visualisation](https://github.com/MakerBay/Trashtracker/tree/master/Dataviz)
![Student Drifters](https://c1.staticflickr.com/3/2937/33684581620_3e84727a2c_z.jpg)

We have been very impressed with the work of Student Drifters, a research based program and we are learning a lot from them, principally about from their
- Python scripts and
- Leaflet-powered data visualisation: studentdrifters.org/huanxin/leaflet/examples/drifter.html .
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

The devices are equipped with a 3.3V Arduino Pro Mini

## [Casing](https://github.com/MakerBay/Trashtracker/tree/master/Coconut)

We are trying to get our electronics as "eco" as possible, so the housing of our electronics is mainly composed of
- Wax / Paraffin: to make the electronics fully waterproof and float
- Tissue paper: to enhance the wax structure with the fibres to make it stronger

<hr>

## Credits
- [WWF-Hong Kong](https://wwf.org.hk)
- [MakerBay](https://www.makerbay.org)

## Team
- Patrick Yeung [WWF] +852 2161 9698, pyeung@wwf.org.hk
- Cesar Jung-Harada [MakerBay] +852 9610 7593, contact@cesarharada.com, https://github.com/cesarharada
- Eddie Yung [MakerBay] eddieyung2006@gmail.com, https://github.com/fisher4668
- Rohak Singhal [MakerBay] rohaksinghal14@gmail.com, https://github.com/krohak
- Jackie Wong Ching Sun [MakerBay] chinsun91@gmail.com, https://github.com/chinsun
- Michael CY CHENG [INDEPENDENT]

Special thanks to
- [Seeed Studio]( https://www.seeedstudio.com )
- [Student Drifter]( http://www.studentdrifters.org )
- Prof James Manning (NOAA) ( https://www.researchgate.net/profile/James_Manning3 )
- Xavier Huanxin Xu (NOAA)
- Tom Chi ( http://www.tomchi.com/ )
- Jie Qi (MIT) ( http://technolojie.com/category/featured-projects/ )
- Cy Keener (Stanford University) ( http://www.cykeener.com/ )
- Inspiration from https://www.greenwaveinstruments.com/product

<hr>

## Locations of launch
![Classes Locations](https://c2.staticflickr.com/4/3945/34068780145_6b6453739d_z.jpg)

11 Schools in Hong Kong all over the territory to launch at rivers and drains in 11 different areas
Totally 110 Devices will be deployed (10 devices per schools, 1 device per 2 to 3 students)
