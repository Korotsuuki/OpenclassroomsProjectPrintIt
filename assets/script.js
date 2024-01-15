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


const fg = document.querySelectorAll(".arrow_left");
const fd = document.querySelectorAll(".arrow_right");
const image = document.querySelector(".banner-img");
const titre = document.querySelectorAll(".titre");
const dot = document.querySelectorAll(".dot");
const dot_selected = document.querySelectorAll(".dot_selected");
let nSlide = 1;

fg.forEach(element =>
	{
		element.addEventListener("click", () =>
		{
		console.log("gauche cliqué");
		nSlide=nSlide-1;


		if (nSlide<=0)
		{
		nSlide=4;
		const newSlideSrc = `./assets/images/slideshow/slide${nSlide}.png`;
		image.src = newSlideSrc;
		const imageActuel = slides[nSlide-1].tagLine;

		for (const elem of titre)
		{

		elem.innerHTML = imageActuel;
		}
		}
		else if (nSlide<=1)
		{
		nSlide=1;
		const newSlideSrc = `./assets/images/slideshow/slide${nSlide}.jpg`;
		image.src = newSlideSrc;
		const imageActuel = slides[nSlide-1].tagLine;
		for (const elem of titre){
		elem.innerHTML = imageActuel;
		}
		}


		else
		{
		const newSlideSrc = `./assets/images/slideshow/slide${nSlide}.jpg`;
		image.src = newSlideSrc;
		const imageActuel = slides[nSlide-1].tagLine;
		for (const elem of titre){
		elem.innerHTML = imageActuel;
		}
		}
		});
		console.log(nSlide);
	})


fd.forEach(element =>
	{
		element.addEventListener("click", () =>
		{
		console.log("droite cliqué");
		nSlide=nSlide+1;
	
	
		if (nSlide>=5)
		{
		nSlide=1;
		const newSlideSrc = `./assets/images/slideshow/slide${nSlide}.jpg`;
		image.src = newSlideSrc;
		const imageActuel = slides[nSlide-1].tagLine;

		for (const elem of titre)
		{
	
		elem.innerHTML = imageActuel;
		}
		}
		else if (nSlide===4)
		{
		const newSlideSrc = `./assets/images/slideshow/slide${nSlide}.png`;
		image.src = newSlideSrc;
		const imageActuel = slides[nSlide-1].tagLine;
		for (const elem of titre){
		elem.innerHTML = imageActuel;
		}
		}
	
		else if (nSlide<=1)
		{
		nSlide=1;
		const newSlideSrc = `./assets/images/slideshow/slide${nSlide}.jpg`;
		image.src = newSlideSrc;
		const imageActuel = slides[nSlide-1].tagLine;
		for (const elem of titre){
		elem.innerHTML = imageActuel;
		}
		}


		else
		{
		const newSlideSrc = `./assets/images/slideshow/slide${nSlide}.jpg`;
		image.src = newSlideSrc;
		const imageActuel = slides[nSlide-1].tagLine;
		for (const elem of titre){
		elem.innerHTML = imageActuel;
		}
		}
		});
	})


	fg.forEach(element =>
	{
		element.addEventListener("click", () =>
		{
			if(nSlide===4)
			{
				const newSelectedDot = `dot${nSlide}`;
				const oldSelectesDot = `dot1`;
				document.getElementById(newSelectedDot).classList.remove("dot");
				document.getElementById(newSelectedDot).classList.add("dot_selected");

				document.getElementById(oldSelectesDot).classList.remove("dot_selected");
				document.getElementById(oldSelectesDot).classList.add("dot");
			}

			else
			{
				const newSelectedDot = `dot${nSlide}`;
				const oldSelectesDot = `dot${nSlide+1}`;
				document.getElementById(newSelectedDot).classList.remove("dot");
				document.getElementById(newSelectedDot).classList.add("dot_selected");

				document.getElementById(oldSelectesDot).classList.remove("dot_selected");
				document.getElementById(oldSelectesDot).classList.add("dot");
			}
		});
	});


	fd.forEach(element =>
		{
			element.addEventListener("click", () =>
			{
				if(nSlide===1)
				{
					const newSelectedDot = `dot${nSlide}`;
					const oldSelectesDot = `dot4`;
					document.getElementById(newSelectedDot).classList.remove("dot");
					document.getElementById(newSelectedDot).classList.add("dot_selected");
	
					document.getElementById(oldSelectesDot).classList.remove("dot_selected");
					document.getElementById(oldSelectesDot).classList.add("dot");
				}
	
				else
				{
					const newSelectedDot = `dot${nSlide}`;
					const oldSelectesDot = `dot${nSlide-1}`;
					document.getElementById(newSelectedDot).classList.remove("dot");
					document.getElementById(newSelectedDot).classList.add("dot_selected");
	
					document.getElementById(oldSelectesDot).classList.remove("dot_selected");
					document.getElementById(oldSelectesDot).classList.add("dot");
				}
			});
		});