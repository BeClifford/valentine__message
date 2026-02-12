const yesButton = document.getElementById("yesBtn");
const question = document.querySelector(".question");
const envelope = document.getElementById("envelope");
const openFlap = document.getElementById("openFlap");
const flap = document.querySelector(".flap");
const pocket = document.querySelector(".pocket");
const envelopeBody = document.querySelector(".envelope__container");
const root = document.documentElement;




yesButton.addEventListener("click", () => {
    question.classList.add("slideOut");

    question.addEventListener("animationend", () => {
    
        question.classList.add("hidden");
        envelope.classList.remove("hidden");
        envelope.classList.add("slideIn");
    }, {once: true});
});


openFlap.addEventListener("click", () => {
    const flapBgColor = getComputedStyle(root).getPropertyValue("--clr-envelope-pocket");
    flap.classList.add("open__flap");
    envelopeBody.style.background = "#fff";
    flap.style.background = `${flapBgColor}`;

    const letter = document.querySelector(".letter");
    letter.classList.add("hidden");
    letter.classList.remove("hidden");
    letter.classList.add("popUp");
})