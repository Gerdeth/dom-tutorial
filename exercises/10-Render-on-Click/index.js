let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	var node = document.createElement("Div");
	node.innerHTML = "Hello World";
	node.style.backgroundColor = "Yellow";
	document.body.appendChild(node);
});
