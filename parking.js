document.addEventListener("DOMContentLoaded", () => {
    const parkingGrid = document.querySelector(".parking-grid");
    const slots = [
        "1A", "1B", "1C", "1D", "1E",
        "2A", "2B", "2C", "2D", "2E",
    ];

    const reservedIconUrl = "https://i.postimg.cc/1zs4vmNb/carryyyy.png"; // Replace with the correct icon URL.

    function initializeParking() {
        parkingGrid.innerHTML = "";
        const reservedIndices = new Set();

        // Ensure at least 4 parking slots are reserved
        while (reservedIndices.size < 6) {
            reservedIndices.add(Math.floor(Math.random() * slots.length));
        }

        slots.forEach((slot, index) => {
            const slotDiv = document.createElement("div");
            slotDiv.classList.add("slot","animate-slot");

            const label = document.createElement("div");
            label.textContent = slot;
            slotDiv.appendChild(label);

            if (reservedIndices.has(index)) {
                slotDiv.classList.add("reserved");

                const icon = document.createElement("img");
                icon.src = reservedIconUrl;
                icon.alt = "Reserved Icon";
                icon.style.marginLeft = "10px"; // Move the icon a bit to the right
                icon.style.display = "inline-block";

                slotDiv.appendChild(icon);
            } else {
                const freeText = document.createElement("div");
                freeText.textContent = "FREE";
                freeText.style.fontSize = "18px";
                freeText.style.fontWeight = "bold";
                freeText.style.marginTop = "48px";
                slotDiv.appendChild(freeText);
            }

            parkingGrid.appendChild(slotDiv);
        });
    }

    initializeParking();
});
