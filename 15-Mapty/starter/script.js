"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

// Using GeoLocation

let map, MapEvent;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      //   console.log(latitude, longitude);
      //   console.log(`https://www.google.com/maps/@${latitude}.${longitude}`);

      const coords = [latitude, longitude];

      map = L.map("map").setView(coords, 13);

      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on("click", function (MapE) {
        MapEvent = MapE;
        form.classList.remove("hidden");
        inputDistance.focus();
      });
    },
    function () {
      alert(`Can't get your location...`);
    }
  );
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  inputDistance.value = inputDuration.value = inputCadence.value = "";
  const { lat, lng } = MapEvent.latlng;
  const newcoords = [lat, lng];
  L.marker(newcoords)
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 25,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: "running-popup",
      })
    )
    .setPopupContent(inputType.value)
    .openPopup();
  form.classList.add("hidden");
});

inputType.addEventListener("change", function () {
  inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
  inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
});
