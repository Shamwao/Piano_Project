flatpickr('#date', {
    "minDate": "today"
});

flatpickr('#time', {
    "enableTime": true,
    "noCalendar":true,
    dateFormat: "H:i",
    minTime: "12:00",
    maxTime: "20:30",
});