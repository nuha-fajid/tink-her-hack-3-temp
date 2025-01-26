function handleSearch() {
    const location = document.getElementById('location-input').value;
    const restaurant = document.getElementById('restaurant-input').value;

    if (location || restaurant) {
        alert(`Searching for:\nLocation: ${location}\nRestaurant: ${restaurant}`);
    } else {
        alert('Please enter a location or restaurant name to search!');
    }
}
function navigateToResults() {
    window.location.href = "results.html";
}