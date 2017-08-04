import glob
import datetime
import os
import linecache
import gpxinfo

def popupdrif(popup,starttime,stats):
    if float(popup[2])>1.01:
            return '    Drougued drifter  <br> School/Lab :<br> '+popup[1][:popup[1].find('(')]+'<br> Teacher/PI : '+popup[3]+'<br> Deployment_ ID : '+popup[4]+'<br> ESN :'+popup[5]+'<br> Depth : '+popup[2]+'m <br> starts at '+starttime
    else:
            return '    Surface Drifter   <br> School/Lab :<br> '+popup[1]+'<br> Teacher/PI : '+popup[3]+'<br> Deployment ID : '+popup[4]+ '<br>' + str(stats[3]) + '<br>' + str(stats[4]) + '<br>' + str(stats[1]) + '<br>' + str(stats[2]) + '<br>' + str(stats[5]) + '<br>' + str(stats[0]) + '<br>' + str(stats[6])
def popupstart(popup,starttime,stats):
    if float(popup[2])>1.01:
            return '    Drougued drifter deployed here   <br> School/Lab :<br> '+popup[1][:popup[1].find('(')]+'<br> Teacher/PI : '+popup[3]+'<br> Deployment_ ID : '+popup[4]+'<br> ESN :'+popup[5]+'<br> Depth : '+popup[2]+'m <br> starts at '+starttime
    else:
            return '    Surface Drifter deployed here  <br> School/Lab :<br> '+popup[1]+'<br> Teacher/PI : '+popup[3]+'<br> Deployment ID : '+popup[4]+ '<br>' + str(stats[3]) + '<br>' + str(stats[4]) + '<br>' + str(stats[1]) + '<br>' + str(stats[2]) + '<br>' + str(stats[5]) + '<br>' + str(stats[0]) + '<br>' + str(stats[6])

def ord(num):
    if(int(num[7:-4])/50000>=1):
        return 1
    else:
        return 2

def run():
    filename='drifter.js'
    f=open(str(filename),'w')
    hexcolor=['#000000','#FF0000','#808080','#000000','#FF0000','#800000','#FFFF00','#808000','#00FF00','#008000','#008080','#0000FF','#000080','#FF00FF','#800080']
    data=glob.glob('*.gpx')
    data.sort()
    data.sort(key=ord)



    f.write('''var startDate = new Date();
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


    ''')

    for i in range(len(data)):

        try:
            latlon=[linecache.getline(data[i], 14).split('"')[1],linecache.getline(data[i], 14).split('"')[3]]
            starttime=linecache.getline(data[i], 16)[6:-8]
            popup=linecache.getline(data[i],2).split('"')[9].split(',')
            stats=gpxinfo.run([data[i]])
        except Exception,e:
            print e

        f.write('''
    var icon'''+data[i][0:-4]+''' = new L.icon({
    iconUrl: 'img/starticon.png',
    iconSize: [20, 15],

    });
    var marker'''+data[i][0:-4]+'''=L.marker(['''+str(latlon[0])+''','''+ str(latlon[1])+'''], {icon: icon'''+data[i][0:-4]+'''}).bindPopup("'''+popupstart(popup,starttime,stats)+'''");
    var myStyle'''+data[i][0:-4]+''' = {
    "color": "'''+hexcolor[i%len(hexcolor)]+'''",
    "weight": 2,
    "opacity": 0.65
    };
    var geojsonMarkerOptions'''+data[i][0:-4]+''' = {
    radius: 5,
    fillColor: "'''+hexcolor[i%len(hexcolor)]+'''",
    color: "black",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
    };
    var customLayer'''+data[i][0:-4]+''' = L.geoJson(null,{

    style: myStyle'''+data[i][0:-4]+''',


    pointToLayer: function ( feature,latLng) {


        return L.circleMarker(latLng,geojsonMarkerOptions'''+data[i][0:-4]+''');
    },
     onEachFeature: function (feature,layer) {
        layer.bindPopup("'''+popupdrif(popup,starttime,stats)+'''")
    }});
    var gpxLayer'''+data[i][0:-4]+''' = omnivore.gpx('data/'''+data[i]+'''', null, customLayer'''+data[i][0:-4]+''').on('ready', function() {

    });

    var gpxTimeLayer'''+data[i][0:-4]+''' = L.timeDimension.layer.geoJson(gpxLayer'''+data[i][0:-4]+''', {

    addlastPoint: true,
    waitForReady: true,
    '''
    + ("updateTimeDimension: true," if (data[i][0:-4]=="Device_50001") else "") +
    '''
    });
    var gpxaddmarker'''+data[i][0:-4]+''' =L.layerGroup([marker'''+data[i][0:-4]+''',gpxTimeLayer'''+data[i][0:-4]+''']);

    ''')





    f.write(
    '''

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
    ''')



    f.writelines('\nvar overlayMaps = {\n')
    for i in range(len(data)):
        f.write(
    '''\n"'''+data[i][0:-4]+'''": gpxaddmarker'''+data[i][0:-4]+''',''')
    f.write(
        '''};

        var baseLayers = getCommonBaseLayers(map); // see baselayers.js
        L.control.layers.selectAll = function(baseLayers, overlays, options) {
            return new L.Control.Layers.SelectAll(baseLayers, overlays, options);
        };
        L.control.layers.selectAll(baseLayers, overlayMaps).addTo(map);''')
    for i in range(len(data)):
        f.write(
    '''\ngpxaddmarker'''+data[i][0:-4]+'''.addTo(map);''')


    f.write('''
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
    ''')
    f.close()

