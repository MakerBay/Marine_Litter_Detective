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
    minSpeed:      10,
    speedStep:     1,
    maxSpeed:      100,
    timeSteps:     90,
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


var iconOur_office = new L.icon({
    iconUrl: 'img/noaa-transparent-logo.png',
    iconSize: [25, 25],
    
});        
L.marker([41.57027,-70.620188], {icon: iconOur_office}).addTo(map).bindPopup('Hi! This is our office. <br> Welcome!');   
var myStyleOur_office = {
    "color": "#FFFFFF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptionsOur_office = {
    radius: 5,
    fillColor: "#FFFFFF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayerOur_office = L.geoJson(null,{
    
    style: myStyleOur_office,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptionsOur_office);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter Our_office<br> start at 2016-01-25T18:29')
    }});
var gpxLayerOur_office = omnivore.gpx('data/Our_office.gpx', null, customLayerOur_office).on('ready', function() {});


var gpxTimeLayerOur_office = L.timeDimension.layer.geoJson(gpxLayerOur_office, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon167430701 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.92828,-70.49098], {icon: icon167430701}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 167430701<br> starts at 2016-07-17T14:26');   
var myStyle167430701 = {
    "color": "#C0C0C0",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions167430701 = {
    radius: 5,
    fillColor: "#C0C0C0",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer167430701 = L.geoJson(null,{
    
    style: myStyle167430701,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions167430701);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 167430701<br> start at 2016-07-17T14:26')
    }});
var gpxLayer167430701 = omnivore.gpx('data/167430701.gpx', null, customLayer167430701).on('ready', function() {
    map.fitBounds(gpxLayer167430701.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer167430701 = L.timeDimension.layer.geoJson(gpxLayer167430701, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon167420832 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([41.82587,-83.18903], {icon: icon167420832}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 167420832<br> starts at 2016-07-05T17:48');   
var myStyle167420832 = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions167420832 = {
    radius: 5,
    fillColor: "#808080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer167420832 = L.geoJson(null,{
    
    style: myStyle167420832,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions167420832);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 167420832<br> start at 2016-07-05T17:48')
    }});
var gpxLayer167420832 = omnivore.gpx('data/167420832.gpx', null, customLayer167420832).on('ready', function() {
    map.fitBounds(gpxLayer167420832.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer167420832 = L.timeDimension.layer.geoJson(gpxLayer167420832, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon167420831 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([41.76308,-83.33211], {icon: icon167420831}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 167420831<br> starts at 2016-07-05T13:12');   
var myStyle167420831 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions167420831 = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer167420831 = L.geoJson(null,{
    
    style: myStyle167420831,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions167420831);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 167420831<br> start at 2016-07-05T13:12')
    }});
var gpxLayer167420831 = omnivore.gpx('data/167420831.gpx', null, customLayer167420831).on('ready', function() {
    map.fitBounds(gpxLayer167420831.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer167420831 = L.timeDimension.layer.geoJson(gpxLayer167420831, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon167420710 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.08233,-70.44974], {icon: icon167420710}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 167420710<br> starts at 2016-07-21T14:53');   
var myStyle167420710 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions167420710 = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer167420710 = L.geoJson(null,{
    
    style: myStyle167420710,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions167420710);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 167420710<br> start at 2016-07-21T14:53')
    }});
var gpxLayer167420710 = omnivore.gpx('data/167420710.gpx', null, customLayer167420710).on('ready', function() {
    map.fitBounds(gpxLayer167420710.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer167420710 = L.timeDimension.layer.geoJson(gpxLayer167420710, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon167420709 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.27148,-70.69461], {icon: icon167420709}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 167420709<br> starts at 2016-07-15T16:09');   
var myStyle167420709 = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions167420709 = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer167420709 = L.geoJson(null,{
    
    style: myStyle167420709,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions167420709);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 167420709<br> start at 2016-07-15T16:09')
    }});
var gpxLayer167420709 = omnivore.gpx('data/167420709.gpx', null, customLayer167420709).on('ready', function() {
    map.fitBounds(gpxLayer167420709.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer167420709 = L.timeDimension.layer.geoJson(gpxLayer167420709, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon167420708 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.27587,-70.70541], {icon: icon167420708}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 167420708<br> starts at 2016-07-15T12:42');   
var myStyle167420708 = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions167420708 = {
    radius: 5,
    fillColor: "#FFFF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer167420708 = L.geoJson(null,{
    
    style: myStyle167420708,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions167420708);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 167420708<br> start at 2016-07-15T12:42')
    }});
var gpxLayer167420708 = omnivore.gpx('data/167420708.gpx', null, customLayer167420708).on('ready', function() {
    map.fitBounds(gpxLayer167420708.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer167420708 = L.timeDimension.layer.geoJson(gpxLayer167420708, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon167420707 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.27585,-70.70549], {icon: icon167420707}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 167420707<br> starts at 2016-07-15T12:51');   
var myStyle167420707 = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions167420707 = {
    radius: 5,
    fillColor: "#808000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer167420707 = L.geoJson(null,{
    
    style: myStyle167420707,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions167420707);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 167420707<br> start at 2016-07-15T12:51')
    }});
var gpxLayer167420707 = omnivore.gpx('data/167420707.gpx', null, customLayer167420707).on('ready', function() {
    map.fitBounds(gpxLayer167420707.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer167420707 = L.timeDimension.layer.geoJson(gpxLayer167420707, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon167420706 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.2761,-70.70554], {icon: icon167420706}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 167420706<br> starts at 2016-07-15T12:42');   
var myStyle167420706 = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions167420706 = {
    radius: 5,
    fillColor: "#00FF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer167420706 = L.geoJson(null,{
    
    style: myStyle167420706,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions167420706);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 167420706<br> start at 2016-07-15T12:42')
    }});
var gpxLayer167420706 = omnivore.gpx('data/167420706.gpx', null, customLayer167420706).on('ready', function() {
    map.fitBounds(gpxLayer167420706.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer167420706 = L.timeDimension.layer.geoJson(gpxLayer167420706, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon167420705 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.7548,-70.57042], {icon: icon167420705}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 167420705<br> starts at 2016-07-06T17:33');   
var myStyle167420705 = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions167420705 = {
    radius: 5,
    fillColor: "#008000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer167420705 = L.geoJson(null,{
    
    style: myStyle167420705,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions167420705);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 167420705<br> start at 2016-07-06T17:33')
    }});
var gpxLayer167420705 = omnivore.gpx('data/167420705.gpx', null, customLayer167420705).on('ready', function() {
    map.fitBounds(gpxLayer167420705.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer167420705 = L.timeDimension.layer.geoJson(gpxLayer167420705, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon167420704 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.76153,-70.56919], {icon: icon167420704}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 167420704<br> starts at 2016-07-06T18:00');   
var myStyle167420704 = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions167420704 = {
    radius: 5,
    fillColor: "#008080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer167420704 = L.geoJson(null,{
    
    style: myStyle167420704,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions167420704);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 167420704<br> start at 2016-07-06T18:00')
    }});
var gpxLayer167420704 = omnivore.gpx('data/167420704.gpx', null, customLayer167420704).on('ready', function() {
    map.fitBounds(gpxLayer167420704.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer167420704 = L.timeDimension.layer.geoJson(gpxLayer167420704, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon167420703 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.75773,-70.58042], {icon: icon167420703}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 167420703<br> starts at 2016-07-06T17:44');   
var myStyle167420703 = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions167420703 = {
    radius: 5,
    fillColor: "#0000FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer167420703 = L.geoJson(null,{
    
    style: myStyle167420703,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions167420703);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 167420703<br> start at 2016-07-06T17:44')
    }});
var gpxLayer167420703 = omnivore.gpx('data/167420703.gpx', null, customLayer167420703).on('ready', function() {
    map.fitBounds(gpxLayer167420703.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer167420703 = L.timeDimension.layer.geoJson(gpxLayer167420703, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon167420702 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.52196,-70.69972], {icon: icon167420702}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 167420702<br> starts at 2016-07-01T15:51');   
var myStyle167420702 = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions167420702 = {
    radius: 5,
    fillColor: "#000080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer167420702 = L.geoJson(null,{
    
    style: myStyle167420702,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions167420702);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 167420702<br> start at 2016-07-01T15:51')
    }});
var gpxLayer167420702 = omnivore.gpx('data/167420702.gpx', null, customLayer167420702).on('ready', function() {
    map.fitBounds(gpxLayer167420702.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer167420702 = L.timeDimension.layer.geoJson(gpxLayer167420702, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon1674207013 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.52451,-70.86683], {icon: icon1674207013}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 1674207013<br> starts at 2016-07-25T14:35');   
var myStyle1674207013 = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions1674207013 = {
    radius: 5,
    fillColor: "#FF00FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer1674207013 = L.geoJson(null,{
    
    style: myStyle1674207013,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions1674207013);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 1674207013<br> start at 2016-07-25T14:35')
    }});
var gpxLayer1674207013 = omnivore.gpx('data/1674207013.gpx', null, customLayer1674207013).on('ready', function() {
    map.fitBounds(gpxLayer1674207013.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer1674207013 = L.timeDimension.layer.geoJson(gpxLayer1674207013, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon1674207012 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.53721,-70.77502], {icon: icon1674207012}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 1674207012<br> starts at 2016-07-24T15:54');   
var myStyle1674207012 = {
    "color": "#800080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions1674207012 = {
    radius: 5,
    fillColor: "#800080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer1674207012 = L.geoJson(null,{
    
    style: myStyle1674207012,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions1674207012);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 1674207012<br> start at 2016-07-24T15:54')
    }});
var gpxLayer1674207012 = omnivore.gpx('data/1674207012.gpx', null, customLayer1674207012).on('ready', function() {
    map.fitBounds(gpxLayer1674207012.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer1674207012 = L.timeDimension.layer.geoJson(gpxLayer1674207012, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon167420701 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.51578,-70.69418], {icon: icon167420701}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 167420701<br> starts at 2016-07-01T15:49');   
var myStyle167420701 = {
    "color": "#FFFFFF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions167420701 = {
    radius: 5,
    fillColor: "#FFFFFF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer167420701 = L.geoJson(null,{
    
    style: myStyle167420701,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions167420701);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 167420701<br> start at 2016-07-01T15:49')
    }});
var gpxLayer167420701 = omnivore.gpx('data/167420701.gpx', null, customLayer167420701).on('ready', function() {
    map.fitBounds(gpxLayer167420701.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer167420701 = L.timeDimension.layer.geoJson(gpxLayer167420701, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon166430692 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});  
var marker166430692 = L.marker([43.67536,-69.96201]).bindPopup('This is Littleton, CO.');
//L.marker([43.67536,-69.96201], {icon: icon166430692}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 166430692<br> starts at 2016-06-10T15:09');   
var myStyle166430692 = {
    "color": "#C0C0C0",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions166430692 = {
    radius: 5,
    fillColor: "#C0C0C0",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer166430692 = L.geoJson(null,{
    
    style: myStyle166430692,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions166430692);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 166430692<br> start at 2016-06-10T15:09')
    }});
var gpxLayer166430692 = omnivore.gpx('data/166430692.gpx', null, customLayer166430692).on('ready', function() {
    map.fitBounds(gpxLayer166430692.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer166430692 = L.timeDimension.layer.geoJson(gpxLayer166430692, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
var cities = L.layerGroup([gpxTimeLayer166430692,marker166430692]);    
var icon166420707 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.96953,-70.42899], {icon: icon166420707}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 166420707<br> starts at 2016-06-02T17:37');   
var myStyle166420707 = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions166420707 = {
    radius: 5,
    fillColor: "#808080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer166420707 = L.geoJson(null,{
    
    style: myStyle166420707,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions166420707);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 166420707<br> start at 2016-06-02T17:37')
    }});
var gpxLayer166420707 = omnivore.gpx('data/166420707.gpx', null, customLayer166420707).on('ready', function() {
    map.fitBounds(gpxLayer166420707.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer166420707 = L.timeDimension.layer.geoJson(gpxLayer166420707, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon166420706 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.211,-70.21104], {icon: icon166420706}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 166420706<br> starts at 2016-06-01T15:08');   
var myStyle166420706 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions166420706 = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer166420706 = L.geoJson(null,{
    
    style: myStyle166420706,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions166420706);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 166420706<br> start at 2016-06-01T15:08')
    }});
var gpxLayer166420706 = omnivore.gpx('data/166420706.gpx', null, customLayer166420706).on('ready', function() {
    map.fitBounds(gpxLayer166420706.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer166420706 = L.timeDimension.layer.geoJson(gpxLayer166420706, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon166420705 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.1938,-70.29496], {icon: icon166420705}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 166420705<br> starts at 2016-06-01T15:02');   
var myStyle166420705 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions166420705 = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer166420705 = L.geoJson(null,{
    
    style: myStyle166420705,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions166420705);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 166420705<br> start at 2016-06-01T15:02')
    }});
var gpxLayer166420705 = omnivore.gpx('data/166420705.gpx', null, customLayer166420705).on('ready', function() {
    map.fitBounds(gpxLayer166420705.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer166420705 = L.timeDimension.layer.geoJson(gpxLayer166420705, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon166420704 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.19366,-70.29501], {icon: icon166420704}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 166420704<br> starts at 2016-06-01T15:02');   
var myStyle166420704 = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions166420704 = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer166420704 = L.geoJson(null,{
    
    style: myStyle166420704,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions166420704);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 166420704<br> start at 2016-06-01T15:02')
    }});
var gpxLayer166420704 = omnivore.gpx('data/166420704.gpx', null, customLayer166420704).on('ready', function() {
    map.fitBounds(gpxLayer166420704.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer166420704 = L.timeDimension.layer.geoJson(gpxLayer166420704, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon166420703 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.21021,-70.21029], {icon: icon166420703}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 166420703<br> starts at 2016-06-01T15:09');   
var myStyle166420703 = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions166420703 = {
    radius: 5,
    fillColor: "#FFFF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer166420703 = L.geoJson(null,{
    
    style: myStyle166420703,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions166420703);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 166420703<br> start at 2016-06-01T15:09')
    }});
var gpxLayer166420703 = omnivore.gpx('data/166420703.gpx', null, customLayer166420703).on('ready', function() {
    map.fitBounds(gpxLayer166420703.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer166420703 = L.timeDimension.layer.geoJson(gpxLayer166420703, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon166420702 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.10332,-70.09255], {icon: icon166420702}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 166420702<br> starts at 2016-06-01T17:08');   
var myStyle166420702 = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions166420702 = {
    radius: 5,
    fillColor: "#808000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer166420702 = L.geoJson(null,{
    
    style: myStyle166420702,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions166420702);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 166420702<br> start at 2016-06-01T17:08')
    }});
var gpxLayer166420702 = omnivore.gpx('data/166420702.gpx', null, customLayer166420702).on('ready', function() {
    map.fitBounds(gpxLayer166420702.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer166420702 = L.timeDimension.layer.geoJson(gpxLayer166420702, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon1664207016 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.85373,-70.56037], {icon: icon1664207016}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 1664207016<br> starts at 2016-06-10T19:05');   
var myStyle1664207016 = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions1664207016 = {
    radius: 5,
    fillColor: "#00FF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer1664207016 = L.geoJson(null,{
    
    style: myStyle1664207016,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions1664207016);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 1664207016<br> start at 2016-06-10T19:05')
    }});
var gpxLayer1664207016 = omnivore.gpx('data/1664207016.gpx', null, customLayer1664207016).on('ready', function() {
    map.fitBounds(gpxLayer1664207016.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer1664207016 = L.timeDimension.layer.geoJson(gpxLayer1664207016, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon1664207015 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.85714,-70.54001], {icon: icon1664207015}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 1664207015<br> starts at 2016-06-10T19:11');   
var myStyle1664207015 = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions1664207015 = {
    radius: 5,
    fillColor: "#008000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer1664207015 = L.geoJson(null,{
    
    style: myStyle1664207015,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions1664207015);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 1664207015<br> start at 2016-06-10T19:11')
    }});
var gpxLayer1664207015 = omnivore.gpx('data/1664207015.gpx', null, customLayer1664207015).on('ready', function() {
    map.fitBounds(gpxLayer1664207015.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer1664207015 = L.timeDimension.layer.geoJson(gpxLayer1664207015, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon1664207014 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.38904,-70.21328], {icon: icon1664207014}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 1664207014<br> starts at 2016-06-18T16:25');   
var myStyle1664207014 = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions1664207014 = {
    radius: 5,
    fillColor: "#008080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer1664207014 = L.geoJson(null,{
    
    style: myStyle1664207014,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions1664207014);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 1664207014<br> start at 2016-06-18T16:25')
    }});
var gpxLayer1664207014 = omnivore.gpx('data/1664207014.gpx', null, customLayer1664207014).on('ready', function() {
    map.fitBounds(gpxLayer1664207014.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer1664207014 = L.timeDimension.layer.geoJson(gpxLayer1664207014, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon1664207013 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([41.35023,-70.89509], {icon: icon1664207013}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 1664207013<br> starts at 2016-06-20T16:30');   
var myStyle1664207013 = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions1664207013 = {
    radius: 5,
    fillColor: "#0000FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer1664207013 = L.geoJson(null,{
    
    style: myStyle1664207013,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions1664207013);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 1664207013<br> start at 2016-06-20T16:30')
    }});
var gpxLayer1664207013 = omnivore.gpx('data/1664207013.gpx', null, customLayer1664207013).on('ready', function() {
    map.fitBounds(gpxLayer1664207013.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer1664207013 = L.timeDimension.layer.geoJson(gpxLayer1664207013, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon1664207012 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.53532,-70.83909], {icon: icon1664207012}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 1664207012<br> starts at 2016-06-08T14:15');   
var myStyle1664207012 = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions1664207012 = {
    radius: 5,
    fillColor: "#000080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer1664207012 = L.geoJson(null,{
    
    style: myStyle1664207012,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions1664207012);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 1664207012<br> start at 2016-06-08T14:15')
    }});
var gpxLayer1664207012 = omnivore.gpx('data/1664207012.gpx', null, customLayer1664207012).on('ready', function() {
    map.fitBounds(gpxLayer1664207012.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer1664207012 = L.timeDimension.layer.geoJson(gpxLayer1664207012, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon166420701 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.29007,-70.39747], {icon: icon166420701}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 166420701<br> starts at 2016-06-01T19:21');   
var myStyle166420701 = {
    "color": "#FF00FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions166420701 = {
    radius: 5,
    fillColor: "#FF00FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer166420701 = L.geoJson(null,{
    
    style: myStyle166420701,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions166420701);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 166420701<br> start at 2016-06-01T19:21')
    }});
var gpxLayer166420701 = omnivore.gpx('data/166420701.gpx', null, customLayer166420701).on('ready', function() {
    map.fitBounds(gpxLayer166420701.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer166420701 = L.timeDimension.layer.geoJson(gpxLayer166420701, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon166410721 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([41.27763,-72.34625], {icon: icon166410721}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 166410721<br> starts at 2016-06-27T13:23');   
var myStyle166410721 = {
    "color": "#800080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions166410721 = {
    radius: 5,
    fillColor: "#800080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer166410721 = L.geoJson(null,{
    
    style: myStyle166410721,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions166410721);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 166410721<br> start at 2016-06-27T13:23')
    }});
var gpxLayer166410721 = omnivore.gpx('data/166410721.gpx', null, customLayer166410721).on('ready', function() {
    map.fitBounds(gpxLayer166410721.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer166410721 = L.timeDimension.layer.geoJson(gpxLayer166410721, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon166410702 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([41.90151,-70.28825], {icon: icon166410702}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 166410702<br> starts at 2016-07-19T23:32');   
var myStyle166410702 = {
    "color": "#FFFFFF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions166410702 = {
    radius: 5,
    fillColor: "#FFFFFF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer166410702 = L.geoJson(null,{
    
    style: myStyle166410702,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions166410702);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 166410702<br> start at 2016-07-19T23:32')
    }});
var gpxLayer166410702 = omnivore.gpx('data/166410702.gpx', null, customLayer166410702).on('ready', function() {
    map.fitBounds(gpxLayer166410702.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer166410702 = L.timeDimension.layer.geoJson(gpxLayer166410702, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon165430701 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([43.21107,-70.07996], {icon: icon165430701}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 165430701<br> starts at 2016-05-11T12:36');   
var myStyle165430701 = {
    "color": "#C0C0C0",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions165430701 = {
    radius: 5,
    fillColor: "#C0C0C0",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer165430701 = L.geoJson(null,{
    
    style: myStyle165430701,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions165430701);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 165430701<br> start at 2016-05-11T12:36')
    }});
var gpxLayer165430701 = omnivore.gpx('data/165430701.gpx', null, customLayer165430701).on('ready', function() {
    map.fitBounds(gpxLayer165430701.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer165430701 = L.timeDimension.layer.geoJson(gpxLayer165430701, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon165430691 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([43.52914,-69.56279], {icon: icon165430691}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 165430691<br> starts at 2016-05-31T11:05');   
var myStyle165430691 = {
    "color": "#808080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions165430691 = {
    radius: 5,
    fillColor: "#808080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer165430691 = L.geoJson(null,{
    
    style: myStyle165430691,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions165430691);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 165430691<br> start at 2016-05-31T11:05')
    }});
var gpxLayer165430691 = omnivore.gpx('data/165430691.gpx', null, customLayer165430691).on('ready', function() {
    map.fitBounds(gpxLayer165430691.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer165430691 = L.timeDimension.layer.geoJson(gpxLayer165430691, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon165420705 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.65687,-70.52458], {icon: icon165420705}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 165420705<br> starts at 2016-05-19T15:24');   
var myStyle165420705 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions165420705 = {
    radius: 5,
    fillColor: "#000000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer165420705 = L.geoJson(null,{
    
    style: myStyle165420705,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions165420705);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 165420705<br> start at 2016-05-19T15:24')
    }});
var gpxLayer165420705 = omnivore.gpx('data/165420705.gpx', null, customLayer165420705).on('ready', function() {
    map.fitBounds(gpxLayer165420705.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer165420705 = L.timeDimension.layer.geoJson(gpxLayer165420705, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon165420703 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.65282,-70.51632], {icon: icon165420703}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 165420703<br> starts at 2016-05-19T16:50');   
var myStyle165420703 = {
    "color": "#FF0000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions165420703 = {
    radius: 5,
    fillColor: "#FF0000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer165420703 = L.geoJson(null,{
    
    style: myStyle165420703,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions165420703);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 165420703<br> start at 2016-05-19T16:50')
    }});
var gpxLayer165420703 = omnivore.gpx('data/165420703.gpx', null, customLayer165420703).on('ready', function() {
    map.fitBounds(gpxLayer165420703.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer165420703 = L.timeDimension.layer.geoJson(gpxLayer165420703, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon165420702 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.40861,-70.86572], {icon: icon165420702}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 165420702<br> starts at 2016-05-07T11:55');   
var myStyle165420702 = {
    "color": "#800000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions165420702 = {
    radius: 5,
    fillColor: "#800000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer165420702 = L.geoJson(null,{
    
    style: myStyle165420702,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions165420702);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 165420702<br> start at 2016-05-07T11:55')
    }});
var gpxLayer165420702 = omnivore.gpx('data/165420702.gpx', null, customLayer165420702).on('ready', function() {
    map.fitBounds(gpxLayer165420702.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer165420702 = L.timeDimension.layer.geoJson(gpxLayer165420702, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon165400722 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([41.23619,-72.26542], {icon: icon165400722}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 165400722<br> starts at 2016-05-18T14:44');   
var myStyle165400722 = {
    "color": "#FFFF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions165400722 = {
    radius: 5,
    fillColor: "#FFFF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer165400722 = L.geoJson(null,{
    
    style: myStyle165400722,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions165400722);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 165400722<br> start at 2016-05-18T14:44')
    }});
var gpxLayer165400722 = omnivore.gpx('data/165400722.gpx', null, customLayer165400722).on('ready', function() {
    map.fitBounds(gpxLayer165400722.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer165400722 = L.timeDimension.layer.geoJson(gpxLayer165400722, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon165400721 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([41.23563,-72.26467], {icon: icon165400721}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 165400721<br> starts at 2016-05-18T14:30');   
var myStyle165400721 = {
    "color": "#808000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions165400721 = {
    radius: 5,
    fillColor: "#808000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer165400721 = L.geoJson(null,{
    
    style: myStyle165400721,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions165400721);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 165400721<br> start at 2016-05-18T14:30')
    }});
var gpxLayer165400721 = omnivore.gpx('data/165400721.gpx', null, customLayer165400721).on('ready', function() {
    map.fitBounds(gpxLayer165400721.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer165400721 = L.timeDimension.layer.geoJson(gpxLayer165400721, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon164420704 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.162,-70.37], {icon: icon164420704}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 164420704<br> starts at 2016-04-27T16:12');   
var myStyle164420704 = {
    "color": "#00FF00",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions164420704 = {
    radius: 5,
    fillColor: "#00FF00",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer164420704 = L.geoJson(null,{
    
    style: myStyle164420704,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions164420704);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 164420704<br> start at 2016-04-27T16:12')
    }});
var gpxLayer164420704 = omnivore.gpx('data/164420704.gpx', null, customLayer164420704).on('ready', function() {
    map.fitBounds(gpxLayer164420704.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer164420704 = L.timeDimension.layer.geoJson(gpxLayer164420704, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon164420703 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.42533,-70.45933], {icon: icon164420703}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 164420703<br> starts at 2016-04-23T19:48');   
var myStyle164420703 = {
    "color": "#008000",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions164420703 = {
    radius: 5,
    fillColor: "#008000",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer164420703 = L.geoJson(null,{
    
    style: myStyle164420703,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions164420703);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 164420703<br> start at 2016-04-23T19:48')
    }});
var gpxLayer164420703 = omnivore.gpx('data/164420703.gpx', null, customLayer164420703).on('ready', function() {
    map.fitBounds(gpxLayer164420703.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer164420703 = L.timeDimension.layer.geoJson(gpxLayer164420703, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon164420701 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.49406,-70.3818], {icon: icon164420701}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 164420701<br> starts at 2016-03-17T11:48');   
var myStyle164420701 = {
    "color": "#008080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions164420701 = {
    radius: 5,
    fillColor: "#008080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer164420701 = L.geoJson(null,{
    
    style: myStyle164420701,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions164420701);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 164420701<br> start at 2016-03-17T11:48')
    }});
var gpxLayer164420701 = omnivore.gpx('data/164420701.gpx', null, customLayer164420701).on('ready', function() {
    map.fitBounds(gpxLayer164420701.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer164420701 = L.timeDimension.layer.geoJson(gpxLayer164420701, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon162420701 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.47923,-70.91803], {icon: icon162420701}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 162420701<br> starts at 2016-05-03T09:15');   
var myStyle162420701 = {
    "color": "#0000FF",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions162420701 = {
    radius: 5,
    fillColor: "#0000FF",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer162420701 = L.geoJson(null,{
    
    style: myStyle162420701,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions162420701);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 162420701<br> start at 2016-05-03T09:15')
    }});
var gpxLayer162420701 = omnivore.gpx('data/162420701.gpx', null, customLayer162420701).on('ready', function() {
    map.fitBounds(gpxLayer162420701.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer162420701 = L.timeDimension.layer.geoJson(gpxLayer162420701, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var icon161430701 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

});        
L.marker([42.73491,-70.37298], {icon: icon161430701}).addTo(map).bindPopup('Drifter starts here ! <br> This is drifter 161430701<br> starts at 2016-01-25T18:29');   
var myStyle161430701 = {
    "color": "#000080",
    "weight": 2,
    "opacity": 0.65
};
var geojsonMarkerOptions161430701 = {
    radius: 5,
    fillColor: "#000080",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
};
var customLayer161430701 = L.geoJson(null,{
    
    style: myStyle161430701,
    
    
    pointToLayer: function ( feature,latLng) {
        
 
        return L.circleMarker(latLng,geojsonMarkerOptions161430701);
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup('this is drifter 161430701<br> start at 2016-01-25T18:29')
    }});
var gpxLayer161430701 = omnivore.gpx('data/161430701.gpx', null, customLayer161430701).on('ready', function() {
  
    map.fitBounds(gpxLayer161430701.getBounds(), {
        paddingBottomRight: [30, 40]
    });
});

var gpxTimeLayer161430701 = L.timeDimension.layer.geoJson(gpxLayer161430701, {
    
    addlastPoint: true,
    waitForReady: true, 
    });
    
var sapoMeanDirectionLegend = L.control({
    position: 'bottomright'
});
sapoMeanDirectionLegend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += '<img src="img/starticon.png" width="20" height="20"  /> Drifter start location <br> <img src="img/noaa-transparent-logo.png" width="20" height="20"  /> Our Office';
    return div;
};

var overlayMaps = {

"our office": gpxTimeLayerOur_office,
"167430701": gpxTimeLayer167430701,
"167420832": gpxTimeLayer167420832,
"167420831": gpxTimeLayer167420831,
"167420710": gpxTimeLayer167420710,
"167420709": gpxTimeLayer167420709,
"167420708": gpxTimeLayer167420708,
"167420707": gpxTimeLayer167420707,
"167420706": gpxTimeLayer167420706,
"167420705": gpxTimeLayer167420705,
"167420704": gpxTimeLayer167420704,
"167420703": gpxTimeLayer167420703,
"167420702": gpxTimeLayer167420702,
"1674207013": gpxTimeLayer1674207013,
"1674207012": gpxTimeLayer1674207012,
"167420701": gpxTimeLayer167420701,
"166430692": cities,
"166420707": gpxTimeLayer166420707,
"166420706": gpxTimeLayer166420706,
"166420705": gpxTimeLayer166420705,
"166420704": gpxTimeLayer166420704,
"166420703": gpxTimeLayer166420703,
"166420702": gpxTimeLayer166420702,
"1664207016": gpxTimeLayer1664207016,
"1664207015": gpxTimeLayer1664207015,
"1664207014": gpxTimeLayer1664207014,
"1664207013": gpxTimeLayer1664207013,
"1664207012": gpxTimeLayer1664207012,
"166420701": gpxTimeLayer166420701,
"166410721": gpxTimeLayer166410721,
"166410702": gpxTimeLayer166410702,
"165430701": gpxTimeLayer165430701,
"165430691": gpxTimeLayer165430691,
"165420705": gpxTimeLayer165420705,
"165420703": gpxTimeLayer165420703,
"165420702": gpxTimeLayer165420702,
"165400722": gpxTimeLayer165400722,
"165400721": gpxTimeLayer165400721,
"164420704": gpxTimeLayer164420704,
"164420703": gpxTimeLayer164420703,
"164420701": gpxTimeLayer164420701,
"162420701": gpxTimeLayer162420701,
"161430701": gpxTimeLayer161430701,};
map.on('overlayadd', function(eventLayer) {
    if (eventLayer.name == "Our_office") {
        sapoMeanDirectionLegend.addTo(this);
        
    } 
});

var baseLayers = getCommonBaseLayers(map); // see baselayers.js
L.control.layers(baseLayers, overlayMaps).addTo(map);
gpxTimeLayerOur_office.addTo(map);
gpxTimeLayer167430701.addTo(map);
gpxTimeLayer167420832.addTo(map);
gpxTimeLayer167420831.addTo(map);
gpxTimeLayer167420710.addTo(map);
gpxTimeLayer167420709.addTo(map);
gpxTimeLayer167420708.addTo(map);
gpxTimeLayer167420707.addTo(map);
gpxTimeLayer167420706.addTo(map);
gpxTimeLayer167420705.addTo(map);
gpxTimeLayer167420704.addTo(map);
gpxTimeLayer167420703.addTo(map);
gpxTimeLayer167420702.addTo(map);
gpxTimeLayer1674207013.addTo(map);
gpxTimeLayer1674207012.addTo(map);
gpxTimeLayer167420701.addTo(map);
cities.addTo(map);
gpxTimeLayer166420707.addTo(map);
gpxTimeLayer166420706.addTo(map);
gpxTimeLayer166420705.addTo(map);
gpxTimeLayer166420704.addTo(map);
gpxTimeLayer166420703.addTo(map);
gpxTimeLayer166420702.addTo(map);
gpxTimeLayer1664207016.addTo(map);
gpxTimeLayer1664207015.addTo(map);
gpxTimeLayer1664207014.addTo(map);
gpxTimeLayer1664207013.addTo(map);
gpxTimeLayer1664207012.addTo(map);
gpxTimeLayer166420701.addTo(map);
gpxTimeLayer166410721.addTo(map);
gpxTimeLayer166410702.addTo(map);
gpxTimeLayer165430701.addTo(map);
gpxTimeLayer165430691.addTo(map);
gpxTimeLayer165420705.addTo(map);
gpxTimeLayer165420703.addTo(map);
gpxTimeLayer165420702.addTo(map);
gpxTimeLayer165400722.addTo(map);
gpxTimeLayer165400721.addTo(map);
gpxTimeLayer164420704.addTo(map);
gpxTimeLayer164420703.addTo(map);
gpxTimeLayer164420701.addTo(map);
gpxTimeLayer162420701.addTo(map);
gpxTimeLayer161430701.addTo(map);