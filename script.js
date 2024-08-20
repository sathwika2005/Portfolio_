document.addEventListener('DOMContentLoaded', function () {
  const scrollLinks = document.querySelectorAll('.navigation-bar a[href^="#"]');
  
  scrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();

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
});

window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.web-container > div[id]');
  let current = '';

  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
      }
  });

  const navLinks = document.querySelectorAll('.navigation-bar a');
  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
      }
  });
});
