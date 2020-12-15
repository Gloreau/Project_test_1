import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);


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
tlhome.from ('.hero', {
    opacity:0,
    duration:0.5,
    ease:"power1. out",
   
},0.5);
tlhome.from ('.hero__ctn', {
    opacity:0,
    y:'-100%',
    duration:0.3,
    ease:"power1. out",
   
});
tlhome.from ('.hero__horaires__ctn', {
    delay:0.2,
    opacity:0,
    duration:1,
    ease:"power3. out",
    stagger:0.4,
   
});

// H1

gsap.to('.hideh1', {
    x:'110%',
    ease:'expo. out',
    duration:0.4,
    delay:1,
    stagger:0.5

});


