gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: 'restart pause resume none',
  // markers: true
});


const tl_1 = gsap.timeline();

ScrollTrigger.create({
    animation: tl_1,
    trigger: ".slider__text",
    start: "top top",
    end: "+=" + document.querySelector('.panel').offsetHeight / 5 * 3,
    scrub: 3,
});

tl_1.to('.slider__text .container q:nth-of-type(1)', { left: "60%" }, 1.5)
.to('.slider__text .container q:nth-of-type(4)', { left: "72%" })
.to('.slider__text .container q:nth-of-type(10)', { left: "43%" })
.to('.slider__text .container q:nth-of-type(2)', { left: "10%" })
.to('.slider__text .container q:nth-of-type(9)', { left: "90%" })
.to('.slider__text .container q:nth-of-type(5)', { left: "52%" })
.to('.slider__text .container q:nth-of-type(3)', { left: "25%" })
.to('.slider__text .container q:nth-of-type(11)', { left: "68%" })
.to('.slider__text .container q:nth-of-type(8)', { left: "40%" })
.to('.slider__text .container q:nth-of-type(6)', { left: "34%" })
.to('.slider__text .container q:nth-of-type(12)', { left: "77%" })
.to('.slider__text .container q:nth-of-type(7)', { left: "2%" })
.to('.slider__text .container h2', { opacity: 1, yPercent: -10, duration: 2 })
;