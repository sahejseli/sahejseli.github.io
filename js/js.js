function scrollFunction() {
	document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ? document.getElementById("myBtn").style.display = "block" : document.getElementById("myBtn").style.display = "none"
}

function topFunction() {
	document.body.scrollTop = 0, document.documentElement.scrollTop = 0
}

function openModal() {
	modal = document.getElementById("myModal"), modal.style.display = "block", document.getElementById("top").style.visibility = "hidden"
}

function plusSlides(e) {
	showSlides(slideIndex += e)
}

function currentSlide(e) {
	showSlides(slideIndex = e)
}

function showSlides(e) {
	var l, n = document.getElementsByClassName("mySlides"),
	for (e > n.length && (slideIndex = 1), 1 > e && (slideIndex = n.length), l = 0; l < n.length; l++) n[l].style.display = "none";
	for (l = 0; l < t.length; l++) t[l].className = t[l].className.replace(" active", "");
	n[slideIndex - 1].style.display = "block";
}

function number(e) {
	var l = null,
		n = null;
	modal = null, 1 == e && (modal = document.getElementById("myModal1"), l = document.getElementById("myImg1"), n = document.getElementById("img01")), 2 == e && (modal = document.getElementById("myModal2"), l = document.getElementById("myImg2"), n = document.getElementById("img02")), modal.style.display = "block", n.src = l.src, document.getElementById("top").style.visibility = "hidden"
}

function closeModal() {
	modal.style.display = "none", document.getElementById("top").style.visibility = "visible"
}
window.onscroll = function () {
	scrollFunction()
};
var modal, slideIndex = 1;
showSlides(slideIndex);
var span = document.getElementsByClassName("close")[0];
