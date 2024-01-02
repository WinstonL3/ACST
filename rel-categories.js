// JavaScript Document

function openPopup(popup) {
	let popups = document.getElementsByClassName("popup");
	let popupContainer = document.querySelector(".popup-container");
	
	for (let i = 0; i < popups.length; i++) {
		console.log(popups[i].style)
		popupContainer.style.display = "none";
		popups[i].style.display = "none";
  }
	let selPopup = document.getElementById(popup)
		popupContainer.style.display = "flex";
		selPopup.style.display = "block";
	setTimeout(function() {
    popupContainer.style.opacity = 1;
	selPopup.style.opacity = 1;
    }, 60);
}

function closePopup(popup) {
	let popupContainer = document.querySelector(".popup-container");
	popupContainer.style.opacity = 0;
	setTimeout(function() {
		popupContainer.style.display = "none";
		popup.style.display = "none";
    }, 300);
	
	
}

document.getElementById('cat-personal').addEventListener("click", function () {
	openPopup('popup1');
});
document.getElementById('cat-financial').addEventListener("click", function () {
	openPopup('popup2');
});
document.getElementById('cat-ministerial').addEventListener("click", function () {
	openPopup('popup3');
});



