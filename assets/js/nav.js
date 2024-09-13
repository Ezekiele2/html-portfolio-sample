// script.js
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", function() {
        if (navMenu.style.display === "block") {
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "block";
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const expItems = document.querySelectorAll('.exp-item, .exp-item.alt');
    const modal = document.getElementById('map-modal');
    const mapIframe = document.getElementById('map-iframe');
    const closeBtn = document.querySelector('.close-btn');

    expItems.forEach(item => {
        item.addEventListener('click', () => {
            const location = item.getAttribute('data-location');
            const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(location)}`;
            mapIframe.src = mapUrl;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        mapIframe.src = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            mapIframe.src = '';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.portfolio-filter a');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioContainer = document.getElementById('portfolio-container');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const filter = this.getAttribute('data-filter');
  
        // Remove 'active' class from all buttons and add to clicked button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
  
        // Filter items
        if (filter === '*') {
          portfolioItems.forEach(item => {
            item.style.display = 'block';
          });
        } else {
          portfolioItems.forEach(item => {
            if (item.classList.contains(filter.substring(1))) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        }
  
        // Optional: re-layout items (if you're using a masonry layout)
        // You might need to adjust this based on your specific layout needs
        portfolioContainer.style.height = 'auto';
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const texts = ["Front-end Developer", "UI/UX Designer"];
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100; // Typing speed in milliseconds
    const delayBetweenTexts = 2000; // Delay between texts in milliseconds
    const element = document.getElementById("typing-text");

    function type() {
        if (charIndex < texts[textIndex].length) {
            element.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenTexts);
        }
    }

    function erase() {
        if (charIndex > 0) {
            element.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, typingSpeed / 2);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, typingSpeed);
        }
    }

    // Start the typing effect
    type();
});


// effects for education
document.addEventListener('DOMContentLoaded', () => {
  const eduContents = document.querySelectorAll('.edu-content');
  let delay = 0;

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              setTimeout(() => {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
              }, delay);
              delay += 300; // Adjust the delay as needed
          }
      });
  }, {
      threshold: 0.1
  });

  eduContents.forEach(content => {
      observer.observe(content);
  });
});


// rain


