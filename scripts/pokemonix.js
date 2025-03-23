// Bootstrap Template Generated

// Navigation function
function navigateTo(url) {
    window.location.href = url;
  }
  
  // Loader handling
  window.addEventListener('load', () => {
    const loader = document.querySelector('.web-loader');
    
    if (loader) {
      loader.classList.add('web-loader--hidden');
      
      loader.addEventListener('transitionend', () => {
        if (loader.parentNode) {
          document.body.removeChild(loader);
        }
      });
    }
    
    // initialize carousel with custom settings
    initializeCarousel();
  });
  
  // Carousel initialization function
  function initializeCarousel() {
    // Make sure Bootstrap's carousel is properly initialized
    const carousel = document.getElementById('carouselPokemonix');
    
    if (carousel) {
      // Create a Bootstrap carousel instance with custom options
      const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 5000,      // 5 seconds per slide
        wrap: true,          // Continuous loop
        keyboard: true,      // Allow keyboard navigation
        pause: 'hover',      // Pause on hover
        touch: true          // Allow touch/swipe
      });
      
      // Force the carousel to trigger a resize to ensure images display properly
      window.dispatchEvent(new Event('resize'));
      
      // Add event listener for when slides change
      carousel.addEventListener('slide.bs.carousel', (event) => {
        console.log(`Moving from slide ${event.from} to slide ${event.to}`);
        
        // Ensure images are properly loaded
        const nextSlide = carousel.querySelector(`.carousel-item:nth-child(${event.to + 1}) img`);
        if (nextSlide && !nextSlide.complete) {
          nextSlide.onload = () => {
            // Image loaded successfully
            console.log('Carousel image loaded successfully');
          };
          
          nextSlide.onerror = () => {
            // Handle image loading error
            console.error('Failed to load carousel image');
            // You could replace with a fallback image if needed
            nextSlide.src = 'media/fallback-image.jpg';
          };
        }
      });
    }
  }
  
  // Featured items functionality
  document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.featured-item button');
    
    addToCartButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        // Get product details
        const itemContainer = e.target.closest('.featured-item');
        const itemTitle = itemContainer.querySelector('.featured-item-title').textContent;
        const itemPrice = itemContainer.querySelector('.featured-item-price').textContent;
        
        // You could add actual cart functionality here
        console.log(`Added to cart: ${itemTitle} - ${itemPrice}`);
        
        // Change button text temporarily to show feedback
        const originalText = button.textContent;
        button.textContent = 'Added to Cart!';
        button.classList.add('btn-success');
        button.classList.remove('btn-outline-dark');
        
        // Reset button after 2 seconds
        setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove('btn-success');
          button.classList.add('btn-outline-dark');
        }, 2000);
      });
    });
  });
  
  // Navbar toggle functionality
  const navToggle = document.getElementById('nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('change', () => {
      // Adjust main content margin when navbar width changes
      document.querySelector('main').style.transition = 'margin-left 0.2s';
      if (navToggle.checked) {
        document.querySelector('main').style.marginLeft = 'var(--navbar-width-min)';
      } else {
        document.querySelector('main').style.marginLeft = 'var(--navbar-width)';
      }
    });
  }

  // Category Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Here you would normally fetch or filter products based on category
      // For now, we're just showing the UI change
      const category = this.textContent.trim();
      console.log(`Selected category: ${category}`);
      
      // You could add AJAX call here to load different products
      // or filter the existing products on the page
    });
  });
});