

gsap.to(".image-container", {
    ease: Expo.easeInOut,
    width: "100%",
    duration: 4,
    stagger: 2,
    repeat: -1,
});

gsap.to(".text-container h1", {
    ease: Expo.easeInOut,
    top: 0,
    stagger: 2,
    duration: 2,
})
gsap.to(".text-container h1", {
    ease: Expo.easeInOut,
    top: "-100%",
    stagger: 2,
    duration: 4,
    delay: 2,
});
