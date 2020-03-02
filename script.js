// Fontionalité 1 

var footerEl = document.getElementsByTagName('footer')[0];
console.log(footerEl) 
let count = 0  
function changeFooter(){
	console.log("CLIQUE")
	count ++
	console.log('CLIQUE numéro:' +count)
}
footerEl.addEventListener("click", changeFooter);

// Fontionalité 2

let hiddenNav = document.getElementsByTagName('button')[0];

hiddenNav.addEventListener("click", function () {
	document.getElementById('navbarHeader').classList.toggle("collapse");
});

// Fontionalité 3

let card = document.getElementsByClassName('card-body')[0];

card.addEventListener('click', function () {
	document.getElementsByClassName('card-text')[0].style.color = 'red';
})

// Fontionalité 4

let secondCard = document.getElementsByClassName('card-body')[1];

secondCard.addEventListener('click', function () {
	document.getElementsByClassName('card-text')[1].style.color;
	if (secondCard.style.color !== 'green'){
		secondCard.style.color = 'green' ;
	}
	else {
		secondCard.style.color = ''
	}
})

// Fontionalité 5

function disableLink() {
	if (document.querySelector('link').disabled == false) {
		document.querySelector('link').disabled = true;
	}
	else {
		document.querySelector('link').disabled = false;
	}
};

document.querySelector('header').addEventListener("dblclick", disableLink);
