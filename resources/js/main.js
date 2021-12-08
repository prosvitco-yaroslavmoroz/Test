import { gsap, ScrollTrigger } from "../../node_modules/gsap/all.js";
import { exist, select, selectAll } from './help.js'

if(exist('.mobile-change-text')) {
    let text = select('.mobile-change-text')
    if(window.innerWidth <= 768) {
        text.textContent = 'something AS A SERVICE';
    }
}

gsap.registerPlugin(ScrollTrigger);

let text_bottom = selectAll('.text-animate')
text_bottom.forEach(el => {
        gsap.set(el, { y: 300, x: 0, opacity: 0 })
        gsap.to(el, {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "bottom",
                toggleActions: "play",
            }
        })
})

let listItems = Array.from(selectAll(".box"));
listItems.forEach((el, index) => {
    gsap.set(el, { opacity: 0, x: index % 2 ? 200 : -200 });
    gsap.to(el, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom",
            toggleActions: "play reverse play reverse",
        }
    });
});

let broshure = select('.second__content--broshure')
gsap.set(broshure, { x: 300, opacity: 0 })
gsap.to(broshure, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: broshure,
        start: "top 90%",
        end: "bottom",
    }
})