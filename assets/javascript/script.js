import { encodeMorse } from "./translations.js";
import { decodeMorse } from "./translations.js";
import { replaceText } from "./domutils.js";

const inputText = document.querySelector("#inputText");
const outputText = document.querySelector("#outputText");
const translateButton = document.querySelector("#translateButton");

translateButton.addEventListener("click", (event) => {
	event.preventDefault();
	const inputTextValue = inputText.value;
	/[-]|[.]/g.test(inputTextValue) && !/[A-Za-z0-9]/g.test(inputTextValue)
		? replaceText("p", decodeMorse(`${inputTextValue}`), outputText)
		: replaceText("p", encodeMorse(`${inputTextValue}`), outputText);
});
