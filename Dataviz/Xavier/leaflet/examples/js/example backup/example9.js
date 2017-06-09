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
    transitionTime: 100000, 
    loop: false,
    startOver:true
}, timeDimension);

var timeDimensionControlOptions = {
    player:        player,
    timeDimension: timeDimension,
    position:      'bottomleft',
    autoPlay:      true,
    minSpeed:      20,
    speedStep:     50,
    maxSpeed:      600,
    timeSteps:     1,
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

var icon = L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [28, 22],
    iconAnchor: [5, 25]
});

 L.marker([42.5, -69], {icon: icon}).addTo(map).bindPopup("I am a green leaf.");   
var myStyle = {
    "color": "red",
    "weight": 2,
    "opacity": 0.65
};

var geojsonMarkerOptions = {
    radius: 5,
    fillColor: "#ff7800",
    color: "black",
    weight: 1,
    opacity: 0.5,
    fillOpacity: 0.8
};
var customLayer = L.geoJson(null,{
    
    style: myStyle,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 164420701<br> start at')
    }});
var customLayer2 = L.geoJson(null,{
    
    style: myStyle,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 164420701<br> start at')
    }});
//var customLayer1 = L.geoJson(null, {style:myStyle});

var gpxLayer = omnivore.gpx('data/drift164420701.gpx', null, customLayer).on('ready', function() {
    map.fitBounds(gpxLayer.getBounds(), {
        paddingBottomRight: [40, 40]
    });
});


var gpxTimeLayer = L.timeDimension.layer.geoJson(gpxLayer, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true,
   
    
});
var gpxLayer2 = omnivore.gpx('data/drift164420703.gpx', null,customLayer2).on('ready',function(){});
var gpxTimeLayer2 = L.timeDimension.layer.geoJson(gpxLayer2,{
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});
var gpxLayer3 = omnivore.gpx('data/drift165420703.gpx', customLayer);
var gpxTimeLayer3 = L.timeDimension.layer.geoJson(gpxLayer3, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});
var gpxLayer4 = omnivore.gpx('data/drift165420705.gpx',customLayer);
var gpxTimeLayer4 = L.timeDimension.layer.geoJson(gpxLayer4, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});
var gpxLayer5 = omnivore.gpx('data/drift1664207014.gpx', customLayer);
var gpxTimeLayer5 = L.timeDimension.layer.geoJson(gpxLayer5, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});
var gpxLayer6 = omnivore.gpx('data/drift166420702.gpx', customLayer);
var gpxTimeLayer6 = L.timeDimension.layer.geoJson(gpxLayer6, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});
var gpxLayer7 = omnivore.gpx('data/drift166420703.gpx', customLayer);
var gpxTimeLayer7 = L.timeDimension.layer.geoJson(gpxLayer7, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});
var gpxLayer8 = omnivore.gpx('data/drift166420704.gpx', customLayer);
var gpxTimeLayer8 = L.timeDimension.layer.geoJson(gpxLayer8, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});
var gpxLayer9 = omnivore.gpx('data/drift166420705.gpx', customLayer);
var gpxTimeLayer9 = L.timeDimension.layer.geoJson(gpxLayer9, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});
var gpxLayer10 = omnivore.gpx('data/drift166420706.gpx', customLayer);
var gpxTimeLayer10 = L.timeDimension.layer.geoJson(gpxLayer10, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});


var overlayMaps = {
    "164420701": gpxTimeLayer,
    "Gpx layer2": gpxTimeLayer2,
    "Gpx layer3": gpxTimeLayer3,
    "Gpx layer4": gpxTimeLayer4,
    "Gpx layer5": gpxTimeLayer5,
    "Gpx layer6": gpxTimeLayer6,
    "Gpx layer7": gpxTimeLayer7,
    "Gpx layer8": gpxTimeLayer8,
    "Gpx layer9": gpxTimeLayer9,
    "Gpx layer10": gpxTimeLayer10,
   
};
var baseLayers = getCommonBaseLayers(map); // see baselayers.js
L.control.layers(baseLayers, overlayMaps).addTo(map);
gpxTimeLayer.addTo(map);
gpxTimeLayer2.addTo(map);