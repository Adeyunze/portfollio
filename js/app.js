const tl = gsap.timeline({ defaults: { ease: "power!1.out" } });

tl.to("body", { opacity: 1, duration: 2, delay: 1 });
tl.to("body", { opacity: 1, duration: 2, delay: 1 });
tl.to("body", { opacity: 1, duration: 2, delay: 1 });
tl.to("body", { opacity: 1, duration: 2, delay: 1 });

let year = new Date().getFullYear();
document.getElementById('year').innerHTML = year;