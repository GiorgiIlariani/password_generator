const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');


function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// ფუნქცია რომელიც აბრუნებს ინგლისურ დიდ ასოებს რენდომულად
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


// ფუნქცია რომელიც აბრუნებს რიცხვებს 0 დან 9 ის ჩათვლით რენდომულად
function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


// ფუნქცია რომელიც აბრუნებს სიმბოლოებს რენდომულად
function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}


const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
};


generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
	const lower = lowercaseEl.checked;
	const upper = uppercaseEl.checked;
	const number = numbersEl.checked;
	const symbol = symbolsEl.checked;
	


	
	generatePassword(lower, upper, number, symbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {

    let count = lower + upper + number + symbol;

	let resultContainer = '';

	let countArr = [{lower}, {upper}, {number}, {symbol}]
	.filter(item => {
		return Object.values(item)[0];
	})

    

	if(count === 0) {
		return '';
	}

	for (let i = 0; i < length; i += count) {
		
		countArr.forEach(item => {
			resultContainer += randomFunc[Object.keys(item)[0]]();
		})
	}

	resultEl.innerText = resultContainer;


}