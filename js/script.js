// ========================================
// NEXORA STATE - MAIN SCRIPTS
// ========================================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200 && window.pageYOffset < sectionTop + sectionHeight - 200) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});

// Filter products on shop page
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter products
        productCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Contact form handler
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        try {
            // Validate form
            if (!data.name || !data.email || !data.subject || !data.message) {
                showFormMessage('Please fill in all required fields', 'error');
                return;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // If using Formspree (uncomment to enable)
            // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(data)
            // });
            
            // For demo purposes, just show success
            showFormMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
            contactForm.reset();
            
        } catch (error) {
            console.error('Error:', error);
            showFormMessage('An error occurred. Please try again.', 'error');
        }
    });
}

function showFormMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// Quick view button handlers
const quickViewButtons = document.querySelectorAll('.btn-small');
quickViewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const card = button.closest('.product-card');
        const productName = card.querySelector('h3').textContent;
        const productPrice = card.querySelector('.price').textContent;
        alert(`You selected: ${productName}\n${productPrice}\n\nQuick view functionality coming soon!`);
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards
document.querySelectorAll('.featured-card, .product-card, .value-card').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');
    });
});

// Add scroll animations for parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-background');
    
    parallaxElements.forEach(el => {
        el.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Nexora State website loaded successfully!');
    
    // Add smooth transitions to products on load
    productCards.forEach((card, index) => {
        card.style.animation = `slideUp 0.6s ease ${index * 0.1}s both`;
    });

    // Initialize filter buttons
    if (filterButtons.length > 0) {
        filterButtons[0].classList.add('active');
    }
});