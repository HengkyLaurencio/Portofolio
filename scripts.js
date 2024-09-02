document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter');
    const textArray = ["Hengky Laurencio", "a Web Developer", "a Mobile Developer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        if (isDeleting) {
            if (charIndex > 0) {
                typewriterElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeWriter, 50); 
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length;
                setTimeout(typeWriter, 500);
            }
        } else {
            if (charIndex < textArray[textIndex].length) {
                typewriterElement.textContent += textArray[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    isDeleting = true;
                    typeWriter();
                }, 2000); 
            }
        }
    }

    typeWriter();

    // Navigation
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Scroll-to-Top Button functionality
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Reveal animation on scroll
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                element.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
});
