document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    // Change background color when scrolling
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#222"; // Change background color on scroll
        } else {
            header.style.backgroundColor = "#333"; // Revert to initial background color
        }
    });
});

// Features functions
function changeFont() {
    const fonts = ["Arial", "Times New Roman", "Courier New", "Georgia"];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    document.body.style.fontFamily = randomFont;
}

function changeTextColor() {
    const randomColor = getRandomColor();
    document.body.style.color = randomColor;
}

function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
