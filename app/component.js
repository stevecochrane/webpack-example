export default (text = "Hello world") => {
	const element = document.createElement("div");
	element.innerHTML = text;
	element.onclick = () => {
		import("./lazy").then((lazy) => {
			element.textContent = lazy.default;
		});
	};
	return element;
};
