

mapboxgl.accessToken = mapToken;

const map =new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [ 77.203613, 28.549507],
  zoom: 9,
});
