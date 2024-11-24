var map = L.map('map').setView([1.564, 103.638], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> | \
  <a href="https://www.flaticon.com/free-icons/mosque" title="mosque icons">Mosque icons by nawicon</a> | <a href="https://github.com/adlan2001" title="adlan2001 Github">adlan2001</a>'
}).addTo(map);

const surauIcon = L.icon({
  iconUrl: 'mosque.png',
  iconSize: [32,32],
  iconAnchor: [16,32],
  popupAnchor: [0,-28]
});

var onEachFeature = (feature,layer)=>{
  let popupContent = `<h2>${feature.properties.namaSurau}</h2>
  <p>${feature.properties.facCol}</p>`;
  layer.bindPopup(popupContent);
}

L.geoJSON(surau,{

  onEachFeature,

  pointToLayer(feature,latlng){
    return L.marker(latlng,{icon: surauIcon})
  }

}).addTo(map);

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

//map.on('click', onMapClick);