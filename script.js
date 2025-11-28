// Restaurant Card Functionality

// ===== Image Slider Functionality =====
const sliderInstances = [];
const AUTO_PLAY_DELAY = 4000; // 4 seconds

// Slider class to manage individual sliders
class ImageSlider {
    constructor(sliderElement, index) {
        this.sliderElement = sliderElement;
        this.index = index;
        this.currentSlide = 0;
        this.slides = sliderElement.querySelectorAll('.slide');
        this.dots = sliderElement.querySelectorAll('.dot');
        this.autoPlayInterval = null;

        this.init();
    }

    init() {
        if (this.slides.length > 0) {
            this.showSlide(0);
            this.startAutoPlay();

            // Pause auto-play on hover
            this.sliderElement.addEventListener('mouseenter', () => this.stopAutoPlay());
            this.sliderElement.addEventListener('mouseleave', () => this.startAutoPlay());
        }
    }

    changeSlide(direction) {
        this.currentSlide += direction;

        if (this.currentSlide >= this.slides.length) {
            this.currentSlide = 0;
        } else if (this.currentSlide < 0) {
            this.currentSlide = this.slides.length - 1;
        }

        this.showSlide(this.currentSlide);
        this.resetAutoPlay();
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.showSlide(this.currentSlide);
        this.resetAutoPlay();
    }

    showSlide(index) {
        // Remove active class from all slides and dots
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current slide and dot
        if (this.slides[index]) {
            this.slides[index].classList.add('active');
        }
        if (this.dots[index]) {
            this.dots[index].classList.add('active');
        }
    }

    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.changeSlide(1);
        }, AUTO_PLAY_DELAY);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}

// Initialize all sliders when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach((slider, index) => {
        const sliderInstance = new ImageSlider(slider, index);
        sliderInstances.push(sliderInstance);

        // Setup button event listeners
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');
        const dots = slider.querySelectorAll('.dot');

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                sliderInstance.changeSlide(-1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                sliderInstance.changeSlide(1);
            });
        }

        dots.forEach((dot, dotIndex) => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                sliderInstance.goToSlide(dotIndex);
            });
        });
    });

    // Animate cards on load
    const cards = document.querySelectorAll('.restaurant-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';

        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 150));
    });

    console.log(`🍽️  ${sliders.length} Restaurant Cards with Sliders loaded successfully!`);
});

// ===== Restaurant Card Functions =====

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
