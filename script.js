// Restaurant Card Functionality

function bookTable() {
    alert('🎉 Booking system opening!\n\nYou would be redirected to our reservation page.\n\nThank you for choosing The Gourmet Kitchen!');

    // In a real application, this would redirect to a booking page:
    // window.location.href = '/book?restaurant=gourmet-kitchen';
}

function viewMenu() {
    alert('📋 Menu Preview\n\nOur menu includes:\n\n🍝 Pasta Dishes\n🍕 Wood-fired Pizza\n🥗 Fresh Salads\n🍰 Artisan Desserts\n🍷 Fine Wines\n\nClick OK to view the full menu.');

    // In a real application, this would open a menu page or modal:
    // window.location.href = '/menu?restaurant=gourmet-kitchen';
}

// Add smooth scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.restaurant-card');

    // Animate card on load
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';

    setTimeout(() => {
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);

    console.log('🍽️  Restaurant Card loaded successfully!');
});

// Restaurant data object (example for future dynamic rendering)
const restaurantData = {
    name: 'The Gourmet Kitchen',
    rating: 4.5,
    cuisine: ['Italian', 'Mediterranean', 'Fine Dining'],
    description: 'Experience authentic Italian cuisine with a modern twist. Our chef-selected menu features fresh, locally sourced ingredients.',
    address: '123 Main Street, Downtown',
    priceRange: '$$$',
    hours: '11:00 AM - 10:00 PM',
    phone: '(555) 123-4567',
    isOpen: true,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop'
};

// Function to create restaurant card dynamically (for future use)
function createRestaurantCard(restaurant) {
    const stars = '★'.repeat(Math.floor(restaurant.rating)) + '☆'.repeat(5 - Math.floor(restaurant.rating));

    return `
        <div class="restaurant-card">
            <div class="card-image">
                <img src="${restaurant.image}" alt="${restaurant.name}">
                <span class="badge">${restaurant.isOpen ? 'Open Now' : 'Closed'}</span>
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h2 class="restaurant-name">${restaurant.name}</h2>
                    <div class="rating">
                        <span class="stars">${stars}</span>
                        <span class="rating-text">${restaurant.rating}</span>
                    </div>
                </div>
                <p class="cuisine-type">${restaurant.cuisine.join(' • ')}</p>
                <p class="description">${restaurant.description}</p>
                <div class="card-details">
                    <div class="detail-item">
                        <span class="icon">📍</span>
                        <span>${restaurant.address}</span>
                    </div>
                    <div class="detail-item">
                        <span class="icon">💰</span>
                        <span>${restaurant.priceRange} - Premium</span>
                    </div>
                    <div class="detail-item">
                        <span class="icon">🕒</span>
                        <span>${restaurant.hours}</span>
                    </div>
                    <div class="detail-item">
                        <span class="icon">📞</span>
                        <span>${restaurant.phone}</span>
                    </div>
                </div>
                <div class="card-actions">
                    <button class="btn btn-primary" onclick="bookTable()">Book a Table</button>
                    <button class="btn btn-secondary" onclick="viewMenu()">View Menu</button>
                </div>
            </div>
        </div>
    `;
}
