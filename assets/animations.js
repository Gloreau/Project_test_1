import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);



let tlheader = gsap.timeline();
tlheader.from ('header', {
    opacity:0,
    duration:0.4,
    ease:"power2. out",
    y:-90,
});
tlheader.from ('.navbar-nav', {
    opacity:0,
    duration:0.5,
    ease:"power1. out",

});


let tlfooter = gsap.timeline();
tlfooter.from('.footctn', {
    y:-100,
    opacity:0,
    ease:"power1. out",
    stagger:.2,
})


 // Hompage Timeline 

    let tlhome = gsap.timeline();
    
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
        transformOrigin: "right",
        scaleX:0,
        ease:'expo. out',
        duration:0.4,
        delay:1,
        stagger:0.5

    });
