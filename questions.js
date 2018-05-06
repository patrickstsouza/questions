// load the map
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// load the tiles
L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(mymap);

// Form for new question that shows in popup when user clicks on map
// It needs to be passed as a string to leaflet's bindPopup() method
var newQuestionHTML = `
<label id="new-question-header">New Question</label>
<div class="question-input">
    <label class="question-label">Question:</label>
    <input type="text"></input>
    <label id="correct-answer-label">Correct Answer</label>
</div>
<div class="question-input">
    <label class="question-label">Answer 1:</label>
    <input type="text"></input>
    <input type="radio" name="correctChoice" value="1" class="correctAnswerRadio" checked></input>
</div>
<div class="question-input">
    <label class="question-label">Answer 2:</label>
    <input type="text"></input>
    <input type="radio" name="correctChoice" value="2" class="correctAnswerRadio"></input>
</div>
<div class="question-input">
    <label class="question-label">Answer 3:</label>
    <input type="text"></input>
    <input type="radio" name="correctChoice" value="3" class="correctAnswerRadio"></input>
</div>
<div class="question-input">
    <label class="question-label">Answer 4:</label>
    <input type="text"></input>
    <input type="radio" name="correctChoice" value="4" class="correctAnswerRadio"></input>
</div>
<div id="new-question-buttons">
    <button>Add Question</button>
    <button onclick="closePopup(); return false;">Cancel</button>
</div>
`;

var currentPopup;

// Closes the question popup
function closePopup() {
    if (!currentPopup) {
        return;
    }

    currentPopup.closePopup();
}

// Sources:
// https://leafletjs.com/examples/quick-start/
// https://leafletjs.com/reference-1.3.0.html
mymap.on('click', function(e) {
    // Gets lat and long from the event passed as parameter
    var lat = e.latlng.lat;
    var long = e.latlng.lng;
    console.log('clicked on ', lat, long);

    // Adds a marker in the map for the clicked lat/long
    var marker = L.marker([lat, long]).addTo(mymap);

    // Adds a popup to marker with question
    var popup = marker.bindPopup(newQuestionHTML, { maxWidth: 400 }).openPopup();

    // Saves popup to global variable so it can be closed from closePopup() function
    currentPopup = popup;

    // Validate question was added when popup closed
    popup.on('popupclose', function(e) {
        currentPopup = undefined;
        console.log('popup closed');
    });
});
