document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  const menuBtn = document.querySelector('.menu-button');
  const navMenu = document.querySelector('.nav-menu');
  
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  

  const form = document.querySelector('#contact-form');

  form.addEventListener('submit', e => {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
  
    if (!nameInput.value || !emailInput.value) {
      e.preventDefault();
      alert('Please fill out all required fields.');
    }
  });

  

  const images = document.querySelectorAll('.gallery-image');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  
  images.forEach(image => {
    image.addEventListener('click', () => {
      lightboxImage.src = image.src;
      lightbox.classList.add('active');
    });
  });
  
  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  

  const scrollButton = document.querySelector('.scroll-to-top');

  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  