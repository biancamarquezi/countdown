const body = document.querySelector("body")
const root = document.querySelector(":root")

let expirationDate = new Date("Apr 29, 2023 9:15:00").getTime();
const countdown = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = expirationDate - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + " : "
        + hours + " : " + minutes + " : " + seconds;
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Foguete pronto para lançamento!";
    }
}, 1000);

document.getElementById("themeSwitcher").addEventListener("click", function () {
    if (body.dataset.theme === "dark") { //verifica se o data-theme do main é dark, se for, troca para claro e altera as propriedades de estilo do elemento root para outras cores
        root.style.setProperty("--bg-color", "whitesmoke") //setProperty precisa da propriedade e qual o valor da propriedade
        root.style.setProperty("--black", "#4d4c59")
        body.dataset.theme = "light"
    } else { //se nao, altera para dark
        root.style.setProperty("--bg-color", "black")
        root.style.setProperty("--black", "#c8c8c8")
        body.dataset.theme = "dark"
    }
})

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

document.getElementById('successSignUp').addEventListener('click', function () {
    alert('Inscrição feita com sucesso!')
})