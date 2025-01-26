const restaurants = [
    { name: "The Gourmet Spot", rating: 5.0, image: "http://www.stylemotivation.com/wp-content/uploads/2017/06/03_2015_BALTAIR-156.0.0.jpg", link: "restor.html" },
    { name: "Pizza Palace", rating: 3.5, image: "https://i.pinimg.com/originals/d9/67/12/d967129a30448f89ca25197b1411308f.jpg", link: "restor.html" },
    { name: "Burger Haven", rating: 4.5, image: "https://www.architectandinteriorsindia.com/cloud/2023/07/26/yqjVGsAX-DSC_3102-1200x888.jpg", link: "restor.html" },
    { name: "Sushi World", rating: 4.8, image: "https://c8.alamy.com/comp/FYRJ71/traditional-japanese-restaurant-front-FYRJ71.jpg", link: "restor.html" },
    { name: "Bistro Bliss", rating: 4.3, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fHww", link: "restor.html" },
    { name: "Granola Heaven", rating: 3.8, image: "https://hips.hearstapps.com/hmg-prod/images/casa-lever-by-teddy-wolff-1-1-1638396380.jpg", link: "restor.html" },
    { name: "Big Bean", rating: 4.8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLK-pkc8wFsW0-li9iznIsdINkt-YhyI2eQ&s", link: "restor.html" },
    { name: "Resto Cafe", rating: 4.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIkgDo8Wr0HuYR_zMGmdqMfQnsbevdtu_NPA&s", link: "restor.html" }
];

function displayRestaurants() {
    const restaurantList = document.getElementById('restaurantList');
    restaurantList.innerHTML = '';

    restaurants.sort((a, b) => b.rating - a.rating);
    

    // Creating the card element content
   /* card.innerHTML = `
        <img src="${restaurant.image}" alt="${restaurant.name}">
        <h2>${restaurant.name}</h2>
        <div class="star-rating">${starRating}</div>
    `;

    restaurantList.appendChild(card);*/



   restaurants.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.onclick = () => {
          localStorage.setItem('selectedRestaurant', JSON.stringify(restaurant));
          window.location.href = restaurant.link;
        };
        let starRating = '';
    const fullStars = Math.floor(restaurant.rating);
    const halfStars = (restaurant.rating % 1 >= 0.5) ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    for (let i = 0; i < fullStars; i++) {
        starRating += '<span class="star filled">★</span>';
    }
    if (halfStars) {
        starRating += '<span class="star filled">☆</span>';  // Half star
    }
    for (let i = 0; i < emptyStars; i++) {
        starRating += '<span class="star">☆</span>';
    }
        card.innerHTML = `
        <img src="${restaurant.image}" alt="${restaurant.name}">
        <h2>${restaurant.name}</h2>
        <div class="star-rating">${starRating}</div>
    `;

    restaurantList.appendChild(card);
    });
} 
/*
        card.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <h2>${restaurant.name}</h2>
            <p>Rating: ${restaurant.rating}</p>
        `;
        restaurantList.appendChild(card);
    });
}*/

function searchRestaurants() {
    const location = document.getElementById('locationInput').value;
    console.log(location);
    alert(`Searching restaurants in ${location}`);
}

displayRestaurants();

 function goHome() {
     window.location.href = 'index.html';
 }

function signOut() {
    alert('Signing out...');
    window.location.href = 'index.html';
}

function navigateTo(option) {
    alert(`Navigating to ${option}`);
    window.location.href = `${option}.html`;
}
