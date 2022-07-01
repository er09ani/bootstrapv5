// Initialize and add the map
function initMap() {
// The location of Uluru
// calicut 11.2064612,75.7920358
    const calicut = { lat: 11.2064612, lng: 75.7920358 };
            // The map, centered at Uluru
            const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: calicut,
        });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: calicut,
        map: map,
    });
}
window.onload = function(){
    loadKey();
};
function loadKey(){
var loadGoogleMapApisScript = document.createElement('script');
loadGoogleMapApisScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly');
document.body.appendChild(loadGoogleMapApisScript);
}
window.loadKey;

window.initMap = initMap;
