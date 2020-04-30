import { Cards } from "./Cards.js";
import { Icones } from "./Icones.js";

window.onload = () => {
    let animaCards = new Cards();
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards));

    const icones = new Icones();
    icones.animaIcones();
}