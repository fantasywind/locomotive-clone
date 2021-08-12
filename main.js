gsap.registerPlugin(ScrollTrigger);



gsap.fromTo(document.querySelector('#key-visual-section .left-title'), {
  x: 0,
  y: 0,
}, {
  x: '+=10vw',
  y: '-=84px',
  scrollTrigger: {
    start: "top top",
    end: "+=200vh",
    scrub: 0.01,
  },
});

gsap.fromTo(document.querySelector('#key-visual-section .right-title'), {
  x: 0,
  y: 0,
}, {
  x: '-=10vw',
  y: '-=84px',
  scrollTrigger: {
    start: "top top",
    end: "+=200vh",
    scrub: true,
  },
});

gsap.fromTo(Array.from(document.querySelectorAll('#key-visual-section .title:not(.split-version)')), {
  transform: 'translateY(0)',
}, {
  transform: (index) => index ? 'translateY(-4vh)' : 'translateY(-7vh)',
  scrollTrigger: {
    start: 'top top',
    end: '+=100vh',
    scrub: true,
  },
});

const splitTextElements = document.querySelectorAll('#key-visual-section .split-version > span');

gsap.to(Array.from(splitTextElements), {
  y: (index) => {
    switch (index) {
      case 0:
        return '-=15vh';
      case 1:
        return '-=30vh';
      case 2:
        return '-=5vh';
      case 3:
        return '-=23vh';
    }
  },
  scrollTrigger: {
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
  },
});


gsap.fromTo(document.querySelector('#key-visual-section .logo'), {
  transform: 'translateY(0)',
}, {
  transform: 'translateY(-10vh)',
  scrollTrigger: {
    start: 'top top',
    end: '+=100vh',
    scrub: true,
  },
});
