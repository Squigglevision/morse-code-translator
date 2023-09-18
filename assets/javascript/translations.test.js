import { encodeMorse } from "./translations.js";
import { decodeMorse } from "./translations.js";

describe("Test cases for a function that encodes English into morse code", () => {
	it("Can translate all English characters from A-Z into morse code", () => {
		expect(encodeMorse("abcdefghijklmnopqrstuvwxyz")).toBe(
			".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.. "
		);
	});
	it("Can translate one case insensitive English word into morse code", () => {
		expect(encodeMorse("SOS")).toBe("... --- ... ");
		expect(encodeMorse("sos")).toBe("... --- ... ");
	});
	it("Can translate multiple case insensitive English words into morse code, separated by a slash ", () => {
		expect(encodeMorse("SOS SOS SOS SOS SOS")).toBe(
			"... --- ... / ... --- ... / ... --- ... / ... --- ... / ... --- ... "
		);
		expect(encodeMorse("sos sos sos sos sos")).toBe(
			"... --- ... / ... --- ... / ... --- ... / ... --- ... / ... --- ... "
		);
	});
	it("Can translate numbers and some punctuation into morse code", () => {
		expect(encodeMorse("9876543210...---,'")).toBe(
			"----. ---.. --... -.... ..... ....- ...-- ..--- .---- ----- .-.-.- .-.-.- .-.-.- -....- -....- -....- --..-- .----. "
		);
	});
	it("Keeps a character as is if it can't be encoded", () => {
		expect(encodeMorse("#$%^")).toBe("#$%^");
	});
});

describe("Test cases for a function that translates morse code into English", () => {
	it("Can translate one word from morse code into English", () => {
		expect(decodeMorse("... --- ...")).toBe("sos");
	});
	it("Can translate multiple morse words separated by two or more spaces or a slash into English", () => {
		expect(decodeMorse("... --- ...  ... --- ...  ... --- ...")).toBe(
			"sos sos sos"
		);
		expect(decodeMorse(".... . .-.. .-.. ---   .-- --- .-. .-.. -..")).toBe(
			"hello world"
		);
		expect(
			decodeMorse("... --- ...      ... --- ...      ... --- ...")
		).toBe("sos sos sos");
		expect(decodeMorse("... --- ... / ... --- ... / ... --- ...")).toBe(
			"sos sos sos"
		);
	});
	it("Keeps a character as is if it can't be decoded", () => {
		expect(decodeMorse("... --- ...  ... --- ...  @#$%")).toBe(
			"sos sos @#$%"
		);
	});
});
