document.addEventListener("DOMContentLoaded", () => {
    const tableGrid = document.querySelector(".table-grid");
    const selectedTables = document.querySelector(".selected-tables");
    const confirmButton = document.querySelector(".confirm-button");
    const phoneContainer = document.querySelector(".phone-number-container");
    const mainContainer = document.querySelector(".main-container");
    const phoneInput = document.querySelector(".phone-input");
    const reservedTablesDisplay = document.querySelector(".reserved-tables");
    const confirmPhoneButton = document.querySelector(".confirm-phone-button");

    let selected = [];
    const totalTables = 12;

    // Table seating capacities
    const seatingCapacities = [2, 2, 2, 2, 4, 4, 4, 4, 6, 6, 8, 8];

    // Initialize tables with random reserved ones
    function initializeTables() {
        tableGrid.innerHTML = "";
        const reservedIndices = new Set();
        while (reservedIndices.size < Math.floor(Math.random() * totalTables / 2)) {
            reservedIndices.add(Math.floor(Math.random() * totalTables));
        }

        for (let i = 0; i < totalTables; i++) {
            const table = document.createElement("div");
            table.classList.add("table");
            table.textContent = String.fromCharCode(65 + i); // A, B, C...

            const capacity = document.createElement("span");
            capacity.textContent = `${seatingCapacities[i]} Seater`;
            table.appendChild(capacity);

            if (reservedIndices.has(i)) {
                table.classList.add("reserved");
            } else {
                table.addEventListener("click", () => toggleSelection(table));
            }

            tableGrid.appendChild(table);
        }
    }

    function toggleSelection(table) {
        const tableId = table.firstChild.textContent;

        if (selected.includes(tableId)) {
            selected = selected.filter(t => t !== tableId);
            table.classList.remove("selected");
        } else {
            selected.push(tableId);
            table.classList.add("selected");
        }

        updateSelectedTables();
    }

    function updateSelectedTables() {
        selectedTables.textContent = `Selected tables - ${selected.join(", ")}`;
    }

    confirmButton.addEventListener("click", () => {
        if (selected.length > 0) {
            mainContainer.classList.add("hidden");
            phoneContainer.classList.remove("hidden");
            reservedTablesDisplay.textContent = `Reserved Tables - ${selected.join(", ")}`;
        } else {
            alert("Please select at least one table.");
        }
    });
/*
    confirmPhoneButton.addEventListener("click", () => {
        const phoneNumber = phoneInput.value.trim();

        if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        alert(`Booking confirmed for tables: ${selected.join(", ")}`);
        mainContainer.classList.remove("hidden");
        phoneContainer.classList.add("hidden");
        initializeTables();
        selected = [];
        updateSelectedTables();
        phoneInput.value = "";
    });*/
    document.querySelector('.confirm-phone-button').addEventListener('click', function () {
        const phoneInput = document.querySelector('.phone-input').value.trim();
    
        // Phone number validation (10 digits, no special characters)
        const phoneRegex = /^\d{10}$/; // Adjust regex as per your requirement
    
        if (phoneRegex.test(phoneInput)) {
            // Phone number is valid, navigate to the confirmation page
            window.location.href = 'conf.html';
        } else {
            // Phone number is invalid, show an alert
            alert('Please enter a valid 10-digit phone number.');
        }
    });
    

    // Initialize the grid on load
    initializeTables();
});