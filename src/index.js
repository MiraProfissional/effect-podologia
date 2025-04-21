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
      entry.target.classList.add('lg:visibleReviewCard');
    } else {
      entry.target.classList.remove('lg:visibleReviewCard');
    }
  });
};

const reviewCardsObserverOptions = {
  threshold: 0.5,
};

const reviewCardsObserver = new IntersectionObserver(
  activeReviewCardsAnimation,
  reviewCardsObserverOptions
);

reviewCards.forEach((card) => {
  reviewCardsObserver.observe(card);
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navLink');
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
    case 'news':
      return navLinks[1];
    case 'services':
      return navLinks[2];
    case 'infrastructure':
      return navLinks[3];
    case 'reviews':
      return navLinks[4];
    case 'location':
      return navLinks[5];
  }
};

const activeCurrentHoverLink = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      currentLink = getCorrespondingNavLink(entry.target.id);
      activateLink(currentLink);
      deactivateAllLinks(currentLink);
    }
  });
};

const sectionObserverOptions = {
  threshold: 0.5,
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

const serviceCards = document.querySelectorAll('.serviceCard');

const activeServiceCardsAnimation = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('lg:visibleServiceCard');
    } else {
      entry.target.classList.remove('lg:visibleServiceCard');
    }
  });
};

const serviceCardsObserverOptions = {
  threshold: 0.7,
};

const serviceCardsObserver = new IntersectionObserver(
  activeServiceCardsAnimation,
  serviceCardsObserverOptions
);

serviceCards.forEach((card) => {
  serviceCardsObserver.observe(card);
});

const newsCard = document.querySelectorAll('.newsCard');

const activeNewsCardAnimation = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('lg:visibleNewsCard');
    } else {
      entry.target.classList.remove('lg:visibleNewsCard');
    }
  });
};

const newsCardObserverOptions = {
  threshold: 0.7,
};

const newsCardObserver = new IntersectionObserver(
  activeNewsCardAnimation,
  newsCardObserverOptions
);

newsCard.forEach((card) => {
  newsCardObserver.observe(card);
});
