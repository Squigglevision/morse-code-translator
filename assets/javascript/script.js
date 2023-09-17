import { encodeMorse } from "./translations.js";
import { decodeMorse } from "./translations.js";
import { replaceChildrenElementsWithText } from "./domutils.js";

const inputText = document.querySelector("#inputText");
const outputText = document.querySelector("#outputText");
const translateButton = document.querySelector("#translateButton");

translateButton.addEventListener("click", (event) => {
	event.preventDefault();
	const inputTextValue = document.querySelector("#inputText").value;
	// console.log(inputTextValue);
	if (
		/[-]|[.]/g.test(inputTextValue) &&
		!/[A-Za-z0-9]/g.test(inputTextValue)
	) {
		// console.log(`${inputTextValue}`);
		// console.log(decodeMorse(`${inputTextValue}`));
		replaceChildrenElementsWithText(
			"p",
			decodeMorse(`${inputTextValue}`),
			outputText
		);
	} else {
		// console.log(encodeMorse(`${inputTextValue}`));
		replaceChildrenElementsWithText(
			"p",
			encodeMorse(`${inputTextValue}`),
			outputText
		);
	}
});

// const decoded = decodeMorse("... --- ...  ... --- ...");
// console.log(decoded);

// const encoded = encodeMorse("SOS SOS 123456");
// console.log(encoded);
