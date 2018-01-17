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
	  var i;
	  var l = document.getElementsByClassName("mySlides");
	  if (e > l.length) {slideIndex = 1}
	  if (e < 1) {slideIndex = l.length}
	  for (i = 0; i < l.length; i++) {
	      l[i].style.display = "none";
	  }
	  l[slideIndex-1].style.display = "block";
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
