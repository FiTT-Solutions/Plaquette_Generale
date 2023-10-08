function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150; //hauteur mini avant apparition
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", reveal);



//fonction page accueil
window.addEventListener("load", loader);
function loader(){
  const TLLOAD = gsap.timeline();
  TLLOAD
  .to('.accueil', {height: 400, duration: 1.3, delay:0.4, ease: 'power2'})
}