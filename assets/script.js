const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//changement image //
const image = document.querySelector(".banner-img")
let text = "assets/images/slideshow/"
function changeImage() {
	zoneImag =  slides[i].image
	image.setAttribute("src",text+zoneImag)
}
//changement text //
let changeText = document.querySelector(".changeText")
function change_text() {
	zoneText = slides[i].tagLine
	changeText.innerHTML=zoneText
}
//fonction de selection et de de sélection des rond image//
function dot_selected() {
	for (let i of dots ) {
		i.classList.remove("dot_selected")	
	}
	dots[i].classList.add("dot_selected")
	
}

let i = 0

const clicDroit = document.getElementById("droit")
changeImage(slides[i])
clicDroit.addEventListener("click", () => {
	slides[i]
	i++
	if(i>=slides.length){
		i=0
	}
	changeImage(slides[i])
	change_text(slides[i])
	dot_selected()
})

const clicGauche = document.getElementById("gauche")
changeImage(slides[i])
clicGauche.addEventListener("click", () => {
	slides[i]
	i--
	if(i<0){
		i=slides.length-1
	}
	changeImage(slides[i])
	change_text(slides[i])
	dot_selected()
})

//creation des rond pour implantation html//
const circle = `<span class="dot" ></span>`
let icon = document.querySelector("#dots")
for (let i = 0; i < slides.length; i++) {
	icon.innerHTML+=circle
	}
let dots=document.querySelectorAll(".dot")
dots[0].classList.add("dot_selected")
