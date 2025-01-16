const menuToggle = document.querySelector('#menu-toggle');
const mobileNavbar = document.querySelector('#mobile-navbar');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);
  mobileNavbar.classList.toggle('hidden');
});

const reviewCards = document.querySelectorAll('.reviewCard');

const activeReviewCardsAnimation = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visibleReviewCard');
    } else {
      entry.target.classList.remove('visibleReviewCard');
    }
  });
};

const reviewCardsObserverOptions = {
  threshold: 0.8,
};

const reviewCardsObserver = new IntersectionObserver(
  activeReviewCardsAnimation,
  reviewCardsObserverOptions
);

reviewCards.forEach((card) => {
  reviewCardsObserver.observe(card);
});
