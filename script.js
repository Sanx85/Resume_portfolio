
// Initialize particles.js
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#41e0fd"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#41e0fd",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Typing animation
const typingText = document.querySelector('.typing-text');
const professions = ['AI UI Designer', 'Prompt Engineer', 'Creative Technologist', 'UX Specialist'];
let currentProfession = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = professions[currentProfession];
  
  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }
  
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentProfession = (currentProfession + 1) % professions.length;
    setTimeout(type, 500);
  } else {
    const typingSpeed = isDeleting ? 75 : 150;
    setTimeout(type, typingSpeed);
  }
}

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll('.scroll-animate');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.classList.add('animate');
    }
  });
}

// Initialize animations
window.addEventListener('load', () => {
  // Start typing animation
  setTimeout(type, 1000);
  
  // Initial scroll animation check
  animateOnScroll();
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Navbar link active state
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 300) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });
});

// Check for scroll animations on scroll
window.addEventListener('scroll', animateOnScroll);

// Project card hover animations
// document.querySelectorAll('.project-card').forEach(card => {
//   card.addEventListener('mousemove', (e) => {
//     const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//     const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//     gsap.to(card, {
//       rotationY: xAxis,
//       rotationX: yAxis,
//       ease: "power1.out",
//       duration: 0.5
//     });
//   });
  
//   card.addEventListener('mouseleave', () => {
//     gsap.to(card, {
//       rotationY: 0,
//       rotationX: 0,
//       ease: "power3.out",
//       duration: 1
//     });
//   });
// });

// Floating animation for buttons
gsap.to(".btn-primary", {
  y: 10,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".btn-outline-light", {
  y: 10,
  duration: 2.2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 0.2
});
