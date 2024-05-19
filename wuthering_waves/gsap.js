document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "none", duration: 2 });
    // create a sequence that moves 3 of the panels in from
    const tl = gsap.timeline();
    tl.from(".hinh2", { yPercent: 110 });

    // pin the container and link the animation to the scrollbar (scrub: true). We could easily embed this in the gsap.timeline() to shorten things a bit, but this is to show that you can create the ScrollTrigger separately if you prefer.
    ScrollTrigger.create({
        animation: tl,
        trigger: "#khung-xep",
        start: "top top",
        end: "+=550",
        scrub: true,
        pin: true,
        anticipatePin: 1
    });
});