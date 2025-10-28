import "./style.scss";

import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const mouse = document.querySelector(".mouse");

const heroSection = document.querySelector(".hero.section");
const heroLinks = document.querySelectorAll(".hero.section .links a");
const heroLinksSlashes = document.querySelectorAll(".hero.section .links span");

const aboutSection = document.querySelector(".aboutme.section");

for(let [index, link] of heroLinks.entries()) {
    let leftSlash = heroLinksSlashes[index];
    let rightSlash = heroLinksSlashes[index + 1];

    link.addEventListener("mouseenter", () => {
        gsap.to(link, {
            color: "#7872ff",
            margin: "0 8px",
            duration: 0.1
        })
        gsap.to([leftSlash, rightSlash], {
            color: "#7872ff",
            duration: 0.1
        })
    })

    link.addEventListener("mouseleave", () => {
        gsap.to(link, {
            color: "#e6e6e6",
            margin: "0 4px",
            duration: 0.1
        })
        gsap.to([leftSlash, rightSlash], {
            color: "#e6e6e6",
            duration: 0.1
        })
    })
}

document.body.addEventListener("mouseenter", (ev) => {
    gsap.to(mouse, {
        opacity: 1,
        duration: 0.3,
        ease: "power1.out"
    })
})

document.addEventListener("mousemove", (ev) => {
    gsap.to(mouse, {
        top:  ev.clientY - (mouse.clientHeight / 2),
        left: ev.clientX - (mouse.clientWidth / 2),
        duration: 0.3,
        ease: "power1.out"
    })
})

document.body.addEventListener("mouseleave", (ev) => {
    gsap.to(mouse, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.out"
    })
})