// ===== Portfolio JavaScript =====

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded! 🎉');

    // ===== Form Submission Handler =====
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload

        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Simple validation
        if (name && email && message) {
            // Show success message
            alert(`✉️ Thank you, ${name}! Your message has been sent.\n\nThis is a demo - in a real website, this would send an email.`);

            // Log to console (for learning)
            console.log('Form Data:', {
                name: name,
                email: email,
                message: message
            });

            // Clear the form
            contactForm.reset();
        } else {
            alert('❌ Please fill in all fields!');
        }
    });

    // ===== Smooth Scroll Animation =====
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== Skill Bar Animation (on scroll) =====
    const skillCards = document.querySelectorAll('.skill-card');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when visible
                entry.target.classList.add('animate');

                // Animate progress bars
                const progressBar = entry.target.querySelector('.skill-progress');
                if (progressBar) {
                    const width = progressBar.style.width;
                    progressBar.style.width = '0%';
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 100);
                }
            }
        });
    }, { threshold: 0.5 });

    // Observe all skill cards
    skillCards.forEach(card => observer.observe(card));

    // ===== Dynamic Year in Footer =====
    const currentYear = new Date().getFullYear();
    const footer = document.querySelector('footer p');
    if (footer && currentYear !== 2025) {
        footer.textContent = footer.textContent.replace('2025', currentYear);
    }

    // ===== Add Typing Effect to Tagline =====
    const tagline = document.querySelector('.tagline');
    const originalText = tagline.textContent;
    tagline.textContent = '';

    let charIndex = 0;
    function typeWriter() {
        if (charIndex < originalText.length) {
            tagline.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing effect after short delay
    setTimeout(typeWriter, 500);

    console.log('✅ All portfolio features initialized!');
});

// ===== Add Scroll-to-Top Button (Bonus Feature) =====
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    // You can add a scroll-to-top button here
    // For now, just log scroll position
    if (scrollPosition > 100) {
        // User has scrolled down
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
