var startDate = new Date();
    startDate.setUTCHours(0, 0, 0, 0);

    var map = L.map('map', {
       // zoom: 11,
        fullscreenControl: true,
        //center: [22.37,114.19]
    });

	map.fitBounds([[22.505614, 113.805324],[22.212772, 114.521176]]);

    // start of TimeDimension manual instantiation
    var timeDimension = new L.TimeDimension({
            period: "PT5M",
        });
    // helper to share the timeDimension object between all layers
    map.timeDimension = timeDimension;
    // otherwise you have to set the 'timeDimension' option on all layers.

    var player        = new L.TimeDimension.Player({
        transitionTime: 1,
        loop: true,
        startOver:true
    }, timeDimension);

    var timeDimensionControlOptions = {
        player:        player,
        timeDimension: timeDimension,
        position:      'bottomleft',
        autoPlay:      true,
        minSpeed:      1,
        speedStep:     1,
        maxSpeed:      100,
        timeSteps:     20,
        timeSliderDragUpdate: true,
        loopButton: true,
        limitSliders: true,
    };

    var timeDimensionControl = new L.Control.TimeDimension(timeDimensionControlOptions);
    map.addControl(timeDimensionControl);


    L.control.coordinates({
        position: "bottomright",
        decimals: 3,
        labelTemplateLat: "Latitude: {y}",
        labelTemplateLng: "Longitude: {x}",
        useDMS: true,
        enableUserInput: false
    }).addTo(map);

    $('#dtp_start').datetimepicker({
        inline: true,
        value: new Date("2017-05-23"),
        format: "c"
    });
    $('#dtp_end').datetimepicker({
        inline: true,
        value: new Date(),
        format: "c"
    });


    
    var iconDevice_50001 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_50001=L.marker([22.3076,114.225], {icon: iconDevice_50001}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment ID : 50001<br>Started: 2017-05-23 00:50:34<br>Ended: 2017-07-11 12:23:50<br>Moving time: 07:02:55<br>Stopped time: 1180:30:21<br>Points: 1130<br>Length 2D: 100.774km<br>Avg distance between points: 89.18m");
    var myStyleDevice_50001 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_50001 = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_50001 = L.geoJson(null,{

    style: myStyleDevice_50001,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_50001);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment ID : 50001<br>Started: 2017-05-23 00:50:34<br>Ended: 2017-07-11 12:23:50<br>Moving time: 07:02:55<br>Stopped time: 1180:30:21<br>Points: 1130<br>Length 2D: 100.774km<br>Avg distance between points: 89.18m")
    }});
    var gpxLayerDevice_50001 = omnivore.gpx('data/Device_50001.gpx', null, customLayerDevice_50001).on('ready', function() {

    });

    var gpxTimeLayerDevice_50001 = L.timeDimension.layer.geoJson(gpxLayerDevice_50001, {

    addlastPoint: true,
    waitForReady: true,
    updateTimeDimension: true,
    });
    var gpxaddmarkerDevice_50001 =L.layerGroup([markerDevice_50001,gpxTimeLayerDevice_50001]);

    
    var iconDevice_50002 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_50002=L.marker([22.2941,114.234], {icon: iconDevice_50002}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment ID : 50002<br>Started: 2017-06-01 22:49:23<br>Ended: 2017-06-11 04:40:10<br>Moving time: 02:51:19<br>Stopped time: 218:59:28<br>Points: 64<br>Length 2D: 10.238km<br>Avg distance between points: 159.97m");
    var myStyleDevice_50002 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_50002 = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_50002 = L.geoJson(null,{

    style: myStyleDevice_50002,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_50002);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment ID : 50002<br>Started: 2017-06-01 22:49:23<br>Ended: 2017-06-11 04:40:10<br>Moving time: 02:51:19<br>Stopped time: 218:59:28<br>Points: 64<br>Length 2D: 10.238km<br>Avg distance between points: 159.97m")
    }});
    var gpxLayerDevice_50002 = omnivore.gpx('data/Device_50002.gpx', null, customLayerDevice_50002).on('ready', function() {

    });

    var gpxTimeLayerDevice_50002 = L.timeDimension.layer.geoJson(gpxLayerDevice_50002, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_50002 =L.layerGroup([markerDevice_50002,gpxTimeLayerDevice_50002]);

    
    var iconDevice_50004 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_50004=L.marker([22.2944,114.235], {icon: iconDevice_50004}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment ID : 50004<br>Started: 2017-06-10 11:20:38<br>Ended: 2017-06-27 16:23:38<br>Moving time: 06:24:28<br>Stopped time: 406:38:32<br>Points: 933<br>Length 2D: 39.680km<br>Avg distance between points: 42.53m");
    var myStyleDevice_50004 = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_50004 = {
    radius: 5,
    fillColor: "#808080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_50004 = L.geoJson(null,{

    style: myStyleDevice_50004,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_50004);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment ID : 50004<br>Started: 2017-06-10 11:20:38<br>Ended: 2017-06-27 16:23:38<br>Moving time: 06:24:28<br>Stopped time: 406:38:32<br>Points: 933<br>Length 2D: 39.680km<br>Avg distance between points: 42.53m")
    }});
    var gpxLayerDevice_50004 = omnivore.gpx('data/Device_50004.gpx', null, customLayerDevice_50004).on('ready', function() {

    });

    var gpxTimeLayerDevice_50004 = L.timeDimension.layer.geoJson(gpxLayerDevice_50004, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_50004 =L.layerGroup([markerDevice_50004,gpxTimeLayerDevice_50004]);

    
    var iconDevice_50006 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_50006=L.marker([22.2951,114.234], {icon: iconDevice_50006}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment ID : 50006<br>Started: 2017-06-10 11:20:04<br>Ended: 2017-06-16 22:28:16<br>Moving time: n/a<br>Stopped time: 155:08:12<br>Points: 4<br>Length 2D: 0.599km<br>Avg distance between points: 149.84m");
    var myStyleDevice_50006 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_50006 = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_50006 = L.geoJson(null,{

    style: myStyleDevice_50006,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_50006);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment ID : 50006<br>Started: 2017-06-10 11:20:04<br>Ended: 2017-06-16 22:28:16<br>Moving time: n/a<br>Stopped time: 155:08:12<br>Points: 4<br>Length 2D: 0.599km<br>Avg distance between points: 149.84m")
    }});
    var gpxLayerDevice_50006 = omnivore.gpx('data/Device_50006.gpx', null, customLayerDevice_50006).on('ready', function() {

    });

    var gpxTimeLayerDevice_50006 = L.timeDimension.layer.geoJson(gpxLayerDevice_50006, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_50006 =L.layerGroup([markerDevice_50006,gpxTimeLayerDevice_50006]);

    
    var iconDevice_50007 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_50007=L.marker([22.2944,114.235], {icon: iconDevice_50007}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment ID : 50007<br>Started: 2017-06-10 11:23:15<br>Ended: 2017-06-13 17:07:10<br>Moving time: 04:11:54<br>Stopped time: 73:32:01<br>Points: 106<br>Length 2D: 12.995km<br>Avg distance between points: 122.59m");
    var myStyleDevice_50007 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_50007 = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_50007 = L.geoJson(null,{

    style: myStyleDevice_50007,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_50007);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment ID : 50007<br>Started: 2017-06-10 11:23:15<br>Ended: 2017-06-13 17:07:10<br>Moving time: 04:11:54<br>Stopped time: 73:32:01<br>Points: 106<br>Length 2D: 12.995km<br>Avg distance between points: 122.59m")
    }});
    var gpxLayerDevice_50007 = omnivore.gpx('data/Device_50007.gpx', null, customLayerDevice_50007).on('ready', function() {

    });

    var gpxTimeLayerDevice_50007 = L.timeDimension.layer.geoJson(gpxLayerDevice_50007, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_50007 =L.layerGroup([markerDevice_50007,gpxTimeLayerDevice_50007]);

    
    var iconDevice_50009 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_50009=L.marker([22.2949,114.234], {icon: iconDevice_50009}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment ID : 50009<br>Started: 2017-06-10 11:53:38<br>Ended: 2017-06-10 16:07:05<br>Moving time: 00:12:49<br>Stopped time: 04:00:38<br>Points: 4<br>Length 2D: 2.236km<br>Avg distance between points: 559.05m");
    var myStyleDevice_50009 = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_50009 = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_50009 = L.geoJson(null,{

    style: myStyleDevice_50009,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_50009);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment ID : 50009<br>Started: 2017-06-10 11:53:38<br>Ended: 2017-06-10 16:07:05<br>Moving time: 00:12:49<br>Stopped time: 04:00:38<br>Points: 4<br>Length 2D: 2.236km<br>Avg distance between points: 559.05m")
    }});
    var gpxLayerDevice_50009 = omnivore.gpx('data/Device_50009.gpx', null, customLayerDevice_50009).on('ready', function() {

    });

    var gpxTimeLayerDevice_50009 = L.timeDimension.layer.geoJson(gpxLayerDevice_50009, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_50009 =L.layerGroup([markerDevice_50009,gpxTimeLayerDevice_50009]);

    
    var iconDevice_10102 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10102=L.marker([22.2465,114.161], {icon: iconDevice_10102}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10102<br>Started: 2017-06-21 11:04:09<br>Ended: 2017-06-22 06:39:57<br>Moving time: 01:39:18<br>Stopped time: 17:56:30<br>Points: 89<br>Length 2D: 7.247km<br>Avg distance between points: 81.43m");
    var myStyleDevice_10102 = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10102 = {
    radius: 5,
    fillColor: "#FFFF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10102 = L.geoJson(null,{

    style: myStyleDevice_10102,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10102);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10102<br>Started: 2017-06-21 11:04:09<br>Ended: 2017-06-22 06:39:57<br>Moving time: 01:39:18<br>Stopped time: 17:56:30<br>Points: 89<br>Length 2D: 7.247km<br>Avg distance between points: 81.43m")
    }});
    var gpxLayerDevice_10102 = omnivore.gpx('data/Device_10102.gpx', null, customLayerDevice_10102).on('ready', function() {

    });

    var gpxTimeLayerDevice_10102 = L.timeDimension.layer.geoJson(gpxLayerDevice_10102, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10102 =L.layerGroup([markerDevice_10102,gpxTimeLayerDevice_10102]);

    
    var iconDevice_10103 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10103=L.marker([22.2475,114.162], {icon: iconDevice_10103}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10103<br>Started: 2017-06-25 07:17:58<br>Ended: 2017-07-02 05:11:45<br>Moving time: n/a<br>Stopped time: 165:53:47<br>Points: 12<br>Length 2D: 1.742km<br>Avg distance between points: 145.20m");
    var myStyleDevice_10103 = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10103 = {
    radius: 5,
    fillColor: "#808000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10103 = L.geoJson(null,{

    style: myStyleDevice_10103,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10103);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10103<br>Started: 2017-06-25 07:17:58<br>Ended: 2017-07-02 05:11:45<br>Moving time: n/a<br>Stopped time: 165:53:47<br>Points: 12<br>Length 2D: 1.742km<br>Avg distance between points: 145.20m")
    }});
    var gpxLayerDevice_10103 = omnivore.gpx('data/Device_10103.gpx', null, customLayerDevice_10103).on('ready', function() {

    });

    var gpxTimeLayerDevice_10103 = L.timeDimension.layer.geoJson(gpxLayerDevice_10103, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10103 =L.layerGroup([markerDevice_10103,gpxTimeLayerDevice_10103]);

    
    var iconDevice_10104 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10104=L.marker([22.2479,114.162], {icon: iconDevice_10104}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10104<br>Started: 2017-06-17 21:06:08<br>Ended: 2017-06-19 11:36:03<br>Moving time: 07:50:34<br>Stopped time: 30:39:21<br>Points: 181<br>Length 2D: 33.347km<br>Avg distance between points: 184.24m");
    var myStyleDevice_10104 = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10104 = {
    radius: 5,
    fillColor: "#00FF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10104 = L.geoJson(null,{

    style: myStyleDevice_10104,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10104);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10104<br>Started: 2017-06-17 21:06:08<br>Ended: 2017-06-19 11:36:03<br>Moving time: 07:50:34<br>Stopped time: 30:39:21<br>Points: 181<br>Length 2D: 33.347km<br>Avg distance between points: 184.24m")
    }});
    var gpxLayerDevice_10104 = omnivore.gpx('data/Device_10104.gpx', null, customLayerDevice_10104).on('ready', function() {

    });

    var gpxTimeLayerDevice_10104 = L.timeDimension.layer.geoJson(gpxLayerDevice_10104, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10104 =L.layerGroup([markerDevice_10104,gpxTimeLayerDevice_10104]);

    
    var iconDevice_10105 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10105=L.marker([22.2464,114.148], {icon: iconDevice_10105}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10105<br>Started: 2017-06-17 23:23:42<br>Ended: 2017-06-18 08:39:47<br>Moving time: n/a<br>Stopped time: 09:16:05<br>Points: 9<br>Length 2D: 1.819km<br>Avg distance between points: 202.12m");
    var myStyleDevice_10105 = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10105 = {
    radius: 5,
    fillColor: "#008000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10105 = L.geoJson(null,{

    style: myStyleDevice_10105,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10105);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10105<br>Started: 2017-06-17 23:23:42<br>Ended: 2017-06-18 08:39:47<br>Moving time: n/a<br>Stopped time: 09:16:05<br>Points: 9<br>Length 2D: 1.819km<br>Avg distance between points: 202.12m")
    }});
    var gpxLayerDevice_10105 = omnivore.gpx('data/Device_10105.gpx', null, customLayerDevice_10105).on('ready', function() {

    });

    var gpxTimeLayerDevice_10105 = L.timeDimension.layer.geoJson(gpxLayerDevice_10105, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10105 =L.layerGroup([markerDevice_10105,gpxTimeLayerDevice_10105]);

    
    var iconDevice_10106 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10106=L.marker([22.2454,114.161], {icon: iconDevice_10106}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10106<br>Started: 2017-06-17 21:01:38<br>Ended: 2017-06-18 00:30:31<br>Moving time: n/a<br>Stopped time: 03:28:53<br>Points: 2<br>Length 2D: 0.033km<br>Avg distance between points: 16.67m");
    var myStyleDevice_10106 = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10106 = {
    radius: 5,
    fillColor: "#008080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10106 = L.geoJson(null,{

    style: myStyleDevice_10106,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10106);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10106<br>Started: 2017-06-17 21:01:38<br>Ended: 2017-06-18 00:30:31<br>Moving time: n/a<br>Stopped time: 03:28:53<br>Points: 2<br>Length 2D: 0.033km<br>Avg distance between points: 16.67m")
    }});
    var gpxLayerDevice_10106 = omnivore.gpx('data/Device_10106.gpx', null, customLayerDevice_10106).on('ready', function() {

    });

    var gpxTimeLayerDevice_10106 = L.timeDimension.layer.geoJson(gpxLayerDevice_10106, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10106 =L.layerGroup([markerDevice_10106,gpxTimeLayerDevice_10106]);

    
    var iconDevice_10107 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10107=L.marker([22.2457,114.161], {icon: iconDevice_10107}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10107<br>Started: 2017-06-17 21:11:44<br>Ended: 2017-06-18 15:26:40<br>Moving time: n/a<br>Stopped time: 18:14:56<br>Points: 14<br>Length 2D: 0.953km<br>Avg distance between points: 68.07m");
    var myStyleDevice_10107 = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10107 = {
    radius: 5,
    fillColor: "#0000FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10107 = L.geoJson(null,{

    style: myStyleDevice_10107,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10107);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10107<br>Started: 2017-06-17 21:11:44<br>Ended: 2017-06-18 15:26:40<br>Moving time: n/a<br>Stopped time: 18:14:56<br>Points: 14<br>Length 2D: 0.953km<br>Avg distance between points: 68.07m")
    }});
    var gpxLayerDevice_10107 = omnivore.gpx('data/Device_10107.gpx', null, customLayerDevice_10107).on('ready', function() {

    });

    var gpxTimeLayerDevice_10107 = L.timeDimension.layer.geoJson(gpxLayerDevice_10107, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10107 =L.layerGroup([markerDevice_10107,gpxTimeLayerDevice_10107]);

    
    var iconDevice_10108 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10108=L.marker([22.2404,114.163], {icon: iconDevice_10108}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10108<br>Started: 2017-06-17 21:16:11<br>Ended: 2017-06-18 03:49:58<br>Moving time: 01:13:56<br>Stopped time: 05:19:51<br>Points: 33<br>Length 2D: 3.425km<br>Avg distance between points: 103.79m");
    var myStyleDevice_10108 = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10108 = {
    radius: 5,
    fillColor: "#000080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10108 = L.geoJson(null,{

    style: myStyleDevice_10108,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10108);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10108<br>Started: 2017-06-17 21:16:11<br>Ended: 2017-06-18 03:49:58<br>Moving time: 01:13:56<br>Stopped time: 05:19:51<br>Points: 33<br>Length 2D: 3.425km<br>Avg distance between points: 103.79m")
    }});
    var gpxLayerDevice_10108 = omnivore.gpx('data/Device_10108.gpx', null, customLayerDevice_10108).on('ready', function() {

    });

    var gpxTimeLayerDevice_10108 = L.timeDimension.layer.geoJson(gpxLayerDevice_10108, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10108 =L.layerGroup([markerDevice_10108,gpxTimeLayerDevice_10108]);

    
    var iconDevice_10109 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10109=L.marker([22.2453,114.154], {icon: iconDevice_10109}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10109<br>Started: 2017-06-18 04:37:40<br>Ended: 2017-06-18 08:05:56<br>Moving time: n/a<br>Stopped time: 03:28:16<br>Points: 4<br>Length 2D: 0.420km<br>Avg distance between points: 104.99m");
    var myStyleDevice_10109 = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10109 = {
    radius: 5,
    fillColor: "#FF00FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10109 = L.geoJson(null,{

    style: myStyleDevice_10109,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10109);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10109<br>Started: 2017-06-18 04:37:40<br>Ended: 2017-06-18 08:05:56<br>Moving time: n/a<br>Stopped time: 03:28:16<br>Points: 4<br>Length 2D: 0.420km<br>Avg distance between points: 104.99m")
    }});
    var gpxLayerDevice_10109 = omnivore.gpx('data/Device_10109.gpx', null, customLayerDevice_10109).on('ready', function() {

    });

    var gpxTimeLayerDevice_10109 = L.timeDimension.layer.geoJson(gpxLayerDevice_10109, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10109 =L.layerGroup([markerDevice_10109,gpxTimeLayerDevice_10109]);

    
    var iconDevice_10110 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10110=L.marker([22.2427,114.163], {icon: iconDevice_10110}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10110<br>Started: 2017-06-17 21:50:43<br>Ended: 2017-06-18 00:12:13<br>Moving time: n/a<br>Stopped time: 02:21:30<br>Points: 3<br>Length 2D: 0.246km<br>Avg distance between points: 81.95m");
    var myStyleDevice_10110 = {
    "color": "#800080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10110 = {
    radius: 5,
    fillColor: "#800080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10110 = L.geoJson(null,{

    style: myStyleDevice_10110,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10110);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10110<br>Started: 2017-06-17 21:50:43<br>Ended: 2017-06-18 00:12:13<br>Moving time: n/a<br>Stopped time: 02:21:30<br>Points: 3<br>Length 2D: 0.246km<br>Avg distance between points: 81.95m")
    }});
    var gpxLayerDevice_10110 = omnivore.gpx('data/Device_10110.gpx', null, customLayerDevice_10110).on('ready', function() {

    });

    var gpxTimeLayerDevice_10110 = L.timeDimension.layer.geoJson(gpxLayerDevice_10110, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10110 =L.layerGroup([markerDevice_10110,gpxTimeLayerDevice_10110]);

    
    var iconDevice_10201 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10201=L.marker([22.3752,114.185], {icon: iconDevice_10201}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10201<br>Started: 2017-06-21 15:26:01<br>Ended: 2017-06-22 14:04:17<br>Moving time: 04:04:24<br>Stopped time: 18:33:52<br>Points: 12<br>Length 2D: 14.902km<br>Avg distance between points: 1241.81m");
    var myStyleDevice_10201 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10201 = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10201 = L.geoJson(null,{

    style: myStyleDevice_10201,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10201);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10201<br>Started: 2017-06-21 15:26:01<br>Ended: 2017-06-22 14:04:17<br>Moving time: 04:04:24<br>Stopped time: 18:33:52<br>Points: 12<br>Length 2D: 14.902km<br>Avg distance between points: 1241.81m")
    }});
    var gpxLayerDevice_10201 = omnivore.gpx('data/Device_10201.gpx', null, customLayerDevice_10201).on('ready', function() {

    });

    var gpxTimeLayerDevice_10201 = L.timeDimension.layer.geoJson(gpxLayerDevice_10201, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10201 =L.layerGroup([markerDevice_10201,gpxTimeLayerDevice_10201]);

    
    var iconDevice_10202 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10202=L.marker([22.4226,114.229], {icon: iconDevice_10202}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10202<br>Started: 2017-06-21 10:26:21<br>Ended: 2017-06-21 13:42:15<br>Moving time: n/a<br>Stopped time: 03:15:54<br>Points: 2<br>Length 2D: 0.056km<br>Avg distance between points: 27.78m");
    var myStyleDevice_10202 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10202 = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10202 = L.geoJson(null,{

    style: myStyleDevice_10202,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10202);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10202<br>Started: 2017-06-21 10:26:21<br>Ended: 2017-06-21 13:42:15<br>Moving time: n/a<br>Stopped time: 03:15:54<br>Points: 2<br>Length 2D: 0.056km<br>Avg distance between points: 27.78m")
    }});
    var gpxLayerDevice_10202 = omnivore.gpx('data/Device_10202.gpx', null, customLayerDevice_10202).on('ready', function() {

    });

    var gpxTimeLayerDevice_10202 = L.timeDimension.layer.geoJson(gpxLayerDevice_10202, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10202 =L.layerGroup([markerDevice_10202,gpxTimeLayerDevice_10202]);

    
    var iconDevice_10203 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10203=L.marker([22.3765,114.188], {icon: iconDevice_10203}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10203<br>Started: 2017-06-21 16:04:01<br>Ended: 2017-06-23 20:55:38<br>Moving time: 02:54:46<br>Stopped time: 49:56:51<br>Points: 76<br>Length 2D: 13.790km<br>Avg distance between points: 181.45m");
    var myStyleDevice_10203 = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10203 = {
    radius: 5,
    fillColor: "#808080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10203 = L.geoJson(null,{

    style: myStyleDevice_10203,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10203);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10203<br>Started: 2017-06-21 16:04:01<br>Ended: 2017-06-23 20:55:38<br>Moving time: 02:54:46<br>Stopped time: 49:56:51<br>Points: 76<br>Length 2D: 13.790km<br>Avg distance between points: 181.45m")
    }});
    var gpxLayerDevice_10203 = omnivore.gpx('data/Device_10203.gpx', null, customLayerDevice_10203).on('ready', function() {

    });

    var gpxTimeLayerDevice_10203 = L.timeDimension.layer.geoJson(gpxLayerDevice_10203, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10203 =L.layerGroup([markerDevice_10203,gpxTimeLayerDevice_10203]);

    
    var iconDevice_10204 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10204=L.marker([22.4052,114.215], {icon: iconDevice_10204}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10204<br>Started: 2017-06-22 00:55:00<br>Ended: 2017-06-22 07:55:58<br>Moving time: n/a<br>Stopped time: 07:00:58<br>Points: 5<br>Length 2D: 2.045km<br>Avg distance between points: 409.05m");
    var myStyleDevice_10204 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10204 = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10204 = L.geoJson(null,{

    style: myStyleDevice_10204,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10204);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10204<br>Started: 2017-06-22 00:55:00<br>Ended: 2017-06-22 07:55:58<br>Moving time: n/a<br>Stopped time: 07:00:58<br>Points: 5<br>Length 2D: 2.045km<br>Avg distance between points: 409.05m")
    }});
    var gpxLayerDevice_10204 = omnivore.gpx('data/Device_10204.gpx', null, customLayerDevice_10204).on('ready', function() {

    });

    var gpxTimeLayerDevice_10204 = L.timeDimension.layer.geoJson(gpxLayerDevice_10204, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10204 =L.layerGroup([markerDevice_10204,gpxTimeLayerDevice_10204]);

    
    var iconDevice_10206 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10206=L.marker([22.4228,114.229], {icon: iconDevice_10206}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10206<br>Started: 2017-06-21 09:59:12<br>Ended: 2017-06-21 21:28:00<br>Moving time: n/a<br>Stopped time: 11:28:48<br>Points: 11<br>Length 2D: 0.921km<br>Avg distance between points: 83.72m");
    var myStyleDevice_10206 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10206 = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10206 = L.geoJson(null,{

    style: myStyleDevice_10206,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10206);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10206<br>Started: 2017-06-21 09:59:12<br>Ended: 2017-06-21 21:28:00<br>Moving time: n/a<br>Stopped time: 11:28:48<br>Points: 11<br>Length 2D: 0.921km<br>Avg distance between points: 83.72m")
    }});
    var gpxLayerDevice_10206 = omnivore.gpx('data/Device_10206.gpx', null, customLayerDevice_10206).on('ready', function() {

    });

    var gpxTimeLayerDevice_10206 = L.timeDimension.layer.geoJson(gpxLayerDevice_10206, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10206 =L.layerGroup([markerDevice_10206,gpxTimeLayerDevice_10206]);

    
    var iconDevice_10207 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10207=L.marker([22.3758,114.186], {icon: iconDevice_10207}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10207<br>Started: 2017-06-21 16:09:44<br>Ended: 2017-06-22 10:33:24<br>Moving time: 02:20:35<br>Stopped time: 16:03:05<br>Points: 17<br>Length 2D: 11.270km<br>Avg distance between points: 662.92m");
    var myStyleDevice_10207 = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10207 = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10207 = L.geoJson(null,{

    style: myStyleDevice_10207,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10207);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10207<br>Started: 2017-06-21 16:09:44<br>Ended: 2017-06-22 10:33:24<br>Moving time: 02:20:35<br>Stopped time: 16:03:05<br>Points: 17<br>Length 2D: 11.270km<br>Avg distance between points: 662.92m")
    }});
    var gpxLayerDevice_10207 = omnivore.gpx('data/Device_10207.gpx', null, customLayerDevice_10207).on('ready', function() {

    });

    var gpxTimeLayerDevice_10207 = L.timeDimension.layer.geoJson(gpxLayerDevice_10207, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10207 =L.layerGroup([markerDevice_10207,gpxTimeLayerDevice_10207]);

    
    var iconDevice_10208 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10208=L.marker([22.3763,114.187], {icon: iconDevice_10208}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10208<br>Started: 2017-06-21 16:16:23<br>Ended: 2017-06-22 04:55:35<br>Moving time: 02:17:59<br>Stopped time: 10:21:13<br>Points: 12<br>Length 2D: 8.602km<br>Avg distance between points: 716.87m");
    var myStyleDevice_10208 = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10208 = {
    radius: 5,
    fillColor: "#FFFF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10208 = L.geoJson(null,{

    style: myStyleDevice_10208,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10208);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10208<br>Started: 2017-06-21 16:16:23<br>Ended: 2017-06-22 04:55:35<br>Moving time: 02:17:59<br>Stopped time: 10:21:13<br>Points: 12<br>Length 2D: 8.602km<br>Avg distance between points: 716.87m")
    }});
    var gpxLayerDevice_10208 = omnivore.gpx('data/Device_10208.gpx', null, customLayerDevice_10208).on('ready', function() {

    });

    var gpxTimeLayerDevice_10208 = L.timeDimension.layer.geoJson(gpxLayerDevice_10208, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10208 =L.layerGroup([markerDevice_10208,gpxTimeLayerDevice_10208]);

    
    var iconDevice_10209 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10209=L.marker([22.3951,114.205], {icon: iconDevice_10209}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10209<br>Started: 2017-06-21 21:20:15<br>Ended: 2017-06-22 07:25:48<br>Moving time: 02:15:01<br>Stopped time: 07:50:32<br>Points: 9<br>Length 2D: 8.726km<br>Avg distance between points: 969.53m");
    var myStyleDevice_10209 = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10209 = {
    radius: 5,
    fillColor: "#808000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10209 = L.geoJson(null,{

    style: myStyleDevice_10209,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10209);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10209<br>Started: 2017-06-21 21:20:15<br>Ended: 2017-06-22 07:25:48<br>Moving time: 02:15:01<br>Stopped time: 07:50:32<br>Points: 9<br>Length 2D: 8.726km<br>Avg distance between points: 969.53m")
    }});
    var gpxLayerDevice_10209 = omnivore.gpx('data/Device_10209.gpx', null, customLayerDevice_10209).on('ready', function() {

    });

    var gpxTimeLayerDevice_10209 = L.timeDimension.layer.geoJson(gpxLayerDevice_10209, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10209 =L.layerGroup([markerDevice_10209,gpxTimeLayerDevice_10209]);

    
    var iconDevice_10210 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10210=L.marker([22.4225,114.229], {icon: iconDevice_10210}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10210<br>Started: 2017-06-21 09:56:12<br>Ended: 2017-06-21 14:00:40<br>Moving time: n/a<br>Stopped time: 04:04:28<br>Points: 2<br>Length 2D: 0.000km<br>Avg distance between points: 0.00m");
    var myStyleDevice_10210 = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10210 = {
    radius: 5,
    fillColor: "#00FF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10210 = L.geoJson(null,{

    style: myStyleDevice_10210,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10210);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10210<br>Started: 2017-06-21 09:56:12<br>Ended: 2017-06-21 14:00:40<br>Moving time: n/a<br>Stopped time: 04:04:28<br>Points: 2<br>Length 2D: 0.000km<br>Avg distance between points: 0.00m")
    }});
    var gpxLayerDevice_10210 = omnivore.gpx('data/Device_10210.gpx', null, customLayerDevice_10210).on('ready', function() {

    });

    var gpxTimeLayerDevice_10210 = L.timeDimension.layer.geoJson(gpxLayerDevice_10210, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10210 =L.layerGroup([markerDevice_10210,gpxTimeLayerDevice_10210]);

    
    var iconDevice_10301 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10301=L.marker([22.3542,114.25], {icon: iconDevice_10301}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment ID : 10301<br>Started: 2017-06-28 21:02:45<br>Ended: 2017-06-30 07:03:57<br>Moving time: n/a<br>Stopped time: 34:01:12<br>Points: 22<br>Length 2D: 2.973km<br>Avg distance between points: 135.12m");
    var myStyleDevice_10301 = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10301 = {
    radius: 5,
    fillColor: "#008000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10301 = L.geoJson(null,{

    style: myStyleDevice_10301,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10301);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment ID : 10301<br>Started: 2017-06-28 21:02:45<br>Ended: 2017-06-30 07:03:57<br>Moving time: n/a<br>Stopped time: 34:01:12<br>Points: 22<br>Length 2D: 2.973km<br>Avg distance between points: 135.12m")
    }});
    var gpxLayerDevice_10301 = omnivore.gpx('data/Device_10301.gpx', null, customLayerDevice_10301).on('ready', function() {

    });

    var gpxTimeLayerDevice_10301 = L.timeDimension.layer.geoJson(gpxLayerDevice_10301, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10301 =L.layerGroup([markerDevice_10301,gpxTimeLayerDevice_10301]);

    
    var iconDevice_10303 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10303=L.marker([22.3545,114.251], {icon: iconDevice_10303}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment ID : 10303<br>Started: 2017-06-28 21:03:44<br>Ended: 2017-07-11 12:49:03<br>Moving time: n/a<br>Stopped time: 303:45:19<br>Points: 247<br>Length 2D: 12.095km<br>Avg distance between points: 48.97m");
    var myStyleDevice_10303 = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10303 = {
    radius: 5,
    fillColor: "#008080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10303 = L.geoJson(null,{

    style: myStyleDevice_10303,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10303);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment ID : 10303<br>Started: 2017-06-28 21:03:44<br>Ended: 2017-07-11 12:49:03<br>Moving time: n/a<br>Stopped time: 303:45:19<br>Points: 247<br>Length 2D: 12.095km<br>Avg distance between points: 48.97m")
    }});
    var gpxLayerDevice_10303 = omnivore.gpx('data/Device_10303.gpx', null, customLayerDevice_10303).on('ready', function() {

    });

    var gpxTimeLayerDevice_10303 = L.timeDimension.layer.geoJson(gpxLayerDevice_10303, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10303 =L.layerGroup([markerDevice_10303,gpxTimeLayerDevice_10303]);

    
    var iconDevice_10305 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10305=L.marker([22.3558,114.25], {icon: iconDevice_10305}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment ID : 10305<br>Started: 2017-06-28 20:30:43<br>Ended: 2017-07-01 02:07:55<br>Moving time: n/a<br>Stopped time: 53:37:12<br>Points: 35<br>Length 2D: 3.169km<br>Avg distance between points: 90.53m");
    var myStyleDevice_10305 = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10305 = {
    radius: 5,
    fillColor: "#0000FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10305 = L.geoJson(null,{

    style: myStyleDevice_10305,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10305);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment ID : 10305<br>Started: 2017-06-28 20:30:43<br>Ended: 2017-07-01 02:07:55<br>Moving time: n/a<br>Stopped time: 53:37:12<br>Points: 35<br>Length 2D: 3.169km<br>Avg distance between points: 90.53m")
    }});
    var gpxLayerDevice_10305 = omnivore.gpx('data/Device_10305.gpx', null, customLayerDevice_10305).on('ready', function() {

    });

    var gpxTimeLayerDevice_10305 = L.timeDimension.layer.geoJson(gpxLayerDevice_10305, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10305 =L.layerGroup([markerDevice_10305,gpxTimeLayerDevice_10305]);

    
    var iconDevice_10307 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10307=L.marker([22.3554,114.25], {icon: iconDevice_10307}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment ID : 10307<br>Started: 2017-06-28 20:25:04<br>Ended: 2017-06-30 07:31:21<br>Moving time: n/a<br>Stopped time: 35:06:17<br>Points: 18<br>Length 2D: 1.354km<br>Avg distance between points: 75.21m");
    var myStyleDevice_10307 = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10307 = {
    radius: 5,
    fillColor: "#000080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10307 = L.geoJson(null,{

    style: myStyleDevice_10307,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10307);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment ID : 10307<br>Started: 2017-06-28 20:25:04<br>Ended: 2017-06-30 07:31:21<br>Moving time: n/a<br>Stopped time: 35:06:17<br>Points: 18<br>Length 2D: 1.354km<br>Avg distance between points: 75.21m")
    }});
    var gpxLayerDevice_10307 = omnivore.gpx('data/Device_10307.gpx', null, customLayerDevice_10307).on('ready', function() {

    });

    var gpxTimeLayerDevice_10307 = L.timeDimension.layer.geoJson(gpxLayerDevice_10307, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10307 =L.layerGroup([markerDevice_10307,gpxTimeLayerDevice_10307]);

    
    var iconDevice_10308 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10308=L.marker([22.3555,114.247], {icon: iconDevice_10308}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment ID : 10308<br>Started: 2017-07-02 12:43:47<br>Ended: 2017-07-11 12:05:27<br>Moving time: n/a<br>Stopped time: 215:21:40<br>Points: 163<br>Length 2D: 4.884km<br>Avg distance between points: 29.96m");
    var myStyleDevice_10308 = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10308 = {
    radius: 5,
    fillColor: "#FF00FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10308 = L.geoJson(null,{

    style: myStyleDevice_10308,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10308);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment ID : 10308<br>Started: 2017-07-02 12:43:47<br>Ended: 2017-07-11 12:05:27<br>Moving time: n/a<br>Stopped time: 215:21:40<br>Points: 163<br>Length 2D: 4.884km<br>Avg distance between points: 29.96m")
    }});
    var gpxLayerDevice_10308 = omnivore.gpx('data/Device_10308.gpx', null, customLayerDevice_10308).on('ready', function() {

    });

    var gpxTimeLayerDevice_10308 = L.timeDimension.layer.geoJson(gpxLayerDevice_10308, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10308 =L.layerGroup([markerDevice_10308,gpxTimeLayerDevice_10308]);

    
    var iconDevice_10309 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10309=L.marker([22.355,114.25], {icon: iconDevice_10309}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment ID : 10309<br>Started: 2017-06-28 20:47:12<br>Ended: 2017-06-30 08:30:35<br>Moving time: n/a<br>Stopped time: 35:43:23<br>Points: 25<br>Length 2D: 1.114km<br>Avg distance between points: 44.56m");
    var myStyleDevice_10309 = {
    "color": "#800080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10309 = {
    radius: 5,
    fillColor: "#800080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10309 = L.geoJson(null,{

    style: myStyleDevice_10309,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10309);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment ID : 10309<br>Started: 2017-06-28 20:47:12<br>Ended: 2017-06-30 08:30:35<br>Moving time: n/a<br>Stopped time: 35:43:23<br>Points: 25<br>Length 2D: 1.114km<br>Avg distance between points: 44.56m")
    }});
    var gpxLayerDevice_10309 = omnivore.gpx('data/Device_10309.gpx', null, customLayerDevice_10309).on('ready', function() {

    });

    var gpxTimeLayerDevice_10309 = L.timeDimension.layer.geoJson(gpxLayerDevice_10309, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10309 =L.layerGroup([markerDevice_10309,gpxTimeLayerDevice_10309]);

    
    var iconDevice_10310 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10310=L.marker([22.3549,114.251], {icon: iconDevice_10310}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment ID : 10310<br>Started: 2017-06-28 21:41:17<br>Ended: 2017-07-11 12:42:43<br>Moving time: n/a<br>Stopped time: 303:01:26<br>Points: 356<br>Length 2D: 16.336km<br>Avg distance between points: 45.89m");
    var myStyleDevice_10310 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10310 = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10310 = L.geoJson(null,{

    style: myStyleDevice_10310,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10310);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment ID : 10310<br>Started: 2017-06-28 21:41:17<br>Ended: 2017-07-11 12:42:43<br>Moving time: n/a<br>Stopped time: 303:01:26<br>Points: 356<br>Length 2D: 16.336km<br>Avg distance between points: 45.89m")
    }});
    var gpxLayerDevice_10310 = omnivore.gpx('data/Device_10310.gpx', null, customLayerDevice_10310).on('ready', function() {

    });

    var gpxTimeLayerDevice_10310 = L.timeDimension.layer.geoJson(gpxLayerDevice_10310, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10310 =L.layerGroup([markerDevice_10310,gpxTimeLayerDevice_10310]);

    
    var iconDevice_10401 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10401=L.marker([22.453,114.029], {icon: iconDevice_10401}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10401<br>Started: 2017-06-29 16:06:07<br>Ended: 2017-07-11 12:21:37<br>Moving time: 08:17:27<br>Stopped time: 275:58:03<br>Points: 667<br>Length 2D: 36.191km<br>Avg distance between points: 54.26m");
    var myStyleDevice_10401 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10401 = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10401 = L.geoJson(null,{

    style: myStyleDevice_10401,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10401);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10401<br>Started: 2017-06-29 16:06:07<br>Ended: 2017-07-11 12:21:37<br>Moving time: 08:17:27<br>Stopped time: 275:58:03<br>Points: 667<br>Length 2D: 36.191km<br>Avg distance between points: 54.26m")
    }});
    var gpxLayerDevice_10401 = omnivore.gpx('data/Device_10401.gpx', null, customLayerDevice_10401).on('ready', function() {

    });

    var gpxTimeLayerDevice_10401 = L.timeDimension.layer.geoJson(gpxLayerDevice_10401, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10401 =L.layerGroup([markerDevice_10401,gpxTimeLayerDevice_10401]);

    
    var iconDevice_10402 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10402=L.marker([22.4525,114.029], {icon: iconDevice_10402}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10402<br>Started: 2017-06-30 02:48:09<br>Ended: 2017-07-01 05:27:02<br>Moving time: n/a<br>Stopped time: 26:38:53<br>Points: 22<br>Length 2D: 0.566km<br>Avg distance between points: 25.74m");
    var myStyleDevice_10402 = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10402 = {
    radius: 5,
    fillColor: "#808080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10402 = L.geoJson(null,{

    style: myStyleDevice_10402,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10402);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10402<br>Started: 2017-06-30 02:48:09<br>Ended: 2017-07-01 05:27:02<br>Moving time: n/a<br>Stopped time: 26:38:53<br>Points: 22<br>Length 2D: 0.566km<br>Avg distance between points: 25.74m")
    }});
    var gpxLayerDevice_10402 = omnivore.gpx('data/Device_10402.gpx', null, customLayerDevice_10402).on('ready', function() {

    });

    var gpxTimeLayerDevice_10402 = L.timeDimension.layer.geoJson(gpxLayerDevice_10402, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10402 =L.layerGroup([markerDevice_10402,gpxTimeLayerDevice_10402]);

    
    var iconDevice_10403 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10403=L.marker([22.4534,114.03], {icon: iconDevice_10403}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10403<br>Started: 2017-06-29 16:05:21<br>Ended: 2017-07-11 12:15:59<br>Moving time: 01:14:10<br>Stopped time: 282:56:28<br>Points: 668<br>Length 2D: 32.355km<br>Avg distance between points: 48.44m");
    var myStyleDevice_10403 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10403 = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10403 = L.geoJson(null,{

    style: myStyleDevice_10403,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10403);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10403<br>Started: 2017-06-29 16:05:21<br>Ended: 2017-07-11 12:15:59<br>Moving time: 01:14:10<br>Stopped time: 282:56:28<br>Points: 668<br>Length 2D: 32.355km<br>Avg distance between points: 48.44m")
    }});
    var gpxLayerDevice_10403 = omnivore.gpx('data/Device_10403.gpx', null, customLayerDevice_10403).on('ready', function() {

    });

    var gpxTimeLayerDevice_10403 = L.timeDimension.layer.geoJson(gpxLayerDevice_10403, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10403 =L.layerGroup([markerDevice_10403,gpxTimeLayerDevice_10403]);

    
    var iconDevice_10404 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10404=L.marker([22.4434,114.026], {icon: iconDevice_10404}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10404<br>Started: 2017-07-03 12:22:26<br>Ended: 2017-07-11 03:37:43<br>Moving time: 01:03:23<br>Stopped time: 182:11:54<br>Points: 94<br>Length 2D: 7.947km<br>Avg distance between points: 84.55m");
    var myStyleDevice_10404 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10404 = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10404 = L.geoJson(null,{

    style: myStyleDevice_10404,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10404);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10404<br>Started: 2017-07-03 12:22:26<br>Ended: 2017-07-11 03:37:43<br>Moving time: 01:03:23<br>Stopped time: 182:11:54<br>Points: 94<br>Length 2D: 7.947km<br>Avg distance between points: 84.55m")
    }});
    var gpxLayerDevice_10404 = omnivore.gpx('data/Device_10404.gpx', null, customLayerDevice_10404).on('ready', function() {

    });

    var gpxTimeLayerDevice_10404 = L.timeDimension.layer.geoJson(gpxLayerDevice_10404, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10404 =L.layerGroup([markerDevice_10404,gpxTimeLayerDevice_10404]);

    
    var iconDevice_10407 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10407=L.marker([22.4431,114.023], {icon: iconDevice_10407}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10407<br>Started: 2017-06-29 10:11:49<br>Ended: 2017-06-30 22:54:21<br>Moving time: 00:01:49<br>Stopped time: 36:40:43<br>Points: 25<br>Length 2D: 2.443km<br>Avg distance between points: 97.70m");
    var myStyleDevice_10407 = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10407 = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10407 = L.geoJson(null,{

    style: myStyleDevice_10407,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10407);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10407<br>Started: 2017-06-29 10:11:49<br>Ended: 2017-06-30 22:54:21<br>Moving time: 00:01:49<br>Stopped time: 36:40:43<br>Points: 25<br>Length 2D: 2.443km<br>Avg distance between points: 97.70m")
    }});
    var gpxLayerDevice_10407 = omnivore.gpx('data/Device_10407.gpx', null, customLayerDevice_10407).on('ready', function() {

    });

    var gpxTimeLayerDevice_10407 = L.timeDimension.layer.geoJson(gpxLayerDevice_10407, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10407 =L.layerGroup([markerDevice_10407,gpxTimeLayerDevice_10407]);

    
    var iconDevice_10408 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10408=L.marker([22.4539,114.035], {icon: iconDevice_10408}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10408<br>Started: 2017-06-29 16:28:05<br>Ended: 2017-07-01 14:18:14<br>Moving time: 00:24:06<br>Stopped time: 45:26:03<br>Points: 107<br>Length 2D: 4.720km<br>Avg distance between points: 44.11m");
    var myStyleDevice_10408 = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10408 = {
    radius: 5,
    fillColor: "#FFFF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10408 = L.geoJson(null,{

    style: myStyleDevice_10408,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10408);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10408<br>Started: 2017-06-29 16:28:05<br>Ended: 2017-07-01 14:18:14<br>Moving time: 00:24:06<br>Stopped time: 45:26:03<br>Points: 107<br>Length 2D: 4.720km<br>Avg distance between points: 44.11m")
    }});
    var gpxLayerDevice_10408 = omnivore.gpx('data/Device_10408.gpx', null, customLayerDevice_10408).on('ready', function() {

    });

    var gpxTimeLayerDevice_10408 = L.timeDimension.layer.geoJson(gpxLayerDevice_10408, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10408 =L.layerGroup([markerDevice_10408,gpxTimeLayerDevice_10408]);

    
    var iconDevice_10409 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10409=L.marker([22.4535,114.03], {icon: iconDevice_10409}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10409<br>Started: 2017-06-29 16:06:10<br>Ended: 2017-07-11 12:03:41<br>Moving time: 00:12:22<br>Stopped time: 283:45:09<br>Points: 617<br>Length 2D: 25.685km<br>Avg distance between points: 41.63m");
    var myStyleDevice_10409 = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10409 = {
    radius: 5,
    fillColor: "#808000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10409 = L.geoJson(null,{

    style: myStyleDevice_10409,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10409);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10409<br>Started: 2017-06-29 16:06:10<br>Ended: 2017-07-11 12:03:41<br>Moving time: 00:12:22<br>Stopped time: 283:45:09<br>Points: 617<br>Length 2D: 25.685km<br>Avg distance between points: 41.63m")
    }});
    var gpxLayerDevice_10409 = omnivore.gpx('data/Device_10409.gpx', null, customLayerDevice_10409).on('ready', function() {

    });

    var gpxTimeLayerDevice_10409 = L.timeDimension.layer.geoJson(gpxLayerDevice_10409, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10409 =L.layerGroup([markerDevice_10409,gpxTimeLayerDevice_10409]);

    
    var iconDevice_10410 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10410=L.marker([22.4423,114.025], {icon: iconDevice_10410}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10410<br>Started: 2017-07-01 22:38:57<br>Ended: 2017-07-03 17:24:26<br>Moving time: 02:29:32<br>Stopped time: 40:15:57<br>Points: 17<br>Length 2D: 9.770km<br>Avg distance between points: 574.69m");
    var myStyleDevice_10410 = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10410 = {
    radius: 5,
    fillColor: "#00FF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10410 = L.geoJson(null,{

    style: myStyleDevice_10410,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10410);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10410<br>Started: 2017-07-01 22:38:57<br>Ended: 2017-07-03 17:24:26<br>Moving time: 02:29:32<br>Stopped time: 40:15:57<br>Points: 17<br>Length 2D: 9.770km<br>Avg distance between points: 574.69m")
    }});
    var gpxLayerDevice_10410 = omnivore.gpx('data/Device_10410.gpx', null, customLayerDevice_10410).on('ready', function() {

    });

    var gpxTimeLayerDevice_10410 = L.timeDimension.layer.geoJson(gpxLayerDevice_10410, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10410 =L.layerGroup([markerDevice_10410,gpxTimeLayerDevice_10410]);

    
    var iconDevice_10501 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10501=L.marker([22.5103,114.134], {icon: iconDevice_10501}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10501<br>Started: 2017-07-03 17:04:18<br>Ended: 2017-07-11 12:30:58<br>Moving time: n/a<br>Stopped time: 187:26:40<br>Points: 151<br>Length 2D: 4.955km<br>Avg distance between points: 32.81m");
    var myStyleDevice_10501 = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10501 = {
    radius: 5,
    fillColor: "#008000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10501 = L.geoJson(null,{

    style: myStyleDevice_10501,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10501);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10501<br>Started: 2017-07-03 17:04:18<br>Ended: 2017-07-11 12:30:58<br>Moving time: n/a<br>Stopped time: 187:26:40<br>Points: 151<br>Length 2D: 4.955km<br>Avg distance between points: 32.81m")
    }});
    var gpxLayerDevice_10501 = omnivore.gpx('data/Device_10501.gpx', null, customLayerDevice_10501).on('ready', function() {

    });

    var gpxTimeLayerDevice_10501 = L.timeDimension.layer.geoJson(gpxLayerDevice_10501, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10501 =L.layerGroup([markerDevice_10501,gpxTimeLayerDevice_10501]);

    
    var iconDevice_10503 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10503=L.marker([22.5077,114.134], {icon: iconDevice_10503}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10503<br>Started: 2017-07-03 16:22:15<br>Ended: 2017-07-07 10:56:33<br>Moving time: 05:48:03<br>Stopped time: 84:46:15<br>Points: 114<br>Length 2D: 16.084km<br>Avg distance between points: 141.09m");
    var myStyleDevice_10503 = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10503 = {
    radius: 5,
    fillColor: "#008080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10503 = L.geoJson(null,{

    style: myStyleDevice_10503,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10503);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10503<br>Started: 2017-07-03 16:22:15<br>Ended: 2017-07-07 10:56:33<br>Moving time: 05:48:03<br>Stopped time: 84:46:15<br>Points: 114<br>Length 2D: 16.084km<br>Avg distance between points: 141.09m")
    }});
    var gpxLayerDevice_10503 = omnivore.gpx('data/Device_10503.gpx', null, customLayerDevice_10503).on('ready', function() {

    });

    var gpxTimeLayerDevice_10503 = L.timeDimension.layer.geoJson(gpxLayerDevice_10503, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10503 =L.layerGroup([markerDevice_10503,gpxTimeLayerDevice_10503]);

    
    var iconDevice_10504 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10504=L.marker([22.509,114.134], {icon: iconDevice_10504}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10504<br>Started: 2017-07-03 16:09:48<br>Ended: 2017-07-05 13:33:05<br>Moving time: 03:39:55<br>Stopped time: 41:43:22<br>Points: 47<br>Length 2D: 18.223km<br>Avg distance between points: 387.72m");
    var myStyleDevice_10504 = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10504 = {
    radius: 5,
    fillColor: "#0000FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10504 = L.geoJson(null,{

    style: myStyleDevice_10504,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10504);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10504<br>Started: 2017-07-03 16:09:48<br>Ended: 2017-07-05 13:33:05<br>Moving time: 03:39:55<br>Stopped time: 41:43:22<br>Points: 47<br>Length 2D: 18.223km<br>Avg distance between points: 387.72m")
    }});
    var gpxLayerDevice_10504 = omnivore.gpx('data/Device_10504.gpx', null, customLayerDevice_10504).on('ready', function() {

    });

    var gpxTimeLayerDevice_10504 = L.timeDimension.layer.geoJson(gpxLayerDevice_10504, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10504 =L.layerGroup([markerDevice_10504,gpxTimeLayerDevice_10504]);

    
    var iconDevice_10505 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10505=L.marker([22.5094,114.134], {icon: iconDevice_10505}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10505<br>Started: 2017-07-03 18:47:13<br>Ended: 2017-07-05 07:29:15<br>Moving time: 00:49:42<br>Stopped time: 35:52:20<br>Points: 70<br>Length 2D: 8.707km<br>Avg distance between points: 124.39m");
    var myStyleDevice_10505 = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10505 = {
    radius: 5,
    fillColor: "#000080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10505 = L.geoJson(null,{

    style: myStyleDevice_10505,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10505);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10505<br>Started: 2017-07-03 18:47:13<br>Ended: 2017-07-05 07:29:15<br>Moving time: 00:49:42<br>Stopped time: 35:52:20<br>Points: 70<br>Length 2D: 8.707km<br>Avg distance between points: 124.39m")
    }});
    var gpxLayerDevice_10505 = omnivore.gpx('data/Device_10505.gpx', null, customLayerDevice_10505).on('ready', function() {

    });

    var gpxTimeLayerDevice_10505 = L.timeDimension.layer.geoJson(gpxLayerDevice_10505, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10505 =L.layerGroup([markerDevice_10505,gpxTimeLayerDevice_10505]);

    
    var iconDevice_10506 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10506=L.marker([22.5187,114.115], {icon: iconDevice_10506}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10506<br>Started: 2017-07-03 16:36:59<br>Ended: 2017-07-03 20:30:40<br>Moving time: 01:37:38<br>Stopped time: 02:16:03<br>Points: 17<br>Length 2D: 4.296km<br>Avg distance between points: 252.69m");
    var myStyleDevice_10506 = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10506 = {
    radius: 5,
    fillColor: "#FF00FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10506 = L.geoJson(null,{

    style: myStyleDevice_10506,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10506);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10506<br>Started: 2017-07-03 16:36:59<br>Ended: 2017-07-03 20:30:40<br>Moving time: 01:37:38<br>Stopped time: 02:16:03<br>Points: 17<br>Length 2D: 4.296km<br>Avg distance between points: 252.69m")
    }});
    var gpxLayerDevice_10506 = omnivore.gpx('data/Device_10506.gpx', null, customLayerDevice_10506).on('ready', function() {

    });

    var gpxTimeLayerDevice_10506 = L.timeDimension.layer.geoJson(gpxLayerDevice_10506, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10506 =L.layerGroup([markerDevice_10506,gpxTimeLayerDevice_10506]);

    
    var iconDevice_10507 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10507=L.marker([22.508,114.135], {icon: iconDevice_10507}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10507<br>Started: 2017-07-03 16:04:20<br>Ended: 2017-07-05 15:14:41<br>Moving time: 09:57:51<br>Stopped time: 37:12:30<br>Points: 86<br>Length 2D: 24.549km<br>Avg distance between points: 285.45m");
    var myStyleDevice_10507 = {
    "color": "#800080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10507 = {
    radius: 5,
    fillColor: "#800080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10507 = L.geoJson(null,{

    style: myStyleDevice_10507,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10507);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10507<br>Started: 2017-07-03 16:04:20<br>Ended: 2017-07-05 15:14:41<br>Moving time: 09:57:51<br>Stopped time: 37:12:30<br>Points: 86<br>Length 2D: 24.549km<br>Avg distance between points: 285.45m")
    }});
    var gpxLayerDevice_10507 = omnivore.gpx('data/Device_10507.gpx', null, customLayerDevice_10507).on('ready', function() {

    });

    var gpxTimeLayerDevice_10507 = L.timeDimension.layer.geoJson(gpxLayerDevice_10507, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10507 =L.layerGroup([markerDevice_10507,gpxTimeLayerDevice_10507]);

    
    var iconDevice_10508 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10508=L.marker([22.5075,114.135], {icon: iconDevice_10508}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10508<br>Started: 2017-07-03 16:03:07<br>Ended: 2017-07-08 01:06:03<br>Moving time: 05:42:01<br>Stopped time: 99:20:55<br>Points: 137<br>Length 2D: 22.033km<br>Avg distance between points: 160.83m");
    var myStyleDevice_10508 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10508 = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10508 = L.geoJson(null,{

    style: myStyleDevice_10508,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10508);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10508<br>Started: 2017-07-03 16:03:07<br>Ended: 2017-07-08 01:06:03<br>Moving time: 05:42:01<br>Stopped time: 99:20:55<br>Points: 137<br>Length 2D: 22.033km<br>Avg distance between points: 160.83m")
    }});
    var gpxLayerDevice_10508 = omnivore.gpx('data/Device_10508.gpx', null, customLayerDevice_10508).on('ready', function() {

    });

    var gpxTimeLayerDevice_10508 = L.timeDimension.layer.geoJson(gpxLayerDevice_10508, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10508 =L.layerGroup([markerDevice_10508,gpxTimeLayerDevice_10508]);

    
    var iconDevice_10509 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10509=L.marker([22.5131,114.133], {icon: iconDevice_10509}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10509<br>Started: 2017-07-03 16:04:41<br>Ended: 2017-07-11 11:35:38<br>Moving time: 06:30:21<br>Stopped time: 181:00:36<br>Points: 191<br>Length 2D: 29.925km<br>Avg distance between points: 156.68m");
    var myStyleDevice_10509 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10509 = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10509 = L.geoJson(null,{

    style: myStyleDevice_10509,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10509);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10509<br>Started: 2017-07-03 16:04:41<br>Ended: 2017-07-11 11:35:38<br>Moving time: 06:30:21<br>Stopped time: 181:00:36<br>Points: 191<br>Length 2D: 29.925km<br>Avg distance between points: 156.68m")
    }});
    var gpxLayerDevice_10509 = omnivore.gpx('data/Device_10509.gpx', null, customLayerDevice_10509).on('ready', function() {

    });

    var gpxTimeLayerDevice_10509 = L.timeDimension.layer.geoJson(gpxLayerDevice_10509, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10509 =L.layerGroup([markerDevice_10509,gpxTimeLayerDevice_10509]);

    
    var iconDevice_10510 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10510=L.marker([22.5133,114.133], {icon: iconDevice_10510}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10510<br>Started: 2017-07-03 16:07:27<br>Ended: 2017-07-11 11:50:48<br>Moving time: 10:05:29<br>Stopped time: 177:37:52<br>Points: 205<br>Length 2D: 27.924km<br>Avg distance between points: 136.22m");
    var myStyleDevice_10510 = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10510 = {
    radius: 5,
    fillColor: "#808080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10510 = L.geoJson(null,{

    style: myStyleDevice_10510,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10510);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10510<br>Started: 2017-07-03 16:07:27<br>Ended: 2017-07-11 11:50:48<br>Moving time: 10:05:29<br>Stopped time: 177:37:52<br>Points: 205<br>Length 2D: 27.924km<br>Avg distance between points: 136.22m")
    }});
    var gpxLayerDevice_10510 = omnivore.gpx('data/Device_10510.gpx', null, customLayerDevice_10510).on('ready', function() {

    });

    var gpxTimeLayerDevice_10510 = L.timeDimension.layer.geoJson(gpxLayerDevice_10510, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10510 =L.layerGroup([markerDevice_10510,gpxTimeLayerDevice_10510]);

    
    var iconDevice_10601 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10601=L.marker([22.4581,113.994], {icon: iconDevice_10601}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10601<br>Started: 2017-07-04 15:07:44<br>Ended: 2017-07-06 21:57:25<br>Moving time: 01:51:02<br>Stopped time: 52:58:39<br>Points: 59<br>Length 2D: 5.254km<br>Avg distance between points: 89.05m");
    var myStyleDevice_10601 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10601 = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10601 = L.geoJson(null,{

    style: myStyleDevice_10601,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10601);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10601<br>Started: 2017-07-04 15:07:44<br>Ended: 2017-07-06 21:57:25<br>Moving time: 01:51:02<br>Stopped time: 52:58:39<br>Points: 59<br>Length 2D: 5.254km<br>Avg distance between points: 89.05m")
    }});
    var gpxLayerDevice_10601 = omnivore.gpx('data/Device_10601.gpx', null, customLayerDevice_10601).on('ready', function() {

    });

    var gpxTimeLayerDevice_10601 = L.timeDimension.layer.geoJson(gpxLayerDevice_10601, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10601 =L.layerGroup([markerDevice_10601,gpxTimeLayerDevice_10601]);

    
    var iconDevice_10602 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10602=L.marker([22.4566,113.995], {icon: iconDevice_10602}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10602<br>Started: 2017-07-04 15:03:52<br>Ended: 2017-07-11 11:42:56<br>Moving time: 01:49:47<br>Stopped time: 162:49:17<br>Points: 180<br>Length 2D: 11.909km<br>Avg distance between points: 66.16m");
    var myStyleDevice_10602 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10602 = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10602 = L.geoJson(null,{

    style: myStyleDevice_10602,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10602);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10602<br>Started: 2017-07-04 15:03:52<br>Ended: 2017-07-11 11:42:56<br>Moving time: 01:49:47<br>Stopped time: 162:49:17<br>Points: 180<br>Length 2D: 11.909km<br>Avg distance between points: 66.16m")
    }});
    var gpxLayerDevice_10602 = omnivore.gpx('data/Device_10602.gpx', null, customLayerDevice_10602).on('ready', function() {

    });

    var gpxTimeLayerDevice_10602 = L.timeDimension.layer.geoJson(gpxLayerDevice_10602, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10602 =L.layerGroup([markerDevice_10602,gpxTimeLayerDevice_10602]);

    
    var iconDevice_10603 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10603=L.marker([22.4548,113.996], {icon: iconDevice_10603}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10603<br>Started: 2017-07-04 17:17:16<br>Ended: 2017-07-05 02:55:27<br>Moving time: 01:08:12<br>Stopped time: 08:29:59<br>Points: 8<br>Length 2D: 4.046km<br>Avg distance between points: 505.79m");
    var myStyleDevice_10603 = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10603 = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10603 = L.geoJson(null,{

    style: myStyleDevice_10603,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10603);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10603<br>Started: 2017-07-04 17:17:16<br>Ended: 2017-07-05 02:55:27<br>Moving time: 01:08:12<br>Stopped time: 08:29:59<br>Points: 8<br>Length 2D: 4.046km<br>Avg distance between points: 505.79m")
    }});
    var gpxLayerDevice_10603 = omnivore.gpx('data/Device_10603.gpx', null, customLayerDevice_10603).on('ready', function() {

    });

    var gpxTimeLayerDevice_10603 = L.timeDimension.layer.geoJson(gpxLayerDevice_10603, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10603 =L.layerGroup([markerDevice_10603,gpxTimeLayerDevice_10603]);

    
    var iconDevice_10604 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10604=L.marker([22.4556,113.996], {icon: iconDevice_10604}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10604<br>Started: 2017-07-08 00:30:44<br>Ended: 2017-07-11 12:24:24<br>Moving time: 01:22:24<br>Stopped time: 82:31:16<br>Points: 68<br>Length 2D: 9.629km<br>Avg distance between points: 141.60m");
    var myStyleDevice_10604 = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10604 = {
    radius: 5,
    fillColor: "#FFFF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10604 = L.geoJson(null,{

    style: myStyleDevice_10604,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10604);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10604<br>Started: 2017-07-08 00:30:44<br>Ended: 2017-07-11 12:24:24<br>Moving time: 01:22:24<br>Stopped time: 82:31:16<br>Points: 68<br>Length 2D: 9.629km<br>Avg distance between points: 141.60m")
    }});
    var gpxLayerDevice_10604 = omnivore.gpx('data/Device_10604.gpx', null, customLayerDevice_10604).on('ready', function() {

    });

    var gpxTimeLayerDevice_10604 = L.timeDimension.layer.geoJson(gpxLayerDevice_10604, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10604 =L.layerGroup([markerDevice_10604,gpxTimeLayerDevice_10604]);

    
    var iconDevice_10605 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10605=L.marker([22.4505,114.0], {icon: iconDevice_10605}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10605<br>Started: 2017-07-04 09:17:50<br>Ended: 2017-07-04 14:07:04<br>Moving time: n/a<br>Stopped time: 04:49:14<br>Points: 3<br>Length 2D: 0.100km<br>Avg distance between points: 33.34m");
    var myStyleDevice_10605 = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10605 = {
    radius: 5,
    fillColor: "#808000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10605 = L.geoJson(null,{

    style: myStyleDevice_10605,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10605);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10605<br>Started: 2017-07-04 09:17:50<br>Ended: 2017-07-04 14:07:04<br>Moving time: n/a<br>Stopped time: 04:49:14<br>Points: 3<br>Length 2D: 0.100km<br>Avg distance between points: 33.34m")
    }});
    var gpxLayerDevice_10605 = omnivore.gpx('data/Device_10605.gpx', null, customLayerDevice_10605).on('ready', function() {

    });

    var gpxTimeLayerDevice_10605 = L.timeDimension.layer.geoJson(gpxLayerDevice_10605, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10605 =L.layerGroup([markerDevice_10605,gpxTimeLayerDevice_10605]);

    
    var iconDevice_10606 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10606=L.marker([22.4535,113.997], {icon: iconDevice_10606}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10606<br>Started: 2017-07-04 15:06:14<br>Ended: 2017-07-11 12:46:38<br>Moving time: n/a<br>Stopped time: 165:40:24<br>Points: 164<br>Length 2D: 7.519km<br>Avg distance between points: 45.85m");
    var myStyleDevice_10606 = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10606 = {
    radius: 5,
    fillColor: "#00FF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10606 = L.geoJson(null,{

    style: myStyleDevice_10606,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10606);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10606<br>Started: 2017-07-04 15:06:14<br>Ended: 2017-07-11 12:46:38<br>Moving time: n/a<br>Stopped time: 165:40:24<br>Points: 164<br>Length 2D: 7.519km<br>Avg distance between points: 45.85m")
    }});
    var gpxLayerDevice_10606 = omnivore.gpx('data/Device_10606.gpx', null, customLayerDevice_10606).on('ready', function() {

    });

    var gpxTimeLayerDevice_10606 = L.timeDimension.layer.geoJson(gpxLayerDevice_10606, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10606 =L.layerGroup([markerDevice_10606,gpxTimeLayerDevice_10606]);

    
    var iconDevice_10607 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10607=L.marker([22.4549,113.996], {icon: iconDevice_10607}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10607<br>Started: 2017-07-04 15:52:02<br>Ended: 2017-07-05 05:37:52<br>Moving time: 01:08:35<br>Stopped time: 12:37:15<br>Points: 11<br>Length 2D: 4.262km<br>Avg distance between points: 387.49m");
    var myStyleDevice_10607 = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10607 = {
    radius: 5,
    fillColor: "#008000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10607 = L.geoJson(null,{

    style: myStyleDevice_10607,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10607);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10607<br>Started: 2017-07-04 15:52:02<br>Ended: 2017-07-05 05:37:52<br>Moving time: 01:08:35<br>Stopped time: 12:37:15<br>Points: 11<br>Length 2D: 4.262km<br>Avg distance between points: 387.49m")
    }});
    var gpxLayerDevice_10607 = omnivore.gpx('data/Device_10607.gpx', null, customLayerDevice_10607).on('ready', function() {

    });

    var gpxTimeLayerDevice_10607 = L.timeDimension.layer.geoJson(gpxLayerDevice_10607, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10607 =L.layerGroup([markerDevice_10607,gpxTimeLayerDevice_10607]);

    
    var iconDevice_10608 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10608=L.marker([22.4497,113.999], {icon: iconDevice_10608}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10608<br>Started: 2017-07-05 03:29:45<br>Ended: 2017-07-06 02:48:30<br>Moving time: n/a<br>Stopped time: 23:18:45<br>Points: 6<br>Length 2D: 0.067km<br>Avg distance between points: 11.11m");
    var myStyleDevice_10608 = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10608 = {
    radius: 5,
    fillColor: "#008080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10608 = L.geoJson(null,{

    style: myStyleDevice_10608,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10608);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10608<br>Started: 2017-07-05 03:29:45<br>Ended: 2017-07-06 02:48:30<br>Moving time: n/a<br>Stopped time: 23:18:45<br>Points: 6<br>Length 2D: 0.067km<br>Avg distance between points: 11.11m")
    }});
    var gpxLayerDevice_10608 = omnivore.gpx('data/Device_10608.gpx', null, customLayerDevice_10608).on('ready', function() {

    });

    var gpxTimeLayerDevice_10608 = L.timeDimension.layer.geoJson(gpxLayerDevice_10608, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10608 =L.layerGroup([markerDevice_10608,gpxTimeLayerDevice_10608]);

    
    var iconDevice_10609 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10609=L.marker([22.4571,113.995], {icon: iconDevice_10609}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10609<br>Started: 2017-07-04 23:07:16<br>Ended: 2017-07-06 03:39:47<br>Moving time: 01:07:40<br>Stopped time: 27:24:51<br>Points: 26<br>Length 2D: 3.391km<br>Avg distance between points: 130.41m");
    var myStyleDevice_10609 = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10609 = {
    radius: 5,
    fillColor: "#0000FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10609 = L.geoJson(null,{

    style: myStyleDevice_10609,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10609);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10609<br>Started: 2017-07-04 23:07:16<br>Ended: 2017-07-06 03:39:47<br>Moving time: 01:07:40<br>Stopped time: 27:24:51<br>Points: 26<br>Length 2D: 3.391km<br>Avg distance between points: 130.41m")
    }});
    var gpxLayerDevice_10609 = omnivore.gpx('data/Device_10609.gpx', null, customLayerDevice_10609).on('ready', function() {

    });

    var gpxTimeLayerDevice_10609 = L.timeDimension.layer.geoJson(gpxLayerDevice_10609, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10609 =L.layerGroup([markerDevice_10609,gpxTimeLayerDevice_10609]);

    
    var iconDevice_10610 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10610=L.marker([22.4535,113.997], {icon: iconDevice_10610}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10610<br>Started: 2017-07-04 15:00:46<br>Ended: 2017-07-10 19:50:53<br>Moving time: 01:26:52<br>Stopped time: 147:23:15<br>Points: 71<br>Length 2D: 7.132km<br>Avg distance between points: 100.46m");
    var myStyleDevice_10610 = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10610 = {
    radius: 5,
    fillColor: "#000080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10610 = L.geoJson(null,{

    style: myStyleDevice_10610,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10610);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10610<br>Started: 2017-07-04 15:00:46<br>Ended: 2017-07-10 19:50:53<br>Moving time: 01:26:52<br>Stopped time: 147:23:15<br>Points: 71<br>Length 2D: 7.132km<br>Avg distance between points: 100.46m")
    }});
    var gpxLayerDevice_10610 = omnivore.gpx('data/Device_10610.gpx', null, customLayerDevice_10610).on('ready', function() {

    });

    var gpxTimeLayerDevice_10610 = L.timeDimension.layer.geoJson(gpxLayerDevice_10610, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10610 =L.layerGroup([markerDevice_10610,gpxTimeLayerDevice_10610]);

    
    var iconDevice_10701 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10701=L.marker([22.301,114.225], {icon: iconDevice_10701}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10701<br>Started: 2017-07-10 09:01:19<br>Ended: 2017-07-11 11:39:40<br>Moving time: 01:09:47<br>Stopped time: 25:28:34<br>Points: 24<br>Length 2D: 6.023km<br>Avg distance between points: 250.98m");
    var myStyleDevice_10701 = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10701 = {
    radius: 5,
    fillColor: "#FF00FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10701 = L.geoJson(null,{

    style: myStyleDevice_10701,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10701);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10701<br>Started: 2017-07-10 09:01:19<br>Ended: 2017-07-11 11:39:40<br>Moving time: 01:09:47<br>Stopped time: 25:28:34<br>Points: 24<br>Length 2D: 6.023km<br>Avg distance between points: 250.98m")
    }});
    var gpxLayerDevice_10701 = omnivore.gpx('data/Device_10701.gpx', null, customLayerDevice_10701).on('ready', function() {

    });

    var gpxTimeLayerDevice_10701 = L.timeDimension.layer.geoJson(gpxLayerDevice_10701, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10701 =L.layerGroup([markerDevice_10701,gpxTimeLayerDevice_10701]);

    
    var iconDevice_10702 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10702=L.marker([22.3144,114.234], {icon: iconDevice_10702}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10702<br>Started: 2017-07-08 09:50:35<br>Ended: 2017-07-08 13:55:13<br>Moving time: 00:39:15<br>Stopped time: 03:25:23<br>Points: 6<br>Length 2D: 2.869km<br>Avg distance between points: 478.15m");
    var myStyleDevice_10702 = {
    "color": "#800080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10702 = {
    radius: 5,
    fillColor: "#800080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10702 = L.geoJson(null,{

    style: myStyleDevice_10702,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10702);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10702<br>Started: 2017-07-08 09:50:35<br>Ended: 2017-07-08 13:55:13<br>Moving time: 00:39:15<br>Stopped time: 03:25:23<br>Points: 6<br>Length 2D: 2.869km<br>Avg distance between points: 478.15m")
    }});
    var gpxLayerDevice_10702 = omnivore.gpx('data/Device_10702.gpx', null, customLayerDevice_10702).on('ready', function() {

    });

    var gpxTimeLayerDevice_10702 = L.timeDimension.layer.geoJson(gpxLayerDevice_10702, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10702 =L.layerGroup([markerDevice_10702,gpxTimeLayerDevice_10702]);

    
    var iconDevice_10703 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10703=L.marker([22.2963,114.227], {icon: iconDevice_10703}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10703<br>Started: 2017-07-08 19:45:04<br>Ended: 2017-07-11 03:11:15<br>Moving time: 03:49:42<br>Stopped time: 51:36:29<br>Points: 35<br>Length 2D: 25.740km<br>Avg distance between points: 735.44m");
    var myStyleDevice_10703 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10703 = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10703 = L.geoJson(null,{

    style: myStyleDevice_10703,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10703);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10703<br>Started: 2017-07-08 19:45:04<br>Ended: 2017-07-11 03:11:15<br>Moving time: 03:49:42<br>Stopped time: 51:36:29<br>Points: 35<br>Length 2D: 25.740km<br>Avg distance between points: 735.44m")
    }});
    var gpxLayerDevice_10703 = omnivore.gpx('data/Device_10703.gpx', null, customLayerDevice_10703).on('ready', function() {

    });

    var gpxTimeLayerDevice_10703 = L.timeDimension.layer.geoJson(gpxLayerDevice_10703, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10703 =L.layerGroup([markerDevice_10703,gpxTimeLayerDevice_10703]);

    
    var iconDevice_10704 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10704=L.marker([22.3144,114.234], {icon: iconDevice_10704}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10704<br>Started: 2017-07-08 09:46:43<br>Ended: 2017-07-08 14:24:07<br>Moving time: 00:37:33<br>Stopped time: 03:59:51<br>Points: 6<br>Length 2D: 1.610km<br>Avg distance between points: 268.27m");
    var myStyleDevice_10704 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10704 = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10704 = L.geoJson(null,{

    style: myStyleDevice_10704,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10704);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10704<br>Started: 2017-07-08 09:46:43<br>Ended: 2017-07-08 14:24:07<br>Moving time: 00:37:33<br>Stopped time: 03:59:51<br>Points: 6<br>Length 2D: 1.610km<br>Avg distance between points: 268.27m")
    }});
    var gpxLayerDevice_10704 = omnivore.gpx('data/Device_10704.gpx', null, customLayerDevice_10704).on('ready', function() {

    });

    var gpxTimeLayerDevice_10704 = L.timeDimension.layer.geoJson(gpxLayerDevice_10704, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10704 =L.layerGroup([markerDevice_10704,gpxTimeLayerDevice_10704]);

    
    var iconDevice_10705 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10705=L.marker([22.3055,114.223], {icon: iconDevice_10705}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10705<br>Started: 2017-07-08 19:02:48<br>Ended: 2017-07-09 11:31:56<br>Moving time: 03:44:06<br>Stopped time: 12:45:02<br>Points: 12<br>Length 2D: 4.848km<br>Avg distance between points: 404.02m");
    var myStyleDevice_10705 = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10705 = {
    radius: 5,
    fillColor: "#808080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10705 = L.geoJson(null,{

    style: myStyleDevice_10705,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10705);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10705<br>Started: 2017-07-08 19:02:48<br>Ended: 2017-07-09 11:31:56<br>Moving time: 03:44:06<br>Stopped time: 12:45:02<br>Points: 12<br>Length 2D: 4.848km<br>Avg distance between points: 404.02m")
    }});
    var gpxLayerDevice_10705 = omnivore.gpx('data/Device_10705.gpx', null, customLayerDevice_10705).on('ready', function() {

    });

    var gpxTimeLayerDevice_10705 = L.timeDimension.layer.geoJson(gpxLayerDevice_10705, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10705 =L.layerGroup([markerDevice_10705,gpxTimeLayerDevice_10705]);

    
    var iconDevice_10706 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10706=L.marker([22.2999,114.218], {icon: iconDevice_10706}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10706<br>Started: 2017-07-08 15:27:14<br>Ended: 2017-07-11 10:57:03<br>Moving time: 05:58:17<br>Stopped time: 61:31:32<br>Points: 30<br>Length 2D: 28.656km<br>Avg distance between points: 955.20m");
    var myStyleDevice_10706 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10706 = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10706 = L.geoJson(null,{

    style: myStyleDevice_10706,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10706);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10706<br>Started: 2017-07-08 15:27:14<br>Ended: 2017-07-11 10:57:03<br>Moving time: 05:58:17<br>Stopped time: 61:31:32<br>Points: 30<br>Length 2D: 28.656km<br>Avg distance between points: 955.20m")
    }});
    var gpxLayerDevice_10706 = omnivore.gpx('data/Device_10706.gpx', null, customLayerDevice_10706).on('ready', function() {

    });

    var gpxTimeLayerDevice_10706 = L.timeDimension.layer.geoJson(gpxLayerDevice_10706, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10706 =L.layerGroup([markerDevice_10706,gpxTimeLayerDevice_10706]);

    
    var iconDevice_10707 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10707=L.marker([22.3033,114.22], {icon: iconDevice_10707}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10707<br>Started: 2017-07-08 15:07:11<br>Ended: 2017-07-11 10:28:38<br>Moving time: 04:08:00<br>Stopped time: 63:13:27<br>Points: 55<br>Length 2D: 11.530km<br>Avg distance between points: 209.64m");
    var myStyleDevice_10707 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10707 = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10707 = L.geoJson(null,{

    style: myStyleDevice_10707,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10707);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10707<br>Started: 2017-07-08 15:07:11<br>Ended: 2017-07-11 10:28:38<br>Moving time: 04:08:00<br>Stopped time: 63:13:27<br>Points: 55<br>Length 2D: 11.530km<br>Avg distance between points: 209.64m")
    }});
    var gpxLayerDevice_10707 = omnivore.gpx('data/Device_10707.gpx', null, customLayerDevice_10707).on('ready', function() {

    });

    var gpxTimeLayerDevice_10707 = L.timeDimension.layer.geoJson(gpxLayerDevice_10707, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10707 =L.layerGroup([markerDevice_10707,gpxTimeLayerDevice_10707]);

    
    var iconDevice_10708 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10708=L.marker([22.2998,114.225], {icon: iconDevice_10708}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10708<br>Started: 2017-07-08 19:05:15<br>Ended: 2017-07-10 18:14:29<br>Moving time: n/a<br>Stopped time: 47:09:14<br>Points: 16<br>Length 2D: 8.497km<br>Avg distance between points: 531.04m");
    var myStyleDevice_10708 = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10708 = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10708 = L.geoJson(null,{

    style: myStyleDevice_10708,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10708);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10708<br>Started: 2017-07-08 19:05:15<br>Ended: 2017-07-10 18:14:29<br>Moving time: n/a<br>Stopped time: 47:09:14<br>Points: 16<br>Length 2D: 8.497km<br>Avg distance between points: 531.04m")
    }});
    var gpxLayerDevice_10708 = omnivore.gpx('data/Device_10708.gpx', null, customLayerDevice_10708).on('ready', function() {

    });

    var gpxTimeLayerDevice_10708 = L.timeDimension.layer.geoJson(gpxLayerDevice_10708, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10708 =L.layerGroup([markerDevice_10708,gpxTimeLayerDevice_10708]);

    
    var iconDevice_10709 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10709=L.marker([22.301,114.215], {icon: iconDevice_10709}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10709<br>Started: 2017-07-08 15:57:09<br>Ended: 2017-07-10 02:31:47<br>Moving time: 05:30:23<br>Stopped time: 29:04:15<br>Points: 20<br>Length 2D: 13.951km<br>Avg distance between points: 697.56m");
    var myStyleDevice_10709 = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10709 = {
    radius: 5,
    fillColor: "#FFFF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10709 = L.geoJson(null,{

    style: myStyleDevice_10709,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10709);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10709<br>Started: 2017-07-08 15:57:09<br>Ended: 2017-07-10 02:31:47<br>Moving time: 05:30:23<br>Stopped time: 29:04:15<br>Points: 20<br>Length 2D: 13.951km<br>Avg distance between points: 697.56m")
    }});
    var gpxLayerDevice_10709 = omnivore.gpx('data/Device_10709.gpx', null, customLayerDevice_10709).on('ready', function() {

    });

    var gpxTimeLayerDevice_10709 = L.timeDimension.layer.geoJson(gpxLayerDevice_10709, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10709 =L.layerGroup([markerDevice_10709,gpxTimeLayerDevice_10709]);

    
    var iconDevice_10710 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10710=L.marker([22.2967,114.227], {icon: iconDevice_10710}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10710<br>Started: 2017-07-08 20:21:09<br>Ended: 2017-07-11 06:59:43<br>Moving time: 04:35:18<br>Stopped time: 54:03:16<br>Points: 19<br>Length 2D: 10.762km<br>Avg distance between points: 566.41m");
    var myStyleDevice_10710 = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10710 = {
    radius: 5,
    fillColor: "#808000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10710 = L.geoJson(null,{

    style: myStyleDevice_10710,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10710);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10710<br>Started: 2017-07-08 20:21:09<br>Ended: 2017-07-11 06:59:43<br>Moving time: 04:35:18<br>Stopped time: 54:03:16<br>Points: 19<br>Length 2D: 10.762km<br>Avg distance between points: 566.41m")
    }});
    var gpxLayerDevice_10710 = omnivore.gpx('data/Device_10710.gpx', null, customLayerDevice_10710).on('ready', function() {

    });

    var gpxTimeLayerDevice_10710 = L.timeDimension.layer.geoJson(gpxLayerDevice_10710, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10710 =L.layerGroup([markerDevice_10710,gpxTimeLayerDevice_10710]);

    
    var iconDevice_10805 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10805=L.marker([22.2967,114.227], {icon: iconDevice_10805}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10710<br>Started: 2017-07-08 20:21:09<br>Ended: 2017-07-11 06:59:43<br>Moving time: 04:35:18<br>Stopped time: 54:03:16<br>Points: 19<br>Length 2D: 10.762km<br>Avg distance between points: 566.41m");
    var myStyleDevice_10805 = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10805 = {
    radius: 5,
    fillColor: "#00FF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10805 = L.geoJson(null,{

    style: myStyleDevice_10805,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10805);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment ID : 10710<br>Started: 2017-07-08 20:21:09<br>Ended: 2017-07-11 06:59:43<br>Moving time: 04:35:18<br>Stopped time: 54:03:16<br>Points: 19<br>Length 2D: 10.762km<br>Avg distance between points: 566.41m")
    }});
    var gpxLayerDevice_10805 = omnivore.gpx('data/Device_10805.gpx', null, customLayerDevice_10805).on('ready', function() {

    });

    var gpxTimeLayerDevice_10805 = L.timeDimension.layer.geoJson(gpxLayerDevice_10805, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10805 =L.layerGroup([markerDevice_10805,gpxTimeLayerDevice_10805]);

    

    L.Control.Layers.SelectAll = L.Control.Layers.extend({
        _update: function(){
            L.Control.Layers.prototype._update.apply(this);
            this._addSelectAll();
            return this;
        },

        _addSelectAll: function(){
            var button = document.createElement('button');
            button.className = 'leaflet-control-layers-selector';
            button.innerHTML = 'Select All';


            L.DomEvent
                .addListener(button, 'click', L.DomEvent.stopPropagation)
                .addListener(button, 'click', L.DomEvent.preventDefault)
                .addListener(button, 'click', this._onSelectAllClick, this);
            this._overlaysList.insertBefore(button, this._overlaysList.firstChild);
            return button;
        },

        _onSelectAllClick: function(){
            // copied from _onInputClick
            var i, input, obj,
                inputs = this._form.getElementsByTagName('input'),
                inputsLen = inputs.length;

            this._handlingClick = true;

            for (i = 3; i < inputsLen; i++) {
                input = inputs[i];
                obj = this._layers[input.layerId];

                if (obj.overlay && !input.checked) {
                    this._map.addLayer(obj.layer);
                    //this._map.removeLayer(obj.layer);
                    input.checked = true;
                }

                else {
                    //this._map.addLayer(obj.layer);
                    this._map.removeLayer(obj.layer);
                    input.checked = false;
                }
            }

            this._handlingClick = false;

            this._refocusOnMap();
        },

    });
    
var overlayMaps = {

"Device_50001": gpxaddmarkerDevice_50001,
"Device_50002": gpxaddmarkerDevice_50002,
"Device_50004": gpxaddmarkerDevice_50004,
"Device_50006": gpxaddmarkerDevice_50006,
"Device_50007": gpxaddmarkerDevice_50007,
"Device_50009": gpxaddmarkerDevice_50009,
"Device_10102": gpxaddmarkerDevice_10102,
"Device_10103": gpxaddmarkerDevice_10103,
"Device_10104": gpxaddmarkerDevice_10104,
"Device_10105": gpxaddmarkerDevice_10105,
"Device_10106": gpxaddmarkerDevice_10106,
"Device_10107": gpxaddmarkerDevice_10107,
"Device_10108": gpxaddmarkerDevice_10108,
"Device_10109": gpxaddmarkerDevice_10109,
"Device_10110": gpxaddmarkerDevice_10110,
"Device_10201": gpxaddmarkerDevice_10201,
"Device_10202": gpxaddmarkerDevice_10202,
"Device_10203": gpxaddmarkerDevice_10203,
"Device_10204": gpxaddmarkerDevice_10204,
"Device_10206": gpxaddmarkerDevice_10206,
"Device_10207": gpxaddmarkerDevice_10207,
"Device_10208": gpxaddmarkerDevice_10208,
"Device_10209": gpxaddmarkerDevice_10209,
"Device_10210": gpxaddmarkerDevice_10210,
"Device_10301": gpxaddmarkerDevice_10301,
"Device_10303": gpxaddmarkerDevice_10303,
"Device_10305": gpxaddmarkerDevice_10305,
"Device_10307": gpxaddmarkerDevice_10307,
"Device_10308": gpxaddmarkerDevice_10308,
"Device_10309": gpxaddmarkerDevice_10309,
"Device_10310": gpxaddmarkerDevice_10310,
"Device_10401": gpxaddmarkerDevice_10401,
"Device_10402": gpxaddmarkerDevice_10402,
"Device_10403": gpxaddmarkerDevice_10403,
"Device_10404": gpxaddmarkerDevice_10404,
"Device_10407": gpxaddmarkerDevice_10407,
"Device_10408": gpxaddmarkerDevice_10408,
"Device_10409": gpxaddmarkerDevice_10409,
"Device_10410": gpxaddmarkerDevice_10410,
"Device_10501": gpxaddmarkerDevice_10501,
"Device_10503": gpxaddmarkerDevice_10503,
"Device_10504": gpxaddmarkerDevice_10504,
"Device_10505": gpxaddmarkerDevice_10505,
"Device_10506": gpxaddmarkerDevice_10506,
"Device_10507": gpxaddmarkerDevice_10507,
"Device_10508": gpxaddmarkerDevice_10508,
"Device_10509": gpxaddmarkerDevice_10509,
"Device_10510": gpxaddmarkerDevice_10510,
"Device_10601": gpxaddmarkerDevice_10601,
"Device_10602": gpxaddmarkerDevice_10602,
"Device_10603": gpxaddmarkerDevice_10603,
"Device_10604": gpxaddmarkerDevice_10604,
"Device_10605": gpxaddmarkerDevice_10605,
"Device_10606": gpxaddmarkerDevice_10606,
"Device_10607": gpxaddmarkerDevice_10607,
"Device_10608": gpxaddmarkerDevice_10608,
"Device_10609": gpxaddmarkerDevice_10609,
"Device_10610": gpxaddmarkerDevice_10610,
"Device_10701": gpxaddmarkerDevice_10701,
"Device_10702": gpxaddmarkerDevice_10702,
"Device_10703": gpxaddmarkerDevice_10703,
"Device_10704": gpxaddmarkerDevice_10704,
"Device_10705": gpxaddmarkerDevice_10705,
"Device_10706": gpxaddmarkerDevice_10706,
"Device_10707": gpxaddmarkerDevice_10707,
"Device_10708": gpxaddmarkerDevice_10708,
"Device_10709": gpxaddmarkerDevice_10709,
"Device_10710": gpxaddmarkerDevice_10710,
"Device_10805": gpxaddmarkerDevice_10805,};

        var baseLayers = getCommonBaseLayers(map); // see baselayers.js
        L.control.layers.selectAll = function(baseLayers, overlays, options) {
            return new L.Control.Layers.SelectAll(baseLayers, overlays, options);
        };
        L.control.layers.selectAll(baseLayers, overlayMaps).addTo(map);
gpxaddmarkerDevice_50001.addTo(map);
gpxaddmarkerDevice_50002.addTo(map);
gpxaddmarkerDevice_50004.addTo(map);
gpxaddmarkerDevice_50006.addTo(map);
gpxaddmarkerDevice_50007.addTo(map);
gpxaddmarkerDevice_50009.addTo(map);
gpxaddmarkerDevice_10102.addTo(map);
gpxaddmarkerDevice_10103.addTo(map);
gpxaddmarkerDevice_10104.addTo(map);
gpxaddmarkerDevice_10105.addTo(map);
gpxaddmarkerDevice_10106.addTo(map);
gpxaddmarkerDevice_10107.addTo(map);
gpxaddmarkerDevice_10108.addTo(map);
gpxaddmarkerDevice_10109.addTo(map);
gpxaddmarkerDevice_10110.addTo(map);
gpxaddmarkerDevice_10201.addTo(map);
gpxaddmarkerDevice_10202.addTo(map);
gpxaddmarkerDevice_10203.addTo(map);
gpxaddmarkerDevice_10204.addTo(map);
gpxaddmarkerDevice_10206.addTo(map);
gpxaddmarkerDevice_10207.addTo(map);
gpxaddmarkerDevice_10208.addTo(map);
gpxaddmarkerDevice_10209.addTo(map);
gpxaddmarkerDevice_10210.addTo(map);
gpxaddmarkerDevice_10301.addTo(map);
gpxaddmarkerDevice_10303.addTo(map);
gpxaddmarkerDevice_10305.addTo(map);
gpxaddmarkerDevice_10307.addTo(map);
gpxaddmarkerDevice_10308.addTo(map);
gpxaddmarkerDevice_10309.addTo(map);
gpxaddmarkerDevice_10310.addTo(map);
gpxaddmarkerDevice_10401.addTo(map);
gpxaddmarkerDevice_10402.addTo(map);
gpxaddmarkerDevice_10403.addTo(map);
gpxaddmarkerDevice_10404.addTo(map);
gpxaddmarkerDevice_10407.addTo(map);
gpxaddmarkerDevice_10408.addTo(map);
gpxaddmarkerDevice_10409.addTo(map);
gpxaddmarkerDevice_10410.addTo(map);
gpxaddmarkerDevice_10501.addTo(map);
gpxaddmarkerDevice_10503.addTo(map);
gpxaddmarkerDevice_10504.addTo(map);
gpxaddmarkerDevice_10505.addTo(map);
gpxaddmarkerDevice_10506.addTo(map);
gpxaddmarkerDevice_10507.addTo(map);
gpxaddmarkerDevice_10508.addTo(map);
gpxaddmarkerDevice_10509.addTo(map);
gpxaddmarkerDevice_10510.addTo(map);
gpxaddmarkerDevice_10601.addTo(map);
gpxaddmarkerDevice_10602.addTo(map);
gpxaddmarkerDevice_10603.addTo(map);
gpxaddmarkerDevice_10604.addTo(map);
gpxaddmarkerDevice_10605.addTo(map);
gpxaddmarkerDevice_10606.addTo(map);
gpxaddmarkerDevice_10607.addTo(map);
gpxaddmarkerDevice_10608.addTo(map);
gpxaddmarkerDevice_10609.addTo(map);
gpxaddmarkerDevice_10610.addTo(map);
gpxaddmarkerDevice_10701.addTo(map);
gpxaddmarkerDevice_10702.addTo(map);
gpxaddmarkerDevice_10703.addTo(map);
gpxaddmarkerDevice_10704.addTo(map);
gpxaddmarkerDevice_10705.addTo(map);
gpxaddmarkerDevice_10706.addTo(map);
gpxaddmarkerDevice_10707.addTo(map);
gpxaddmarkerDevice_10708.addTo(map);
gpxaddmarkerDevice_10709.addTo(map);
gpxaddmarkerDevice_10710.addTo(map);
gpxaddmarkerDevice_10805.addTo(map);
    $("#btn_timerange").click(function(){
        var startTime = new Date($('#dtp_start').val());
        var endTime = new Date($('#dtp_end').val());
        var newAvailableTimes = L.TimeDimension.Util.explodeTimeRange(startTime, endTime, 'PT1H');
        map.timeDimension.setAvailableTimes(newAvailableTimes, 'replace');
        map.timeDimension.setCurrentTime(startTime);
    });

    $("#btn_limitrange").click(function(){
        var startTime = new Date($('#dtp_start').val());
        var endTime = new Date($('#dtp_end').val());
        map.timeDimension.setLowerLimit(startTime);
        map.timeDimension.setUpperLimit(endTime);
        map.timeDimension.setCurrentTime(startTime);
    });
    
