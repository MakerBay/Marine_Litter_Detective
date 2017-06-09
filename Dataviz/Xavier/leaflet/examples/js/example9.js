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
        layer.bindPopup('this is drifter _OurNOAAlab<br> start at 2016-01-25T17:17')
    }});
var gpxLayer_OurNOAAlab = omnivore.gpx('data/_OurNOAAlab.gpx', null, customLayer_OurNOAAlab).on('ready', function() {});


var gpxTimeLayer_OurNOAAlab = L.timeDimension.layer.geoJson(gpxLayer_OurNOAAlab, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true, 
    });

$('#dtp_start').datetimepicker({
    inline: true,
    value: new Date("2016-01-25"),
    format: "c"
});
$('#dtp_end').datetimepicker({
    inline: true,
    value: new Date("2016-08-11"),
    format: "c"
});
    
var iconYarmouth_ME_High = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerYarmouth_ME_High=L.marker([43.21107,-70.07996], {icon: iconYarmouth_ME_High}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Yarmouth_ME_Hig<br> Teacher/PI : Culbert<br> Deployment_ ID : 1366776<br> ESN :165430701<br> starts at 2016-05-11T12:36");   
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : Yarmouth_ME_Hig<br> Teacher/PI : Culbert<br> Deployment_ ID : 1366776<br> ESN :165430701<br> starts at 2016-05-11T12:36")
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
    
    
var iconWestbrook_Maine_Middle_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerWestbrook_Maine_Middle_School=L.marker([32.40246,-16.72387], {icon: iconWestbrook_Maine_Middle_School}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Westbrook_Maine_Middle_Schoo<br> Teacher/PI : West<br> Deployment_ ID : 995664<br> ESN :161320162<br> starts at 2016-01-28T08:12");   
var myStyleWestbrook_Maine_Middle_School = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsWestbrook_Maine_Middle_School = {
    radius: 5,
    fillColor: "#808080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerWestbrook_Maine_Middle_School = L.geoJson(null,{
    
    style: myStyleWestbrook_Maine_Middle_School,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsWestbrook_Maine_Middle_School);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Westbrook_Maine_Middle_Schoo<br> Teacher/PI : West<br> Deployment_ ID : 995664<br> ESN :161320162<br> starts at 2016-01-28T08:12")
    }});
var gpxLayerWestbrook_Maine_Middle_School = omnivore.gpx('data/Westbrook_Maine_Middle_School.gpx', null, customLayerWestbrook_Maine_Middle_School).on('ready', function() {
    map.fitBounds(gpxLayerWestbrook_Maine_Middle_School.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerWestbrook_Maine_Middle_School = L.timeDimension.layer.geoJson(gpxLayerWestbrook_Maine_Middle_School, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerWestbrook_Maine_Middle_School =L.layerGroup([markerWestbrook_Maine_Middle_School,gpxTimeLayerWestbrook_Maine_Middle_School]);   
    
    
var iconWaterford_CT_High = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerWaterford_CT_High=L.marker([39.86255,-71.11939], {icon: iconWaterford_CT_High}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Waterford_CT_Hig<br> Teacher/PI : Oconner<br> Deployment_ ID : 1366976<br> ESN :164400722<br> starts at 2016-05-07T09:24");   
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : Waterford_CT_Hig<br> Teacher/PI : Oconner<br> Deployment_ ID : 1366976<br> ESN :164400722<br> starts at 2016-05-07T09:24")
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
    
    
var iconUniv_Georgia = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerUniv_Georgia=L.marker([31.30549,-81.08345], {icon: iconUniv_Georgia}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Univ_Georgi<br> Teacher/PI : Castelao<br> Deployment_ ID : 1353279<br> ESN :1642808014<br> starts at 2016-04-19T06:36");   
var myStyleUniv_Georgia = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsUniv_Georgia = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerUniv_Georgia = L.geoJson(null,{
    
    style: myStyleUniv_Georgia,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsUniv_Georgia);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Univ_Georgi<br> Teacher/PI : Castelao<br> Deployment_ ID : 1353279<br> ESN :1642808014<br> starts at 2016-04-19T06:36")
    }});
var gpxLayerUniv_Georgia = omnivore.gpx('data/Univ_Georgia.gpx', null, customLayerUniv_Georgia).on('ready', function() {
    map.fitBounds(gpxLayerUniv_Georgia.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerUniv_Georgia = L.timeDimension.layer.geoJson(gpxLayerUniv_Georgia, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerUniv_Georgia =L.layerGroup([markerUniv_Georgia,gpxTimeLayerUniv_Georgia]);   
    
    
var iconUniv_Central_Florida = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerUniv_Central_Florida=L.marker([28.76965,-89.01356], {icon: iconUniv_Central_Florida}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Univ_Central_Florid<br> Teacher/PI : Mansfield<br> Deployment_ ID : 1351452<br> ESN :167280891<br> starts at 2016-07-22T23:06");   
var myStyleUniv_Central_Florida = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsUniv_Central_Florida = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerUniv_Central_Florida = L.geoJson(null,{
    
    style: myStyleUniv_Central_Florida,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsUniv_Central_Florida);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Univ_Central_Florid<br> Teacher/PI : Mansfield<br> Deployment_ ID : 1351452<br> ESN :167280891<br> starts at 2016-07-22T23:06")
    }});
var gpxLayerUniv_Central_Florida = omnivore.gpx('data/Univ_Central_Florida.gpx', null, customLayerUniv_Central_Florida).on('ready', function() {
    map.fitBounds(gpxLayerUniv_Central_Florida.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerUniv_Central_Florida = L.timeDimension.layer.geoJson(gpxLayerUniv_Central_Florida, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerUniv_Central_Florida =L.layerGroup([markerUniv_Central_Florida,gpxTimeLayerUniv_Central_Florida]);   
    
    
var iconUCONN = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerUCONN=L.marker([41.27763,-72.34625], {icon: iconUCONN}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : UCON<br> Teacher/PI : Yia<br> Deployment_ ID : 996064<br> ESN :166410721<br> starts at 2016-06-27T13:23");   
var myStyleUCONN = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsUCONN = {
    radius: 5,
    fillColor: "#FFFF00",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : UCON<br> Teacher/PI : Yia<br> Deployment_ ID : 996064<br> ESN :166410721<br> starts at 2016-06-27T13:23")
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
    
    
var iconThe_Foundation_Academy = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerThe_Foundation_Academy=L.marker([30.39617,-81.33515], {icon: iconThe_Foundation_Academy}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : The_Foundation_Academ<br> Teacher/PI : Paris<br> Deployment_ ID : 1374160<br> ESN :163230815<br> starts at 2016-03-16T14:08");   
var myStyleThe_Foundation_Academy = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsThe_Foundation_Academy = {
    radius: 5,
    fillColor: "#808000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerThe_Foundation_Academy = L.geoJson(null,{
    
    style: myStyleThe_Foundation_Academy,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsThe_Foundation_Academy);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : The_Foundation_Academ<br> Teacher/PI : Paris<br> Deployment_ ID : 1374160<br> ESN :163230815<br> starts at 2016-03-16T14:08")
    }});
var gpxLayerThe_Foundation_Academy = omnivore.gpx('data/The_Foundation_Academy.gpx', null, customLayerThe_Foundation_Academy).on('ready', function() {
    map.fitBounds(gpxLayerThe_Foundation_Academy.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerThe_Foundation_Academy = L.timeDimension.layer.geoJson(gpxLayerThe_Foundation_Academy, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerThe_Foundation_Academy =L.layerGroup([markerThe_Foundation_Academy,gpxTimeLayerThe_Foundation_Academy]);   
    
    
var iconTexas = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerTexas=L.marker([27.93921,-91.21918], {icon: iconTexas}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Texa<br> Teacher/PI : Toro<br> Deployment_ ID : 1369703<br> ESN :166290951<br> starts at 2016-07-22T13:23");   
var myStyleTexas = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsTexas = {
    radius: 5,
    fillColor: "#00FF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerTexas = L.geoJson(null,{
    
    style: myStyleTexas,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsTexas);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Texa<br> Teacher/PI : Toro<br> Deployment_ ID : 1369703<br> ESN :166290951<br> starts at 2016-07-22T13:23")
    }});
var gpxLayerTexas = omnivore.gpx('data/Texas.gpx', null, customLayerTexas).on('ready', function() {
    map.fitBounds(gpxLayerTexas.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerTexas = L.timeDimension.layer.geoJson(gpxLayerTexas, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerTexas =L.layerGroup([markerTexas,gpxTimeLayerTexas]);   
    
    
var iconSwampscott_High_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSwampscott_High_School=L.marker([42.47923,-70.91803], {icon: iconSwampscott_High_School}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Swampscott_High_Schoo<br> Teacher/PI : Ratley<br> Deployment_ ID : 1367637<br> ESN :162420701<br> starts at 2016-05-03T09:15");   
var myStyleSwampscott_High_School = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSwampscott_High_School = {
    radius: 5,
    fillColor: "#008000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : Swampscott_High_Schoo<br> Teacher/PI : Ratley<br> Deployment_ ID : 1367637<br> ESN :162420701<br> starts at 2016-05-03T09:15")
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
    
    
var iconSt_Paul_Advanced_Studies = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSt_Paul_Advanced_Studies=L.marker([42.92828,-70.49098], {icon: iconSt_Paul_Advanced_Studies}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : St_Paul_Advanced_Studie<br> Teacher/PI : Jones<br> Deployment_ ID : 1367425<br> ESN :167430701<br> starts at 2016-07-17T14:26");   
var myStyleSt_Paul_Advanced_Studies = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSt_Paul_Advanced_Studies = {
    radius: 5,
    fillColor: "#008080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : St_Paul_Advanced_Studie<br> Teacher/PI : Jones<br> Deployment_ ID : 1367425<br> ESN :167430701<br> starts at 2016-07-17T14:26")
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
    
    
var iconSt_Marys_Lynn = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSt_Marys_Lynn=L.marker([42.40861,-70.86572], {icon: iconSt_Marys_Lynn}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : St_Marys_Lyn<br> Teacher/PI : Steadman<br> Deployment_ ID : 1353273<br> ESN :165420702<br> starts at 2016-05-07T11:55");   
var myStyleSt_Marys_Lynn = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSt_Marys_Lynn = {
    radius: 5,
    fillColor: "#0000FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerSt_Marys_Lynn = L.geoJson(null,{
    
    style: myStyleSt_Marys_Lynn,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsSt_Marys_Lynn);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : St_Marys_Lyn<br> Teacher/PI : Steadman<br> Deployment_ ID : 1353273<br> ESN :165420702<br> starts at 2016-05-07T11:55")
    }});
var gpxLayerSt_Marys_Lynn = omnivore.gpx('data/St_Marys_Lynn.gpx', null, customLayerSt_Marys_Lynn).on('ready', function() {
    map.fitBounds(gpxLayerSt_Marys_Lynn.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerSt_Marys_Lynn = L.timeDimension.layer.geoJson(gpxLayerSt_Marys_Lynn, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerSt_Marys_Lynn =L.layerGroup([markerSt_Marys_Lynn,gpxTimeLayerSt_Marys_Lynn]);   
    
    
var iconSt_John_Paul_II = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSt_John_Paul_II=L.marker([41.90151,-70.28825], {icon: iconSt_John_Paul_II}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : St_John_Paul_I<br> Teacher/PI : Remillard<br> Deployment_ ID : 1366530<br> ESN :166410702<br> starts at 2016-07-19T23:32");   
var myStyleSt_John_Paul_II = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSt_John_Paul_II = {
    radius: 5,
    fillColor: "#000080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : St_John_Paul_I<br> Teacher/PI : Remillard<br> Deployment_ ID : 1366530<br> ESN :166410702<br> starts at 2016-07-19T23:32")
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
    
    
var iconSt_John_Evangelist_School_of_Beverly = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSt_John_Evangelist_School_of_Beverly=L.marker([42.65282,-70.51632], {icon: iconSt_John_Evangelist_School_of_Beverly}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : St_John_Evangelist_School_of_Beverl<br> Teacher/PI : Pomeroy<br> Deployment_ ID : 1367264<br> ESN :165420703<br> starts at 2016-05-19T16:50");   
var myStyleSt_John_Evangelist_School_of_Beverly = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSt_John_Evangelist_School_of_Beverly = {
    radius: 5,
    fillColor: "#FF00FF",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : St_John_Evangelist_School_of_Beverl<br> Teacher/PI : Pomeroy<br> Deployment_ ID : 1367264<br> ESN :165420703<br> starts at 2016-05-19T16:50")
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
    
    
var iconSt_Andrews_Math_and_Science = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSt_Andrews_Math_and_Science=L.marker([43.76289,-18.05871], {icon: iconSt_Andrews_Math_and_Science}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : St_Andrews_Math_and_Scienc<br> Teacher/PI : Carolina_Dreamer<br> Deployment_ ID : 1351495<br> ESN :167470091<br> starts at 2016-07-18T19:52");   
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : St_Andrews_Math_and_Scienc<br> Teacher/PI : Carolina_Dreamer<br> Deployment_ ID : 1351495<br> ESN :167470091<br> starts at 2016-07-18T19:52")
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
    
    
var iconSSNSC_Germantown = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSSNSC_Germantown=L.marker([42.08233,-70.44974], {icon: iconSSNSC_Germantown}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : SSNSC_Germantow<br> Teacher/PI : Galluzzo<br> Deployment_ ID : 1374363<br> ESN :167420710<br> starts at 2016-07-21T14:53");   
var myStyleSSNSC_Germantown = {
    "color": "#FFFFFF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSSNSC_Germantown = {
    radius: 5,
    fillColor: "#FFFFFF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerSSNSC_Germantown = L.geoJson(null,{
    
    style: myStyleSSNSC_Germantown,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsSSNSC_Germantown);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : SSNSC_Germantow<br> Teacher/PI : Galluzzo<br> Deployment_ ID : 1374363<br> ESN :167420710<br> starts at 2016-07-21T14:53")
    }});
var gpxLayerSSNSC_Germantown = omnivore.gpx('data/SSNSC_Germantown.gpx', null, customLayerSSNSC_Germantown).on('ready', function() {
    map.fitBounds(gpxLayerSSNSC_Germantown.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerSSNSC_Germantown = L.timeDimension.layer.geoJson(gpxLayerSSNSC_Germantown, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerSSNSC_Germantown =L.layerGroup([markerSSNSC_Germantown,gpxTimeLayerSSNSC_Germantown]);   
    
    
var iconSouth_Shore_Charter_Public_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSouth_Shore_Charter_Public_School=L.marker([42.21021,-70.21029], {icon: iconSouth_Shore_Charter_Public_School}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : South_Shore_Charter_Public_Schoo<br> Teacher/PI : Galluzzo<br> Deployment_ ID : 1366934<br> ESN :166420703<br> starts at 2016-06-01T15:09");   
var myStyleSouth_Shore_Charter_Public_School = {
    "color": "#C0C0C0",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSouth_Shore_Charter_Public_School = {
    radius: 5,
    fillColor: "#C0C0C0",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerSouth_Shore_Charter_Public_School = L.geoJson(null,{
    
    style: myStyleSouth_Shore_Charter_Public_School,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsSouth_Shore_Charter_Public_School);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : South_Shore_Charter_Public_Schoo<br> Teacher/PI : Galluzzo<br> Deployment_ ID : 1366934<br> ESN :166420703<br> starts at 2016-06-01T15:09")
    }});
var gpxLayerSouth_Shore_Charter_Public_School = omnivore.gpx('data/South_Shore_Charter_Public_School.gpx', null, customLayerSouth_Shore_Charter_Public_School).on('ready', function() {
    map.fitBounds(gpxLayerSouth_Shore_Charter_Public_School.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerSouth_Shore_Charter_Public_School = L.timeDimension.layer.geoJson(gpxLayerSouth_Shore_Charter_Public_School, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerSouth_Shore_Charter_Public_School =L.layerGroup([markerSouth_Shore_Charter_Public_School,gpxTimeLayerSouth_Shore_Charter_Public_School]);   
    
    
var iconSEA_ISML_Plymouth_Middle = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSEA_ISML_Plymouth_Middle=L.marker([42.96953,-70.42899], {icon: iconSEA_ISML_Plymouth_Middle}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : SEA_ISML_Plymouth_Middl<br> Teacher/PI : Galluzzo<br> Deployment_ ID : 752654<br> ESN :166420707<br> starts at 2016-06-02T17:37");   
var myStyleSEA_ISML_Plymouth_Middle = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSEA_ISML_Plymouth_Middle = {
    radius: 5,
    fillColor: "#808080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerSEA_ISML_Plymouth_Middle = L.geoJson(null,{
    
    style: myStyleSEA_ISML_Plymouth_Middle,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsSEA_ISML_Plymouth_Middle);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : SEA_ISML_Plymouth_Middl<br> Teacher/PI : Galluzzo<br> Deployment_ ID : 752654<br> ESN :166420707<br> starts at 2016-06-02T17:37")
    }});
var gpxLayerSEA_ISML_Plymouth_Middle = omnivore.gpx('data/SEA_ISML_Plymouth_Middle.gpx', null, customLayerSEA_ISML_Plymouth_Middle).on('ready', function() {
    map.fitBounds(gpxLayerSEA_ISML_Plymouth_Middle.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerSEA_ISML_Plymouth_Middle = L.timeDimension.layer.geoJson(gpxLayerSEA_ISML_Plymouth_Middle, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerSEA_ISML_Plymouth_Middle =L.layerGroup([markerSEA_ISML_Plymouth_Middle,gpxTimeLayerSEA_ISML_Plymouth_Middle]);   
    
    
var iconScarborough_ME_Elementary = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerScarborough_ME_Elementary=L.marker([42.07783,-67.13037], {icon: iconScarborough_ME_Elementary}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Scarborough_ME_Elementar<br> Teacher/PI : Lighting_Boat<br> Deployment_ ID : 744905<br> ESN :161400681<br> starts at 2016-02-18T09:27");   
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : Scarborough_ME_Elementar<br> Teacher/PI : Lighting_Boat<br> Deployment_ ID : 744905<br> ESN :161400681<br> starts at 2016-02-18T09:27")
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
    
    
var iconScarborough = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerScarborough=L.marker([55.13776,-8.944416], {icon: iconScarborough}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Scarboroug<br> Teacher/PI : Red_Storm<br> Deployment_ ID : 746564<br> ESN :164550081<br> starts at 2016-04-14T10:36");   
var myStyleScarborough = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsScarborough = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerScarborough = L.geoJson(null,{
    
    style: myStyleScarborough,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsScarborough);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Scarboroug<br> Teacher/PI : Red_Storm<br> Deployment_ ID : 746564<br> ESN :164550081<br> starts at 2016-04-14T10:36")
    }});
var gpxLayerScarborough = omnivore.gpx('data/Scarborough.gpx', null, customLayerScarborough).on('ready', function() {
    map.fitBounds(gpxLayerScarborough.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerScarborough = L.timeDimension.layer.geoJson(gpxLayerScarborough, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerScarborough =L.layerGroup([markerScarborough,gpxTimeLayerScarborough]);   
    
    
var iconSalem_Sound_Coastwatch = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSalem_Sound_Coastwatch=L.marker([42.53532,-70.83909], {icon: iconSalem_Sound_Coastwatch}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Salem_Sound_Coastwatc<br> Teacher/PI : Terry<br> Deployment_ ID : 1348694<br> ESN :1664207012<br> starts at 2016-06-08T14:15");   
var myStyleSalem_Sound_Coastwatch = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSalem_Sound_Coastwatch = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerSalem_Sound_Coastwatch = L.geoJson(null,{
    
    style: myStyleSalem_Sound_Coastwatch,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsSalem_Sound_Coastwatch);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Salem_Sound_Coastwatc<br> Teacher/PI : Terry<br> Deployment_ ID : 1348694<br> ESN :1664207012<br> starts at 2016-06-08T14:15")
    }});
var gpxLayerSalem_Sound_Coastwatch = omnivore.gpx('data/Salem_Sound_Coastwatch.gpx', null, customLayerSalem_Sound_Coastwatch).on('ready', function() {
    map.fitBounds(gpxLayerSalem_Sound_Coastwatch.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerSalem_Sound_Coastwatch = L.timeDimension.layer.geoJson(gpxLayerSalem_Sound_Coastwatch, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerSalem_Sound_Coastwatch =L.layerGroup([markerSalem_Sound_Coastwatch,gpxTimeLayerSalem_Sound_Coastwatch]);   
    
    
var iconSalemSound_Marine_Tech = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerSalemSound_Marine_Tech=L.marker([42.53721,-70.77502], {icon: iconSalemSound_Marine_Tech}).bindPopup("    Drougued drifter Deployed here   <br> School/Lab : SalemSound_Marine_Tec<br> Teacher/PI : Terry<br> Deployment_ ID : 1367080<br> ESN :1674207012<br> Depth : 12.0m <br> starts at 2016-07-24T15:54");   
var myStyleSalemSound_Marine_Tech = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsSalemSound_Marine_Tech = {
    radius: 5,
    fillColor: "#FFFF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerSalemSound_Marine_Tech = L.geoJson(null,{
    
    style: myStyleSalemSound_Marine_Tech,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsSalemSound_Marine_Tech);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Drougued drifter  <br> School/Lab : SalemSound_Marine_Tec<br> Teacher/PI : Terry<br> Deployment_ ID : 1367080<br> ESN :1674207012<br> Depth : 12.0m <br> starts at 2016-07-24T15:54")
    }});
var gpxLayerSalemSound_Marine_Tech = omnivore.gpx('data/SalemSound_Marine_Tech.gpx', null, customLayerSalemSound_Marine_Tech).on('ready', function() {
    map.fitBounds(gpxLayerSalemSound_Marine_Tech.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerSalemSound_Marine_Tech = L.timeDimension.layer.geoJson(gpxLayerSalemSound_Marine_Tech, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerSalemSound_Marine_Tech =L.layerGroup([markerSalemSound_Marine_Tech,gpxTimeLayerSalemSound_Marine_Tech]);   
    
    
var iconRadcliffe_Creek_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerRadcliffe_Creek_School=L.marker([34.51789,-67.83491], {icon: iconRadcliffe_Creek_School}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Radcliffe_Creek_Schoo<br> Teacher/PI : Radcliffe_Creek_Heron<br> Deployment_ ID : 1348722<br> ESN :166390752<br> starts at 2016-06-15T11:39");   
var myStyleRadcliffe_Creek_School = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsRadcliffe_Creek_School = {
    radius: 5,
    fillColor: "#808000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : Radcliffe_Creek_Schoo<br> Teacher/PI : Radcliffe_Creek_Heron<br> Deployment_ ID : 1348722<br> ESN :166390752<br> starts at 2016-06-15T11:39")
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
    
    
var iconPlymouth_South_Middle_School_PSMS_2 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerPlymouth_South_Middle_School_PSMS_2=L.marker([42.1938,-70.29496], {icon: iconPlymouth_South_Middle_School_PSMS_2}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Plymouth_South_Middle_School_PSMS_<br> Teacher/PI : Galluzzo<br> Deployment_ ID : 1367849<br> ESN :166420705<br> starts at 2016-06-01T15:02");   
var myStylePlymouth_South_Middle_School_PSMS_2 = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsPlymouth_South_Middle_School_PSMS_2 = {
    radius: 5,
    fillColor: "#00FF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerPlymouth_South_Middle_School_PSMS_2 = L.geoJson(null,{
    
    style: myStylePlymouth_South_Middle_School_PSMS_2,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsPlymouth_South_Middle_School_PSMS_2);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Plymouth_South_Middle_School_PSMS_<br> Teacher/PI : Galluzzo<br> Deployment_ ID : 1367849<br> ESN :166420705<br> starts at 2016-06-01T15:02")
    }});
var gpxLayerPlymouth_South_Middle_School_PSMS_2 = omnivore.gpx('data/Plymouth_South_Middle_School_PSMS_2.gpx', null, customLayerPlymouth_South_Middle_School_PSMS_2).on('ready', function() {
    map.fitBounds(gpxLayerPlymouth_South_Middle_School_PSMS_2.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerPlymouth_South_Middle_School_PSMS_2 = L.timeDimension.layer.geoJson(gpxLayerPlymouth_South_Middle_School_PSMS_2, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerPlymouth_South_Middle_School_PSMS_2 =L.layerGroup([markerPlymouth_South_Middle_School_PSMS_2,gpxTimeLayerPlymouth_South_Middle_School_PSMS_2]);   
    
    
var iconPlymouth_South_Middle_School_PSMS_1 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerPlymouth_South_Middle_School_PSMS_1=L.marker([42.19366,-70.29501], {icon: iconPlymouth_South_Middle_School_PSMS_1}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Plymouth_South_Middle_School_PSMS_<br> Teacher/PI : Galluzzo<br> Deployment_ ID : 1367763<br> ESN :166420704<br> starts at 2016-06-01T15:02");   
var myStylePlymouth_South_Middle_School_PSMS_1 = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsPlymouth_South_Middle_School_PSMS_1 = {
    radius: 5,
    fillColor: "#008000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerPlymouth_South_Middle_School_PSMS_1 = L.geoJson(null,{
    
    style: myStylePlymouth_South_Middle_School_PSMS_1,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsPlymouth_South_Middle_School_PSMS_1);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Plymouth_South_Middle_School_PSMS_<br> Teacher/PI : Galluzzo<br> Deployment_ ID : 1367763<br> ESN :166420704<br> starts at 2016-06-01T15:02")
    }});
var gpxLayerPlymouth_South_Middle_School_PSMS_1 = omnivore.gpx('data/Plymouth_South_Middle_School_PSMS_1.gpx', null, customLayerPlymouth_South_Middle_School_PSMS_1).on('ready', function() {
    map.fitBounds(gpxLayerPlymouth_South_Middle_School_PSMS_1.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerPlymouth_South_Middle_School_PSMS_1 = L.timeDimension.layer.geoJson(gpxLayerPlymouth_South_Middle_School_PSMS_1, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerPlymouth_South_Middle_School_PSMS_1 =L.layerGroup([markerPlymouth_South_Middle_School_PSMS_1,gpxTimeLayerPlymouth_South_Middle_School_PSMS_1]);   
    
    
var iconPlymouth_Community_Intermediate_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerPlymouth_Community_Intermediate_School=L.marker([42.211,-70.21104], {icon: iconPlymouth_Community_Intermediate_School}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Plymouth_Community_Intermediate_Schoo<br> Teacher/PI : Galluzzo<br> Deployment_ ID : 1374005<br> ESN :166420706<br> starts at 2016-06-01T15:08");   
var myStylePlymouth_Community_Intermediate_School = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsPlymouth_Community_Intermediate_School = {
    radius: 5,
    fillColor: "#008080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerPlymouth_Community_Intermediate_School = L.geoJson(null,{
    
    style: myStylePlymouth_Community_Intermediate_School,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsPlymouth_Community_Intermediate_School);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Plymouth_Community_Intermediate_Schoo<br> Teacher/PI : Galluzzo<br> Deployment_ ID : 1374005<br> ESN :166420706<br> starts at 2016-06-01T15:08")
    }});
var gpxLayerPlymouth_Community_Intermediate_School = omnivore.gpx('data/Plymouth_Community_Intermediate_School.gpx', null, customLayerPlymouth_Community_Intermediate_School).on('ready', function() {
    map.fitBounds(gpxLayerPlymouth_Community_Intermediate_School.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerPlymouth_Community_Intermediate_School = L.timeDimension.layer.geoJson(gpxLayerPlymouth_Community_Intermediate_School, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerPlymouth_Community_Intermediate_School =L.layerGroup([markerPlymouth_Community_Intermediate_School,gpxTimeLayerPlymouth_Community_Intermediate_School]);   
    
    
var iconPembroke_MA_High_URI_RWU = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerPembroke_MA_High_URI_RWU=L.marker([39.33029,-67.47176], {icon: iconPembroke_MA_High_URI_RWU}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Pembroke_MA_High_URI_RW<br> Teacher/PI : Lorenz<br> Deployment_ ID : 1374383<br> ESN :164420705<br> starts at 2016-05-21T12:04");   
var myStylePembroke_MA_High_URI_RWU = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsPembroke_MA_High_URI_RWU = {
    radius: 5,
    fillColor: "#0000FF",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : Pembroke_MA_High_URI_RW<br> Teacher/PI : Lorenz<br> Deployment_ ID : 1374383<br> ESN :164420705<br> starts at 2016-05-21T12:04")
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
    
    
var iconParish_Harbor_Pilot = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerParish_Harbor_Pilot=L.marker([34.52652,-67.84772], {icon: iconParish_Harbor_Pilot}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Parish_Harbor_Pilo<br> Teacher/PI : Cougars<br> Deployment_ ID : 1348718<br> ESN :166390751<br> starts at 2016-06-15T11:35");   
var myStyleParish_Harbor_Pilot = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsParish_Harbor_Pilot = {
    radius: 5,
    fillColor: "#000080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : Parish_Harbor_Pilo<br> Teacher/PI : Cougars<br> Deployment_ ID : 1348718<br> ESN :166390751<br> starts at 2016-06-15T11:35")
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
    
    
var iconNock_Middle_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerNock_Middle_School=L.marker([42.76153,-70.56919], {icon: iconNock_Middle_School}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Nock_Middle_Schoo<br> Teacher/PI : Terry<br> Deployment_ ID : 1348717<br> ESN :167420704<br> starts at 2016-07-06T18:00");   
var myStyleNock_Middle_School = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsNock_Middle_School = {
    radius: 5,
    fillColor: "#FF00FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerNock_Middle_School = L.geoJson(null,{
    
    style: myStyleNock_Middle_School,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsNock_Middle_School);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Nock_Middle_Schoo<br> Teacher/PI : Terry<br> Deployment_ ID : 1348717<br> ESN :167420704<br> starts at 2016-07-06T18:00")
    }});
var gpxLayerNock_Middle_School = omnivore.gpx('data/Nock_Middle_School.gpx', null, customLayerNock_Middle_School).on('ready', function() {
    map.fitBounds(gpxLayerNock_Middle_School.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerNock_Middle_School = L.timeDimension.layer.geoJson(gpxLayerNock_Middle_School, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerNock_Middle_School =L.layerGroup([markerNock_Middle_School,gpxTimeLayerNock_Middle_School]);   
    
    
var iconMorse_High = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerMorse_High=L.marker([43.52914,-69.56279], {icon: iconMorse_High}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Morse_Hig<br> Teacher/PI : Ilkovich<br> Deployment_ ID : 1367585<br> ESN :165430691<br> starts at 2016-05-31T11:05");   
var myStyleMorse_High = {
    "color": "#800080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsMorse_High = {
    radius: 5,
    fillColor: "#800080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : Morse_Hig<br> Teacher/PI : Ilkovich<br> Deployment_ ID : 1367585<br> ESN :165430691<br> starts at 2016-05-31T11:05")
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
var markerMaritime_Gloucester=L.marker([42.38904,-70.21328], {icon: iconMaritime_Gloucester}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Maritime_Glouceste<br> Teacher/PI : Maderia<br> Deployment_ ID : 1367286<br> ESN :1664207014<br> starts at 2016-06-18T16:25");   
var myStyleMaritime_Gloucester = {
    "color": "#FFFFFF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsMaritime_Gloucester = {
    radius: 5,
    fillColor: "#FFFFFF",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : Maritime_Glouceste<br> Teacher/PI : Maderia<br> Deployment_ ID : 1367286<br> ESN :1664207014<br> starts at 2016-06-18T16:25")
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
    
    
var iconLEAP = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerLEAP=L.marker([42.52451,-70.86683], {icon: iconLEAP}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : LEA<br> Teacher/PI : Kathy<br> Deployment_ ID : 1368780<br> ESN :1674207013<br> starts at 2016-07-25T14:35");   
var myStyleLEAP = {
    "color": "#C0C0C0",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsLEAP = {
    radius: 5,
    fillColor: "#C0C0C0",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerLEAP = L.geoJson(null,{
    
    style: myStyleLEAP,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsLEAP);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : LEA<br> Teacher/PI : Kathy<br> Deployment_ ID : 1368780<br> ESN :1674207013<br> starts at 2016-07-25T14:35")
    }});
var gpxLayerLEAP = omnivore.gpx('data/LEAP.gpx', null, customLayerLEAP).on('ready', function() {
    map.fitBounds(gpxLayerLEAP.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerLEAP = L.timeDimension.layer.geoJson(gpxLayerLEAP, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerLEAP =L.layerGroup([markerLEAP,gpxTimeLayerLEAP]);   
    
    
var iconKent_School_PTF = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerKent_School_PTF=L.marker([34.21511,-67.36754], {icon: iconKent_School_PTF}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Kent_School_PT<br> Teacher/PI : Osprey<br> Deployment_ ID : 1367249<br> ESN :166390753<br> starts at 2016-06-15T14:12");   
var myStyleKent_School_PTF = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsKent_School_PTF = {
    radius: 5,
    fillColor: "#808080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerKent_School_PTF = L.geoJson(null,{
    
    style: myStyleKent_School_PTF,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsKent_School_PTF);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Kent_School_PT<br> Teacher/PI : Osprey<br> Deployment_ ID : 1367249<br> ESN :166390753<br> starts at 2016-06-15T14:12")
    }});
var gpxLayerKent_School_PTF = omnivore.gpx('data/Kent_School_PTF.gpx', null, customLayerKent_School_PTF).on('ready', function() {
    map.fitBounds(gpxLayerKent_School_PTF.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerKent_School_PTF = L.timeDimension.layer.geoJson(gpxLayerKent_School_PTF, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerKent_School_PTF =L.layerGroup([markerKent_School_PTF,gpxTimeLayerKent_School_PTF]);   
    
    
var iconKathleen_High_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerKathleen_High_School=L.marker([28.33256,-84.31524], {icon: iconKathleen_High_School}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Kathleen_High_Schoo<br> Teacher/PI : Bartuska<br> Deployment_ ID : 1353475<br> ESN :166270832<br> starts at 2016-06-21T14:53");   
var myStyleKathleen_High_School = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsKathleen_High_School = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerKathleen_High_School = L.geoJson(null,{
    
    style: myStyleKathleen_High_School,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsKathleen_High_School);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Kathleen_High_Schoo<br> Teacher/PI : Bartuska<br> Deployment_ ID : 1353475<br> ESN :166270832<br> starts at 2016-06-21T14:53")
    }});
var gpxLayerKathleen_High_School = omnivore.gpx('data/Kathleen_High_School.gpx', null, customLayerKathleen_High_School).on('ready', function() {
    map.fitBounds(gpxLayerKathleen_High_School.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerKathleen_High_School = L.timeDimension.layer.geoJson(gpxLayerKathleen_High_School, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerKathleen_High_School =L.layerGroup([markerKathleen_High_School,gpxTimeLayerKathleen_High_School]);   
    
    
var iconJacksonville_Univ = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerJacksonville_Univ=L.marker([24.23604,-74.49472], {icon: iconJacksonville_Univ}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Jacksonville_Uni<br> Teacher/PI : Stalker<br> Deployment_ ID : 1366238<br> ESN :166240741<br> starts at 2016-06-27T12:35");   
var myStyleJacksonville_Univ = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsJacksonville_Univ = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerJacksonville_Univ = L.geoJson(null,{
    
    style: myStyleJacksonville_Univ,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsJacksonville_Univ);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Jacksonville_Uni<br> Teacher/PI : Stalker<br> Deployment_ ID : 1366238<br> ESN :166240741<br> starts at 2016-06-27T12:35")
    }});
var gpxLayerJacksonville_Univ = omnivore.gpx('data/Jacksonville_Univ.gpx', null, customLayerJacksonville_Univ).on('ready', function() {
    map.fitBounds(gpxLayerJacksonville_Univ.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerJacksonville_Univ = L.timeDimension.layer.geoJson(gpxLayerJacksonville_Univ, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerJacksonville_Univ =L.layerGroup([markerJacksonville_Univ,gpxTimeLayerJacksonville_Univ]);   
    
    
var iconIpswich = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerIpswich=L.marker([42.42533,-70.45933], {icon: iconIpswich}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Ipswic<br> Teacher/PI : Lafrance<br> Deployment_ ID : 1374810<br> ESN :164420703<br> starts at 2016-04-23T19:48");   
var myStyleIpswich = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsIpswich = {
    radius: 5,
    fillColor: "#800000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : Ipswic<br> Teacher/PI : Lafrance<br> Deployment_ ID : 1374810<br> ESN :164420703<br> starts at 2016-04-23T19:48")
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
    
    
var iconInly_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerInly_School=L.marker([42.29007,-70.39747], {icon: iconInly_School}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Inly_Schoo<br> Teacher/PI : McGonagle<br> Deployment_ ID : 1367477<br> ESN :166420701<br> starts at 2016-06-01T19:21");   
var myStyleInly_School = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsInly_School = {
    radius: 5,
    fillColor: "#FFFF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerInly_School = L.geoJson(null,{
    
    style: myStyleInly_School,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsInly_School);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Inly_Schoo<br> Teacher/PI : McGonagle<br> Deployment_ ID : 1367477<br> ESN :166420701<br> starts at 2016-06-01T19:21")
    }});
var gpxLayerInly_School = omnivore.gpx('data/Inly_School.gpx', null, customLayerInly_School).on('ready', function() {
    map.fitBounds(gpxLayerInly_School.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerInly_School = L.timeDimension.layer.geoJson(gpxLayerInly_School, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerInly_School =L.layerGroup([markerInly_School,gpxTimeLayerInly_School]);   
    
    
var iconHingham_High = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerHingham_High=L.marker([42.162,-70.37], {icon: iconHingham_High}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Hingham_Hig<br> Teacher/PI : Gauthier<br> Deployment_ ID : 1376548<br> ESN :164420704<br> starts at 2016-04-27T16:12");   
var myStyleHingham_High = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsHingham_High = {
    radius: 5,
    fillColor: "#808000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : Hingham_Hig<br> Teacher/PI : Gauthier<br> Deployment_ ID : 1376548<br> ESN :164420704<br> starts at 2016-04-27T16:12")
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
    
    
var iconHarborlight_Montesorri = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerHarborlight_Montesorri=L.marker([42.51578,-70.69418], {icon: iconHarborlight_Montesorri}).bindPopup("    Drougued drifter Deployed here   <br> School/Lab : Harborlight_Montesorr<br> Teacher/PI : Terry<br> Deployment_ ID : 1348697<br> ESN :167420701<br> Depth : 12.0m <br> starts at 2016-07-01T15:49");   
var myStyleHarborlight_Montesorri = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsHarborlight_Montesorri = {
    radius: 5,
    fillColor: "#00FF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerHarborlight_Montesorri = L.geoJson(null,{
    
    style: myStyleHarborlight_Montesorri,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsHarborlight_Montesorri);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Drougued drifter  <br> School/Lab : Harborlight_Montesorr<br> Teacher/PI : Terry<br> Deployment_ ID : 1348697<br> ESN :167420701<br> Depth : 12.0m <br> starts at 2016-07-01T15:49")
    }});
var gpxLayerHarborlight_Montesorri = omnivore.gpx('data/Harborlight_Montesorri.gpx', null, customLayerHarborlight_Montesorri).on('ready', function() {
    map.fitBounds(gpxLayerHarborlight_Montesorri.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerHarborlight_Montesorri = L.timeDimension.layer.geoJson(gpxLayerHarborlight_Montesorri, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerHarborlight_Montesorri =L.layerGroup([markerHarborlight_Montesorri,gpxTimeLayerHarborlight_Montesorri]);   
    
    
var iconHanover_MA_Middle_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerHanover_MA_Middle_School=L.marker([42.10332,-70.09255], {icon: iconHanover_MA_Middle_School}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Hanover_MA_Middle_Schoo<br> Teacher/PI : Galluzzo<br> Deployment_ ID : 1366468<br> ESN :166420702<br> starts at 2016-06-01T17:08");   
var myStyleHanover_MA_Middle_School = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsHanover_MA_Middle_School = {
    radius: 5,
    fillColor: "#008000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerHanover_MA_Middle_School = L.geoJson(null,{
    
    style: myStyleHanover_MA_Middle_School,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsHanover_MA_Middle_School);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Hanover_MA_Middle_Schoo<br> Teacher/PI : Galluzzo<br> Deployment_ ID : 1366468<br> ESN :166420702<br> starts at 2016-06-01T17:08")
    }});
var gpxLayerHanover_MA_Middle_School = omnivore.gpx('data/Hanover_MA_Middle_School.gpx', null, customLayerHanover_MA_Middle_School).on('ready', function() {
    map.fitBounds(gpxLayerHanover_MA_Middle_School.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerHanover_MA_Middle_School = L.timeDimension.layer.geoJson(gpxLayerHanover_MA_Middle_School, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerHanover_MA_Middle_School =L.layerGroup([markerHanover_MA_Middle_School,gpxTimeLayerHanover_MA_Middle_School]);   
    
    
var iconGreenwood_Mennonite_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerGreenwood_Mennonite_School=L.marker([39.83554,-66.81829], {icon: iconGreenwood_Mennonite_School}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Greenwood_Mennonite_Schoo<br> Teacher/PI : Atlantic_Flame<br> Deployment_ ID : 1374608<br> ESN :164380752<br> starts at 2016-05-08T12:15");   
var myStyleGreenwood_Mennonite_School = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsGreenwood_Mennonite_School = {
    radius: 5,
    fillColor: "#008080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerGreenwood_Mennonite_School = L.geoJson(null,{
    
    style: myStyleGreenwood_Mennonite_School,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsGreenwood_Mennonite_School);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Greenwood_Mennonite_Schoo<br> Teacher/PI : Atlantic_Flame<br> Deployment_ ID : 1374608<br> ESN :164380752<br> starts at 2016-05-08T12:15")
    }});
var gpxLayerGreenwood_Mennonite_School = omnivore.gpx('data/Greenwood_Mennonite_School.gpx', null, customLayerGreenwood_Mennonite_School).on('ready', function() {
    map.fitBounds(gpxLayerGreenwood_Mennonite_School.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerGreenwood_Mennonite_School = L.timeDimension.layer.geoJson(gpxLayerGreenwood_Mennonite_School, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerGreenwood_Mennonite_School =L.layerGroup([markerGreenwood_Mennonite_School,gpxTimeLayerGreenwood_Mennonite_School]);   
    
    
var iconGov_Livingston_High_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerGov_Livingston_High_School=L.marker([39.00559,-73.66208], {icon: iconGov_Livingston_High_School}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Gov_Livingston_High_Schoo<br> Teacher/PI : McLoughlin<br> Deployment_ ID : 1367594<br> ESN :164390721<br> starts at 2016-05-07T18:31");   
var myStyleGov_Livingston_High_School = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsGov_Livingston_High_School = {
    radius: 5,
    fillColor: "#0000FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerGov_Livingston_High_School = L.geoJson(null,{
    
    style: myStyleGov_Livingston_High_School,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsGov_Livingston_High_School);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Gov_Livingston_High_Schoo<br> Teacher/PI : McLoughlin<br> Deployment_ ID : 1367594<br> ESN :164390721<br> starts at 2016-05-07T18:31")
    }});
var gpxLayerGov_Livingston_High_School = omnivore.gpx('data/Gov_Livingston_High_School.gpx', null, customLayerGov_Livingston_High_School).on('ready', function() {
    map.fitBounds(gpxLayerGov_Livingston_High_School.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerGov_Livingston_High_School = L.timeDimension.layer.geoJson(gpxLayerGov_Livingston_High_School, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerGov_Livingston_High_School =L.layerGroup([markerGov_Livingston_High_School,gpxTimeLayerGov_Livingston_High_School]);   
    
    
var iconGOMI_Kennebunk_GMRI = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerGOMI_Kennebunk_GMRI=L.marker([42.73491,-70.37298], {icon: iconGOMI_Kennebunk_GMRI}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : GOMI_Kennebunk_GMR<br> Teacher/PI : Lietje<br> Deployment_ ID : 1366849<br> ESN :161430701<br> starts at 2016-01-25T18:29");   
var myStyleGOMI_Kennebunk_GMRI = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsGOMI_Kennebunk_GMRI = {
    radius: 5,
    fillColor: "#000080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerGOMI_Kennebunk_GMRI = L.geoJson(null,{
    
    style: myStyleGOMI_Kennebunk_GMRI,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsGOMI_Kennebunk_GMRI);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : GOMI_Kennebunk_GMR<br> Teacher/PI : Lietje<br> Deployment_ ID : 1366849<br> ESN :161430701<br> starts at 2016-01-25T18:29")
    }});
var gpxLayerGOMI_Kennebunk_GMRI = omnivore.gpx('data/GOMI_Kennebunk_GMRI.gpx', null, customLayerGOMI_Kennebunk_GMRI).on('ready', function() {
    map.fitBounds(gpxLayerGOMI_Kennebunk_GMRI.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerGOMI_Kennebunk_GMRI = L.timeDimension.layer.geoJson(gpxLayerGOMI_Kennebunk_GMRI, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerGOMI_Kennebunk_GMRI =L.layerGroup([markerGOMI_Kennebunk_GMRI,gpxTimeLayerGOMI_Kennebunk_GMRI]);   
    
    
var iconGloucester_High = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerGloucester_High=L.marker([42.65687,-70.52458], {icon: iconGloucester_High}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Gloucester_Hig<br> Teacher/PI : Goolsby<br> Deployment_ ID : 1367278<br> ESN :165420705<br> starts at 2016-05-19T15:24");   
var myStyleGloucester_High = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsGloucester_High = {
    radius: 5,
    fillColor: "#FF00FF",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : Gloucester_Hig<br> Teacher/PI : Goolsby<br> Deployment_ ID : 1367278<br> ESN :165420705<br> starts at 2016-05-19T15:24")
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
    
    
var iconGLERL = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerGLERL=L.marker([41.82587,-83.18903], {icon: iconGLERL}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : GLER<br> Teacher/PI : Ruberg<br> Deployment_ ID : 1368873<br> ESN :167420832<br> starts at 2016-07-05T17:48");   
var myStyleGLERL = {
    "color": "#800080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsGLERL = {
    radius: 5,
    fillColor: "#800080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerGLERL = L.geoJson(null,{
    
    style: myStyleGLERL,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsGLERL);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : GLER<br> Teacher/PI : Ruberg<br> Deployment_ ID : 1368873<br> ESN :167420832<br> starts at 2016-07-05T17:48")
    }});
var gpxLayerGLERL = omnivore.gpx('data/GLERL.gpx', null, customLayerGLERL).on('ready', function() {
    map.fitBounds(gpxLayerGLERL.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerGLERL = L.timeDimension.layer.geoJson(gpxLayerGLERL, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerGLERL =L.layerGroup([markerGLERL,gpxTimeLayerGLERL]);   
    
    
var iconGeorgia_Southern_University = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerGeorgia_Southern_University=L.marker([31.91386,-80.84017], {icon: iconGeorgia_Southern_University}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Georgia_Southern_Universit<br> Teacher/PI : Mary<br> Deployment_ ID : 1368777<br> ESN :166290792<br> starts at 2016-06-25T20:14");   
var myStyleGeorgia_Southern_University = {
    "color": "#FFFFFF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsGeorgia_Southern_University = {
    radius: 5,
    fillColor: "#FFFFFF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerGeorgia_Southern_University = L.geoJson(null,{
    
    style: myStyleGeorgia_Southern_University,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsGeorgia_Southern_University);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Georgia_Southern_Universit<br> Teacher/PI : Mary<br> Deployment_ ID : 1368777<br> ESN :166290792<br> starts at 2016-06-25T20:14")
    }});
var gpxLayerGeorgia_Southern_University = omnivore.gpx('data/Georgia_Southern_University.gpx', null, customLayerGeorgia_Southern_University).on('ready', function() {
    map.fitBounds(gpxLayerGeorgia_Southern_University.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerGeorgia_Southern_University = L.timeDimension.layer.geoJson(gpxLayerGeorgia_Southern_University, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerGeorgia_Southern_University =L.layerGroup([markerGeorgia_Southern_University,gpxTimeLayerGeorgia_Southern_University]);   
    
    
var iconFalmouth_MA_High = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerFalmouth_MA_High=L.marker([37.62713,-74.76275], {icon: iconFalmouth_MA_High}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Falmouth_MA_Hig<br> Teacher/PI : Milliken<br> Deployment_ ID : 1365938<br> ESN :165430702<br> starts at 2016-05-19T14:17");   
var myStyleFalmouth_MA_High = {
    "color": "#C0C0C0",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsFalmouth_MA_High = {
    radius: 5,
    fillColor: "#C0C0C0",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : Falmouth_MA_Hig<br> Teacher/PI : Milliken<br> Deployment_ ID : 1365938<br> ESN :165430702<br> starts at 2016-05-19T14:17")
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
var markerEssex_Tech=L.marker([42.49406,-70.3818], {icon: iconEssex_Tech}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Essex_Tec<br> Teacher/PI : Wyda<br> Deployment_ ID : 1367742<br> ESN :164420701<br> starts at 2016-03-17T11:48");   
var myStyleEssex_Tech = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsEssex_Tech = {
    radius: 5,
    fillColor: "#808080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : Essex_Tec<br> Teacher/PI : Wyda<br> Deployment_ ID : 1367742<br> ESN :164420701<br> starts at 2016-03-17T11:48")
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
var markerDuxbury_MA_High=L.marker([41.35023,-70.89509], {icon: iconDuxbury_MA_High}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Duxbury_MA_Hig<br> Teacher/PI : Nelson<br> Deployment_ ID : 1368110<br> ESN :1664207013<br> starts at 2016-06-20T16:30");   
var myStyleDuxbury_MA_High = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsDuxbury_MA_High = {
    radius: 5,
    fillColor: "#000000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : Duxbury_MA_Hig<br> Teacher/PI : Nelson<br> Deployment_ ID : 1368110<br> ESN :1664207013<br> starts at 2016-06-20T16:30")
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
    
    
var iconDunnellon_Christian_Academy = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerDunnellon_Christian_Academy=L.marker([28.53072,-79.49971], {icon: iconDunnellon_Christian_Academy}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Dunnellon_Christian_Academ<br> Teacher/PI : SS_DCA_Eagles<br> Deployment_ ID : 1367297<br> ESN :162290821<br> starts at 2016-03-16T02:57");   
var myStyleDunnellon_Christian_Academy = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsDunnellon_Christian_Academy = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerDunnellon_Christian_Academy = L.geoJson(null,{
    
    style: myStyleDunnellon_Christian_Academy,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsDunnellon_Christian_Academy);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Dunnellon_Christian_Academ<br> Teacher/PI : SS_DCA_Eagles<br> Deployment_ ID : 1367297<br> ESN :162290821<br> starts at 2016-03-16T02:57")
    }});
var gpxLayerDunnellon_Christian_Academy = omnivore.gpx('data/Dunnellon_Christian_Academy.gpx', null, customLayerDunnellon_Christian_Academy).on('ready', function() {
    map.fitBounds(gpxLayerDunnellon_Christian_Academy.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerDunnellon_Christian_Academy = L.timeDimension.layer.geoJson(gpxLayerDunnellon_Christian_Academy, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerDunnellon_Christian_Academy =L.layerGroup([markerDunnellon_Christian_Academy,gpxTimeLayerDunnellon_Christian_Academy]);   
    
    
var iconCSCR_MD_FUNDED = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerCSCR_MD_FUNDED=L.marker([42.27585,-70.70549], {icon: iconCSCR_MD_FUNDED}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : CSCR_MD_FUNDE<br> Teacher/PI : Buckley<br> Deployment_ ID : 1367495<br> ESN :167420707<br> starts at 2016-07-15T12:51");   
var myStyleCSCR_MD_FUNDED = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsCSCR_MD_FUNDED = {
    radius: 5,
    fillColor: "#800000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : CSCR_MD_FUNDE<br> Teacher/PI : Buckley<br> Deployment_ ID : 1367495<br> ESN :167420707<br> starts at 2016-07-15T12:51")
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
var markerCSCR_Harborlight_Montesorri=L.marker([42.27148,-70.69461], {icon: iconCSCR_Harborlight_Montesorri}).bindPopup("    Drougued drifter Deployed here   <br> School/Lab : CSCR_Harborlight_Montesorr<br> Teacher/PI : Buckley<br> Deployment_ ID : 1348697<br> ESN :167420709<br> Depth : 10.0m <br> starts at 2016-07-15T16:09");   
var myStyleCSCR_Harborlight_Montesorri = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsCSCR_Harborlight_Montesorri = {
    radius: 5,
    fillColor: "#FFFF00",
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
        layer.bindPopup("    Drougued drifter  <br> School/Lab : CSCR_Harborlight_Montesorr<br> Teacher/PI : Buckley<br> Deployment_ ID : 1348697<br> ESN :167420709<br> Depth : 10.0m <br> starts at 2016-07-15T16:09")
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
var markerCSCR=L.marker([42.27587,-70.70541], {icon: iconCSCR}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : CSC<br> Teacher/PI : Buckley<br> Deployment_ ID : 1369733<br> ESN :167420708<br> starts at 2016-07-15T12:42");   
var myStyleCSCR = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsCSCR = {
    radius: 5,
    fillColor: "#808000",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : CSC<br> Teacher/PI : Buckley<br> Deployment_ ID : 1369733<br> ESN :167420708<br> starts at 2016-07-15T12:42")
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
    
    
var iconCPA_IST_EMEPC = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerCPA_IST_EMEPC=L.marker([38.48492,-9.611084], {icon: iconCPA_IST_EMEPC}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : CPA_IST_EMEP<br> Teacher/PI : Sebastião<br> Deployment_ ID : 743810<br> ESN :165390091<br> starts at 2016-05-03T16:50");   
var myStyleCPA_IST_EMEPC = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsCPA_IST_EMEPC = {
    radius: 5,
    fillColor: "#00FF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerCPA_IST_EMEPC = L.geoJson(null,{
    
    style: myStyleCPA_IST_EMEPC,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsCPA_IST_EMEPC);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : CPA_IST_EMEP<br> Teacher/PI : Sebastião<br> Deployment_ ID : 743810<br> ESN :165390091<br> starts at 2016-05-03T16:50")
    }});
var gpxLayerCPA_IST_EMEPC = omnivore.gpx('data/CPA_IST_EMEPC.gpx', null, customLayerCPA_IST_EMEPC).on('ready', function() {
    map.fitBounds(gpxLayerCPA_IST_EMEPC.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerCPA_IST_EMEPC = L.timeDimension.layer.geoJson(gpxLayerCPA_IST_EMEPC, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerCPA_IST_EMEPC =L.layerGroup([markerCPA_IST_EMEPC,gpxTimeLayerCPA_IST_EMEPC]);   
    
    
var iconCape_Fear_Community_College = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerCape_Fear_Community_College=L.marker([51.31938,-15.89934], {icon: iconCape_Fear_Community_College}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Cape_Fear_Community_Colleg<br> Teacher/PI : Marlin_Spike_Miller<br> Deployment_ ID : 736769<br> ESN :163510151<br> starts at 2016-03-21T00:11");   
var myStyleCape_Fear_Community_College = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsCape_Fear_Community_College = {
    radius: 5,
    fillColor: "#008000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerCape_Fear_Community_College = L.geoJson(null,{
    
    style: myStyleCape_Fear_Community_College,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsCape_Fear_Community_College);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Cape_Fear_Community_Colleg<br> Teacher/PI : Marlin_Spike_Miller<br> Deployment_ ID : 736769<br> ESN :163510151<br> starts at 2016-03-21T00:11")
    }});
var gpxLayerCape_Fear_Community_College = omnivore.gpx('data/Cape_Fear_Community_College.gpx', null, customLayerCape_Fear_Community_College).on('ready', function() {
    map.fitBounds(gpxLayerCape_Fear_Community_College.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerCape_Fear_Community_College = L.timeDimension.layer.geoJson(gpxLayerCape_Fear_Community_College, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerCape_Fear_Community_College =L.layerGroup([markerCape_Fear_Community_College,gpxTimeLayerCape_Fear_Community_College]);   
    
    
var iconCapeMay = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerCapeMay=L.marker([38.52031,-73.42725], {icon: iconCapeMay}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : CapeMa<br> Teacher/PI : Manderson<br> Deployment_ ID : 1374339<br> ESN :162380721<br> starts at 2016-02-27T04:05");   
var myStyleCapeMay = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsCapeMay = {
    radius: 5,
    fillColor: "#008080",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : CapeMa<br> Teacher/PI : Manderson<br> Deployment_ ID : 1374339<br> ESN :162380721<br> starts at 2016-02-27T04:05")
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
    
    
var iconBrunswick_Maine_Junior_High_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerBrunswick_Maine_Junior_High_School=L.marker([43.67536,-69.96201], {icon: iconBrunswick_Maine_Junior_High_School}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Brunswick_Maine_Junior_High_Schoo<br> Teacher/PI : Landin<br> Deployment_ ID : 1366932<br> ESN :166430692<br> starts at 2016-06-10T15:09");   
var myStyleBrunswick_Maine_Junior_High_School = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsBrunswick_Maine_Junior_High_School = {
    radius: 5,
    fillColor: "#0000FF",
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
        layer.bindPopup("    Surface drifter   <br> School/Lab : Brunswick_Maine_Junior_High_Schoo<br> Teacher/PI : Landin<br> Deployment_ ID : 1366932<br> ESN :166430692<br> starts at 2016-06-10T15:09")
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
    
    
var iconBolles_School = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerBolles_School=L.marker([30.40029,-81.28595], {icon: iconBolles_School}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Bolles_Schoo<br> Teacher/PI : MurphyO<br> Deployment_ ID : 1374728<br> ESN :163230814<br> starts at 2016-03-16T16:12");   
var myStyleBolles_School = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsBolles_School = {
    radius: 5,
    fillColor: "#000080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerBolles_School = L.geoJson(null,{
    
    style: myStyleBolles_School,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsBolles_School);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Bolles_Schoo<br> Teacher/PI : MurphyO<br> Deployment_ ID : 1374728<br> ESN :163230814<br> starts at 2016-03-16T16:12")
    }});
var gpxLayerBolles_School = omnivore.gpx('data/Bolles_School.gpx', null, customLayerBolles_School).on('ready', function() {
    map.fitBounds(gpxLayerBolles_School.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerBolles_School = L.timeDimension.layer.geoJson(gpxLayerBolles_School, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerBolles_School =L.layerGroup([markerBolles_School,gpxTimeLayerBolles_School]);   
    
    
var iconBethleham_NH = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
var markerBethleham_NH=L.marker([42.85373,-70.56037], {icon: iconBethleham_NH}).bindPopup("    Surface drifter Deployed here  <br> School/Lab : Bethleham_N<br> Teacher/PI : Campbell<br> Deployment_ ID : 1349745<br> ESN :1664207016<br> starts at 2016-06-10T19:05");   
var myStyleBethleham_NH = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsBethleham_NH = {
    radius: 5,
    fillColor: "#FF00FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerBethleham_NH = L.geoJson(null,{
    
    style: myStyleBethleham_NH,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsBethleham_NH);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("    Surface drifter   <br> School/Lab : Bethleham_N<br> Teacher/PI : Campbell<br> Deployment_ ID : 1349745<br> ESN :1664207016<br> starts at 2016-06-10T19:05")
    }});
var gpxLayerBethleham_NH = omnivore.gpx('data/Bethleham_NH.gpx', null, customLayerBethleham_NH).on('ready', function() {
    map.fitBounds(gpxLayerBethleham_NH.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayerBethleham_NH = L.timeDimension.layer.geoJson(gpxLayerBethleham_NH, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var gpxaddmarkerBethleham_NH =L.layerGroup([markerBethleham_NH,gpxTimeLayerBethleham_NH]);   
    
    
var officelegend = L.control({
    position: 'bottomright'
});
officelegend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += '<img src="img/starticon.png" width="20" height="20"  /> Drifter start location <br> <img src="img/noaa-transparent-logo.png" width="20" height="20"  /> Our Office';
    return div;
};
officelegend.addTo(map);

var overlayMaps = {

"Yarmouth_ME_High": gpxaddmarkerYarmouth_ME_High,
"Westbrook_Maine_Middle_School": gpxaddmarkerWestbrook_Maine_Middle_School,
"Waterford_CT_High": gpxaddmarkerWaterford_CT_High,
"Univ_Georgia": gpxaddmarkerUniv_Georgia,
"Univ_Central_Florida": gpxaddmarkerUniv_Central_Florida,
"UCONN": gpxaddmarkerUCONN,
"The_Foundation_Academy": gpxaddmarkerThe_Foundation_Academy,
"Texas": gpxaddmarkerTexas,
"Swampscott_High_School": gpxaddmarkerSwampscott_High_School,
"St_Paul_Advanced_Studies": gpxaddmarkerSt_Paul_Advanced_Studies,
"St_Marys_Lynn": gpxaddmarkerSt_Marys_Lynn,
"St_John_Paul_II": gpxaddmarkerSt_John_Paul_II,
"St_John_Evangelist_School_of_Beverly": gpxaddmarkerSt_John_Evangelist_School_of_Beverly,
"St_Andrews_Math_and_Science": gpxaddmarkerSt_Andrews_Math_and_Science,
"SSNSC_Germantown": gpxaddmarkerSSNSC_Germantown,
"South_Shore_Charter_Public_School": gpxaddmarkerSouth_Shore_Charter_Public_School,
"SEA_ISML_Plymouth_Middle": gpxaddmarkerSEA_ISML_Plymouth_Middle,
"Scarborough_ME_Elementary": gpxaddmarkerScarborough_ME_Elementary,
"Scarborough": gpxaddmarkerScarborough,
"Salem_Sound_Coastwatch": gpxaddmarkerSalem_Sound_Coastwatch,
"SalemSound_Marine_Tech": gpxaddmarkerSalemSound_Marine_Tech,
"Radcliffe_Creek_School": gpxaddmarkerRadcliffe_Creek_School,
"Plymouth_South_Middle_School_PSMS_2": gpxaddmarkerPlymouth_South_Middle_School_PSMS_2,
"Plymouth_South_Middle_School_PSMS_1": gpxaddmarkerPlymouth_South_Middle_School_PSMS_1,
"Plymouth_Community_Intermediate_School": gpxaddmarkerPlymouth_Community_Intermediate_School,
"Pembroke_MA_High_URI_RWU": gpxaddmarkerPembroke_MA_High_URI_RWU,
"Parish_Harbor_Pilot": gpxaddmarkerParish_Harbor_Pilot,
"Nock_Middle_School": gpxaddmarkerNock_Middle_School,
"Morse_High": gpxaddmarkerMorse_High,
"Maritime_Gloucester": gpxaddmarkerMaritime_Gloucester,
"LEAP": gpxaddmarkerLEAP,
"Kent_School_PTF": gpxaddmarkerKent_School_PTF,
"Kathleen_High_School": gpxaddmarkerKathleen_High_School,
"Jacksonville_Univ": gpxaddmarkerJacksonville_Univ,
"Ipswich": gpxaddmarkerIpswich,
"Inly_School": gpxaddmarkerInly_School,
"Hingham_High": gpxaddmarkerHingham_High,
"Harborlight_Montesorri": gpxaddmarkerHarborlight_Montesorri,
"Hanover_MA_Middle_School": gpxaddmarkerHanover_MA_Middle_School,
"Greenwood_Mennonite_School": gpxaddmarkerGreenwood_Mennonite_School,
"Gov_Livingston_High_School": gpxaddmarkerGov_Livingston_High_School,
"GOMI_Kennebunk_GMRI": gpxaddmarkerGOMI_Kennebunk_GMRI,
"Gloucester_High": gpxaddmarkerGloucester_High,
"GLERL": gpxaddmarkerGLERL,
"Georgia_Southern_University": gpxaddmarkerGeorgia_Southern_University,
"Falmouth_MA_High": gpxaddmarkerFalmouth_MA_High,
"Essex_Tech": gpxaddmarkerEssex_Tech,
"Duxbury_MA_High": gpxaddmarkerDuxbury_MA_High,
"Dunnellon_Christian_Academy": gpxaddmarkerDunnellon_Christian_Academy,
"CSCR_MD_FUNDED": gpxaddmarkerCSCR_MD_FUNDED,
"CSCR_Harborlight_Montesorri": gpxaddmarkerCSCR_Harborlight_Montesorri,
"CSCR": gpxaddmarkerCSCR,
"CPA_IST_EMEPC": gpxaddmarkerCPA_IST_EMEPC,
"Cape_Fear_Community_College": gpxaddmarkerCape_Fear_Community_College,
"CapeMay": gpxaddmarkerCapeMay,
"Brunswick_Maine_Junior_High_School": gpxaddmarkerBrunswick_Maine_Junior_High_School,
"Bolles_School": gpxaddmarkerBolles_School,
"Bethleham_NH": gpxaddmarkerBethleham_NH,};

var baseLayers = getCommonBaseLayers(map); // see baselayers.js
L.control.layers(baseLayers, overlayMaps).addTo(map);
gpxTimeLayer_OurNOAAlab.addTo(map);
gpxaddmarkerYarmouth_ME_High.addTo(map);
gpxaddmarkerWestbrook_Maine_Middle_School.addTo(map);
gpxaddmarkerWaterford_CT_High.addTo(map);
gpxaddmarkerUniv_Georgia.addTo(map);
gpxaddmarkerUniv_Central_Florida.addTo(map);
gpxaddmarkerUCONN.addTo(map);
gpxaddmarkerThe_Foundation_Academy.addTo(map);
gpxaddmarkerTexas.addTo(map);
gpxaddmarkerSwampscott_High_School.addTo(map);
gpxaddmarkerSt_Paul_Advanced_Studies.addTo(map);
gpxaddmarkerSt_Marys_Lynn.addTo(map);
gpxaddmarkerSt_John_Paul_II.addTo(map);
gpxaddmarkerSt_John_Evangelist_School_of_Beverly.addTo(map);
gpxaddmarkerSt_Andrews_Math_and_Science.addTo(map);
gpxaddmarkerSSNSC_Germantown.addTo(map);
gpxaddmarkerSouth_Shore_Charter_Public_School.addTo(map);
gpxaddmarkerSEA_ISML_Plymouth_Middle.addTo(map);
gpxaddmarkerScarborough_ME_Elementary.addTo(map);
gpxaddmarkerScarborough.addTo(map);
gpxaddmarkerSalem_Sound_Coastwatch.addTo(map);
gpxaddmarkerSalemSound_Marine_Tech.addTo(map);
gpxaddmarkerRadcliffe_Creek_School.addTo(map);
gpxaddmarkerPlymouth_South_Middle_School_PSMS_2.addTo(map);
gpxaddmarkerPlymouth_South_Middle_School_PSMS_1.addTo(map);
gpxaddmarkerPlymouth_Community_Intermediate_School.addTo(map);
gpxaddmarkerPembroke_MA_High_URI_RWU.addTo(map);
gpxaddmarkerParish_Harbor_Pilot.addTo(map);
gpxaddmarkerNock_Middle_School.addTo(map);
gpxaddmarkerMorse_High.addTo(map);
gpxaddmarkerMaritime_Gloucester.addTo(map);
gpxaddmarkerLEAP.addTo(map);
gpxaddmarkerKent_School_PTF.addTo(map);
gpxaddmarkerKathleen_High_School.addTo(map);
gpxaddmarkerJacksonville_Univ.addTo(map);
gpxaddmarkerIpswich.addTo(map);
gpxaddmarkerInly_School.addTo(map);
gpxaddmarkerHingham_High.addTo(map);
gpxaddmarkerHarborlight_Montesorri.addTo(map);
gpxaddmarkerHanover_MA_Middle_School.addTo(map);
gpxaddmarkerGreenwood_Mennonite_School.addTo(map);
gpxaddmarkerGov_Livingston_High_School.addTo(map);
gpxaddmarkerGOMI_Kennebunk_GMRI.addTo(map);
gpxaddmarkerGloucester_High.addTo(map);
gpxaddmarkerGLERL.addTo(map);
gpxaddmarkerGeorgia_Southern_University.addTo(map);
gpxaddmarkerFalmouth_MA_High.addTo(map);
gpxaddmarkerEssex_Tech.addTo(map);
gpxaddmarkerDuxbury_MA_High.addTo(map);
gpxaddmarkerDunnellon_Christian_Academy.addTo(map);
gpxaddmarkerCSCR_MD_FUNDED.addTo(map);
gpxaddmarkerCSCR_Harborlight_Montesorri.addTo(map);
gpxaddmarkerCSCR.addTo(map);
gpxaddmarkerCPA_IST_EMEPC.addTo(map);
gpxaddmarkerCape_Fear_Community_College.addTo(map);
gpxaddmarkerCapeMay.addTo(map);
gpxaddmarkerBrunswick_Maine_Junior_High_School.addTo(map);
gpxaddmarkerBolles_School.addTo(map);
gpxaddmarkerBethleham_NH.addTo(map);
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
