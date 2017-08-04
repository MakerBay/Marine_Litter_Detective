var startDate = new Date();
    startDate.setUTCHours(0, 0, 0, 0);

    var map = L.map('map', {
        //zoom: 11,
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


    
    var iconDevice_10102 = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var markerDevice_10102=L.marker([22.2572,114.138], {icon: iconDevice_10102}).bindPopup("    Surface Drifter deployed here  <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10102<br>Started: 2017-06-17 11:20:13<br>Ended: 2017-06-22 06:39:57<br>Moving time: 01:39:18<br>Stopped time: 113:40:26<br>Points: 97<br>Length 2D: 10.443km<br>Avg distance between points: 107.66m");
    var myStyleDevice_10102 = {
    "color": "#000000",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptionsDevice_10102 = {
    radius: 5,
    fillColor: "#000000",
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
        layer.bindPopup("    Surface Drifter   <br> School/Lab :<br> Sacred Heart Canossian College<br> Teacher/PI : ___<br> Deployment ID : 10102<br>Started: 2017-06-17 11:20:13<br>Ended: 2017-06-22 06:39:57<br>Moving time: 01:39:18<br>Stopped time: 113:40:26<br>Points: 97<br>Length 2D: 10.443km<br>Avg distance between points: 107.66m")
    }});
    var gpxLayerDevice_10102 = omnivore.gpx('data/Device_10102.gpx', null, customLayerDevice_10102).on('ready', function() {

    });

    var gpxTimeLayerDevice_10102 = L.timeDimension.layer.geoJson(gpxLayerDevice_10102, {

    addlastPoint: true,
    waitForReady: true,
    
    });
    var gpxaddmarkerDevice_10102 =L.layerGroup([markerDevice_10102,gpxTimeLayerDevice_10102]);

    

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

"Device_10102": gpxaddmarkerDevice_10102,};

        var baseLayers = getCommonBaseLayers(map); // see baselayers.js
        L.control.layers.selectAll = function(baseLayers, overlays, options) {
            return new L.Control.Layers.SelectAll(baseLayers, overlays, options);
        };
        L.control.layers.selectAll(baseLayers, overlayMaps).addTo(map);
gpxaddmarkerDevice_10102.addTo(map);
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
    