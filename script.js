/**
 * Restaurant Cards with Image Sliders
 * Features: Auto-play, manual navigation, keyboard controls, responsive design
 */

// ===== Configuration =====
const CONFIG = {
    AUTO_PLAY_DELAY: 4000,  // 4 seconds between slides
    ANIMATION_DELAY: 150    // Stagger animation for cards on load
};

// ===== State Management =====
const sliderInstances = [];

// ===== Image Slider Class =====
class ImageSlider {
    constructor(sliderElement, index) {
        this.sliderElement = sliderElement;
        this.index = index;
        this.currentSlide = 0;
        this.slides = sliderElement.querySelectorAll('.slide');
        this.dots = sliderElement.querySelectorAll('.dot');
        this.autoPlayInterval = null;
        this.isPlaying = false;

        this.init();
    }

    init() {
        if (this.slides.length > 0) {
            this.showSlide(0);
            this.startAutoPlay();
            this.attachEventListeners();
        }
    }

    attachEventListeners() {
        // Pause on hover
        this.sliderElement.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.sliderElement.addEventListener('mouseleave', () => this.startAutoPlay());

        // Touch events for mobile swipe
        let touchStartX = 0;
        let touchEndX = 0;

        this.sliderElement.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        this.sliderElement.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
    }

    handleSwipe(startX, endX) {
        const threshold = 50; // Minimum swipe distance
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.changeSlide(1);  // Swipe left - next
            } else {
                this.changeSlide(-1); // Swipe right - previous
            }
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
        if (index >= 0 && index < this.slides.length) {
            this.currentSlide = index;
            this.showSlide(this.currentSlide);
            this.resetAutoPlay();
        }
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
        if (this.isPlaying) return;

        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.changeSlide(1);
        }, CONFIG.AUTO_PLAY_DELAY);
        this.isPlaying = true;
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
        this.isPlaying = false;
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }

    destroy() {
        this.stopAutoPlay();
        this.sliderElement = null;
        this.slides = null;
        this.dots = null;
    }
}

// ===== Initialize All Sliders =====
function initializeSliders() {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach((slider, index) => {
        const sliderInstance = new ImageSlider(slider, index);
        sliderInstances.push(sliderInstance);

        // Setup button event listeners
        setupSliderControls(slider, sliderInstance);
    });

    console.log(`🍽️  ${sliders.length} Restaurant Card${sliders.length !== 1 ? 's' : ''} with Sliders loaded successfully!`);
}

// ===== Setup Slider Controls =====
function setupSliderControls(slider, sliderInstance) {
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    const dots = slider.querySelectorAll('.dot');

    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sliderInstance.changeSlide(-1);
        });
    }

    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sliderInstance.changeSlide(1);
        });
    }

    // Dot navigation
    dots.forEach((dot, dotIndex) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            sliderInstance.goToSlide(dotIndex);
        });
    });
}

// ===== Animate Cards on Load =====
function animateCardsOnLoad() {
    const cards = document.querySelectorAll('.restaurant-card');

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';

        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * CONFIG.ANIMATION_DELAY));
    });
}

// ===== Keyboard Navigation =====
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Only handle keyboard navigation if not typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }

        // Navigate all sliders simultaneously with keyboard
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            sliderInstances.forEach(slider => slider.changeSlide(-1));
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            sliderInstances.forEach(slider => slider.changeSlide(1));
        }
    });
}

// ===== Button Click Handlers =====
function setupButtonHandlers() {
    const primaryButtons = document.querySelectorAll('.btn-primary');
    const secondaryButtons = document.querySelectorAll('.btn-secondary');

    primaryButtons.forEach(button => {
        button.addEventListener('click', handleBooking);
    });

    secondaryButtons.forEach(button => {
        button.addEventListener('click', handleViewMenu);
    });
}

function handleBooking(event) {
    const card = event.target.closest('.restaurant-card');
    const restaurantName = card.querySelector('.restaurant-name').textContent;

    alert(`🎉 Booking Request\n\nRestaurant: ${restaurantName}\n\nYou would be redirected to our reservation page.\n\nThank you for your interest!`);

    // In a real application, redirect to booking page:
    // window.location.href = `/book?restaurant=${encodeURIComponent(restaurantName)}`;
}

function handleViewMenu(event) {
    const card = event.target.closest('.restaurant-card');
    const restaurantName = card.querySelector('.restaurant-name').textContent;

    alert(`📋 Menu Preview\n\nRestaurant: ${restaurantName}\n\nView our complete menu with:\n• Appetizers\n• Main Courses\n• Desserts\n• Beverages\n• Daily Specials\n\nClick OK to continue.`);

    // In a real application, open menu page or modal:
    // window.location.href = `/menu?restaurant=${encodeURIComponent(restaurantName)}`;
}

// ===== Page Visibility API (Pause sliders when tab is inactive) =====
function setupVisibilityChange() {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            sliderInstances.forEach(slider => slider.stopAutoPlay());
        } else {
            sliderInstances.forEach(slider => slider.startAutoPlay());
        }
    });
}

// ===== DOM Content Loaded =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Restaurant Cards...');

    // Initialize all components
    initializeSliders();
    animateCardsOnLoad();
    setupKeyboardNavigation();
    setupButtonHandlers();
    setupVisibilityChange();

    console.log('✅ All components initialized successfully!');
});

// ===== Cleanup on Page Unload =====
window.addEventListener('beforeunload', () => {
    sliderInstances.forEach(slider => slider.destroy());
});

// ===== Export for potential module use =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ImageSlider, sliderInstances };
}
