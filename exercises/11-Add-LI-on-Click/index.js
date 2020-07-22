let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let list = document.querySelector("#myList");
	let newNode = document.createElement("li");
	newNode.innerHTML = "Fourth element";
	list.appendChild(newNode);
});
