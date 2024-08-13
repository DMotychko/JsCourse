//1
let randomText = ['Textone', 'Texttwo', "TextThree", "textFour", "textFive", "textSix", "textSeven", "textEight", "textNine", "textTen"];
for (let i = 0; i < randomText.length; i++) {
    document.write(`<div>${randomText[i]}</div>`);
}
//2
for (let i = 0; i < randomText.length; i++) {
    document.write(`<div>${randomText[i]} ${i}</div>`);
}
//3
let a = 0;
while (a < 20) {
    document.write(`<h1>Random text</h1>`)
    a++
}
//4
let b = 0;
while (b < 20) {
    document.write(`<h1>Random text - ${b}</h1>`)
    a++
}