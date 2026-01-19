/**
 * 40 KUNLIK POKLANISH - Main JavaScript v2.0
 * 
 * ENHANCED FEATURES:
 * - Advanced scroll animations
 * - Micro-interactions and visual feedback
 * - Smooth transitions and effects
 * - Performance-optimized
 * - Vanilla JS (no dependencies except AOS)
 */

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeAOS();
    initializeJourneyCards();
    initializeFAQ();
    initializeSmoothScroll();
    initializeScrollAnimations();
    initializeButtonEffects();
});

// ============================================
// AOS (ANIMATE ON SCROLL) INITIALIZATION
// - Enhanced configuration
// - Smooth, engaging animations
// ============================================

function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out-cubic',
            once: true,
            offset: 100,
            disable: false,  // Enable on all devices for modern look
            delay: 100
        });
    }
}

// ============================================
// JOURNEY CARDS - ENHANCED EXPAND/COLLAPSE
// - Smooth animations
// - Visual feedback
// - State management
// ============================================

function initializeJourneyCards() {
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const card = this.closest('.journey-card');
            const isExpanded = card.classList.contains('expanded');
            
            // Add ripple effect
            addRippleEffect(this);
            
            // Close all other cards with animation
            document.querySelectorAll('.journey-card.expanded').forEach((openCard, i) => {
                if (openCard !== card) {
                    openCard.classList.remove('expanded');
                    const btn = openCard.querySelector('.expand-btn');
                    if (btn) {
                        btn.textContent = 'Batafsil';
                        btn.setAttribute('aria-expanded', 'false');
                    }
                }
            });
            
            // Toggle current card with animation
            card.classList.toggle('expanded');
            
            // Update button text and state
            const buttonText = isExpanded ? 'Batafsil' : 'Yopish';
            this.textContent = buttonText;
            this.setAttribute('aria-expanded', !isExpanded);
            
            // Trigger animation on content
            if (!isExpanded) {
                const details = card.querySelector('.journey-details');
                if (details) {
                    details.style.animation = 'slideInUp 0.5s ease-out';
                }
            }
        });
    });
}

// ============================================
// FAQ ACCORDION - ENHANCED
// - Smooth expand/collapse
// - Visual feedback
// - Keyboard support
// ============================================

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add ripple effect
            addRippleEffect(this);
            
            // Close other FAQ items with animation
            faqItems.forEach((otherItem, i) => {
                if (otherItem !== item && otherItem.hasAttribute('open')) {
                    otherItem.removeAttribute('open');
                    const q = otherItem.querySelector('.faq-question');
                    if (q) {
                        q.setAttribute('aria-expanded', 'false');
                    }
                }
            });
            
            // Toggle current item
            if (item.hasAttribute('open')) {
                item.removeAttribute('open');
                question.setAttribute('aria-expanded', 'false');
            } else {
                item.setAttribute('open', '');
                question.setAttribute('aria-expanded', 'true');
                
                // Scroll into view smoothly
                setTimeout(() => {
                    item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    });
}

// ============================================
// SMOOTH SCROLL - ENHANCED
// - Smooth navigation
// - Active link highlighting
// - Scroll offset for fixed headers
// ============================================

function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') {
                return;
            }
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                // Add active state
                links.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Smooth scroll with offset
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS - ENHANCED
// - Parallax-like effects
// - Scroll-triggered animations
// - Performance optimized
// ============================================

function initializeScrollAnimations() {
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateScrollAnimations();
                ticking = false;
            });
            ticking = true;
        }
    });
}

function updateScrollAnimations() {
    const scrollY = window.scrollY;
    
    // Subtle parallax on hero shape
    const heroShape = document.querySelector('.hero-shape');
    if (heroShape) {
        const offset = scrollY * 0.5;
        heroShape.style.transform = `translateY(${offset}px)`;
    }
    
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('[data-scroll-animate]');
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            el.classList.add('scroll-visible');
        }
    });
}

// ============================================
// BUTTON EFFECTS - RIPPLE & HOVER
// - Visual feedback on interaction
// - Modern micro-interactions
// ============================================

function addRippleEffect(element) {
    // Create ripple element
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    // Get position
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    // Set ripple styles
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    // Add ripple to element
    element.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function initializeButtonEffects() {
    const buttons = document.querySelectorAll('.cta-button, .expand-btn, .faq-question');
    
    buttons.forEach(button => {
        // Add hover scale effect
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Add focus styles for accessibility
        button.addEventListener('focus', function() {
            this.style.outline = '2px solid #D4A574';
            this.style.outlineOffset = '2px';
        });
        
        button.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
}

// ============================================
// SCROLL PROGRESS INDICATOR
// - Visual feedback of scroll position
// ============================================

function initializeScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #D4A574, #E8D4D0);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercentage + '%';
    });
}

// ============================================
// LAZY LOADING SUPPORT
// - Optimize image loading
// ============================================

function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ============================================
// KEYBOARD NAVIGATION
// - Enhanced accessibility
// - Escape key to close modals
// ============================================

document.addEventListener('keydown', function(e) {
    // Escape key closes expanded cards and FAQs
    if (e.key === 'Escape') {
        // Close expanded journey cards
        document.querySelectorAll('.journey-card.expanded').forEach(card => {
            card.classList.remove('expanded');
            const btn = card.querySelector('.expand-btn');
            if (btn) {
                btn.textContent = 'Batafsil';
                btn.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close expanded FAQ items
        document.querySelectorAll('.faq-item[open]').forEach(item => {
            item.removeAttribute('open');
            const question = item.querySelector('.faq-question');
            if (question) {
                question.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Tab key for navigation
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        
        console.log('🚀 Page Load Time: ' + pageLoadTime + 'ms');
        console.log('✨ 40 KUNLIK POKLANISH website loaded successfully!');
    });
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// - Trigger animations when elements enter viewport
// ============================================

function initializeIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// SMOOTH SCROLL BEHAVIOR ENHANCEMENT
// ============================================

function enhanceSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ============================================
// INITIALIZE ALL ENHANCEMENTS ON LOAD
// ============================================

window.addEventListener('load', function() {
    initializeScrollProgress();
    initializeLazyLoading();
    initializeIntersectionObserver();
    enhanceSmoothScroll();
});

// ============================================
// EXPORT FOR TESTING
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeAOS,
        initializeJourneyCards,
        initializeFAQ,
        initializeSmoothScroll,
        initializeScrollAnimations,
        initializeButtonEffects
    };
}

// ============================================
// CUSTOM RIPPLE EFFECT STYLES
// ============================================

const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .keyboard-nav *:focus {
        outline: 2px solid #D4A574;
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);
