// ! ДЗ 39. Слайдер базовий

// Пишемо свій слайдер зображень.

// Відображаємо зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє.
// При досягненні останнього зображення - ховати кнопку Next.Аналогічно з першим зображенням і кнопкою Prev.

const leftImage = document.querySelector(".left-image");
const image = document.querySelector(".image");
const rightImage = document.querySelector(".right-image");

let number = 1;
image.setAttribute("src", `images/${number}.jpg`);

// ! это рандомно
// function random() {
//     const data = Math.floor(Math.random() * (4 - 1)) + 1;
//     image.setAttribute("src", `images/${data}.jpg`);
// }

// ! это по порядку
function random() {
    number = number + 1;
    if (number === 5) number = 1;
    image.setAttribute("src", `images/${number}.jpg`);
}

rightImage.addEventListener("click", e => {
    number += 1;
    if (number === 5) {
        rightImage.classList.add("d-none");
    } else {
        image.setAttribute("src", `images/${number}.jpg`);
        leftImage.classList.remove("d-none");
    }
    clearInterval(start);
})

leftImage.addEventListener("click", e => {
    number -= 1;
    if (number === 0) {
        leftImage.classList.add("d-none");
    } else {
        image.setAttribute("src", `images/${number}.jpg`);
        rightImage.classList.remove("d-none");
    }
    clearInterval(start);
})

const start = setInterval(random, 1000);

