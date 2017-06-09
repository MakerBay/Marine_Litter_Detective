var startDate = new Date();
startDate.setUTCHours(0, 0, 0, 0);

var map = L.map('map', {
    zoom: 12,
    fullscreenControl: true,
    center: [42, -69]
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


var icon_OurNOAAlab = new L.icon({
    iconUrl: 'img/noaa-transparent-logo.png',
    iconSize: [25, 25],
    
});   
var customPopup = "<h2>Welcome to our office</h2><h3>Jim Manning <br>508-566-4080 <br>15 Carlson Lane, Falmouth,MA, 02540</h3><br/><img src='https://drive.google.com/uc?id=0Bw4-TSxorJaSOW5aeTl1NXV0czA' alt='maptime logo gif' width='250' height='190'/>";     
L.marker([41.57027,-70.620188], {icon: icon_OurNOAAlab}).bindPopup(customPopup).addTo(map);   
var myStyle_OurNOAAlab = {
    "color": "#FFFFFF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions_OurNOAAlab = {
    radius: 5,
    fillColor: "#FFFFFF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer_OurNOAAlab = L.geoJson(null,{
    
    style: myStyle_OurNOAAlab,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions_OurNOAAlab);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter _OurNOAAlab<br> start at 2016-01-28T07:00')
    }});
var gpxLayer_OurNOAAlab = omnivore.gpx('data/_OurNOAAlab.gpx', null, customLayer_OurNOAAlab).on('ready', function() {});


var gpxTimeLayer_OurNOAAlab = L.timeDimension.layer.geoJson(gpxLayer_OurNOAAlab, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true, 
    });

$('#dtp_start').datetimepicker({
    inline: true,
    value: new Date("2016-01-28"),
    format: "c"
});
$('#dtp_end').datetimepicker({
    inline: true,
    value: new Date("2017-05-04"),
    format: "c"
});
    
var iconUWyoming = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerUWyoming=L.marker([-23.0078172684,-112.56608963], {icon: iconUWyoming}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> UWyomin<br> Teacher/PI : ep<br> Deployment_ ID : 172231121<br> ESN :377400<br> starts at 2017-02-12T18:38");   
var myStyleUWyoming = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsUWyoming = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerUWyoming = L.geoJson(null,{
    
    style: myStyleUWyoming,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsUWyoming);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> UWyomin<br> Teacher/PI : ep<br> Deployment_ ID : 172231121<br> ESN :377400<br> starts at 2017-02-12T18:38")
    }});
var gpxLayerUWyoming = omnivore.gpx('data/UWyoming.gpx', null, customLayerUWyoming).on('ready', function() {
    map.fitBounds(gpxLayerUWyoming.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerUWyoming = L.timeDimension.layer.geoJson(gpxLayerUWyoming, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerUWyoming =L.layerGroup([markerUWyoming,gpxTimeLayerUWyoming]);   
    
    
var iconUCONN = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerUCONN=L.marker([41.15658,-72.79139], {icon: iconUCONN}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> UCON<br> Teacher/PI : Jia<br> Deployment_ ID : 174410726<br> ESN :1348416<br> starts at 2017-04-12T16:45");   
var myStyleUCONN = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsUCONN = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerUCONN = L.geoJson(null,{
    
    style: myStyleUCONN,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsUCONN);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> UCON<br> Teacher/PI : Jia<br> Deployment_ ID : 174410726<br> ESN :1348416<br> starts at 2017-04-12T16:45")
    }});
var gpxLayerUCONN = omnivore.gpx('data/UCONN.gpx', null, customLayerUCONN).on('ready', function() {
    map.fitBounds(gpxLayerUCONN.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerUCONN = L.timeDimension.layer.geoJson(gpxLayerUCONN, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerUCONN =L.layerGroup([markerUCONN,gpxTimeLayerUCONN]);   
    
    
var iconSt_Andrews_Math_and_Science = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSt_Andrews_Math_and_Science=L.marker([43.76289,-18.05871], {icon: iconSt_Andrews_Math_and_Science}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> St_Andrews_Math_and_Scienc<br> Teacher/PI : Carolina_Dreamer<br> Deployment_ ID : 167470091<br> ESN :1351495<br> starts at 2016-07-18T19:52");   
var myStyleSt_Andrews_Math_and_Science = {
    "color": "#800080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSt_Andrews_Math_and_Science = {
    radius: 5,
    fillColor: "#800080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerSt_Andrews_Math_and_Science = L.geoJson(null,{
    
    style: myStyleSt_Andrews_Math_and_Science,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsSt_Andrews_Math_and_Science);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> St_Andrews_Math_and_Scienc<br> Teacher/PI : Carolina_Dreamer<br> Deployment_ ID : 167470091<br> ESN :1351495<br> starts at 2016-07-18T19:52")
    }});
var gpxLayerSt_Andrews_Math_and_Science = omnivore.gpx('data/St_Andrews_Math_and_Science.gpx', null, customLayerSt_Andrews_Math_and_Science).on('ready', function() {
    map.fitBounds(gpxLayerSt_Andrews_Math_and_Science.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerSt_Andrews_Math_and_Science = L.timeDimension.layer.geoJson(gpxLayerSt_Andrews_Math_and_Science, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerSt_Andrews_Math_and_Science =L.layerGroup([markerSt_Andrews_Math_and_Science,gpxTimeLayerSt_Andrews_Math_and_Science]);   
    
    
var iconShields_Elementary = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerShields_Elementary=L.marker([35.5364584923,-68.7495446205], {icon: iconShields_Elementary}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> Shields_Elementar<br> Teacher/PI : ep<br> Deployment_ ID : 160380751<br> ESN :565060<br> starts at 2016-12-19T07:48");   
var myStyleShields_Elementary = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsShields_Elementary = {
    radius: 5,
    fillColor: "#808080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerShields_Elementary = L.geoJson(null,{
    
    style: myStyleShields_Elementary,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsShields_Elementary);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> Shields_Elementar<br> Teacher/PI : ep<br> Deployment_ ID : 160380751<br> ESN :565060<br> starts at 2016-12-19T07:48")
    }});
var gpxLayerShields_Elementary = omnivore.gpx('data/Shields_Elementary.gpx', null, customLayerShields_Elementary).on('ready', function() {
    map.fitBounds(gpxLayerShields_Elementary.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerShields_Elementary = L.timeDimension.layer.geoJson(gpxLayerShields_Elementary, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerShields_Elementary =L.layerGroup([markerShields_Elementary,gpxTimeLayerShields_Elementary]);   
    
    
var iconScarborough_ME_Elementary = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerScarborough_ME_Elementary=L.marker([42.07783,-67.13037], {icon: iconScarborough_ME_Elementary}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> Scarborough_ME_Elementar<br> Teacher/PI : Lighting_Boat<br> Deployment_ ID : 161400681<br> ESN :744905<br> starts at 2016-02-18T09:27");   
var myStyleScarborough_ME_Elementary = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsScarborough_ME_Elementary = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerScarborough_ME_Elementary = L.geoJson(null,{
    
    style: myStyleScarborough_ME_Elementary,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsScarborough_ME_Elementary);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> Scarborough_ME_Elementar<br> Teacher/PI : Lighting_Boat<br> Deployment_ ID : 161400681<br> ESN :744905<br> starts at 2016-02-18T09:27")
    }});
var gpxLayerScarborough_ME_Elementary = omnivore.gpx('data/Scarborough_ME_Elementary.gpx', null, customLayerScarborough_ME_Elementary).on('ready', function() {
    map.fitBounds(gpxLayerScarborough_ME_Elementary.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerScarborough_ME_Elementary = L.timeDimension.layer.geoJson(gpxLayerScarborough_ME_Elementary, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerScarborough_ME_Elementary =L.layerGroup([markerScarborough_ME_Elementary,gpxTimeLayerScarborough_ME_Elementary]);   
    
    
var iconRadcliffe_Creek_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerRadcliffe_Creek_School=L.marker([34.51789,-67.83491], {icon: iconRadcliffe_Creek_School}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> Radcliffe_Creek_Schoo<br> Teacher/PI : Radcliffe_Creek_Heron<br> Deployment_ ID : 166390752<br> ESN :1348722<br> starts at 2016-06-15T11:39");   
var myStyleRadcliffe_Creek_School = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsRadcliffe_Creek_School = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerRadcliffe_Creek_School = L.geoJson(null,{
    
    style: myStyleRadcliffe_Creek_School,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsRadcliffe_Creek_School);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> Radcliffe_Creek_Schoo<br> Teacher/PI : Radcliffe_Creek_Heron<br> Deployment_ ID : 166390752<br> ESN :1348722<br> starts at 2016-06-15T11:39")
    }});
var gpxLayerRadcliffe_Creek_School = omnivore.gpx('data/Radcliffe_Creek_School.gpx', null, customLayerRadcliffe_Creek_School).on('ready', function() {
    map.fitBounds(gpxLayerRadcliffe_Creek_School.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerRadcliffe_Creek_School = L.timeDimension.layer.geoJson(gpxLayerRadcliffe_Creek_School, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerRadcliffe_Creek_School =L.layerGroup([markerRadcliffe_Creek_School,gpxTimeLayerRadcliffe_Creek_School]);   
    
    
var iconParish_Harbor_Pilot = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerParish_Harbor_Pilot=L.marker([34.52652,-67.84772], {icon: iconParish_Harbor_Pilot}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> Parish_Harbor_Pilo<br> Teacher/PI : Cougars<br> Deployment_ ID : 166390751<br> ESN :1348718<br> starts at 2016-06-15T11:35");   
var myStyleParish_Harbor_Pilot = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsParish_Harbor_Pilot = {
    radius: 5,
    fillColor: "#808000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerParish_Harbor_Pilot = L.geoJson(null,{
    
    style: myStyleParish_Harbor_Pilot,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsParish_Harbor_Pilot);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> Parish_Harbor_Pilo<br> Teacher/PI : Cougars<br> Deployment_ ID : 166390751<br> ESN :1348718<br> starts at 2016-06-15T11:35")
    }});
var gpxLayerParish_Harbor_Pilot = omnivore.gpx('data/Parish_Harbor_Pilot.gpx', null, customLayerParish_Harbor_Pilot).on('ready', function() {
    map.fitBounds(gpxLayerParish_Harbor_Pilot.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerParish_Harbor_Pilot = L.timeDimension.layer.geoJson(gpxLayerParish_Harbor_Pilot, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerParish_Harbor_Pilot =L.layerGroup([markerParish_Harbor_Pilot,gpxTimeLayerParish_Harbor_Pilot]);   
    
    
var iconNH_schools = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerNH_schools=L.marker([43.0451309681,-70.7144665718], {icon: iconNH_schools}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> NH_school<br> Teacher/PI : ep<br> Deployment_ ID : 173420701<br> ESN :564160<br> starts at 2017-02-21T10:57");   
var myStyleNH_schools = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsNH_schools = {
    radius: 5,
    fillColor: "#000080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerNH_schools = L.geoJson(null,{
    
    style: myStyleNH_schools,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsNH_schools);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> NH_school<br> Teacher/PI : ep<br> Deployment_ ID : 173420701<br> ESN :564160<br> starts at 2017-02-21T10:57")
    }});
var gpxLayerNH_schools = omnivore.gpx('data/NH_schools.gpx', null, customLayerNH_schools).on('ready', function() {
    map.fitBounds(gpxLayerNH_schools.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerNH_schools = L.timeDimension.layer.geoJson(gpxLayerNH_schools, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerNH_schools =L.layerGroup([markerNH_schools,gpxTimeLayerNH_schools]);   
    
    
var iconNB_AQ = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerNB_AQ=L.marker([41.8137073517,-70.7981944084], {icon: iconNB_AQ}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> NB_A<br> Teacher/PI : ep<br> Deployment_ ID : 1754107030<br> ESN :560070<br> starts at 2017-09-23T15:58");   
var myStyleNB_AQ = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsNB_AQ = {
    radius: 5,
    fillColor: "#FF00FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerNB_AQ = L.geoJson(null,{
    
    style: myStyleNB_AQ,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsNB_AQ);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> NB_A<br> Teacher/PI : ep<br> Deployment_ ID : 1754107030<br> ESN :560070<br> starts at 2017-09-23T15:58")
    }});
var gpxLayerNB_AQ = omnivore.gpx('data/NB_AQ.gpx', null, customLayerNB_AQ).on('ready', function() {
    map.fitBounds(gpxLayerNB_AQ.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerNB_AQ = L.timeDimension.layer.geoJson(gpxLayerNB_AQ, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerNB_AQ =L.layerGroup([markerNB_AQ,gpxTimeLayerNB_AQ]);   
    
    
var iconMorristown_Beard = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerMorristown_Beard=L.marker([35.34625,-68.73626], {icon: iconMorristown_Beard}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> Morristown_Bear<br> Teacher/PI : SS_Beard<br> Deployment_ ID : 160370723<br> ESN :1352217<br> starts at 2016-12-19T00:13");   
var myStyleMorristown_Beard = {
    "color": "#FFFFFF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsMorristown_Beard = {
    radius: 5,
    fillColor: "#FFFFFF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerMorristown_Beard = L.geoJson(null,{
    
    style: myStyleMorristown_Beard,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsMorristown_Beard);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> Morristown_Bear<br> Teacher/PI : SS_Beard<br> Deployment_ ID : 160370723<br> ESN :1352217<br> starts at 2016-12-19T00:13")
    }});
var gpxLayerMorristown_Beard = omnivore.gpx('data/Morristown_Beard.gpx', null, customLayerMorristown_Beard).on('ready', function() {
    map.fitBounds(gpxLayerMorristown_Beard.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerMorristown_Beard = L.timeDimension.layer.geoJson(gpxLayerMorristown_Beard, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerMorristown_Beard =L.layerGroup([markerMorristown_Beard,gpxTimeLayerMorristown_Beard]);   
    
    
var iconMemorial_University = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerMemorial_University=L.marker([46.82825,-47.7293], {icon: iconMemorial_University}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> Memorial_Universit<br> Teacher/PI : Mobile_Goat<br> Deployment_ ID : 160410691<br> ESN :1374056<br> starts at 2016-11-24T01:47");   
var myStyleMemorial_University = {
    "color": "#C0C0C0",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsMemorial_University = {
    radius: 5,
    fillColor: "#C0C0C0",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerMemorial_University = L.geoJson(null,{
    
    style: myStyleMemorial_University,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsMemorial_University);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> Memorial_Universit<br> Teacher/PI : Mobile_Goat<br> Deployment_ ID : 160410691<br> ESN :1374056<br> starts at 2016-11-24T01:47")
    }});
var gpxLayerMemorial_University = omnivore.gpx('data/Memorial_University.gpx', null, customLayerMemorial_University).on('ready', function() {
    map.fitBounds(gpxLayerMemorial_University.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerMemorial_University = L.timeDimension.layer.geoJson(gpxLayerMemorial_University, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerMemorial_University =L.layerGroup([markerMemorial_University,gpxTimeLayerMemorial_University]);   
    
    
var iconKennebunkAlternative = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerKennebunkAlternative=L.marker([41.8313133717,-65.351421833], {icon: iconKennebunkAlternative}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> KennebunkAlternativ<br> Teacher/PI : ep<br> Deployment_ ID : 171400681<br> ESN :566060<br> starts at 2017-01-02T17:48");   
var myStyleKennebunkAlternative = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsKennebunkAlternative = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerKennebunkAlternative = L.geoJson(null,{
    
    style: myStyleKennebunkAlternative,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsKennebunkAlternative);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> KennebunkAlternativ<br> Teacher/PI : ep<br> Deployment_ ID : 171400681<br> ESN :566060<br> starts at 2017-01-02T17:48")
    }});
var gpxLayerKennebunkAlternative = omnivore.gpx('data/KennebunkAlternative.gpx', null, customLayerKennebunkAlternative).on('ready', function() {
    map.fitBounds(gpxLayerKennebunkAlternative.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerKennebunkAlternative = L.timeDimension.layer.geoJson(gpxLayerKennebunkAlternative, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerKennebunkAlternative =L.layerGroup([markerKennebunkAlternative,gpxTimeLayerKennebunkAlternative]);   
    
    
var iconJenner_Dunnellon = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerJenner_Dunnellon=L.marker([29.05461,-82.46621], {icon: iconJenner_Dunnellon}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> Jenner_Dunnello<br> Teacher/PI : Jenner_Dunnellon<br> Deployment_ ID : 160290821<br> ESN :1374125<br> starts at 2016-11-15T01:27");   
var myStyleJenner_Dunnellon = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsJenner_Dunnellon = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerJenner_Dunnellon = L.geoJson(null,{
    
    style: myStyleJenner_Dunnellon,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsJenner_Dunnellon);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> Jenner_Dunnello<br> Teacher/PI : Jenner_Dunnellon<br> Deployment_ ID : 160290821<br> ESN :1374125<br> starts at 2016-11-15T01:27")
    }});
var gpxLayerJenner_Dunnellon = omnivore.gpx('data/Jenner_Dunnellon.gpx', null, customLayerJenner_Dunnellon).on('ready', function() {
    map.fitBounds(gpxLayerJenner_Dunnellon.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerJenner_Dunnellon = L.timeDimension.layer.geoJson(gpxLayerJenner_Dunnellon, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerJenner_Dunnellon =L.layerGroup([markerJenner_Dunnellon,gpxTimeLayerJenner_Dunnellon]);   
    
    
var iconHarbor_View_Elementary = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerHarbor_View_Elementary=L.marker([32.72552,-79.93766], {icon: iconHarbor_View_Elementary}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> Harbor_View_Elementar<br> Teacher/PI : HVES_Cruiser<br> Deployment_ ID : 173320791<br> ESN :1351238<br> starts at 2017-07-13T11:28");   
var myStyleHarbor_View_Elementary = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsHarbor_View_Elementary = {
    radius: 5,
    fillColor: "#00FF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerHarbor_View_Elementary = L.geoJson(null,{
    
    style: myStyleHarbor_View_Elementary,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsHarbor_View_Elementary);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> Harbor_View_Elementar<br> Teacher/PI : HVES_Cruiser<br> Deployment_ ID : 173320791<br> ESN :1351238<br> starts at 2017-07-13T11:28")
    }});
var gpxLayerHarbor_View_Elementary = omnivore.gpx('data/Harbor_View_Elementary.gpx', null, customLayerHarbor_View_Elementary).on('ready', function() {
    map.fitBounds(gpxLayerHarbor_View_Elementary.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerHarbor_View_Elementary = L.timeDimension.layer.geoJson(gpxLayerHarbor_View_Elementary, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerHarbor_View_Elementary =L.layerGroup([markerHarbor_View_Elementary,gpxTimeLayerHarbor_View_Elementary]);   
    
    
var iconGraffius = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerGraffius=L.marker([51.84874,-8.301051], {icon: iconGraffius}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> Graffiu<br> Teacher/PI : Red_Storm<br> Deployment_ ID : 170510081<br> ESN :1352219<br> starts at 2017-10-31T09:08");   
var myStyleGraffius = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsGraffius = {
    radius: 5,
    fillColor: "#008000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerGraffius = L.geoJson(null,{
    
    style: myStyleGraffius,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsGraffius);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> Graffiu<br> Teacher/PI : Red_Storm<br> Deployment_ ID : 170510081<br> ESN :1352219<br> starts at 2017-10-31T09:08")
    }});
var gpxLayerGraffius = omnivore.gpx('data/Graffius.gpx', null, customLayerGraffius).on('ready', function() {
    map.fitBounds(gpxLayerGraffius.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerGraffius = L.timeDimension.layer.geoJson(gpxLayerGraffius, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerGraffius =L.layerGroup([markerGraffius,gpxTimeLayerGraffius]);   
    
    
var iconEndicott_College = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerEndicott_College=L.marker([40.1002156734,-71.7344141006], {icon: iconEndicott_College}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> Endicott_Colleg<br> Teacher/PI : ep<br> Deployment_ ID : 172400711<br> ESN :858200<br> starts at 2017-02-21T18:15");   
var myStyleEndicott_College = {
    "color": "#FFFFFF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsEndicott_College = {
    radius: 5,
    fillColor: "#FFFFFF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerEndicott_College = L.geoJson(null,{
    
    style: myStyleEndicott_College,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsEndicott_College);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> Endicott_Colleg<br> Teacher/PI : ep<br> Deployment_ ID : 172400711<br> ESN :858200<br> starts at 2017-02-21T18:15")
    }});
var gpxLayerEndicott_College = omnivore.gpx('data/Endicott_College.gpx', null, customLayerEndicott_College).on('ready', function() {
    map.fitBounds(gpxLayerEndicott_College.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerEndicott_College = L.timeDimension.layer.geoJson(gpxLayerEndicott_College, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerEndicott_College =L.layerGroup([markerEndicott_College,gpxTimeLayerEndicott_College]);   
    
    
var iconElHeirro2 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerElHeirro2=L.marker([27.6804935932,-17.8919434547], {icon: iconElHeirro2}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> ElHeirro<br> Teacher/PI : plocan<br> Deployment_ ID : 164270152<br> ESN :373680<br> starts at 2016-05-12T14:53");   
var myStyleElHeirro2 = {
    "color": "#C0C0C0",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsElHeirro2 = {
    radius: 5,
    fillColor: "#C0C0C0",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerElHeirro2 = L.geoJson(null,{
    
    style: myStyleElHeirro2,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsElHeirro2);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> ElHeirro<br> Teacher/PI : plocan<br> Deployment_ ID : 164270152<br> ESN :373680<br> starts at 2016-05-12T14:53")
    }});
var gpxLayerElHeirro2 = omnivore.gpx('data/ElHeirro2.gpx', null, customLayerElHeirro2).on('ready', function() {
    map.fitBounds(gpxLayerElHeirro2.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerElHeirro2 = L.timeDimension.layer.geoJson(gpxLayerElHeirro2, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerElHeirro2 =L.layerGroup([markerElHeirro2,gpxTimeLayerElHeirro2]);   
    
    
var iconElHeirro1 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerElHeirro1=L.marker([27.6439189911,-17.9971504211], {icon: iconElHeirro1}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> ElHeirro<br> Teacher/PI : plocan<br> Deployment_ ID : 160270151<br> ESN :377670<br> starts at 2016-12-01T17:19");   
var myStyleElHeirro1 = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsElHeirro1 = {
    radius: 5,
    fillColor: "#808080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerElHeirro1 = L.geoJson(null,{
    
    style: myStyleElHeirro1,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsElHeirro1);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> ElHeirro<br> Teacher/PI : plocan<br> Deployment_ ID : 160270151<br> ESN :377670<br> starts at 2016-12-01T17:19")
    }});
var gpxLayerElHeirro1 = omnivore.gpx('data/ElHeirro1.gpx', null, customLayerElHeirro1).on('ready', function() {
    map.fitBounds(gpxLayerElHeirro1.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerElHeirro1 = L.timeDimension.layer.geoJson(gpxLayerElHeirro1, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerElHeirro1 =L.layerGroup([markerElHeirro1,gpxTimeLayerElHeirro1]);   
    
    
var iconEBS_Anselmo_de_Andrade = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerEBS_Anselmo_de_Andrade=L.marker([35.7836616039,-14.0235328674], {icon: iconEBS_Anselmo_de_Andrade}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> EBS_Anselmo_de_Andrad<br> Teacher/PI : ep<br> Deployment_ ID : 171320161<br> ESN :379700<br> starts at 2017-01-12T03:09");   
var myStyleEBS_Anselmo_de_Andrade = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsEBS_Anselmo_de_Andrade = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerEBS_Anselmo_de_Andrade = L.geoJson(null,{
    
    style: myStyleEBS_Anselmo_de_Andrade,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsEBS_Anselmo_de_Andrade);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> EBS_Anselmo_de_Andrad<br> Teacher/PI : ep<br> Deployment_ ID : 171320161<br> ESN :379700<br> starts at 2017-01-12T03:09")
    }});
var gpxLayerEBS_Anselmo_de_Andrade = omnivore.gpx('data/EBS_Anselmo_de_Andrade.gpx', null, customLayerEBS_Anselmo_de_Andrade).on('ready', function() {
    map.fitBounds(gpxLayerEBS_Anselmo_de_Andrade.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerEBS_Anselmo_de_Andrade = L.timeDimension.layer.geoJson(gpxLayerEBS_Anselmo_de_Andrade, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerEBS_Anselmo_de_Andrade =L.layerGroup([markerEBS_Anselmo_de_Andrade,gpxTimeLayerEBS_Anselmo_de_Andrade]);   
    
    
var iconEB23_Torre_and_EB123_Bartolomeu_Perestrelo = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerEB23_Torre_and_EB123_Bartolomeu_Perestrelo=L.marker([32.6365721226,-16.9356608391], {icon: iconEB23_Torre_and_EB123_Bartolomeu_Perestrelo}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> EB23_Torre_and_EB123_Bartolomeu_Perestrel<br> Teacher/PI : ep<br> Deployment_ ID : 160320161<br> ESN :375690<br> starts at 2016-11-30T22:03");   
var myStyleEB23_Torre_and_EB123_Bartolomeu_Perestrelo = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsEB23_Torre_and_EB123_Bartolomeu_Perestrelo = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerEB23_Torre_and_EB123_Bartolomeu_Perestrelo = L.geoJson(null,{
    
    style: myStyleEB23_Torre_and_EB123_Bartolomeu_Perestrelo,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsEB23_Torre_and_EB123_Bartolomeu_Perestrelo);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> EB23_Torre_and_EB123_Bartolomeu_Perestrel<br> Teacher/PI : ep<br> Deployment_ ID : 160320161<br> ESN :375690<br> starts at 2016-11-30T22:03")
    }});
var gpxLayerEB23_Torre_and_EB123_Bartolomeu_Perestrelo = omnivore.gpx('data/EB23_Torre_and_EB123_Bartolomeu_Perestrelo.gpx', null, customLayerEB23_Torre_and_EB123_Bartolomeu_Perestrelo).on('ready', function() {
    map.fitBounds(gpxLayerEB23_Torre_and_EB123_Bartolomeu_Perestrelo.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerEB23_Torre_and_EB123_Bartolomeu_Perestrelo = L.timeDimension.layer.geoJson(gpxLayerEB23_Torre_and_EB123_Bartolomeu_Perestrelo, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerEB23_Torre_and_EB123_Bartolomeu_Perestrelo =L.layerGroup([markerEB23_Torre_and_EB123_Bartolomeu_Perestrelo,gpxTimeLayerEB23_Torre_and_EB123_Bartolomeu_Perestrelo]);   
    
    
var iconCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta=L.marker([38.5414230824,-28.6240410805], {icon: iconCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> Casa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Hort<br> Teacher/PI : ep<br> Deployment_ ID : 160370281<br> ESN :371660<br> starts at 2016-10-03T15:58");   
var myStyleCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta = L.geoJson(null,{
    
    style: myStyleCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> Casa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Hort<br> Teacher/PI : ep<br> Deployment_ ID : 160370281<br> ESN :371660<br> starts at 2016-10-03T15:58")
    }});
var gpxLayerCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta = omnivore.gpx('data/Casa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta.gpx', null, customLayerCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta).on('ready', function() {
    map.fitBounds(gpxLayerCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta = L.timeDimension.layer.geoJson(gpxLayerCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta =L.layerGroup([markerCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta,gpxTimeLayerCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta]);   
    
    
var iconCalifornia_Maritime_Academy = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerCalifornia_Maritime_Academy=L.marker([37.7661144733,-122.255516052], {icon: iconCalifornia_Maritime_Academy}).bindPopup("    Sailboat Deployed here  <br> School/Lab :<br> California_Maritime_Academ<br> Teacher/PI : ep<br> Deployment_ ID : 174371221<br> ESN :569160<br> starts at 2017-03-07T04:05");   
var myStyleCalifornia_Maritime_Academy = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsCalifornia_Maritime_Academy = {
    radius: 5,
    fillColor: "#808000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerCalifornia_Maritime_Academy = L.geoJson(null,{
    
    style: myStyleCalifornia_Maritime_Academy,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsCalifornia_Maritime_Academy);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Sailboat   <br> School/Lab :<br> California_Maritime_Academ<br> Teacher/PI : ep<br> Deployment_ ID : 174371221<br> ESN :569160<br> starts at 2017-03-07T04:05")
    }});
var gpxLayerCalifornia_Maritime_Academy = omnivore.gpx('data/California_Maritime_Academy.gpx', null, customLayerCalifornia_Maritime_Academy).on('ready', function() {
    map.fitBounds(gpxLayerCalifornia_Maritime_Academy.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerCalifornia_Maritime_Academy = L.timeDimension.layer.geoJson(gpxLayerCalifornia_Maritime_Academy, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerCalifornia_Maritime_Academy =L.layerGroup([markerCalifornia_Maritime_Academy,gpxTimeLayerCalifornia_Maritime_Academy]);   
    
    
var officelegend = L.control({
    position: 'bottomright'
});
officelegend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += '<img src="img/starticon.png" width="20" height="20"  /> Sailboat start location <br> <img src="img/noaa-transparent-logo.png" width="20" height="20"  /> Our Office';
    return div;
};
officelegend.addTo(map);
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

"UWyoming": gpxaddmarkerUWyoming,
"UCONN": gpxaddmarkerUCONN,
"St_Andrews_Math_and_Science": gpxaddmarkerSt_Andrews_Math_and_Science,
"Shields_Elementary": gpxaddmarkerShields_Elementary,
"Scarborough_ME_Elementary": gpxaddmarkerScarborough_ME_Elementary,
"Radcliffe_Creek_School": gpxaddmarkerRadcliffe_Creek_School,
"Parish_Harbor_Pilot": gpxaddmarkerParish_Harbor_Pilot,
"NH_schools": gpxaddmarkerNH_schools,
"NB_AQ": gpxaddmarkerNB_AQ,
"Morristown_Beard": gpxaddmarkerMorristown_Beard,
"Memorial_University": gpxaddmarkerMemorial_University,
"KennebunkAlternative": gpxaddmarkerKennebunkAlternative,
"Jenner_Dunnellon": gpxaddmarkerJenner_Dunnellon,
"Harbor_View_Elementary": gpxaddmarkerHarbor_View_Elementary,
"Graffius": gpxaddmarkerGraffius,
"Endicott_College": gpxaddmarkerEndicott_College,
"ElHeirro2": gpxaddmarkerElHeirro2,
"ElHeirro1": gpxaddmarkerElHeirro1,
"EBS_Anselmo_de_Andrade": gpxaddmarkerEBS_Anselmo_de_Andrade,
"EB23_Torre_and_EB123_Bartolomeu_Perestrelo": gpxaddmarkerEB23_Torre_and_EB123_Bartolomeu_Perestrelo,
"Casa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta": gpxaddmarkerCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta,
"California_Maritime_Academy": gpxaddmarkerCalifornia_Maritime_Academy,};

var baseLayers = getCommonBaseLayers(map); // see baselayers.js
L.control.layers.selectAll = function(baseLayers, overlays, options) {
    return new L.Control.Layers.SelectAll(baseLayers, overlays, options);
};
L.control.layers.selectAll(baseLayers, overlayMaps).addTo(map);
gpxTimeLayer_OurNOAAlab.addTo(map);
gpxaddmarkerUWyoming.addTo(map);
gpxaddmarkerUCONN.addTo(map);
gpxaddmarkerSt_Andrews_Math_and_Science.addTo(map);
gpxaddmarkerShields_Elementary.addTo(map);
gpxaddmarkerScarborough_ME_Elementary.addTo(map);
gpxaddmarkerRadcliffe_Creek_School.addTo(map);
gpxaddmarkerParish_Harbor_Pilot.addTo(map);
gpxaddmarkerNH_schools.addTo(map);
gpxaddmarkerNB_AQ.addTo(map);
gpxaddmarkerMorristown_Beard.addTo(map);
gpxaddmarkerMemorial_University.addTo(map);
gpxaddmarkerKennebunkAlternative.addTo(map);
gpxaddmarkerJenner_Dunnellon.addTo(map);
gpxaddmarkerHarbor_View_Elementary.addTo(map);
gpxaddmarkerGraffius.addTo(map);
gpxaddmarkerEndicott_College.addTo(map);
gpxaddmarkerElHeirro2.addTo(map);
gpxaddmarkerElHeirro1.addTo(map);
gpxaddmarkerEBS_Anselmo_de_Andrade.addTo(map);
gpxaddmarkerEB23_Torre_and_EB123_Bartolomeu_Perestrelo.addTo(map);
gpxaddmarkerCasa_de_Infancia_de_Santo_Antonio_EB_Jose_Antonio_d_Avila_Escola_Profissional_da_Horta.addTo(map);
gpxaddmarkerCalifornia_Maritime_Academy.addTo(map);
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
