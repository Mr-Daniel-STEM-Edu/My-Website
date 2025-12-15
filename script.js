// subtle section reveal without libraries
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(20px)';
  sec.style.transition = 'all 0.6s ease';
  observer.observe(sec);
});
