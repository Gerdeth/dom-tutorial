window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	countries.map(country => {
		var elem = document.createElement("option");
		elem.innerHTML = country;
		document.querySelector("#mySelect").appendChild(elem);
	});
};
