(function () {
	if (window.Worker) {
		log("Les workers sont supportés :)");
	}
	else {
		log("Les workers ne sont pas supportés.");
	}
})();

function log(msg) {
	document.getElementById('msgContainer').innerText = msg;
};