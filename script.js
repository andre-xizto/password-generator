const input = document.querySelector('input');
const btn = document.querySelector('button');
const length = document.querySelector('#length');
const lengthNumber = document.querySelector('span');

const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const caractersLower = caracters.map((e) => String.fromCharCode(e));
const caractersUpper = caractersLower.map(e => e.toUpperCase());
const symbols = ['&', '$', '@', '!', '#', '%'];
const numbers = [0,1,2,3,4,5,6,7,8,9];

btn.addEventListener('click', () => {
    if (!length.value) return
    generatePass(length.value);
});

length.addEventListener('input', () => {
    lengthNumber.innerText = length.value;
})

const generatePass = (length) => {
    const newArray = [...caractersLower, ...caractersUpper, ...numbers, ...symbols];
    let pass = '';
    for (let i = 0; i < length; i++) {
        const randomI = Math.floor(Math.floor(Math.random() * newArray.length))
        pass += newArray[randomI];
    }
    input.value = pass;

}