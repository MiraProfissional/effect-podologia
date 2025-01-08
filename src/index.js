const homeSection = document.querySelector('#home');
const navLinks = document.querySelectorAll('nav a');
const firstNavLink = navLinks[0];

const activateLink = (link) => {
  link.classList.remove('text-redOrangeLight2');
  link.classList.add('text-redOrangeDark');
  const spansLink = link.querySelectorAll('span');
  spansLink[1].classList.add('bg-redOrangeDark', 'w-full');
};

const deactivateLink = (link) => {
  link.classList.remove('text-redOrangeDark');
  link.classList.add('text-redOrangeLight2');
  const spansLink = link.querySelectorAll('span');
  spansLink[1].classList.remove('bg-redOrangeDark', 'w-full');
};

const activeFirstItemNavbarHover = (entries) => {
  if (entries[0].isIntersecting) {
    activateLink(firstNavLink);
  }
};

const observerOptions = {
  threshold: 0,
};

const observer = new IntersectionObserver(
  activeFirstItemNavbarHover,
  observerOptions
);

observer.observe(homeSection);

navLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    if (link !== firstNavLink) {
      deactivateLink(firstNavLink);
    }
  });
});

navLinks.forEach((link) => {
  link.addEventListener('mouseout', () => {
    if (link !== firstNavLink) {
      activateLink(firstNavLink);
    }
  });
});
