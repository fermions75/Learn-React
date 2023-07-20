const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

/// normal function that works perfectly
function show() {
    display.innerHTML = this.value;
    setTimeout(function () {
        thanks.innerHTML = `you have typed: ${this.value}`;
    }, 1000);
}

/// convert that into an arrow function
const shows = () => {
    display.innerHTML = this.value;
}
/// this also doesnot work, arrow function does not
/// accept 'this' as parameter
/// the way to fix this is write normal fucntion
searchInput.addEventListener("keyup", shows);