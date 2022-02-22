// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA2q0v1gt98r_duKco4no_wh10GLyap54",
  authDomain: "synopsys-project-2021-22.firebaseapp.com",
  projectId: "synopsys-project-2021-22",
  storageBucket: "synopsys-project-2021-22.appspot.com",
  messagingSenderId: "537625064376",
  appId: "1:537625064376:web:15bf238c8a6b1e036d954d"

}

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);


 var mapProp;

function initMap() {
mapProp = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 5,
  });
const db = getDatabase();
const updatedRef = ref(db, "Marker Location/");
onValue(updatedRef, (snapshot) => {
const data = snapshot.val();
for(var key in data) {
console.log(key)
var value = data[key];
placeMarker(mapProp, new google.maps.LatLng(double(key), double(value)), "green");
}
});
}
function placeMarker(map, location, state) {
var url = "http://maps.google.com/mapfiles/ms/icons/";
url += state+"-dot.png";
var marker = new google.maps.Marker({
position: location,
map: map,
icon: {
url: url,
}
});
var window = new google.maps.InfoWindow({
content: "latitude: " + location.lat() + "<br> longitude: " + location.lng()
});
window.open(map, marker)
}

