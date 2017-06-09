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
    
var iconYarmouth_ME_High = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerYarmouth_ME_High=L.marker([43.21107,-70.07996], {icon: iconYarmouth_ME_High}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Yarmouth_ME_Hig<br> Teacher/PI : Culbert<br> Deployment_ ID : 165430701<br> ESN :1366776<br> starts at 2016-05-11T12:36");   
var myStyleYarmouth_ME_High = {
    "color": "#C0C0C0",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsYarmouth_ME_High = {
    radius: 5,
    fillColor: "#C0C0C0",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerYarmouth_ME_High = L.geoJson(null,{
    
    style: myStyleYarmouth_ME_High,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsYarmouth_ME_High);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Yarmouth_ME_Hig<br> Teacher/PI : Culbert<br> Deployment_ ID : 165430701<br> ESN :1366776<br> starts at 2016-05-11T12:36")
    }});
var gpxLayerYarmouth_ME_High = omnivore.gpx('data/Yarmouth_ME_High.gpx', null, customLayerYarmouth_ME_High).on('ready', function() {
    map.fitBounds(gpxLayerYarmouth_ME_High.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerYarmouth_ME_High = L.timeDimension.layer.geoJson(gpxLayerYarmouth_ME_High, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerYarmouth_ME_High =L.layerGroup([markerYarmouth_ME_High,gpxTimeLayerYarmouth_ME_High]);   
    
    
var iconWaterford_CT_High = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerWaterford_CT_High=L.marker([39.86255,-71.11939], {icon: iconWaterford_CT_High}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Waterford_CT_Hig<br> Teacher/PI : Oconner<br> Deployment_ ID : 164400722<br> ESN :1366976<br> starts at 2016-05-07T09:24");   
var myStyleWaterford_CT_High = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsWaterford_CT_High = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerWaterford_CT_High = L.geoJson(null,{
    
    style: myStyleWaterford_CT_High,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsWaterford_CT_High);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Waterford_CT_Hig<br> Teacher/PI : Oconner<br> Deployment_ ID : 164400722<br> ESN :1366976<br> starts at 2016-05-07T09:24")
    }});
var gpxLayerWaterford_CT_High = omnivore.gpx('data/Waterford_CT_High.gpx', null, customLayerWaterford_CT_High).on('ready', function() {
    map.fitBounds(gpxLayerWaterford_CT_High.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerWaterford_CT_High = L.timeDimension.layer.geoJson(gpxLayerWaterford_CT_High, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerWaterford_CT_High =L.layerGroup([markerWaterford_CT_High,gpxTimeLayerWaterford_CT_High]);   
    
    
var iconWBWS = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerWBWS=L.marker([41.80703,-70.16493], {icon: iconWBWS}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> WBW<br> Teacher/PI : Prescott<br> Deployment_ ID : 1604107020<br> ESN :748885<br> starts at 2016-11-25T17:19");   
var myStyleWBWS = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsWBWS = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerWBWS = L.geoJson(null,{
    
    style: myStyleWBWS,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsWBWS);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> WBW<br> Teacher/PI : Prescott<br> Deployment_ ID : 1604107020<br> ESN :748885<br> starts at 2016-11-25T17:19")
    }});
var gpxLayerWBWS = omnivore.gpx('data/WBWS.gpx', null, customLayerWBWS).on('ready', function() {
    map.fitBounds(gpxLayerWBWS.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerWBWS = L.timeDimension.layer.geoJson(gpxLayerWBWS, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerWBWS =L.layerGroup([markerWBWS,gpxTimeLayerWBWS]);   
    
    
var iconUMaryland = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerUMaryland=L.marker([38.32736,-75.09166], {icon: iconUMaryland}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> UMarylan<br> Teacher/PI : Meng<br> Deployment_ ID : 174380759<br> ESN :1350666<br> starts at 2017-03-29T15:54");   
var myStyleUMaryland = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsUMaryland = {
    radius: 5,
    fillColor: "#FFFF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerUMaryland = L.geoJson(null,{
    
    style: myStyleUMaryland,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsUMaryland);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> UMarylan<br> Teacher/PI : Meng<br> Deployment_ ID : 174380759<br> ESN :1350666<br> starts at 2017-03-29T15:54")
    }});
var gpxLayerUMaryland = omnivore.gpx('data/UMaryland.gpx', null, customLayerUMaryland).on('ready', function() {
    map.fitBounds(gpxLayerUMaryland.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerUMaryland = L.timeDimension.layer.geoJson(gpxLayerUMaryland, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerUMaryland =L.layerGroup([markerUMaryland,gpxTimeLayerUMaryland]);   
    
    
var iconTune_Into_Nature_with_Technology = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerTune_Into_Nature_with_Technology=L.marker([41.9854,-70.47909], {icon: iconTune_Into_Nature_with_Technology}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Tune_Into_Nature_with_Technolog<br> Teacher/PI : Degiulio<br> Deployment_ ID : 160420703<br> ESN :1374059<br> starts at 2016-10-19T15:24");   
var myStyleTune_Into_Nature_with_Technology = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsTune_Into_Nature_with_Technology = {
    radius: 5,
    fillColor: "#00FF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerTune_Into_Nature_with_Technology = L.geoJson(null,{
    
    style: myStyleTune_Into_Nature_with_Technology,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsTune_Into_Nature_with_Technology);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Tune_Into_Nature_with_Technolog<br> Teacher/PI : Degiulio<br> Deployment_ ID : 160420703<br> ESN :1374059<br> starts at 2016-10-19T15:24")
    }});
var gpxLayerTune_Into_Nature_with_Technology = omnivore.gpx('data/Tune_Into_Nature_with_Technology.gpx', null, customLayerTune_Into_Nature_with_Technology).on('ready', function() {
    map.fitBounds(gpxLayerTune_Into_Nature_with_Technology.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerTune_Into_Nature_with_Technology = L.timeDimension.layer.geoJson(gpxLayerTune_Into_Nature_with_Technology, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerTune_Into_Nature_with_Technology =L.layerGroup([markerTune_Into_Nature_with_Technology,gpxTimeLayerTune_Into_Nature_with_Technology]);   
    
    
var iconTruro_Central_School_Ipswich_High = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerTruro_Central_School_Ipswich_High=L.marker([42.01262,-69.95402], {icon: iconTruro_Central_School_Ipswich_High}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Truro_Central_School_Ipswich_Hig<br> Teacher/PI : Lafrance<br> Deployment_ ID : 165420691<br> ESN :1374810<br> starts at 2016-05-26T12:18");   
var myStyleTruro_Central_School_Ipswich_High = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsTruro_Central_School_Ipswich_High = {
    radius: 5,
    fillColor: "#008000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerTruro_Central_School_Ipswich_High = L.geoJson(null,{
    
    style: myStyleTruro_Central_School_Ipswich_High,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsTruro_Central_School_Ipswich_High);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Truro_Central_School_Ipswich_Hig<br> Teacher/PI : Lafrance<br> Deployment_ ID : 165420691<br> ESN :1374810<br> starts at 2016-05-26T12:18")
    }});
var gpxLayerTruro_Central_School_Ipswich_High = omnivore.gpx('data/Truro_Central_School_Ipswich_High.gpx', null, customLayerTruro_Central_School_Ipswich_High).on('ready', function() {
    map.fitBounds(gpxLayerTruro_Central_School_Ipswich_High.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerTruro_Central_School_Ipswich_High = L.timeDimension.layer.geoJson(gpxLayerTruro_Central_School_Ipswich_High, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerTruro_Central_School_Ipswich_High =L.layerGroup([markerTruro_Central_School_Ipswich_High,gpxTimeLayerTruro_Central_School_Ipswich_High]);   
    
    
var iconThetford_VT_Elementary = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerThetford_VT_Elementary=L.marker([42.11945,-70.10807], {icon: iconThetford_VT_Elementary}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Thetford_VT_Elementar<br> Teacher/PI : Bradley<br> Deployment_ ID : 160420692<br> ESN :1352228<br> starts at 2016-10-12T11:06");   
var myStyleThetford_VT_Elementary = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsThetford_VT_Elementary = {
    radius: 5,
    fillColor: "#008080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerThetford_VT_Elementary = L.geoJson(null,{
    
    style: myStyleThetford_VT_Elementary,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsThetford_VT_Elementary);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Thetford_VT_Elementar<br> Teacher/PI : Bradley<br> Deployment_ ID : 160420692<br> ESN :1352228<br> starts at 2016-10-12T11:06")
    }});
var gpxLayerThetford_VT_Elementary = omnivore.gpx('data/Thetford_VT_Elementary.gpx', null, customLayerThetford_VT_Elementary).on('ready', function() {
    map.fitBounds(gpxLayerThetford_VT_Elementary.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerThetford_VT_Elementary = L.timeDimension.layer.geoJson(gpxLayerThetford_VT_Elementary, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerThetford_VT_Elementary =L.layerGroup([markerThetford_VT_Elementary,gpxTimeLayerThetford_VT_Elementary]);   
    
    
var iconTabor_Academy = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerTabor_Academy=L.marker([35.86319,-67.96998], {icon: iconTabor_Academy}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Tabor_Academ<br> Teacher/PI : Albright<br> Deployment_ ID : 160350671<br> ESN :1374341<br> starts at 2016-11-24T19:07");   
var myStyleTabor_Academy = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsTabor_Academy = {
    radius: 5,
    fillColor: "#0000FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerTabor_Academy = L.geoJson(null,{
    
    style: myStyleTabor_Academy,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsTabor_Academy);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Tabor_Academ<br> Teacher/PI : Albright<br> Deployment_ ID : 160350671<br> ESN :1374341<br> starts at 2016-11-24T19:07")
    }});
var gpxLayerTabor_Academy = omnivore.gpx('data/Tabor_Academy.gpx', null, customLayerTabor_Academy).on('ready', function() {
    map.fitBounds(gpxLayerTabor_Academy.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerTabor_Academy = L.timeDimension.layer.geoJson(gpxLayerTabor_Academy, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerTabor_Academy =L.layerGroup([markerTabor_Academy,gpxTimeLayerTabor_Academy]);   
    
    
var iconSwampscott_High_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSwampscott_High_School=L.marker([42.41849,-70.9185], {icon: iconSwampscott_High_School}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Swampscott_High_Schoo<br> Teacher/PI : Ratley<br> Deployment_ ID : 162420701<br> ESN :1367637<br> starts at 2016-05-08T09:06");   
var myStyleSwampscott_High_School = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSwampscott_High_School = {
    radius: 5,
    fillColor: "#000080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerSwampscott_High_School = L.geoJson(null,{
    
    style: myStyleSwampscott_High_School,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsSwampscott_High_School);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Swampscott_High_Schoo<br> Teacher/PI : Ratley<br> Deployment_ ID : 162420701<br> ESN :1367637<br> starts at 2016-05-08T09:06")
    }});
var gpxLayerSwampscott_High_School = omnivore.gpx('data/Swampscott_High_School.gpx', null, customLayerSwampscott_High_School).on('ready', function() {
    map.fitBounds(gpxLayerSwampscott_High_School.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerSwampscott_High_School = L.timeDimension.layer.geoJson(gpxLayerSwampscott_High_School, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerSwampscott_High_School =L.layerGroup([markerSwampscott_High_School,gpxTimeLayerSwampscott_High_School]);   
    
    
var iconSturgis = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSturgis=L.marker([41.87859,-70.23216], {icon: iconSturgis}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Sturgi<br> Teacher/PI : Strong<br> Deployment_ ID : 1604107010<br> ESN :1367843<br> starts at 2016-10-29T16:30");   
var myStyleSturgis = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSturgis = {
    radius: 5,
    fillColor: "#FF00FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerSturgis = L.geoJson(null,{
    
    style: myStyleSturgis,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsSturgis);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Sturgi<br> Teacher/PI : Strong<br> Deployment_ ID : 1604107010<br> ESN :1367843<br> starts at 2016-10-29T16:30")
    }});
var gpxLayerSturgis = omnivore.gpx('data/Sturgis.gpx', null, customLayerSturgis).on('ready', function() {
    map.fitBounds(gpxLayerSturgis.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerSturgis = L.timeDimension.layer.geoJson(gpxLayerSturgis, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerSturgis =L.layerGroup([markerSturgis,gpxTimeLayerSturgis]);   
    
    
var iconSt_Paul_Advanced_Studies = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSt_Paul_Advanced_Studies=L.marker([42.92828,-70.49098], {icon: iconSt_Paul_Advanced_Studies}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> St_Paul_Advanced_Studie<br> Teacher/PI : Jones<br> Deployment_ ID : 167430701<br> ESN :1367425<br> starts at 2016-07-17T14:26");   
var myStyleSt_Paul_Advanced_Studies = {
    "color": "#800080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSt_Paul_Advanced_Studies = {
    radius: 5,
    fillColor: "#800080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerSt_Paul_Advanced_Studies = L.geoJson(null,{
    
    style: myStyleSt_Paul_Advanced_Studies,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsSt_Paul_Advanced_Studies);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> St_Paul_Advanced_Studie<br> Teacher/PI : Jones<br> Deployment_ ID : 167430701<br> ESN :1367425<br> starts at 2016-07-17T14:26")
    }});
var gpxLayerSt_Paul_Advanced_Studies = omnivore.gpx('data/St_Paul_Advanced_Studies.gpx', null, customLayerSt_Paul_Advanced_Studies).on('ready', function() {
    map.fitBounds(gpxLayerSt_Paul_Advanced_Studies.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerSt_Paul_Advanced_Studies = L.timeDimension.layer.geoJson(gpxLayerSt_Paul_Advanced_Studies, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerSt_Paul_Advanced_Studies =L.layerGroup([markerSt_Paul_Advanced_Studies,gpxTimeLayerSt_Paul_Advanced_Studies]);   
    
    
var iconSt_John_Paul_II = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSt_John_Paul_II=L.marker([41.90151,-70.28825], {icon: iconSt_John_Paul_II}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> St_John_Paul_I<br> Teacher/PI : Remillard<br> Deployment_ ID : 166410702<br> ESN :1366530<br> starts at 2016-07-19T23:32");   
var myStyleSt_John_Paul_II = {
    "color": "#FFFFFF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSt_John_Paul_II = {
    radius: 5,
    fillColor: "#FFFFFF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerSt_John_Paul_II = L.geoJson(null,{
    
    style: myStyleSt_John_Paul_II,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsSt_John_Paul_II);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> St_John_Paul_I<br> Teacher/PI : Remillard<br> Deployment_ ID : 166410702<br> ESN :1366530<br> starts at 2016-07-19T23:32")
    }});
var gpxLayerSt_John_Paul_II = omnivore.gpx('data/St_John_Paul_II.gpx', null, customLayerSt_John_Paul_II).on('ready', function() {
    map.fitBounds(gpxLayerSt_John_Paul_II.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerSt_John_Paul_II = L.timeDimension.layer.geoJson(gpxLayerSt_John_Paul_II, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerSt_John_Paul_II =L.layerGroup([markerSt_John_Paul_II,gpxTimeLayerSt_John_Paul_II]);   
    
    
var iconSt_John_PaulII_NOAAOE = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSt_John_PaulII_NOAAOE=L.marker([41.87323,-70.23139], {icon: iconSt_John_PaulII_NOAAOE}).bindPopup("    Drougued drifter Deployed here   <br> School/Lab :<br> St_John_PaulII_NOAAO<br> Teacher/PI : Remillard<br> Deployment_ ID : 160410708<br> ESN :1350736<br> Depth : 10.0m <br> starts at 2016-10-29T15:40");   
var myStyleSt_John_PaulII_NOAAOE = {
    "color": "#C0C0C0",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSt_John_PaulII_NOAAOE = {
    radius: 5,
    fillColor: "#C0C0C0",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerSt_John_PaulII_NOAAOE = L.geoJson(null,{
    
    style: myStyleSt_John_PaulII_NOAAOE,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsSt_John_PaulII_NOAAOE);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Drougued drifter  <br> School/Lab :<br> St_John_PaulII_NOAAO<br> Teacher/PI : Remillard<br> Deployment_ ID : 160410708<br> ESN :1350736<br> Depth : 10.0m <br> starts at 2016-10-29T15:40")
    }});
var gpxLayerSt_John_PaulII_NOAAOE = omnivore.gpx('data/St_John_PaulII_NOAAOE.gpx', null, customLayerSt_John_PaulII_NOAAOE).on('ready', function() {
    map.fitBounds(gpxLayerSt_John_PaulII_NOAAOE.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerSt_John_PaulII_NOAAOE = L.timeDimension.layer.geoJson(gpxLayerSt_John_PaulII_NOAAOE, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerSt_John_PaulII_NOAAOE =L.layerGroup([markerSt_John_PaulII_NOAAOE,gpxTimeLayerSt_John_PaulII_NOAAOE]);   
    
    
var iconSt_John_Evangelist_School_of_Beverly = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSt_John_Evangelist_School_of_Beverly=L.marker([42.65282,-70.51632], {icon: iconSt_John_Evangelist_School_of_Beverly}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> St_John_Evangelist_School_of_Beverl<br> Teacher/PI : Pomeroy<br> Deployment_ ID : 165420703<br> ESN :1367264<br> starts at 2016-05-19T16:50");   
var myStyleSt_John_Evangelist_School_of_Beverly = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSt_John_Evangelist_School_of_Beverly = {
    radius: 5,
    fillColor: "#808080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerSt_John_Evangelist_School_of_Beverly = L.geoJson(null,{
    
    style: myStyleSt_John_Evangelist_School_of_Beverly,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsSt_John_Evangelist_School_of_Beverly);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> St_John_Evangelist_School_of_Beverl<br> Teacher/PI : Pomeroy<br> Deployment_ ID : 165420703<br> ESN :1367264<br> starts at 2016-05-19T16:50")
    }});
var gpxLayerSt_John_Evangelist_School_of_Beverly = omnivore.gpx('data/St_John_Evangelist_School_of_Beverly.gpx', null, customLayerSt_John_Evangelist_School_of_Beverly).on('ready', function() {
    map.fitBounds(gpxLayerSt_John_Evangelist_School_of_Beverly.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerSt_John_Evangelist_School_of_Beverly = L.timeDimension.layer.geoJson(gpxLayerSt_John_Evangelist_School_of_Beverly, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerSt_John_Evangelist_School_of_Beverly =L.layerGroup([markerSt_John_Evangelist_School_of_Beverly,gpxTimeLayerSt_John_Evangelist_School_of_Beverly]);   
    
    
var iconSouth_Shore_Charter_School_2 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSouth_Shore_Charter_School_2=L.marker([41.98834,-70.48012], {icon: iconSouth_Shore_Charter_School_2}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> South_Shore_Charter_School_<br> Teacher/PI : Degiulio<br> Deployment_ ID : 1604207011<br> ESN :1374337<br> starts at 2016-10-19T15:02");   
var myStyleSouth_Shore_Charter_School_2 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSouth_Shore_Charter_School_2 = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerSouth_Shore_Charter_School_2 = L.geoJson(null,{
    
    style: myStyleSouth_Shore_Charter_School_2,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsSouth_Shore_Charter_School_2);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> South_Shore_Charter_School_<br> Teacher/PI : Degiulio<br> Deployment_ ID : 1604207011<br> ESN :1374337<br> starts at 2016-10-19T15:02")
    }});
var gpxLayerSouth_Shore_Charter_School_2 = omnivore.gpx('data/South_Shore_Charter_School_2.gpx', null, customLayerSouth_Shore_Charter_School_2).on('ready', function() {
    map.fitBounds(gpxLayerSouth_Shore_Charter_School_2.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerSouth_Shore_Charter_School_2 = L.timeDimension.layer.geoJson(gpxLayerSouth_Shore_Charter_School_2, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerSouth_Shore_Charter_School_2 =L.layerGroup([markerSouth_Shore_Charter_School_2,gpxTimeLayerSouth_Shore_Charter_School_2]);   
    
    
var iconSouth_Shore_Charter_School_1 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSouth_Shore_Charter_School_1=L.marker([41.98762,-70.48092], {icon: iconSouth_Shore_Charter_School_1}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> South_Shore_Charter_School_<br> Teacher/PI : Degiulio<br> Deployment_ ID : 1604207010<br> ESN :1374126<br> starts at 2016-10-19T15:04");   
var myStyleSouth_Shore_Charter_School_1 = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSouth_Shore_Charter_School_1 = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerSouth_Shore_Charter_School_1 = L.geoJson(null,{
    
    style: myStyleSouth_Shore_Charter_School_1,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsSouth_Shore_Charter_School_1);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> South_Shore_Charter_School_<br> Teacher/PI : Degiulio<br> Deployment_ ID : 1604207010<br> ESN :1374126<br> starts at 2016-10-19T15:04")
    }});
var gpxLayerSouth_Shore_Charter_School_1 = omnivore.gpx('data/South_Shore_Charter_School_1.gpx', null, customLayerSouth_Shore_Charter_School_1).on('ready', function() {
    map.fitBounds(gpxLayerSouth_Shore_Charter_School_1.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerSouth_Shore_Charter_School_1 = L.timeDimension.layer.geoJson(gpxLayerSouth_Shore_Charter_School_1, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerSouth_Shore_Charter_School_1 =L.layerGroup([markerSouth_Shore_Charter_School_1,gpxTimeLayerSouth_Shore_Charter_School_1]);   
    
    
var iconRockland_High_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerRockland_High_School=L.marker([41.9856,-70.48107], {icon: iconRockland_High_School}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Rockland_High_Schoo<br> Teacher/PI : Degiulio<br> Deployment_ ID : 160420708<br> ESN :1374122<br> starts at 2016-10-19T15:31");   
var myStyleRockland_High_School = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsRockland_High_School = {
    radius: 5,
    fillColor: "#00FF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerRockland_High_School = L.geoJson(null,{
    
    style: myStyleRockland_High_School,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsRockland_High_School);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Rockland_High_Schoo<br> Teacher/PI : Degiulio<br> Deployment_ ID : 160420708<br> ESN :1374122<br> starts at 2016-10-19T15:31")
    }});
var gpxLayerRockland_High_School = omnivore.gpx('data/Rockland_High_School.gpx', null, customLayerRockland_High_School).on('ready', function() {
    map.fitBounds(gpxLayerRockland_High_School.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerRockland_High_School = L.timeDimension.layer.geoJson(gpxLayerRockland_High_School, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerRockland_High_School =L.layerGroup([markerRockland_High_School,gpxTimeLayerRockland_High_School]);   
    
    
var iconPembroke_MA_High_URI_RWU = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerPembroke_MA_High_URI_RWU=L.marker([39.33029,-67.47176], {icon: iconPembroke_MA_High_URI_RWU}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Pembroke_MA_High_URI_RW<br> Teacher/PI : Lorenz<br> Deployment_ ID : 164420705<br> ESN :1374383<br> starts at 2016-05-21T12:04");   
var myStylePembroke_MA_High_URI_RWU = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsPembroke_MA_High_URI_RWU = {
    radius: 5,
    fillColor: "#008080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerPembroke_MA_High_URI_RWU = L.geoJson(null,{
    
    style: myStylePembroke_MA_High_URI_RWU,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsPembroke_MA_High_URI_RWU);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Pembroke_MA_High_URI_RW<br> Teacher/PI : Lorenz<br> Deployment_ ID : 164420705<br> ESN :1374383<br> starts at 2016-05-21T12:04")
    }});
var gpxLayerPembroke_MA_High_URI_RWU = omnivore.gpx('data/Pembroke_MA_High_URI_RWU.gpx', null, customLayerPembroke_MA_High_URI_RWU).on('ready', function() {
    map.fitBounds(gpxLayerPembroke_MA_High_URI_RWU.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerPembroke_MA_High_URI_RWU = L.timeDimension.layer.geoJson(gpxLayerPembroke_MA_High_URI_RWU, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerPembroke_MA_High_URI_RWU =L.layerGroup([markerPembroke_MA_High_URI_RWU,gpxTimeLayerPembroke_MA_High_URI_RWU]);   
    
    
var iconNorwell_Middle_School_4 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerNorwell_Middle_School_4=L.marker([41.9849,-70.48135], {icon: iconNorwell_Middle_School_4}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Norwell_Middle_School_<br> Teacher/PI : Degiulio<br> Deployment_ ID : 160420707<br> ESN :1374120<br> starts at 2016-10-19T15:42");   
var myStyleNorwell_Middle_School_4 = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsNorwell_Middle_School_4 = {
    radius: 5,
    fillColor: "#000080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerNorwell_Middle_School_4 = L.geoJson(null,{
    
    style: myStyleNorwell_Middle_School_4,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsNorwell_Middle_School_4);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Norwell_Middle_School_<br> Teacher/PI : Degiulio<br> Deployment_ ID : 160420707<br> ESN :1374120<br> starts at 2016-10-19T15:42")
    }});
var gpxLayerNorwell_Middle_School_4 = omnivore.gpx('data/Norwell_Middle_School_4.gpx', null, customLayerNorwell_Middle_School_4).on('ready', function() {
    map.fitBounds(gpxLayerNorwell_Middle_School_4.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerNorwell_Middle_School_4 = L.timeDimension.layer.geoJson(gpxLayerNorwell_Middle_School_4, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerNorwell_Middle_School_4 =L.layerGroup([markerNorwell_Middle_School_4,gpxTimeLayerNorwell_Middle_School_4]);   
    
    
var iconNorwell_Middle_School_3 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerNorwell_Middle_School_3=L.marker([41.9861,-70.47933], {icon: iconNorwell_Middle_School_3}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Norwell_Middle_School_<br> Teacher/PI : Degiulio<br> Deployment_ ID : 160420706<br> ESN :1374085<br> starts at 2016-10-19T15:17");   
var myStyleNorwell_Middle_School_3 = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsNorwell_Middle_School_3 = {
    radius: 5,
    fillColor: "#FF00FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerNorwell_Middle_School_3 = L.geoJson(null,{
    
    style: myStyleNorwell_Middle_School_3,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsNorwell_Middle_School_3);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Norwell_Middle_School_<br> Teacher/PI : Degiulio<br> Deployment_ ID : 160420706<br> ESN :1374085<br> starts at 2016-10-19T15:17")
    }});
var gpxLayerNorwell_Middle_School_3 = omnivore.gpx('data/Norwell_Middle_School_3.gpx', null, customLayerNorwell_Middle_School_3).on('ready', function() {
    map.fitBounds(gpxLayerNorwell_Middle_School_3.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerNorwell_Middle_School_3 = L.timeDimension.layer.geoJson(gpxLayerNorwell_Middle_School_3, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerNorwell_Middle_School_3 =L.layerGroup([markerNorwell_Middle_School_3,gpxTimeLayerNorwell_Middle_School_3]);   
    
    
var iconNorwell_Middle_School_2 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerNorwell_Middle_School_2=L.marker([41.98466,-70.47918], {icon: iconNorwell_Middle_School_2}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Norwell_Middle_School_<br> Teacher/PI : Degiulio<br> Deployment_ ID : 160420705<br> ESN :1374070<br> starts at 2016-10-19T15:26");   
var myStyleNorwell_Middle_School_2 = {
    "color": "#800080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsNorwell_Middle_School_2 = {
    radius: 5,
    fillColor: "#800080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerNorwell_Middle_School_2 = L.geoJson(null,{
    
    style: myStyleNorwell_Middle_School_2,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsNorwell_Middle_School_2);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Norwell_Middle_School_<br> Teacher/PI : Degiulio<br> Deployment_ ID : 160420705<br> ESN :1374070<br> starts at 2016-10-19T15:26")
    }});
var gpxLayerNorwell_Middle_School_2 = omnivore.gpx('data/Norwell_Middle_School_2.gpx', null, customLayerNorwell_Middle_School_2).on('ready', function() {
    map.fitBounds(gpxLayerNorwell_Middle_School_2.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerNorwell_Middle_School_2 = L.timeDimension.layer.geoJson(gpxLayerNorwell_Middle_School_2, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerNorwell_Middle_School_2 =L.layerGroup([markerNorwell_Middle_School_2,gpxTimeLayerNorwell_Middle_School_2]);   
    
    
var iconNorwell_Middle_School_1 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerNorwell_Middle_School_1=L.marker([41.98694,-70.47877], {icon: iconNorwell_Middle_School_1}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Norwell_Middle_School_<br> Teacher/PI : Degiulio<br> Deployment_ ID : 160420704<br> ESN :1374060<br> starts at 2016-10-19T15:17");   
var myStyleNorwell_Middle_School_1 = {
    "color": "#FFFFFF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsNorwell_Middle_School_1 = {
    radius: 5,
    fillColor: "#FFFFFF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerNorwell_Middle_School_1 = L.geoJson(null,{
    
    style: myStyleNorwell_Middle_School_1,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsNorwell_Middle_School_1);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Norwell_Middle_School_<br> Teacher/PI : Degiulio<br> Deployment_ ID : 160420704<br> ESN :1374060<br> starts at 2016-10-19T15:17")
    }});
var gpxLayerNorwell_Middle_School_1 = omnivore.gpx('data/Norwell_Middle_School_1.gpx', null, customLayerNorwell_Middle_School_1).on('ready', function() {
    map.fitBounds(gpxLayerNorwell_Middle_School_1.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerNorwell_Middle_School_1 = L.timeDimension.layer.geoJson(gpxLayerNorwell_Middle_School_1, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerNorwell_Middle_School_1 =L.layerGroup([markerNorwell_Middle_School_1,gpxTimeLayerNorwell_Middle_School_1]);   
    
    
var iconNOAA = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerNOAA=L.marker([41.9936,-70.37054], {icon: iconNOAA}).bindPopup("    Drougued drifter Deployed here   <br> School/Lab :<br> NOA<br> Teacher/PI : Manning<br> Deployment_ ID : 1604107023<br> ESN :1352682<br> Depth : 10.0m <br> starts at 2016-12-08T12:26");   
var myStyleNOAA = {
    "color": "#C0C0C0",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsNOAA = {
    radius: 5,
    fillColor: "#C0C0C0",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerNOAA = L.geoJson(null,{
    
    style: myStyleNOAA,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsNOAA);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Drougued drifter  <br> School/Lab :<br> NOA<br> Teacher/PI : Manning<br> Deployment_ ID : 1604107023<br> ESN :1352682<br> Depth : 10.0m <br> starts at 2016-12-08T12:26")
    }});
var gpxLayerNOAA = omnivore.gpx('data/NOAA.gpx', null, customLayerNOAA).on('ready', function() {
    map.fitBounds(gpxLayerNOAA.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerNOAA = L.timeDimension.layer.geoJson(gpxLayerNOAA, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerNOAA =L.layerGroup([markerNOAA,gpxTimeLayerNOAA]);   
    
    
var iconMorse_High = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerMorse_High=L.marker([43.52914,-69.56279], {icon: iconMorse_High}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Morse_Hig<br> Teacher/PI : Ilkovich<br> Deployment_ ID : 165430691<br> ESN :1367585<br> starts at 2016-05-31T11:05");   
var myStyleMorse_High = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsMorse_High = {
    radius: 5,
    fillColor: "#808080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerMorse_High = L.geoJson(null,{
    
    style: myStyleMorse_High,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsMorse_High);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Morse_Hig<br> Teacher/PI : Ilkovich<br> Deployment_ ID : 165430691<br> ESN :1367585<br> starts at 2016-05-31T11:05")
    }});
var gpxLayerMorse_High = omnivore.gpx('data/Morse_High.gpx', null, customLayerMorse_High).on('ready', function() {
    map.fitBounds(gpxLayerMorse_High.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerMorse_High = L.timeDimension.layer.geoJson(gpxLayerMorse_High, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerMorse_High =L.layerGroup([markerMorse_High,gpxTimeLayerMorse_High]);   
    
    
var iconMaritime_Gloucester = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerMaritime_Gloucester=L.marker([40.56749,-57.82007], {icon: iconMaritime_Gloucester}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Maritime_Glouceste<br> Teacher/PI : Maderia<br> Deployment_ ID : 1664207014<br> ESN :1367286<br> starts at 2016-10-30T03:45");   
var myStyleMaritime_Gloucester = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsMaritime_Gloucester = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerMaritime_Gloucester = L.geoJson(null,{
    
    style: myStyleMaritime_Gloucester,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsMaritime_Gloucester);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Maritime_Glouceste<br> Teacher/PI : Maderia<br> Deployment_ ID : 1664207014<br> ESN :1367286<br> starts at 2016-10-30T03:45")
    }});
var gpxLayerMaritime_Gloucester = omnivore.gpx('data/Maritime_Gloucester.gpx', null, customLayerMaritime_Gloucester).on('ready', function() {
    map.fitBounds(gpxLayerMaritime_Gloucester.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerMaritime_Gloucester = L.timeDimension.layer.geoJson(gpxLayerMaritime_Gloucester, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerMaritime_Gloucester =L.layerGroup([markerMaritime_Gloucester,gpxTimeLayerMaritime_Gloucester]);   
    
    
var iconKennebunk_High = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerKennebunk_High=L.marker([42.77162,-70.27033], {icon: iconKennebunk_High}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Kennebunk_Hig<br> Teacher/PI : Luetje<br> Deployment_ ID : 174420701<br> ESN :1350376<br> starts at 2017-04-19T13:32");   
var myStyleKennebunk_High = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsKennebunk_High = {
    radius: 5,
    fillColor: "#808000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerKennebunk_High = L.geoJson(null,{
    
    style: myStyleKennebunk_High,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsKennebunk_High);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Kennebunk_Hig<br> Teacher/PI : Luetje<br> Deployment_ ID : 174420701<br> ESN :1350376<br> starts at 2017-04-19T13:32")
    }});
var gpxLayerKennebunk_High = omnivore.gpx('data/Kennebunk_High.gpx', null, customLayerKennebunk_High).on('ready', function() {
    map.fitBounds(gpxLayerKennebunk_High.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerKennebunk_High = L.timeDimension.layer.geoJson(gpxLayerKennebunk_High, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerKennebunk_High =L.layerGroup([markerKennebunk_High,gpxTimeLayerKennebunk_High]);   
    
    
var iconIpswich = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerIpswich=L.marker([42.42533,-70.45933], {icon: iconIpswich}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Ipswic<br> Teacher/PI : Lafrance<br> Deployment_ ID : 164420703<br> ESN :1374810<br> starts at 2016-04-23T19:48");   
var myStyleIpswich = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsIpswich = {
    radius: 5,
    fillColor: "#008000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerIpswich = L.geoJson(null,{
    
    style: myStyleIpswich,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsIpswich);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Ipswic<br> Teacher/PI : Lafrance<br> Deployment_ ID : 164420703<br> ESN :1374810<br> starts at 2016-04-23T19:48")
    }});
var gpxLayerIpswich = omnivore.gpx('data/Ipswich.gpx', null, customLayerIpswich).on('ready', function() {
    map.fitBounds(gpxLayerIpswich.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerIpswich = L.timeDimension.layer.geoJson(gpxLayerIpswich, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerIpswich =L.layerGroup([markerIpswich,gpxTimeLayerIpswich]);   
    
    
var iconHull_Memorial_Middle_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerHull_Memorial_Middle_School=L.marker([41.98674,-70.47918], {icon: iconHull_Memorial_Middle_School}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Hull_Memorial_Middle_Schoo<br> Teacher/PI : Degiulio<br> Deployment_ ID : 1604207012<br> ESN :1374358<br> starts at 2016-10-19T15:09");   
var myStyleHull_Memorial_Middle_School = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsHull_Memorial_Middle_School = {
    radius: 5,
    fillColor: "#008080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerHull_Memorial_Middle_School = L.geoJson(null,{
    
    style: myStyleHull_Memorial_Middle_School,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsHull_Memorial_Middle_School);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Hull_Memorial_Middle_Schoo<br> Teacher/PI : Degiulio<br> Deployment_ ID : 1604207012<br> ESN :1374358<br> starts at 2016-10-19T15:09")
    }});
var gpxLayerHull_Memorial_Middle_School = omnivore.gpx('data/Hull_Memorial_Middle_School.gpx', null, customLayerHull_Memorial_Middle_School).on('ready', function() {
    map.fitBounds(gpxLayerHull_Memorial_Middle_School.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerHull_Memorial_Middle_School = L.timeDimension.layer.geoJson(gpxLayerHull_Memorial_Middle_School, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerHull_Memorial_Middle_School =L.layerGroup([markerHull_Memorial_Middle_School,gpxTimeLayerHull_Memorial_Middle_School]);   
    
    
var iconHingham_High = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerHingham_High=L.marker([42.162,-70.37], {icon: iconHingham_High}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Hingham_Hig<br> Teacher/PI : Gauthier<br> Deployment_ ID : 164420704<br> ESN :1376548<br> starts at 2016-04-27T16:12");   
var myStyleHingham_High = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsHingham_High = {
    radius: 5,
    fillColor: "#0000FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerHingham_High = L.geoJson(null,{
    
    style: myStyleHingham_High,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsHingham_High);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Hingham_Hig<br> Teacher/PI : Gauthier<br> Deployment_ ID : 164420704<br> ESN :1376548<br> starts at 2016-04-27T16:12")
    }});
var gpxLayerHingham_High = omnivore.gpx('data/Hingham_High.gpx', null, customLayerHingham_High).on('ready', function() {
    map.fitBounds(gpxLayerHingham_High.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerHingham_High = L.timeDimension.layer.geoJson(gpxLayerHingham_High, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerHingham_High =L.layerGroup([markerHingham_High,gpxTimeLayerHingham_High]);   
    
    
var iconGov_Wentworth_High_NH = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerGov_Wentworth_High_NH=L.marker([41.5479,-70.61091], {icon: iconGov_Wentworth_High_NH}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Gov_Wentworth_High_N<br> Teacher/PI : Drennan_Doiran<br> Deployment_ ID : 1604107011<br> ESN :1374026<br> starts at 2016-10-20T13:30");   
var myStyleGov_Wentworth_High_NH = {
    "color": "#FFFFFF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsGov_Wentworth_High_NH = {
    radius: 5,
    fillColor: "#FFFFFF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerGov_Wentworth_High_NH = L.geoJson(null,{
    
    style: myStyleGov_Wentworth_High_NH,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsGov_Wentworth_High_NH);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Gov_Wentworth_High_N<br> Teacher/PI : Drennan_Doiran<br> Deployment_ ID : 1604107011<br> ESN :1374026<br> starts at 2016-10-20T13:30")
    }});
var gpxLayerGov_Wentworth_High_NH = omnivore.gpx('data/Gov_Wentworth_High_NH.gpx', null, customLayerGov_Wentworth_High_NH).on('ready', function() {
    map.fitBounds(gpxLayerGov_Wentworth_High_NH.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerGov_Wentworth_High_NH = L.timeDimension.layer.geoJson(gpxLayerGov_Wentworth_High_NH, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerGov_Wentworth_High_NH =L.layerGroup([markerGov_Wentworth_High_NH,gpxTimeLayerGov_Wentworth_High_NH]);   
    
    
var iconGloucester_High = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerGloucester_High=L.marker([42.65687,-70.52458], {icon: iconGloucester_High}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Gloucester_Hig<br> Teacher/PI : Goolsby<br> Deployment_ ID : 165420705<br> ESN :1367278<br> starts at 2016-05-19T15:24");   
var myStyleGloucester_High = {
    "color": "#C0C0C0",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsGloucester_High = {
    radius: 5,
    fillColor: "#C0C0C0",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerGloucester_High = L.geoJson(null,{
    
    style: myStyleGloucester_High,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsGloucester_High);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Gloucester_Hig<br> Teacher/PI : Goolsby<br> Deployment_ ID : 165420705<br> ESN :1367278<br> starts at 2016-05-19T15:24")
    }});
var gpxLayerGloucester_High = omnivore.gpx('data/Gloucester_High.gpx', null, customLayerGloucester_High).on('ready', function() {
    map.fitBounds(gpxLayerGloucester_High.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerGloucester_High = L.timeDimension.layer.geoJson(gpxLayerGloucester_High, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerGloucester_High =L.layerGroup([markerGloucester_High,gpxTimeLayerGloucester_High]);   
    
    
var iconGermantown_Neighborhood_Center = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerGermantown_Neighborhood_Center=L.marker([41.99316,-70.47903], {icon: iconGermantown_Neighborhood_Center}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Germantown_Neighborhood_Cente<br> Teacher/PI : Degiulio<br> Deployment_ ID : 160420709<br> ESN :1374123<br> starts at 2016-10-19T13:59");   
var myStyleGermantown_Neighborhood_Center = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsGermantown_Neighborhood_Center = {
    radius: 5,
    fillColor: "#808080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerGermantown_Neighborhood_Center = L.geoJson(null,{
    
    style: myStyleGermantown_Neighborhood_Center,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsGermantown_Neighborhood_Center);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Germantown_Neighborhood_Cente<br> Teacher/PI : Degiulio<br> Deployment_ ID : 160420709<br> ESN :1374123<br> starts at 2016-10-19T13:59")
    }});
var gpxLayerGermantown_Neighborhood_Center = omnivore.gpx('data/Germantown_Neighborhood_Center.gpx', null, customLayerGermantown_Neighborhood_Center).on('ready', function() {
    map.fitBounds(gpxLayerGermantown_Neighborhood_Center.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerGermantown_Neighborhood_Center = L.timeDimension.layer.geoJson(gpxLayerGermantown_Neighborhood_Center, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerGermantown_Neighborhood_Center =L.layerGroup([markerGermantown_Neighborhood_Center,gpxTimeLayerGermantown_Neighborhood_Center]);   
    
    
var iconFalmouth_MA_High = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerFalmouth_MA_High=L.marker([37.62713,-74.76275], {icon: iconFalmouth_MA_High}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Falmouth_MA_Hig<br> Teacher/PI : Milliken<br> Deployment_ ID : 165430702<br> ESN :1365938<br> starts at 2016-05-19T14:17");   
var myStyleFalmouth_MA_High = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsFalmouth_MA_High = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerFalmouth_MA_High = L.geoJson(null,{
    
    style: myStyleFalmouth_MA_High,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsFalmouth_MA_High);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Falmouth_MA_Hig<br> Teacher/PI : Milliken<br> Deployment_ ID : 165430702<br> ESN :1365938<br> starts at 2016-05-19T14:17")
    }});
var gpxLayerFalmouth_MA_High = omnivore.gpx('data/Falmouth_MA_High.gpx', null, customLayerFalmouth_MA_High).on('ready', function() {
    map.fitBounds(gpxLayerFalmouth_MA_High.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerFalmouth_MA_High = L.timeDimension.layer.geoJson(gpxLayerFalmouth_MA_High, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerFalmouth_MA_High =L.layerGroup([markerFalmouth_MA_High,gpxTimeLayerFalmouth_MA_High]);   
    
    
var iconEssex_Tech = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerEssex_Tech=L.marker([42.49406,-70.3818], {icon: iconEssex_Tech}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Essex_Tec<br> Teacher/PI : Wyda<br> Deployment_ ID : 164420701<br> ESN :1367742<br> starts at 2016-03-17T11:48");   
var myStyleEssex_Tech = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsEssex_Tech = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerEssex_Tech = L.geoJson(null,{
    
    style: myStyleEssex_Tech,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsEssex_Tech);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Essex_Tec<br> Teacher/PI : Wyda<br> Deployment_ ID : 164420701<br> ESN :1367742<br> starts at 2016-03-17T11:48")
    }});
var gpxLayerEssex_Tech = omnivore.gpx('data/Essex_Tech.gpx', null, customLayerEssex_Tech).on('ready', function() {
    map.fitBounds(gpxLayerEssex_Tech.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerEssex_Tech = L.timeDimension.layer.geoJson(gpxLayerEssex_Tech, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerEssex_Tech =L.layerGroup([markerEssex_Tech,gpxTimeLayerEssex_Tech]);   
    
    
var iconDuxbury_MA_High = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerDuxbury_MA_High=L.marker([41.35023,-70.89509], {icon: iconDuxbury_MA_High}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Duxbury_MA_Hig<br> Teacher/PI : Nelson<br> Deployment_ ID : 1664207013<br> ESN :1368110<br> starts at 2016-06-20T16:30");   
var myStyleDuxbury_MA_High = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsDuxbury_MA_High = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerDuxbury_MA_High = L.geoJson(null,{
    
    style: myStyleDuxbury_MA_High,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsDuxbury_MA_High);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Duxbury_MA_Hig<br> Teacher/PI : Nelson<br> Deployment_ ID : 1664207013<br> ESN :1368110<br> starts at 2016-06-20T16:30")
    }});
var gpxLayerDuxbury_MA_High = omnivore.gpx('data/Duxbury_MA_High.gpx', null, customLayerDuxbury_MA_High).on('ready', function() {
    map.fitBounds(gpxLayerDuxbury_MA_High.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerDuxbury_MA_High = L.timeDimension.layer.geoJson(gpxLayerDuxbury_MA_High, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerDuxbury_MA_High =L.layerGroup([markerDuxbury_MA_High,gpxTimeLayerDuxbury_MA_High]);   
    
    
var iconCapeMay = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerCapeMay=L.marker([38.52031,-73.42725], {icon: iconCapeMay}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> CapeMa<br> Teacher/PI : Manderson<br> Deployment_ ID : 162380721<br> ESN :1374339<br> starts at 2016-02-27T04:05");   
var myStyleCapeMay = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsCapeMay = {
    radius: 5,
    fillColor: "#00FF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerCapeMay = L.geoJson(null,{
    
    style: myStyleCapeMay,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsCapeMay);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> CapeMa<br> Teacher/PI : Manderson<br> Deployment_ ID : 162380721<br> ESN :1374339<br> starts at 2016-02-27T04:05")
    }});
var gpxLayerCapeMay = omnivore.gpx('data/CapeMay.gpx', null, customLayerCapeMay).on('ready', function() {
    map.fitBounds(gpxLayerCapeMay.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerCapeMay = L.timeDimension.layer.geoJson(gpxLayerCapeMay, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerCapeMay =L.layerGroup([markerCapeMay,gpxTimeLayerCapeMay]);   
    
    
var iconCSCR_MD_FUNDED = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerCSCR_MD_FUNDED=L.marker([42.27585,-70.70549], {icon: iconCSCR_MD_FUNDED}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> CSCR_MD_FUNDE<br> Teacher/PI : Buckley<br> Deployment_ ID : 167420707<br> ESN :1367495<br> starts at 2016-07-15T12:51");   
var myStyleCSCR_MD_FUNDED = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsCSCR_MD_FUNDED = {
    radius: 5,
    fillColor: "#008000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerCSCR_MD_FUNDED = L.geoJson(null,{
    
    style: myStyleCSCR_MD_FUNDED,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsCSCR_MD_FUNDED);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> CSCR_MD_FUNDE<br> Teacher/PI : Buckley<br> Deployment_ ID : 167420707<br> ESN :1367495<br> starts at 2016-07-15T12:51")
    }});
var gpxLayerCSCR_MD_FUNDED = omnivore.gpx('data/CSCR_MD_FUNDED.gpx', null, customLayerCSCR_MD_FUNDED).on('ready', function() {
    map.fitBounds(gpxLayerCSCR_MD_FUNDED.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerCSCR_MD_FUNDED = L.timeDimension.layer.geoJson(gpxLayerCSCR_MD_FUNDED, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerCSCR_MD_FUNDED =L.layerGroup([markerCSCR_MD_FUNDED,gpxTimeLayerCSCR_MD_FUNDED]);   
    
    
var iconCSCR_Harborlight_Montesorri = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerCSCR_Harborlight_Montesorri=L.marker([42.27148,-70.69461], {icon: iconCSCR_Harborlight_Montesorri}).bindPopup("    Drougued drifter Deployed here   <br> School/Lab :<br> CSCR_Harborlight_Montesorr<br> Teacher/PI : Buckley<br> Deployment_ ID : 167420709<br> ESN :1348697<br> Depth : 10.0m <br> starts at 2016-07-15T16:09");   
var myStyleCSCR_Harborlight_Montesorri = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsCSCR_Harborlight_Montesorri = {
    radius: 5,
    fillColor: "#008080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerCSCR_Harborlight_Montesorri = L.geoJson(null,{
    
    style: myStyleCSCR_Harborlight_Montesorri,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsCSCR_Harborlight_Montesorri);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Drougued drifter  <br> School/Lab :<br> CSCR_Harborlight_Montesorr<br> Teacher/PI : Buckley<br> Deployment_ ID : 167420709<br> ESN :1348697<br> Depth : 10.0m <br> starts at 2016-07-15T16:09")
    }});
var gpxLayerCSCR_Harborlight_Montesorri = omnivore.gpx('data/CSCR_Harborlight_Montesorri.gpx', null, customLayerCSCR_Harborlight_Montesorri).on('ready', function() {
    map.fitBounds(gpxLayerCSCR_Harborlight_Montesorri.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerCSCR_Harborlight_Montesorri = L.timeDimension.layer.geoJson(gpxLayerCSCR_Harborlight_Montesorri, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerCSCR_Harborlight_Montesorri =L.layerGroup([markerCSCR_Harborlight_Montesorri,gpxTimeLayerCSCR_Harborlight_Montesorri]);   
    
    
var iconCSCR = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerCSCR=L.marker([42.2761,-70.70554], {icon: iconCSCR}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> CSC<br> Teacher/PI : Buckley<br> Deployment_ ID : 167420706<br> ESN :1369406<br> starts at 2016-07-15T12:42");   
var myStyleCSCR = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsCSCR = {
    radius: 5,
    fillColor: "#0000FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerCSCR = L.geoJson(null,{
    
    style: myStyleCSCR,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsCSCR);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> CSC<br> Teacher/PI : Buckley<br> Deployment_ ID : 167420706<br> ESN :1369406<br> starts at 2016-07-15T12:42")
    }});
var gpxLayerCSCR = omnivore.gpx('data/CSCR.gpx', null, customLayerCSCR).on('ready', function() {
    map.fitBounds(gpxLayerCSCR.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerCSCR = L.timeDimension.layer.geoJson(gpxLayerCSCR, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerCSCR =L.layerGroup([markerCSCR,gpxTimeLayerCSCR]);   
    
    
var iconCC_Tech_NOAAOE_minnie = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerCC_Tech_NOAAOE_minnie=L.marker([41.70267,-71.24936], {icon: iconCC_Tech_NOAAOE_minnie}).bindPopup("    Drougued drifter Deployed here   <br> School/Lab :<br> CC_Tech_NOAAOE_minni<br> Teacher/PI : Eaton<br> Deployment_ ID : 1604107013<br> ESN :1350310<br> Depth : 5.0m <br> starts at 2016-10-20T20:57");   
var myStyleCC_Tech_NOAAOE_minnie = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsCC_Tech_NOAAOE_minnie = {
    radius: 5,
    fillColor: "#000080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerCC_Tech_NOAAOE_minnie = L.geoJson(null,{
    
    style: myStyleCC_Tech_NOAAOE_minnie,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsCC_Tech_NOAAOE_minnie);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Drougued drifter  <br> School/Lab :<br> CC_Tech_NOAAOE_minni<br> Teacher/PI : Eaton<br> Deployment_ ID : 1604107013<br> ESN :1350310<br> Depth : 5.0m <br> starts at 2016-10-20T20:57")
    }});
var gpxLayerCC_Tech_NOAAOE_minnie = omnivore.gpx('data/CC_Tech_NOAAOE_minnie.gpx', null, customLayerCC_Tech_NOAAOE_minnie).on('ready', function() {
    map.fitBounds(gpxLayerCC_Tech_NOAAOE_minnie.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerCC_Tech_NOAAOE_minnie = L.timeDimension.layer.geoJson(gpxLayerCC_Tech_NOAAOE_minnie, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerCC_Tech_NOAAOE_minnie =L.layerGroup([markerCC_Tech_NOAAOE_minnie,gpxTimeLayerCC_Tech_NOAAOE_minnie]);   
    
    
var iconCC_Tech_NOAAOE = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerCC_Tech_NOAAOE=L.marker([41.71098,-70.07582], {icon: iconCC_Tech_NOAAOE}).bindPopup("    Drougued drifter Deployed here   <br> School/Lab :<br> CC_Tech_NOAAO<br> Teacher/PI : Eaton<br> Deployment_ ID : 1604107012<br> ESN :1350318<br> Depth : 10.0m <br> starts at 2016-10-19T12:44");   
var myStyleCC_Tech_NOAAOE = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsCC_Tech_NOAAOE = {
    radius: 5,
    fillColor: "#FF00FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerCC_Tech_NOAAOE = L.geoJson(null,{
    
    style: myStyleCC_Tech_NOAAOE,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsCC_Tech_NOAAOE);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Drougued drifter  <br> School/Lab :<br> CC_Tech_NOAAO<br> Teacher/PI : Eaton<br> Deployment_ ID : 1604107012<br> ESN :1350318<br> Depth : 10.0m <br> starts at 2016-10-19T12:44")
    }});
var gpxLayerCC_Tech_NOAAOE = omnivore.gpx('data/CC_Tech_NOAAOE.gpx', null, customLayerCC_Tech_NOAAOE).on('ready', function() {
    map.fitBounds(gpxLayerCC_Tech_NOAAOE.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerCC_Tech_NOAAOE = L.timeDimension.layer.geoJson(gpxLayerCC_Tech_NOAAOE, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerCC_Tech_NOAAOE =L.layerGroup([markerCC_Tech_NOAAOE,gpxTimeLayerCC_Tech_NOAAOE]);   
    
    
var iconCC_Academy = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerCC_Academy=L.marker([41.99016,-70.37221], {icon: iconCC_Academy}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> CC_Academ<br> Teacher/PI : Lewiston<br> Deployment_ ID : 1604107022<br> ESN :1367074<br> starts at 2016-12-08T11:39");   
var myStyleCC_Academy = {
    "color": "#800080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsCC_Academy = {
    radius: 5,
    fillColor: "#800080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerCC_Academy = L.geoJson(null,{
    
    style: myStyleCC_Academy,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsCC_Academy);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> CC_Academ<br> Teacher/PI : Lewiston<br> Deployment_ ID : 1604107022<br> ESN :1367074<br> starts at 2016-12-08T11:39")
    }});
var gpxLayerCC_Academy = omnivore.gpx('data/CC_Academy.gpx', null, customLayerCC_Academy).on('ready', function() {
    map.fitBounds(gpxLayerCC_Academy.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerCC_Academy = L.timeDimension.layer.geoJson(gpxLayerCC_Academy, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerCC_Academy =L.layerGroup([markerCC_Academy,gpxTimeLayerCC_Academy]);   
    
    
var iconBrunswick_Maine_Junior_High_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerBrunswick_Maine_Junior_High_School=L.marker([43.67536,-69.96201], {icon: iconBrunswick_Maine_Junior_High_School}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Brunswick_Maine_Junior_High_Schoo<br> Teacher/PI : Landin<br> Deployment_ ID : 166430692<br> ESN :1366932<br> starts at 2016-06-10T15:09");   
var myStyleBrunswick_Maine_Junior_High_School = {
    "color": "#FFFFFF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsBrunswick_Maine_Junior_High_School = {
    radius: 5,
    fillColor: "#FFFFFF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerBrunswick_Maine_Junior_High_School = L.geoJson(null,{
    
    style: myStyleBrunswick_Maine_Junior_High_School,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsBrunswick_Maine_Junior_High_School);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Brunswick_Maine_Junior_High_Schoo<br> Teacher/PI : Landin<br> Deployment_ ID : 166430692<br> ESN :1366932<br> starts at 2016-06-10T15:09")
    }});
var gpxLayerBrunswick_Maine_Junior_High_School = omnivore.gpx('data/Brunswick_Maine_Junior_High_School.gpx', null, customLayerBrunswick_Maine_Junior_High_School).on('ready', function() {
    map.fitBounds(gpxLayerBrunswick_Maine_Junior_High_School.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerBrunswick_Maine_Junior_High_School = L.timeDimension.layer.geoJson(gpxLayerBrunswick_Maine_Junior_High_School, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerBrunswick_Maine_Junior_High_School =L.layerGroup([markerBrunswick_Maine_Junior_High_School,gpxTimeLayerBrunswick_Maine_Junior_High_School]);   
    
    
var iconBourne_High = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerBourne_High=L.marker([41.80703,-70.16493], {icon: iconBourne_High}).bindPopup("    Surface drifter Deployed here  <br> School/Lab :<br> Bourne_Hig<br> Teacher/PI : Collins<br> Deployment_ ID : 1604107020<br> ESN :1367212<br> starts at 2016-11-25T17:19");   
var myStyleBourne_High = {
    "color": "#C0C0C0",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsBourne_High = {
    radius: 5,
    fillColor: "#C0C0C0",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerBourne_High = L.geoJson(null,{
    
    style: myStyleBourne_High,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsBourne_High);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab :<br> Bourne_Hig<br> Teacher/PI : Collins<br> Deployment_ ID : 1604107020<br> ESN :1367212<br> starts at 2016-11-25T17:19")
    }});
var gpxLayerBourne_High = omnivore.gpx('data/Bourne_High.gpx', null, customLayerBourne_High).on('ready', function() {
    map.fitBounds(gpxLayerBourne_High.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerBourne_High = L.timeDimension.layer.geoJson(gpxLayerBourne_High, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerBourne_High =L.layerGroup([markerBourne_High,gpxTimeLayerBourne_High]);   
    
    
var officelegend = L.control({
    position: 'bottomright'
});
officelegend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += '<img src="img/starticon.png" width="20" height="20"  /> Drifter start location <br> <img src="img/noaa-transparent-logo.png" width="20" height="20"  /> Our Office';
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

"Yarmouth_ME_High": gpxaddmarkerYarmouth_ME_High,
"Waterford_CT_High": gpxaddmarkerWaterford_CT_High,
"WBWS": gpxaddmarkerWBWS,
"UMaryland": gpxaddmarkerUMaryland,
"Tune_Into_Nature_with_Technology": gpxaddmarkerTune_Into_Nature_with_Technology,
"Truro_Central_School_Ipswich_High": gpxaddmarkerTruro_Central_School_Ipswich_High,
"Thetford_VT_Elementary": gpxaddmarkerThetford_VT_Elementary,
"Tabor_Academy": gpxaddmarkerTabor_Academy,
"Swampscott_High_School": gpxaddmarkerSwampscott_High_School,
"Sturgis": gpxaddmarkerSturgis,
"St_Paul_Advanced_Studies": gpxaddmarkerSt_Paul_Advanced_Studies,
"St_John_Paul_II": gpxaddmarkerSt_John_Paul_II,
"St_John_PaulII_NOAAOE": gpxaddmarkerSt_John_PaulII_NOAAOE,
"St_John_Evangelist_School_of_Beverly": gpxaddmarkerSt_John_Evangelist_School_of_Beverly,
"South_Shore_Charter_School_2": gpxaddmarkerSouth_Shore_Charter_School_2,
"South_Shore_Charter_School_1": gpxaddmarkerSouth_Shore_Charter_School_1,
"Rockland_High_School": gpxaddmarkerRockland_High_School,
"Pembroke_MA_High_URI_RWU": gpxaddmarkerPembroke_MA_High_URI_RWU,
"Norwell_Middle_School_4": gpxaddmarkerNorwell_Middle_School_4,
"Norwell_Middle_School_3": gpxaddmarkerNorwell_Middle_School_3,
"Norwell_Middle_School_2": gpxaddmarkerNorwell_Middle_School_2,
"Norwell_Middle_School_1": gpxaddmarkerNorwell_Middle_School_1,
"NOAA": gpxaddmarkerNOAA,
"Morse_High": gpxaddmarkerMorse_High,
"Maritime_Gloucester": gpxaddmarkerMaritime_Gloucester,
"Kennebunk_High": gpxaddmarkerKennebunk_High,
"Ipswich": gpxaddmarkerIpswich,
"Hull_Memorial_Middle_School": gpxaddmarkerHull_Memorial_Middle_School,
"Hingham_High": gpxaddmarkerHingham_High,
"Gov_Wentworth_High_NH": gpxaddmarkerGov_Wentworth_High_NH,
"Gloucester_High": gpxaddmarkerGloucester_High,
"Germantown_Neighborhood_Center": gpxaddmarkerGermantown_Neighborhood_Center,
"Falmouth_MA_High": gpxaddmarkerFalmouth_MA_High,
"Essex_Tech": gpxaddmarkerEssex_Tech,
"Duxbury_MA_High": gpxaddmarkerDuxbury_MA_High,
"CapeMay": gpxaddmarkerCapeMay,
"CSCR_MD_FUNDED": gpxaddmarkerCSCR_MD_FUNDED,
"CSCR_Harborlight_Montesorri": gpxaddmarkerCSCR_Harborlight_Montesorri,
"CSCR": gpxaddmarkerCSCR,
"CC_Tech_NOAAOE_minnie": gpxaddmarkerCC_Tech_NOAAOE_minnie,
"CC_Tech_NOAAOE": gpxaddmarkerCC_Tech_NOAAOE,
"CC_Academy": gpxaddmarkerCC_Academy,
"Brunswick_Maine_Junior_High_School": gpxaddmarkerBrunswick_Maine_Junior_High_School,
"Bourne_High": gpxaddmarkerBourne_High,};

var baseLayers = getCommonBaseLayers(map); // see baselayers.js
L.control.layers.selectAll = function(baseLayers, overlays, options) {
    return new L.Control.Layers.SelectAll(baseLayers, overlays, options);
};
L.control.layers.selectAll(baseLayers, overlayMaps).addTo(map);
gpxTimeLayer_OurNOAAlab.addTo(map);
gpxaddmarkerYarmouth_ME_High.addTo(map);
gpxaddmarkerWaterford_CT_High.addTo(map);
gpxaddmarkerWBWS.addTo(map);
gpxaddmarkerUMaryland.addTo(map);
gpxaddmarkerTune_Into_Nature_with_Technology.addTo(map);
gpxaddmarkerTruro_Central_School_Ipswich_High.addTo(map);
gpxaddmarkerThetford_VT_Elementary.addTo(map);
gpxaddmarkerTabor_Academy.addTo(map);
gpxaddmarkerSwampscott_High_School.addTo(map);
gpxaddmarkerSturgis.addTo(map);
gpxaddmarkerSt_Paul_Advanced_Studies.addTo(map);
gpxaddmarkerSt_John_Paul_II.addTo(map);
gpxaddmarkerSt_John_PaulII_NOAAOE.addTo(map);
gpxaddmarkerSt_John_Evangelist_School_of_Beverly.addTo(map);
gpxaddmarkerSouth_Shore_Charter_School_2.addTo(map);
gpxaddmarkerSouth_Shore_Charter_School_1.addTo(map);
gpxaddmarkerRockland_High_School.addTo(map);
gpxaddmarkerPembroke_MA_High_URI_RWU.addTo(map);
gpxaddmarkerNorwell_Middle_School_4.addTo(map);
gpxaddmarkerNorwell_Middle_School_3.addTo(map);
gpxaddmarkerNorwell_Middle_School_2.addTo(map);
gpxaddmarkerNorwell_Middle_School_1.addTo(map);
gpxaddmarkerNOAA.addTo(map);
gpxaddmarkerMorse_High.addTo(map);
gpxaddmarkerMaritime_Gloucester.addTo(map);
gpxaddmarkerKennebunk_High.addTo(map);
gpxaddmarkerIpswich.addTo(map);
gpxaddmarkerHull_Memorial_Middle_School.addTo(map);
gpxaddmarkerHingham_High.addTo(map);
gpxaddmarkerGov_Wentworth_High_NH.addTo(map);
gpxaddmarkerGloucester_High.addTo(map);
gpxaddmarkerGermantown_Neighborhood_Center.addTo(map);
gpxaddmarkerFalmouth_MA_High.addTo(map);
gpxaddmarkerEssex_Tech.addTo(map);
gpxaddmarkerDuxbury_MA_High.addTo(map);
gpxaddmarkerCapeMay.addTo(map);
gpxaddmarkerCSCR_MD_FUNDED.addTo(map);
gpxaddmarkerCSCR_Harborlight_Montesorri.addTo(map);
gpxaddmarkerCSCR.addTo(map);
gpxaddmarkerCC_Tech_NOAAOE_minnie.addTo(map);
gpxaddmarkerCC_Tech_NOAAOE.addTo(map);
gpxaddmarkerCC_Academy.addTo(map);
gpxaddmarkerBrunswick_Maine_Junior_High_School.addTo(map);
gpxaddmarkerBourne_High.addTo(map);
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
