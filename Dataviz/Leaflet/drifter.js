var startDate = new Date();
    startDate.setUTCHours(0, 0, 0, 0);

    var map = L.map('map', {
        zoom: 11,
        fullscreenControl: true,
        center: [22.368239, 114.164331]
    });

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
        timeSliderDragUpdate: true
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
        value: new Date("2017-07-08"),
        format: "c"
    });


    
    var iconDevice_50001 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_50001=L.marker([22.3076,114.225], {icon: iconDevice_50001}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment_ ID : 50001<br> ESN :ESN<br> starts at 2017-05-23T00:50:34Z");
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment_ ID : 50001<br> ESN :ESN<br> starts at 2017-05-23T00:50:34Z")
    }});
    var gpxLayerDevice_50001 = omnivore.gpx('data/Device_50001.gpx', null, customLayerDevice_50001).on('ready', function() {

    });

    var gpxTimeLayerDevice_50001 = L.timeDimension.layer.geoJson(gpxLayerDevice_50001, {

    addlastPoint: true,
    waitForReady: true,
    });
    var gpxaddmarkerDevice_50001 =L.layerGroup([markerDevice_50001,gpxTimeLayerDevice_50001]);

    
    var iconDevice_50002 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_50002=L.marker([22.2941,114.234], {icon: iconDevice_50002}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment_ ID : 50002<br> ESN :ESN<br> starts at 2017-06-01T22:49:23Z");
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment_ ID : 50002<br> ESN :ESN<br> starts at 2017-06-01T22:49:23Z")
    }});
    var gpxLayerDevice_50002 = omnivore.gpx('data/Device_50002.gpx', null, customLayerDevice_50002).on('ready', function() {

    });

    var gpxTimeLayerDevice_50002 = L.timeDimension.layer.geoJson(gpxLayerDevice_50002, {

    addlastPoint: true,
    waitForReady: true,
    });
    var gpxaddmarkerDevice_50002 =L.layerGroup([markerDevice_50002,gpxTimeLayerDevice_50002]);

    
    var iconDevice_50003 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_50003=L.marker([22.2944,114.235], {icon: iconDevice_50003}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment_ ID : 50003<br> ESN :ESN<br> starts at 2017-06-04T22:09:19Z");
    var myStyleDevice_50003 = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_50003 = {
    radius: 5,
    fillColor: "#808080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_50003 = L.geoJson(null,{

    style: myStyleDevice_50003,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_50003);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment_ ID : 50003<br> ESN :ESN<br> starts at 2017-06-04T22:09:19Z")
    }});
    var gpxLayerDevice_50003 = omnivore.gpx('data/Device_50003.gpx', null, customLayerDevice_50003).on('ready', function() {

    });

    var gpxTimeLayerDevice_50003 = L.timeDimension.layer.geoJson(gpxLayerDevice_50003, {

    addlastPoint: true,
    waitForReady: true,
    });
    var gpxaddmarkerDevice_50003 =L.layerGroup([markerDevice_50003,gpxTimeLayerDevice_50003]);

    
    var iconDevice_50004 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_50004=L.marker([22.2944,114.235], {icon: iconDevice_50004}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment_ ID : 50004<br> ESN :ESN<br> starts at 2017-06-10T11:20:38Z");
    var myStyleDevice_50004 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_50004 = {
    radius: 5,
    fillColor: "#000000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment_ ID : 50004<br> ESN :ESN<br> starts at 2017-06-10T11:20:38Z")
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
    var markerDevice_50006=L.marker([22.2951,114.234], {icon: iconDevice_50006}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment_ ID : 50006<br> ESN :ESN<br> starts at 2017-06-10T11:20:04Z");
    var myStyleDevice_50006 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_50006 = {
    radius: 5,
    fillColor: "#FF0000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment_ ID : 50006<br> ESN :ESN<br> starts at 2017-06-10T11:20:04Z")
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
    var markerDevice_50007=L.marker([22.2944,114.235], {icon: iconDevice_50007}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment_ ID : 50007<br> ESN :ESN<br> starts at 2017-06-10T11:23:15Z");
    var myStyleDevice_50007 = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_50007 = {
    radius: 5,
    fillColor: "#800000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment_ ID : 50007<br> ESN :ESN<br> starts at 2017-06-10T11:23:15Z")
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
    var markerDevice_50009=L.marker([22.2949,114.234], {icon: iconDevice_50009}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment_ ID : 50009<br> ESN :ESN<br> starts at 2017-06-10T11:53:38Z");
    var myStyleDevice_50009 = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_50009 = {
    radius: 5,
    fillColor: "#FFFF00",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> MakerBay<br> Teacher/PI : Eddie Yung<br> Deployment_ ID : 50009<br> ESN :ESN<br> starts at 2017-06-10T11:53:38Z")
    }});
    var gpxLayerDevice_50009 = omnivore.gpx('data/Device_50009.gpx', null, customLayerDevice_50009).on('ready', function() {

    });

    var gpxTimeLayerDevice_50009 = L.timeDimension.layer.geoJson(gpxLayerDevice_50009, {

    addlastPoint: true,
    waitForReady: true,
    });
    var gpxaddmarkerDevice_50009 =L.layerGroup([markerDevice_50009,gpxTimeLayerDevice_50009]);

    
    var iconDevice_10101 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10101=L.marker([22.2569,114.139], {icon: iconDevice_10101}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10101<br> ESN :ESN<br> starts at 2017-06-17T11:22:08Z");
    var myStyleDevice_10101 = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10101 = {
    radius: 5,
    fillColor: "#808000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10101 = L.geoJson(null,{

    style: myStyleDevice_10101,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10101);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10101<br> ESN :ESN<br> starts at 2017-06-17T11:22:08Z")
    }});
    var gpxLayerDevice_10101 = omnivore.gpx('data/Device_10101.gpx', null, customLayerDevice_10101).on('ready', function() {

    });

    var gpxTimeLayerDevice_10101 = L.timeDimension.layer.geoJson(gpxLayerDevice_10101, {

    addlastPoint: true,
    waitForReady: true,
    });
    var gpxaddmarkerDevice_10101 =L.layerGroup([markerDevice_10101,gpxTimeLayerDevice_10101]);

    
    var iconDevice_10102 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10102=L.marker([22.2572,114.138], {icon: iconDevice_10102}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10102<br> ESN :ESN<br> starts at 2017-06-17T11:20:13Z");
    var myStyleDevice_10102 = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10102 = {
    radius: 5,
    fillColor: "#00FF00",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10102<br> ESN :ESN<br> starts at 2017-06-17T11:20:13Z")
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
    var markerDevice_10103=L.marker([22.2573,114.138], {icon: iconDevice_10103}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10103<br> ESN :ESN<br> starts at 2017-06-17T11:12:18Z");
    var myStyleDevice_10103 = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10103 = {
    radius: 5,
    fillColor: "#008000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10103<br> ESN :ESN<br> starts at 2017-06-17T11:12:18Z")
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
    var markerDevice_10104=L.marker([22.2571,114.138], {icon: iconDevice_10104}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10104<br> ESN :ESN<br> starts at 2017-06-17T11:16:51Z");
    var myStyleDevice_10104 = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10104 = {
    radius: 5,
    fillColor: "#008080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10104<br> ESN :ESN<br> starts at 2017-06-17T11:16:51Z")
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
    var markerDevice_10105=L.marker([22.2572,114.138], {icon: iconDevice_10105}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10105<br> ESN :ESN<br> starts at 2017-06-17T11:09:48Z");
    var myStyleDevice_10105 = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10105 = {
    radius: 5,
    fillColor: "#0000FF",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10105<br> ESN :ESN<br> starts at 2017-06-17T11:09:48Z")
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
    var markerDevice_10106=L.marker([22.2572,114.139], {icon: iconDevice_10106}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10106<br> ESN :ESN<br> starts at 2017-06-17T11:09:36Z");
    var myStyleDevice_10106 = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10106 = {
    radius: 5,
    fillColor: "#000080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10106<br> ESN :ESN<br> starts at 2017-06-17T11:09:36Z")
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
    var markerDevice_10107=L.marker([22.2577,114.138], {icon: iconDevice_10107}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10107<br> ESN :ESN<br> starts at 2017-06-17T12:30:14Z");
    var myStyleDevice_10107 = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10107 = {
    radius: 5,
    fillColor: "#FF00FF",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10107<br> ESN :ESN<br> starts at 2017-06-17T12:30:14Z")
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
    var markerDevice_10108=L.marker([22.2573,114.138], {icon: iconDevice_10108}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10108<br> ESN :ESN<br> starts at 2017-06-17T11:24:14Z");
    var myStyleDevice_10108 = {
    "color": "#800080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10108 = {
    radius: 5,
    fillColor: "#800080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10108<br> ESN :ESN<br> starts at 2017-06-17T11:24:14Z")
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
    var markerDevice_10109=L.marker([22.2575,114.138], {icon: iconDevice_10109}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10109<br> ESN :ESN<br> starts at 2017-06-17T13:23:38Z");
    var myStyleDevice_10109 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10109 = {
    radius: 5,
    fillColor: "#000000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10109<br> ESN :ESN<br> starts at 2017-06-17T13:23:38Z")
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
    var markerDevice_10110=L.marker([22.2571,114.138], {icon: iconDevice_10110}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10110<br> ESN :ESN<br> starts at 2017-06-17T11:20:11Z");
    var myStyleDevice_10110 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10110 = {
    radius: 5,
    fillColor: "#FF0000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment_ ID : 10110<br> ESN :ESN<br> starts at 2017-06-17T11:20:11Z")
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
    var markerDevice_10201=L.marker([22.4225,114.23], {icon: iconDevice_10201}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10201<br> ESN :ESN<br> starts at 2017-06-21T10:00:46Z");
    var myStyleDevice_10201 = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10201 = {
    radius: 5,
    fillColor: "#808080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10201<br> ESN :ESN<br> starts at 2017-06-21T10:00:46Z")
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
    var markerDevice_10202=L.marker([22.4226,114.229], {icon: iconDevice_10202}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10202<br> ESN :ESN<br> starts at 2017-06-21T10:26:21Z");
    var myStyleDevice_10202 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10202 = {
    radius: 5,
    fillColor: "#000000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10202<br> ESN :ESN<br> starts at 2017-06-21T10:26:21Z")
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
    var markerDevice_10203=L.marker([22.4226,114.229], {icon: iconDevice_10203}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10203<br> ESN :ESN<br> starts at 2017-06-21T10:23:40Z");
    var myStyleDevice_10203 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10203 = {
    radius: 5,
    fillColor: "#FF0000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10203<br> ESN :ESN<br> starts at 2017-06-21T10:23:40Z")
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
    var markerDevice_10204=L.marker([22.4208,114.229], {icon: iconDevice_10204}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10204<br> ESN :ESN<br> starts at 2017-06-21T09:59:39Z");
    var myStyleDevice_10204 = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10204 = {
    radius: 5,
    fillColor: "#800000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10204<br> ESN :ESN<br> starts at 2017-06-21T09:59:39Z")
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
    var markerDevice_10206=L.marker([22.4228,114.229], {icon: iconDevice_10206}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10206<br> ESN :ESN<br> starts at 2017-06-21T09:59:12Z");
    var myStyleDevice_10206 = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10206 = {
    radius: 5,
    fillColor: "#FFFF00",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10206<br> ESN :ESN<br> starts at 2017-06-21T09:59:12Z")
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
    var markerDevice_10207=L.marker([22.4234,114.229], {icon: iconDevice_10207}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10207<br> ESN :ESN<br> starts at 2017-06-21T10:02:48Z");
    var myStyleDevice_10207 = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10207 = {
    radius: 5,
    fillColor: "#808000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10207<br> ESN :ESN<br> starts at 2017-06-21T10:02:48Z")
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
    var markerDevice_10208=L.marker([22.4226,114.229], {icon: iconDevice_10208}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10208<br> ESN :ESN<br> starts at 2017-06-21T10:02:08Z");
    var myStyleDevice_10208 = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10208 = {
    radius: 5,
    fillColor: "#00FF00",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10208<br> ESN :ESN<br> starts at 2017-06-21T10:02:08Z")
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
    var markerDevice_10209=L.marker([22.4226,114.23], {icon: iconDevice_10209}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10209<br> ESN :ESN<br> starts at 2017-06-21T09:59:43Z");
    var myStyleDevice_10209 = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10209 = {
    radius: 5,
    fillColor: "#008000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10209<br> ESN :ESN<br> starts at 2017-06-21T09:59:43Z")
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
    var markerDevice_10210=L.marker([22.4225,114.229], {icon: iconDevice_10210}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10210<br> ESN :ESN<br> starts at 2017-06-21T09:56:12Z");
    var myStyleDevice_10210 = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10210 = {
    radius: 5,
    fillColor: "#008080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Tsang Pik Shan Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10210<br> ESN :ESN<br> starts at 2017-06-21T09:56:12Z")
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
    var markerDevice_10301=L.marker([22.3198,114.266], {icon: iconDevice_10301}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment_ ID : 10301<br> ESN :ESN<br> starts at 2017-06-28T12:28:42Z");
    var myStyleDevice_10301 = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10301 = {
    radius: 5,
    fillColor: "#0000FF",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment_ ID : 10301<br> ESN :ESN<br> starts at 2017-06-28T12:28:42Z")
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
    var markerDevice_10303=L.marker([22.3197,114.266], {icon: iconDevice_10303}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment_ ID : 10303<br> ESN :ESN<br> starts at 2017-06-28T12:34:27Z");
    var myStyleDevice_10303 = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10303 = {
    radius: 5,
    fillColor: "#000080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment_ ID : 10303<br> ESN :ESN<br> starts at 2017-06-28T12:34:27Z")
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
    var markerDevice_10305=L.marker([22.3197,114.266], {icon: iconDevice_10305}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment_ ID : 10305<br> ESN :ESN<br> starts at 2017-06-28T12:38:45Z");
    var myStyleDevice_10305 = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10305 = {
    radius: 5,
    fillColor: "#FF00FF",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment_ ID : 10305<br> ESN :ESN<br> starts at 2017-06-28T12:38:45Z")
    }});
    var gpxLayerDevice_10305 = omnivore.gpx('data/Device_10305.gpx', null, customLayerDevice_10305).on('ready', function() {

    });

    var gpxTimeLayerDevice_10305 = L.timeDimension.layer.geoJson(gpxLayerDevice_10305, {

    addlastPoint: true,
    waitForReady: true,
    });
    var gpxaddmarkerDevice_10305 =L.layerGroup([markerDevice_10305,gpxTimeLayerDevice_10305]);

    
    var iconDevice_10306 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10306=L.marker([22.3198,114.266], {icon: iconDevice_10306}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment_ ID : 10306<br> ESN :ESN<br> starts at 2017-06-28T12:28:10Z");
    var myStyleDevice_10306 = {
    "color": "#800080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10306 = {
    radius: 5,
    fillColor: "#800080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10306 = L.geoJson(null,{

    style: myStyleDevice_10306,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10306);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment_ ID : 10306<br> ESN :ESN<br> starts at 2017-06-28T12:28:10Z")
    }});
    var gpxLayerDevice_10306 = omnivore.gpx('data/Device_10306.gpx', null, customLayerDevice_10306).on('ready', function() {

    });

    var gpxTimeLayerDevice_10306 = L.timeDimension.layer.geoJson(gpxLayerDevice_10306, {

    addlastPoint: true,
    waitForReady: true,
    });
    var gpxaddmarkerDevice_10306 =L.layerGroup([markerDevice_10306,gpxTimeLayerDevice_10306]);

    
    var iconDevice_10307 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10307=L.marker([22.3198,114.266], {icon: iconDevice_10307}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment_ ID : 10307<br> ESN :ESN<br> starts at 2017-06-28T12:38:57Z");
    var myStyleDevice_10307 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10307 = {
    radius: 5,
    fillColor: "#000000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment_ ID : 10307<br> ESN :ESN<br> starts at 2017-06-28T12:38:57Z")
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
    var markerDevice_10308=L.marker([22.3198,114.266], {icon: iconDevice_10308}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment_ ID : 10308<br> ESN :ESN<br> starts at 2017-06-28T12:24:37Z");
    var myStyleDevice_10308 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10308 = {
    radius: 5,
    fillColor: "#FF0000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment_ ID : 10308<br> ESN :ESN<br> starts at 2017-06-28T12:24:37Z")
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
    var markerDevice_10309=L.marker([22.3198,114.266], {icon: iconDevice_10309}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment_ ID : 10309<br> ESN :ESN<br> starts at 2017-06-28T12:35:48Z");
    var myStyleDevice_10309 = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10309 = {
    radius: 5,
    fillColor: "#808080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment_ ID : 10309<br> ESN :ESN<br> starts at 2017-06-28T12:35:48Z")
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
    var markerDevice_10310=L.marker([22.32,114.267], {icon: iconDevice_10310}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment_ ID : 10310<br> ESN :ESN<br> starts at 2017-06-28T12:29:12Z");
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Po Leung Kuk Ho Yuk Ching (1984) College<br> Teacher/PI : ___<br> Deployment_ ID : 10310<br> ESN :ESN<br> starts at 2017-06-28T12:29:12Z")
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
    var markerDevice_10401=L.marker([22.4422,114.024], {icon: iconDevice_10401}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10401<br> ESN :ESN<br> starts at 2017-06-29T09:56:00Z");
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10401<br> ESN :ESN<br> starts at 2017-06-29T09:56:00Z")
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
    var markerDevice_10402=L.marker([22.4433,114.022], {icon: iconDevice_10402}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10402<br> ESN :ESN<br> starts at 2017-06-29T10:01:11Z");
    var myStyleDevice_10402 = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10402 = {
    radius: 5,
    fillColor: "#800000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10402<br> ESN :ESN<br> starts at 2017-06-29T10:01:11Z")
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
    var markerDevice_10403=L.marker([22.4438,114.021], {icon: iconDevice_10403}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10403<br> ESN :ESN<br> starts at 2017-06-29T10:11:38Z");
    var myStyleDevice_10403 = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10403 = {
    radius: 5,
    fillColor: "#FFFF00",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10403<br> ESN :ESN<br> starts at 2017-06-29T10:11:38Z")
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
    var markerDevice_10404=L.marker([22.443,114.023], {icon: iconDevice_10404}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10404<br> ESN :ESN<br> starts at 2017-06-29T09:48:20Z");
    var myStyleDevice_10404 = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10404 = {
    radius: 5,
    fillColor: "#808000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10404<br> ESN :ESN<br> starts at 2017-06-29T09:48:20Z")
    }});
    var gpxLayerDevice_10404 = omnivore.gpx('data/Device_10404.gpx', null, customLayerDevice_10404).on('ready', function() {

    });

    var gpxTimeLayerDevice_10404 = L.timeDimension.layer.geoJson(gpxLayerDevice_10404, {

    addlastPoint: true,
    waitForReady: true,
    });
    var gpxaddmarkerDevice_10404 =L.layerGroup([markerDevice_10404,gpxTimeLayerDevice_10404]);

    
    var iconDevice_10406 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10406=L.marker([22.4432,114.023], {icon: iconDevice_10406}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10406<br> ESN :ESN<br> starts at 2017-06-29T09:48:05Z");
    var myStyleDevice_10406 = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10406 = {
    radius: 5,
    fillColor: "#00FF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayerDevice_10406 = L.geoJson(null,{

    style: myStyleDevice_10406,


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptionsDevice_10406);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10406<br> ESN :ESN<br> starts at 2017-06-29T09:48:05Z")
    }});
    var gpxLayerDevice_10406 = omnivore.gpx('data/Device_10406.gpx', null, customLayerDevice_10406).on('ready', function() {

    });

    var gpxTimeLayerDevice_10406 = L.timeDimension.layer.geoJson(gpxLayerDevice_10406, {

    addlastPoint: true,
    waitForReady: true,
    });
    var gpxaddmarkerDevice_10406 =L.layerGroup([markerDevice_10406,gpxTimeLayerDevice_10406]);

    
    var iconDevice_10407 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10407=L.marker([22.4431,114.023], {icon: iconDevice_10407}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10407<br> ESN :ESN<br> starts at 2017-06-29T10:11:49Z");
    var myStyleDevice_10407 = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10407 = {
    radius: 5,
    fillColor: "#008000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10407<br> ESN :ESN<br> starts at 2017-06-29T10:11:49Z")
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
    var markerDevice_10408=L.marker([22.4432,114.023], {icon: iconDevice_10408}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10408<br> ESN :ESN<br> starts at 2017-06-29T09:48:07Z");
    var myStyleDevice_10408 = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10408 = {
    radius: 5,
    fillColor: "#008080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10408<br> ESN :ESN<br> starts at 2017-06-29T09:48:07Z")
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
    var markerDevice_10409=L.marker([22.4433,114.023], {icon: iconDevice_10409}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10409<br> ESN :ESN<br> starts at 2017-06-29T09:55:48Z");
    var myStyleDevice_10409 = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10409 = {
    radius: 5,
    fillColor: "#0000FF",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10409<br> ESN :ESN<br> starts at 2017-06-29T09:55:48Z")
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
    var markerDevice_10410=L.marker([22.4432,114.023], {icon: iconDevice_10410}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10410<br> ESN :ESN<br> starts at 2017-06-29T09:50:40Z");
    var myStyleDevice_10410 = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10410 = {
    radius: 5,
    fillColor: "#000080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> New Territories Heung Yee Kuk Yuen Long District Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10410<br> ESN :ESN<br> starts at 2017-06-29T09:50:40Z")
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
    var markerDevice_10501=L.marker([22.4969,114.129], {icon: iconDevice_10501}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10501<br> ESN :ESN<br> starts at 2017-07-03T09:23:46Z");
    var myStyleDevice_10501 = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10501 = {
    radius: 5,
    fillColor: "#FF00FF",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10501<br> ESN :ESN<br> starts at 2017-07-03T09:23:46Z")
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
    var markerDevice_10503=L.marker([22.4969,114.129], {icon: iconDevice_10503}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10503<br> ESN :ESN<br> starts at 2017-07-03T09:30:17Z");
    var myStyleDevice_10503 = {
    "color": "#800080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10503 = {
    radius: 5,
    fillColor: "#800080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10503<br> ESN :ESN<br> starts at 2017-07-03T09:30:17Z")
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
    var markerDevice_10504=L.marker([22.4967,114.129], {icon: iconDevice_10504}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10504<br> ESN :ESN<br> starts at 2017-07-03T09:23:05Z");
    var myStyleDevice_10504 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10504 = {
    radius: 5,
    fillColor: "#000000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10504<br> ESN :ESN<br> starts at 2017-07-03T09:23:05Z")
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
    var markerDevice_10505=L.marker([22.4968,114.129], {icon: iconDevice_10505}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10505<br> ESN :ESN<br> starts at 2017-07-03T09:30:17Z");
    var myStyleDevice_10505 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10505 = {
    radius: 5,
    fillColor: "#FF0000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10505<br> ESN :ESN<br> starts at 2017-07-03T09:30:17Z")
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
    var markerDevice_10506=L.marker([22.497,114.129], {icon: iconDevice_10506}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10506<br> ESN :ESN<br> starts at 2017-07-03T09:31:03Z");
    var myStyleDevice_10506 = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10506 = {
    radius: 5,
    fillColor: "#808080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10506<br> ESN :ESN<br> starts at 2017-07-03T09:31:03Z")
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
    var markerDevice_10507=L.marker([22.4967,114.129], {icon: iconDevice_10507}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10507<br> ESN :ESN<br> starts at 2017-07-03T09:22:43Z");
    var myStyleDevice_10507 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10507 = {
    radius: 5,
    fillColor: "#000000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10507<br> ESN :ESN<br> starts at 2017-07-03T09:22:43Z")
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
    var markerDevice_10508=L.marker([22.4962,114.129], {icon: iconDevice_10508}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10508<br> ESN :ESN<br> starts at 2017-07-03T09:55:07Z");
    var myStyleDevice_10508 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10508 = {
    radius: 5,
    fillColor: "#FF0000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10508<br> ESN :ESN<br> starts at 2017-07-03T09:55:07Z")
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
    var markerDevice_10509=L.marker([22.4969,114.129], {icon: iconDevice_10509}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10509<br> ESN :ESN<br> starts at 2017-07-03T09:23:13Z");
    var myStyleDevice_10509 = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10509 = {
    radius: 5,
    fillColor: "#800000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10509<br> ESN :ESN<br> starts at 2017-07-03T09:23:13Z")
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
    var markerDevice_10510=L.marker([22.4956,114.13], {icon: iconDevice_10510}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10510<br> ESN :ESN<br> starts at 2017-07-03T09:28:04Z");
    var myStyleDevice_10510 = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10510 = {
    radius: 5,
    fillColor: "#FFFF00",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Shueng Shui Government Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10510<br> ESN :ESN<br> starts at 2017-07-03T09:28:04Z")
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
    var markerDevice_10601=L.marker([22.4504,114.0], {icon: iconDevice_10601}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10601<br> ESN :ESN<br> starts at 2017-07-04T09:17:39Z");
    var myStyleDevice_10601 = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10601 = {
    radius: 5,
    fillColor: "#808000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10601<br> ESN :ESN<br> starts at 2017-07-04T09:17:39Z")
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
    var markerDevice_10602=L.marker([22.4512,114.0], {icon: iconDevice_10602}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10602<br> ESN :ESN<br> starts at 2017-07-04T09:18:34Z");
    var myStyleDevice_10602 = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10602 = {
    radius: 5,
    fillColor: "#00FF00",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10602<br> ESN :ESN<br> starts at 2017-07-04T09:18:34Z")
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
    var markerDevice_10603=L.marker([22.4492,114.0], {icon: iconDevice_10603}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10603<br> ESN :ESN<br> starts at 2017-07-04T09:18:16Z");
    var myStyleDevice_10603 = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10603 = {
    radius: 5,
    fillColor: "#008000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10603<br> ESN :ESN<br> starts at 2017-07-04T09:18:16Z")
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
    var markerDevice_10604=L.marker([22.4503,114.0], {icon: iconDevice_10604}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10604<br> ESN :ESN<br> starts at 2017-07-04T09:16:37Z");
    var myStyleDevice_10604 = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10604 = {
    radius: 5,
    fillColor: "#008080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10604<br> ESN :ESN<br> starts at 2017-07-04T09:16:37Z")
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
    var markerDevice_10605=L.marker([22.4505,114.0], {icon: iconDevice_10605}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10605<br> ESN :ESN<br> starts at 2017-07-04T09:17:50Z");
    var myStyleDevice_10605 = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10605 = {
    radius: 5,
    fillColor: "#0000FF",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10605<br> ESN :ESN<br> starts at 2017-07-04T09:17:50Z")
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
    var markerDevice_10606=L.marker([22.4504,114.0], {icon: iconDevice_10606}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10606<br> ESN :ESN<br> starts at 2017-07-04T09:23:11Z");
    var myStyleDevice_10606 = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10606 = {
    radius: 5,
    fillColor: "#000080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10606<br> ESN :ESN<br> starts at 2017-07-04T09:23:11Z")
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
    var markerDevice_10607=L.marker([22.4503,114.0], {icon: iconDevice_10607}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10607<br> ESN :ESN<br> starts at 2017-07-04T09:23:18Z");
    var myStyleDevice_10607 = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10607 = {
    radius: 5,
    fillColor: "#FF00FF",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10607<br> ESN :ESN<br> starts at 2017-07-04T09:23:18Z")
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
    var markerDevice_10608=L.marker([22.4506,114.0], {icon: iconDevice_10608}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10608<br> ESN :ESN<br> starts at 2017-07-04T09:16:47Z");
    var myStyleDevice_10608 = {
    "color": "#800080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10608 = {
    radius: 5,
    fillColor: "#800080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10608<br> ESN :ESN<br> starts at 2017-07-04T09:16:47Z")
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
    var markerDevice_10609=L.marker([22.4504,114.0], {icon: iconDevice_10609}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10609<br> ESN :ESN<br> starts at 2017-07-04T09:17:46Z");
    var myStyleDevice_10609 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10609 = {
    radius: 5,
    fillColor: "#000000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10609<br> ESN :ESN<br> starts at 2017-07-04T09:17:46Z")
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
    var markerDevice_10610=L.marker([22.4504,114.0], {icon: iconDevice_10610}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10610<br> ESN :ESN<br> starts at 2017-07-04T09:19:27Z");
    var myStyleDevice_10610 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10610 = {
    radius: 5,
    fillColor: "#FF0000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Pui Shing Catholic Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10610<br> ESN :ESN<br> starts at 2017-07-04T09:19:27Z")
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
    var markerDevice_10701=L.marker([22.3144,114.234], {icon: iconDevice_10701}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10701<br> ESN :ESN<br> starts at 2017-07-08T09:46:45Z");
    var myStyleDevice_10701 = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10701 = {
    radius: 5,
    fillColor: "#808080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10701<br> ESN :ESN<br> starts at 2017-07-08T09:46:45Z")
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
    var markerDevice_10702=L.marker([22.3144,114.234], {icon: iconDevice_10702}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10702<br> ESN :ESN<br> starts at 2017-07-08T09:50:35Z");
    var myStyleDevice_10702 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10702 = {
    radius: 5,
    fillColor: "#000000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10702<br> ESN :ESN<br> starts at 2017-07-08T09:50:35Z")
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
    var markerDevice_10703=L.marker([22.3148,114.233], {icon: iconDevice_10703}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10703<br> ESN :ESN<br> starts at 2017-07-08T09:46:43Z");
    var myStyleDevice_10703 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10703 = {
    radius: 5,
    fillColor: "#FF0000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10703<br> ESN :ESN<br> starts at 2017-07-08T09:46:43Z")
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
    var markerDevice_10704=L.marker([22.3144,114.234], {icon: iconDevice_10704}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10704<br> ESN :ESN<br> starts at 2017-07-08T09:46:43Z");
    var myStyleDevice_10704 = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10704 = {
    radius: 5,
    fillColor: "#800000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10704<br> ESN :ESN<br> starts at 2017-07-08T09:46:43Z")
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
    var markerDevice_10705=L.marker([22.3145,114.234], {icon: iconDevice_10705}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10705<br> ESN :ESN<br> starts at 2017-07-08T09:46:46Z");
    var myStyleDevice_10705 = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10705 = {
    radius: 5,
    fillColor: "#FFFF00",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10705<br> ESN :ESN<br> starts at 2017-07-08T09:46:46Z")
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
    var markerDevice_10706=L.marker([22.3144,114.234], {icon: iconDevice_10706}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10706<br> ESN :ESN<br> starts at 2017-07-08T09:49:37Z");
    var myStyleDevice_10706 = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10706 = {
    radius: 5,
    fillColor: "#808000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10706<br> ESN :ESN<br> starts at 2017-07-08T09:49:37Z")
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
    var markerDevice_10707=L.marker([22.3144,114.234], {icon: iconDevice_10707}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10707<br> ESN :ESN<br> starts at 2017-07-08T09:46:46Z");
    var myStyleDevice_10707 = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10707 = {
    radius: 5,
    fillColor: "#00FF00",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10707<br> ESN :ESN<br> starts at 2017-07-08T09:46:46Z")
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
    var markerDevice_10708=L.marker([22.3144,114.234], {icon: iconDevice_10708}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10708<br> ESN :ESN<br> starts at 2017-07-08T09:46:45Z");
    var myStyleDevice_10708 = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10708 = {
    radius: 5,
    fillColor: "#008000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10708<br> ESN :ESN<br> starts at 2017-07-08T09:46:45Z")
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
    var markerDevice_10709=L.marker([22.3144,114.234], {icon: iconDevice_10709}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10709<br> ESN :ESN<br> starts at 2017-07-08T09:58:04Z");
    var myStyleDevice_10709 = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10709 = {
    radius: 5,
    fillColor: "#008080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10709<br> ESN :ESN<br> starts at 2017-07-08T09:58:04Z")
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
    var markerDevice_10710=L.marker([22.3144,114.234], {icon: iconDevice_10710}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10710<br> ESN :ESN<br> starts at 2017-07-08T09:54:49Z");
    var myStyleDevice_10710 = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10710 = {
    radius: 5,
    fillColor: "#0000FF",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> HKSKH Bishop Hall Secondary School<br> Teacher/PI : ___<br> Deployment_ ID : 10710<br> ESN :ESN<br> starts at 2017-07-08T09:54:49Z")
    }});
    var gpxLayerDevice_10710 = omnivore.gpx('data/Device_10710.gpx', null, customLayerDevice_10710).on('ready', function() {

    });

    var gpxTimeLayerDevice_10710 = L.timeDimension.layer.geoJson(gpxLayerDevice_10710, {

    addlastPoint: true,
    waitForReady: true,
    });
    var gpxaddmarkerDevice_10710 =L.layerGroup([markerDevice_10710,gpxTimeLayerDevice_10710]);

    

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
"Device_50003": gpxaddmarkerDevice_50003,
"Device_50004": gpxaddmarkerDevice_50004,
"Device_50006": gpxaddmarkerDevice_50006,
"Device_50007": gpxaddmarkerDevice_50007,
"Device_50009": gpxaddmarkerDevice_50009,
"Device_10101": gpxaddmarkerDevice_10101,
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
"Device_10306": gpxaddmarkerDevice_10306,
"Device_10307": gpxaddmarkerDevice_10307,
"Device_10308": gpxaddmarkerDevice_10308,
"Device_10309": gpxaddmarkerDevice_10309,
"Device_10310": gpxaddmarkerDevice_10310,
"Device_10401": gpxaddmarkerDevice_10401,
"Device_10402": gpxaddmarkerDevice_10402,
"Device_10403": gpxaddmarkerDevice_10403,
"Device_10404": gpxaddmarkerDevice_10404,
"Device_10406": gpxaddmarkerDevice_10406,
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
"Device_10710": gpxaddmarkerDevice_10710,};

        var baseLayers = getCommonBaseLayers(map); // see baselayers.js
        L.control.layers.selectAll = function(baseLayers, overlays, options) {
            return new L.Control.Layers.SelectAll(baseLayers, overlays, options);
        };
        L.control.layers.selectAll(baseLayers, overlayMaps).addTo(map);
gpxaddmarkerDevice_50001.addTo(map);
gpxaddmarkerDevice_50002.addTo(map);
gpxaddmarkerDevice_50003.addTo(map);
gpxaddmarkerDevice_50004.addTo(map);
gpxaddmarkerDevice_50006.addTo(map);
gpxaddmarkerDevice_50007.addTo(map);
gpxaddmarkerDevice_50009.addTo(map);
gpxaddmarkerDevice_10101.addTo(map);
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
gpxaddmarkerDevice_10306.addTo(map);
gpxaddmarkerDevice_10307.addTo(map);
gpxaddmarkerDevice_10308.addTo(map);
gpxaddmarkerDevice_10309.addTo(map);
gpxaddmarkerDevice_10310.addTo(map);
gpxaddmarkerDevice_10401.addTo(map);
gpxaddmarkerDevice_10402.addTo(map);
gpxaddmarkerDevice_10403.addTo(map);
gpxaddmarkerDevice_10404.addTo(map);
gpxaddmarkerDevice_10406.addTo(map);
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
    
