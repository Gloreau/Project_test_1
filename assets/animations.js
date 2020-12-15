import { gsap } from "gsap";

// Hompage Timeline 

let tlhome = gsap.timeline();
tlhome.from ('header', {
    opacity:0,
    duration:0.4,
    ease:"power2. out",
    y:-90,
});
tlhome.from ('.navbar-nav', {
    opacity:0,
    duration:0.5,
    ease:"power1. out",
   
});
tlhome.from ('.infos', {
    opacity:0,
    duration:0.5,
    ease:"power1. out",
   
});

// H1

gsap.to('.hideh1', {
    x:'110%',
    ease:'expo. out',
    duration:0.4,
    delay:1,
    stagger:0.5

})


