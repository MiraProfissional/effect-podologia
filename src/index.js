const options = {
    threshold: 0,
}

const homeSection = document.querySelector('#home')

const navLinks = document.querySelectorAll("nav a")

const firstNavLink = navLinks[0]

const spansFirstNavLink = firstNavLink.querySelectorAll('span')

const activeFirstItemNavbarHover = (entries) => {
    if(entries[0].isIntersecting) {
        firstNavLink.classList.remove('text-redOrangeLight2')
        firstNavLink.classList.add('text-redOrangeDark')
        spansFirstNavLink[1].classList.add('bg-redOrangeDark', 'w-full')
    }
}

const observer = new IntersectionObserver(activeFirstItemNavbarHover, options)

observer.observe(homeSection)

navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
        if (link !== firstNavLink) {
            firstNavLink.classList.remove("text-redOrangeDark")
            firstNavLink.classList.add("text-redOrangeLight2")
            spansFirstNavLink[1].classList.remove("bg-redOrangeDark", "w-full")
        }
    })
})

navLinks.forEach((link) => {
    link.addEventListener("mouseout", () => {
        if (link !== firstNavLink) {
            firstNavLink.classList.remove("text-redOrangeLight2")
            firstNavLink.classList.add("text-redOrangeDark")
            spansFirstNavLink[1].classList.add("bg-redOrangeDark", "w-full")
        }
    })
})