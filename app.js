const theNumber = document.querySelector("#theNumber");
const theNumberYouGuess = document.querySelector("h5");
const confirmButton = document.querySelector("#confirm");
const GuessValueNumber = document.querySelector("#GuessValue");
const situtation = document.querySelector("h6");
const ul = document.querySelector("ul");
const appSection = document.querySelector(".app-section");
const clear = document.querySelector("#clear");

runEvents();
function runEvents() {
    confirmButton.addEventListener("click", exe);
    clear.addEventListener("click", clearul)
}
console.log(ul.children);

function clearul() {
    const lists = Array.from(ul.children);
    lists.forEach((list) => {
        list.remove();
    })
    ulPaddingProblem();
}
function exe() {
    const theNumberValue = Math.floor(Math.random() * 10 + 1);
    const GuessValue = GuessValueNumber.value.trim();
    console.log(GuessValue);
    valueControl(GuessValue, theNumberValue);
    didYouWinControl(theNumberValue, GuessValue);
    ulPaddingProblem();
}

function valueControl(GuessValue, theNumberValue) {
    if (GuessValue > 0 && GuessValue < 11) {
        theNumber.textContent = theNumberValue;
        theNumberYouGuess.textContent = GuessValue;

    }
    else {
        alert("Hatali değer girdiniz");
    }
}

function didYouWinControl(theNumberValue, GuessValue) {
    const value = Number(theNumberValue);
    const guess = Number(GuessValue);
    const situtationControl = Math.abs(value - guess);
    if (value === guess) {
        winColor();
        const situtationText = "(Kazandın!)"
        situtation.textContent = situtationText;
        history(theNumberValue, GuessValue, situtationText);

    }
    else if (GuessValue === "" || GuessValue === null) {
        console.log("hata");
    }
    else if (situtationControl > 6) {
        const situtationText = "(Çok uzak!)"
        situtation.textContent = situtationText;
        loseColor();
        history(theNumberValue, GuessValue, situtationText);


    }
    else if (situtationControl >= 4 && situtationControl <= 6) {
        const situtationText = "(Yaklaştın!)"
        situtation.textContent = situtationText;
        loseColor();
        history(theNumberValue, GuessValue, situtationText);

    }
    else if (situtationControl < 4 && situtationControl > 1) {
        const situtationText = "(Çok Yaklaştın!)"
        situtation.textContent = situtationText;
        loseColor();
        history(theNumberValue, GuessValue, situtationText);

    }
    else if (situtationControl === 1) {
        const situtationText = "(Kıl Payı!)"
        situtation.textContent = situtationText;
        loseColor();
        history(theNumberValue, GuessValue, situtationText);

    }

}
function history(value, guess, situtationText) {
    // <li>Sayı : 2, Tahmin : 2 <span>KAZANDIN!</span></li>
    const li = document.createElement("li");
    li.innerHTML = `Sayı :${value} Tahmin :${guess} <span>${situtationText}</span>`
    if (situtationText != "(Kazandın!)") {
        li.style.backgroundColor = "red";
    }
    ul.appendChild(li);
}
function winColor() {
    appSection.classList.remove("lose");
    appSection.classList.add("win");
    console.log("kaybettin");
}
function loseColor() {
    appSection.classList.remove("win");
    appSection.classList.add("lose");
    console.log("kaybettin");
}
function ulPaddingProblem() {
    if (ul.children.length === 0) {
        ul.classList.remove("p");
    }
    else {
        ul.classList.add("p");
    }

}
