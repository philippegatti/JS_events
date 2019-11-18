// Fonctionnalité 1
var footer = document.getElementsByTagName("footer");
footer[0].addEventListener("click", function(){
	console.log(`Clique`);
});

// Fonctionnalité 1bis
var footer = document.getElementsByTagName("footer");
var n = 0;
footer[0].addEventListener("click", function(){
	n++;
	console.log(`Clique n°${n}`);
});

// Fonctionnalité 2

var burger = document.getElementsByClassName("navbar-toggler")[0];
var menu = document.getElementById("navbarHeader");
burger.addEventListener("click", function(){
	if (menu.classList.length == 2) {
		menu.classList.remove("collapse");

	}
	else {
		menu.classList.add("collapse");
	};

});


// Fonctionnalité 3

var edit1 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
var text1 = document.getElementsByClassName("card mb-4 box-shadow")[0];
console.log(text1.style);
edit1.addEventListener("click", function(){
	text1.style.color = "red";
});

// Fonctionnalité 4

var edit2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
var text2 = document.getElementsByClassName("card mb-4 box-shadow")[1];
text2.style.color = "rgb(33, 37, 41)"
edit2.addEventListener("click", function(){
	if (text2.style.color == "rgb(33, 37, 41)") {
		text2.style.color = "#008000";
	}
	else {
		text2.style.color ="rgb(33, 37, 41)";
	}
	
});

// Fonctionnalité 5

var bar = document.getElementsByTagName("Header")[0];
var cdn = document.getElementsByTagName("Link")[0];
bar.addEventListener("dblclick", function (){
	if (cdn.href == "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
		cdn.href = "";
	}
	else {
		cdn.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	}
});

// Fonctionnalité 6

var cards = document.getElementsByClassName("card mb-4 box-shadow");
for (let item of cards) {
	view = item.getElementsByClassName("btn btn-sm btn-success")[0];
	var text = item.childNodes[3].getElementsByTagName("p")[0].innerText;
	view.addEventListener("mouseover", function() {
		if (item.childNodes[3].getElementsByTagName("p")[0].innerText != "") {
			item.childNodes[3].getElementsByTagName("p")[0].innerText = "";
			item.childNodes[1].style.width = "20%";
			}
		else {
			item.childNodes[3].getElementsByTagName("p")[0].innerText = text;
			item.childNodes[1].style.width = "100%";
			}
	});
};


// Fonctionnalité 7

var right = document.getElementsByClassName("btn btn-secondary my-2")[0];
var row = document.getElementsByClassName("row")[1];
right.addEventListener("click", function() {
	row.insertBefore(row.getElementsByClassName("col-md-4")[5], row.getElementsByClassName("col-md-4")[0]);
});


// Fonctionnalité 8

var left = document.getElementsByClassName("btn btn-primary my-2")[0];
left.addEventListener("click", function() {
	left.removeAttribute("href");
	row.insertBefore(document.getElementsByClassName("col-md-4")[0], row.nextSiblings);
});


// Fonctionnalité 9

var logo = document.getElementsByClassName("navbar-brand d-flex align-items-center")[0];
logo.addEventListener("keypress", function() {
	if (event.key == "a") {
		document.getElementsByTagName("body")[0].setAttribute("class", "col-4");
	} 
	else if (event.key =="y") {
		document.getElementsByTagName("body")[0].setAttribute("class", "col-4 offset-md-4");
	} 
	else if (event.key =="p") {
		document.getElementsByTagName("body")[0].setAttribute("class", "col-4 offset-md-8");
	}
	else if (event.key =="b") {
		document.getElementsByTagName("body")[0].setAttribute("class", "");
	};
});

