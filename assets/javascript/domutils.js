export const replaceChildrenElementsWithText = (elementType, text, parent) => {
	const newElement = document.createElement(elementType);
	const textNode = document.createTextNode(text);
	newElement.appendChild(textNode);
	parent.replaceChildren(newElement);
};
