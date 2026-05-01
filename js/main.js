// ================================================
// MAIN.JS - Maison de Rêve
// Script unique pour toutes les pages
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ==================== MENU MOBILE ====================
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.style.display = 
                mobileMenu.style.display === 'flex' ? 'none' : 'flex';
        });

        // Fermer le menu mobile quand on clique sur un lien
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.style.display = 'none';
            });
        });
    }

    // ==================== ACTIVE NAV LINK ====================
    // Met en surbrillance le lien de la page actuelle
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-menu a, .mobile-menu a');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            if (href === currentPage || 
                (currentPage === 'index.html' && href === '#')) {
                link.classList.add('active');
            } else if (href.includes('#') && currentPage === 'index.html') {
                // Pour les ancres sur la page d'accueil
                link.classList.remove('active');
            }
        });
    }

    // ==================== SMOOTH SCROLL ====================
    function smoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ==================== SCROLL ANIMATION ====================
    function animateOnScroll() {
        const elements = document.querySelectorAll('.project-card, .service-card, .testimonial-card, .stat-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }

    // ==================== FORMULAIRE CONTACT ====================
    function handleContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simulation d'envoi
                const submitButton = this.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                submitButton.textContent = 'Envoi en cours...';
                submitButton.disabled = true;

                setTimeout(() => {
                    alert("✅ Merci ! Votre message a été envoyé avec succès.\n\nNous vous contacterons dans les plus brefs délais.");
                    contactForm.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 1500);
            });
        }
    }

    // ==================== HEADER SCROLL EFFECT ====================
    function headerScrollEffect() {
        const header = document.querySelector('.header');
        
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(26, 60, 30, 0.98)';
                    header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.background = 'rgba(26, 60, 30, 0.95)';
                    header.style.boxShadow = 'none';
                }
            });
        }
    }

    // ==================== INITIALISATION ====================
    function init() {
        setActiveNavLink();
        smoothScroll();
        animateOnScroll();
        handleContactForm();
        headerScrollEffect();

        console.log('%cMaison de Rêve - Site chargé avec succès ✅', 
                    'color: #2e7d32; font-weight: bold;');
    }

    // Lancer l'initialisation
    init();
});
