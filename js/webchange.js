(() => {
	console.log("Lee,Lin,Guzman midterm");	




let button = document.querySelector("#button");
let burGer = document.querySelector("#burGer");

	function hamburgerMenu() {
		burGer.classList.toggle("moveIn");
		burGer.classList.toggle("expanded");

	//debugger;

	}

	button.addEventListener("click", hamburgerMenu, false);	
})();