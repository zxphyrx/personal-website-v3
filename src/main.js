import "./style.scss";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

const heroLinks = document.querySelectorAll(".hero.section .links a");
const heroLinksSlashes = document.querySelectorAll(".hero.section .links span");

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
        gsap.to([leftSlash, rightSlash, link], {
            color: "#e6e6e6",
            margin: "0 4px",
            duration: 0.1
        })
    })
}