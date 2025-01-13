const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
let currentLink = navLinks[0];

const activateLink = (link) => {
  link.classList.add('active');
};

const deactivateLink = (link) => {
  link.classList.remove('active');
};

const deactivateAllLinks = (currentLink) => {
  navLinks.forEach((link) => {
    if (link == currentLink) {
      return;
    }
    deactivateLink(link);
  });
};

const getCorrespondingNavLink = (sectionId) => {
  switch (sectionId) {
    case 'home':
      return navLinks[0];
    case 'services':
      return navLinks[1];
    case 'infrastructure':
      return navLinks[2];
    case 'reviews':
      return navLinks[3];
    case 'location':
      return navLinks[4];
  }
};

const activeCurrentHoverLink = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
      currentLink = getCorrespondingNavLink(entry.target.id);
      activateLink(currentLink);
      deactivateAllLinks(currentLink);
    }
  });
};

const sectionObserverOptions = {
  threshold: 0.6,
};

const sectionObserver = new IntersectionObserver(
  activeCurrentHoverLink,
  sectionObserverOptions
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

navLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    if (link !== currentLink) {
      deactivateLink(currentLink);
    }
  });
});

navLinks.forEach((link) => {
  link.addEventListener('mouseout', () => {
    if (link !== currentLink) {
      activateLink(currentLink);
    }
  });
});

const serviceCards = document.querySelectorAll('.hiddenServiceCard');

const activeServiceCardsAnimation = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visibleServiceCard');
    } else {
      entry.target.classList.remove('visibleServiceCard');
    }
  });
};

const serviceCardsObserverOptions = {
  threshold: 0.8,
};

const serviceCardsObserver = new IntersectionObserver(
  activeServiceCardsAnimation,
  serviceCardsObserverOptions
);

serviceCards.forEach((card) => {
  serviceCardsObserver.observe(card);
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

const menuToggle = document.querySelector('#menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
