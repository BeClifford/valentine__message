// Variables
const yesButton = document.getElementById("yesBtn");
const noButton = document.getElementById("noBtn");
const question = document.querySelector(".question");
const envelope = document.getElementById("envelope");
const openFlap = document.getElementById("openFlap");
const flap = document.querySelector(".flap");
const pocket = document.querySelector(".pocket");
const envelopeBody = document.querySelector(".envelope__container");
const root = document.documentElement;



// EvenListener for the YES button
yesButton.addEventListener("click", () => {
    question.classList.add("slideOut");

    question.addEventListener("animationend", () => {
        question.classList.add("hidden");
        envelope.classList.remove("hidden");
        envelope.classList.add("slideIn");
    }, {once: true});
});


openFlap.addEventListener("click", () => {
    flipFlap();
    popLetter(); 
})

const flipFlap = () => {
    const flapBgColor = getComputedStyle(root).getPropertyValue("--clr-envelope-pocket");
    flap.classList.add("open__flap");
    envelopeBody.style.background = "#fff";
    flap.style.background = `${flapBgColor}`;
}

const popLetter = () => {
    const letter = document.querySelector(".letter");
    letter.classList.add("hidden");
    letter.classList.remove("hidden");
    letter.classList.add("popUp");
}

const randomWidthValue = () => {
    const width = question.offsetWidth;
    const height = question.offsetHeight;
    return Math.floor(Math.random() * width);
}

const randomHeightValue = () => {
    const height = question.offsetHeight;
    return Math.floor(Math.random() * height);
}

noButton.addEventListener("click", () => {
    noButton.style.position = "absolute";
    noButton.style.top = `${randomHeightValue()}px`;
    noButton.style.left = `${randomWidthValue()}px`;
})