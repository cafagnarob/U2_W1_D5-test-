const nav = document.querySelector("nav")
const header = document.querySelector("header")

window.addEventListener("scroll", () => {
  if (window.scrollY > header.offsetHeight - nav.offsetHeight) {
    nav.classList.add("scrolled")
  } else {
    nav.classList.remove("scrolled")
  }
})
