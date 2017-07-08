/*
*    Return common layers used in different examples
*/
function getCommonBaseLayers(map){
    /*var osmLayer = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });
    var bathymetryLayer = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
	maxZoom: 13
    });*/
    var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });
    /*var Esri_OceanBasemap = L.tileLayer.wms("http://ows.emodnet-bathymetry.eu/wms", {
        layers: 'emodnet:mean_atlas_land',
        format: 'image/png',
        transparent: true,
        attribution: "EMODnet Bathymetry",
        opacity: 0.8
    });
    var coastlinesLayer = L.tileLayer.wms("http://ows.emodnet-bathymetry.eu/wms", {
        layers: 'coastlines',
        format: 'image/png',
        transparent: true,
        attribution: "EMODnet Bathymetry",
        opacity: 0.8
    });
    var bathymetryGroupLayer = L.layerGroup([bathymetryLayer, coastlinesLayer]);
    bathymetryGroupLayer.addTo(map);*/

	 var GreyLayer= L.tileLayer(
          "http://{s}.sm.mapstack.stamen.com/" +
          "(toner-lite,$fff[difference],$fff[@23],$fff[hsl-saturation@20])/" +
          "{z}/{x}/{y}.png",
          {
            maxZoom: 19,
            minZoom: 5,
              attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, ' +
              'NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
          }
      ).addTo(map);


    var HKLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 5,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    return {
        "City basemap":Esri_WorldImagery,
	"Grey":GreyLayer,
        "HK Ocean":HKLayer,
    };
}

