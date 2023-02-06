import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoidGhlZGFya2xvcmR6dyIsImEiOiJjbGRxYTMzZzYwaGtmM29vNDhvdHc5Nm94In0.osVJRv8oXT8sOA-HDjQD6w';

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
});

window.onload(() => {
  console.log('555');
  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
    })
  );
});
