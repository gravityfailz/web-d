var tl2 = gsap.timeline();

tl2.from("#loader h3", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});

tl2.to("#loader h3", {
  x: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});

tl2.to("#loader", {
  opacity: 0,
});
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 60%",
    scrub: true,
    // markers: true,
  },
});

tl.to(
  "#fanta",
  {
    top: "110%",
    left: "13%",
    width: "19%",
    height: "68%",
  },
  orange
);

tl.to(
  "#orange-cut",
  {
    top: "140%",
    left: "5%",
  },
  orange
);
tl.to(
  "#orange",
  {
    top: "172.5%",
    right: "6%",
    width: "15%",
  },
  orange
);

tl.to(
  "#leaf1",
  {
    top: "100%",
    left: "25%",
  },
  orange
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "70% 60%",
    scrub: true,
    // markers: true,
  },
});

tl2.to(
  "#fanta",
  {
    top: "208%",
    left: "41%",
    height: "60%",
    widht: "5%",
  },
  orange
);
tl2.to(
  "#orange-cut",
  {
    top: "200%",
    left: "40.5%",
    height: "40%",
    // widht: "200",
  },
  orange
);

tl2.from("");

tl.to("#loader", {
  display: "none",
});
