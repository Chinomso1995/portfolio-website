// remove spinner on load
window.addEventListener('load', ()=>{
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('preload-finish')
})
// animate the resume section to screen
const tl = gsap.timeline({paused: true, reversed: true})
tl.to('.box', {height: '100vh', duration: .5, transformOrigin: 'bottom', stagger: .3})
tl.to('.resume', {opacity: '1', visibility: 'visible', yPercent: -5, duration: .5, transformOrigin: 'bottom', stagger: .3, height: '100vh'})

const navIcon = document.querySelector('.navbar');
navIcon.addEventListener('click', ()=>{
  if (tl.reversed()) {
    tl.play()
    document.body.classList.add('noScroll');
} else {
    tl.reverse()
    document.body.classList.remove('noScroll');
}
})
//remove resume icon
const resumeNavIcon = document.querySelector('.resume-navbar');
resumeNavIcon.addEventListener('click', ()=>{
  if (tl.reversed()) {
    tl.play()
    document.body.classList.add('noScroll');
} else {
    tl.reverse()
    document.body.classList.remove('noScroll');
}
})
const allLinks = document.querySelectorAll('.list-items li a');
allLinks.forEach(link => {
  link.addEventListener('click', () => {
      document.body.classList.remove('noScroll');
      tl.reverse()
  })
})