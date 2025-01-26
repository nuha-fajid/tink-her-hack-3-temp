document.addEventListener("DOMContentLoaded", () => {
    // Get query parameters from the URL
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const image = params.get("image");
    const address = params.get("address");
    const phone = params.get("phone");

    // Populate restaurant details dynamically
    if (name && image && address && phone) {
        document.getElementById("restaurantName").textContent = name;
        document.getElementById("restaurantImage").src = image;
        document.getElementById("restaurantAddress").textContent = `📍 Address: ${address}`;
        document.getElementById("restaurantPhone").textContent = `📞 Phone: ${phone}`;
    } else {
        // If no query parameters are provided, redirect back to the homepage
        window.location.href = "index.html";
    }

    // Footer buttons navigation (you can customize these links)
    document.getElementById("menuCard").onclick = () => window.location.href = "menu.html";
    document.getElementById("parkingStatus").onclick = () => window.location.href = "inpark.html";
    document.getElementById("tableBooking").onclick = () => window.location.href = "inox.html";
    
});
