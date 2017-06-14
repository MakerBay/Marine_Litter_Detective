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

$('#dtp_start').datetimepicker({
    inline: true,
    value: new Date("2017-04-28"),
    format: "c"
});
$('#dtp_end').datetimepicker({
    inline: true,
    value: new Date("2017-06-14"),
    format: "c"
});



var iconDevice_50001 = new L.icon({
iconUrl: 'img/starticon.png',
iconSize: [20, 15],

});
var markerDevice_50001=L.marker([43.21107,-70.07996], {icon: iconDevice_50001}).bindPopup("");
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
    layer.bindPopup("")
}});
var gpxLayerDevice_50001 = omnivore.gpx('data/Device_50001.gpx', null, customLayerDevice_50001).on('ready', function() {
map.fitBounds(gpxLayerDevice_50001.getBounds(), {
    paddingBottomRight: [30, 40]
});
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
var markerDevice_50002=L.marker([43.21107,-70.07996], {icon: iconDevice_50002}).bindPopup("");
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
    layer.bindPopup("")
}});
var gpxLayerDevice_50002 = omnivore.gpx('data/Device_50002.gpx', null, customLayerDevice_50002).on('ready', function() {
map.fitBounds(gpxLayerDevice_50002.getBounds(), {
    paddingBottomRight: [30, 40]
});
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
var markerDevice_50003=L.marker([43.21107,-70.07996], {icon: iconDevice_50003}).bindPopup("");
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
    layer.bindPopup("")
}});
var gpxLayerDevice_50003 = omnivore.gpx('data/Device_50003.gpx', null, customLayerDevice_50003).on('ready', function() {
map.fitBounds(gpxLayerDevice_50003.getBounds(), {
    paddingBottomRight: [30, 40]
});
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
var markerDevice_50004=L.marker([43.21107,-70.07996], {icon: iconDevice_50004}).bindPopup("");
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
    layer.bindPopup("")
}});
var gpxLayerDevice_50004 = omnivore.gpx('data/Device_50004.gpx', null, customLayerDevice_50004).on('ready', function() {
map.fitBounds(gpxLayerDevice_50004.getBounds(), {
    paddingBottomRight: [30, 40]
});
});

var gpxTimeLayerDevice_50004 = L.timeDimension.layer.geoJson(gpxLayerDevice_50004, {

addlastPoint: true,
waitForReady: true,
});
var gpxaddmarkerDevice_50004 =L.layerGroup([markerDevice_50004,gpxTimeLayerDevice_50004]);


var iconDevice_50005 = new L.icon({
iconUrl: 'img/starticon.png',
iconSize: [20, 15],

});
var markerDevice_50005=L.marker([43.21107,-70.07996], {icon: iconDevice_50005}).bindPopup("");
var myStyleDevice_50005 = {
"color": "#FF0000",
"weight": 2,
"opacity": 0.65
};
var geojsonMarkerOptionsDevice_50005 = {
radius: 5,
fillColor: "#FF0000",
color: "black",
weight: 1,
opacity: 0.7,
fillOpacity: 0.8
};
var customLayerDevice_50005 = L.geoJson(null,{

style: myStyleDevice_50005,


pointToLayer: function ( feature,latLng) {


    return L.circleMarker(latLng,geojsonMarkerOptionsDevice_50005);
},
 onEachFeature: function (feature,layer) {
    layer.bindPopup("")
}});
var gpxLayerDevice_50005 = omnivore.gpx('data/Device_50005.gpx', null, customLayerDevice_50005).on('ready', function() {
map.fitBounds(gpxLayerDevice_50005.getBounds(), {
    paddingBottomRight: [30, 40]
});
});

var gpxTimeLayerDevice_50005 = L.timeDimension.layer.geoJson(gpxLayerDevice_50005, {

addlastPoint: true,
waitForReady: true,
});
var gpxaddmarkerDevice_50005 =L.layerGroup([markerDevice_50005,gpxTimeLayerDevice_50005]);


var iconDevice_50006 = new L.icon({
iconUrl: 'img/starticon.png',
iconSize: [20, 15],

});
var markerDevice_50006=L.marker([43.21107,-70.07996], {icon: iconDevice_50006}).bindPopup("");
var myStyleDevice_50006 = {
"color": "#800000",
"weight": 2,
"opacity": 0.65
};
var geojsonMarkerOptionsDevice_50006 = {
radius: 5,
fillColor: "#800000",
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
    layer.bindPopup("")
}});
var gpxLayerDevice_50006 = omnivore.gpx('data/Device_50006.gpx', null, customLayerDevice_50006).on('ready', function() {
map.fitBounds(gpxLayerDevice_50006.getBounds(), {
    paddingBottomRight: [30, 40]
});
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
var markerDevice_50007=L.marker([43.21107,-70.07996], {icon: iconDevice_50007}).bindPopup("");
var myStyleDevice_50007 = {
"color": "#FFFF00",
"weight": 2,
"opacity": 0.65
};
var geojsonMarkerOptionsDevice_50007 = {
radius: 5,
fillColor: "#FFFF00",
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
    layer.bindPopup("")
}});
var gpxLayerDevice_50007 = omnivore.gpx('data/Device_50007.gpx', null, customLayerDevice_50007).on('ready', function() {
map.fitBounds(gpxLayerDevice_50007.getBounds(), {
    paddingBottomRight: [30, 40]
});
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
var markerDevice_50009=L.marker([43.21107,-70.07996], {icon: iconDevice_50009}).bindPopup("");
var myStyleDevice_50009 = {
"color": "#808000",
"weight": 2,
"opacity": 0.65
};
var geojsonMarkerOptionsDevice_50009 = {
radius: 5,
fillColor: "#808000",
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
    layer.bindPopup("")
}});
var gpxLayerDevice_50009 = omnivore.gpx('data/Device_50009.gpx', null, customLayerDevice_50009).on('ready', function() {
map.fitBounds(gpxLayerDevice_50009.getBounds(), {
    paddingBottomRight: [30, 40]
});
});

var gpxTimeLayerDevice_50009 = L.timeDimension.layer.geoJson(gpxLayerDevice_50009, {

addlastPoint: true,
waitForReady: true,
});
var gpxaddmarkerDevice_50009 =L.layerGroup([markerDevice_50009,gpxTimeLayerDevice_50009]);



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
"Device_50005": gpxaddmarkerDevice_50005,
"Device_50006": gpxaddmarkerDevice_50006,
"Device_50007": gpxaddmarkerDevice_50007,
"Device_50009": gpxaddmarkerDevice_50009,};

    var baseLayers = getCommonBaseLayers(map); // see baselayers.js
    L.control.layers.selectAll = function(baseLayers, overlays, options) {
        return new L.Control.Layers.SelectAll(baseLayers, overlays, options);
    };
    L.control.layers.selectAll(baseLayers, overlayMaps).addTo(map);
gpxaddmarkerDevice_50001.addTo(map);
gpxaddmarkerDevice_50002.addTo(map);
gpxaddmarkerDevice_50003.addTo(map);
gpxaddmarkerDevice_50004.addTo(map);
gpxaddmarkerDevice_50005.addTo(map);
gpxaddmarkerDevice_50006.addTo(map);
gpxaddmarkerDevice_50007.addTo(map);
gpxaddmarkerDevice_50009.addTo(map);
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
