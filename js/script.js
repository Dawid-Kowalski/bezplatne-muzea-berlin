let carouselData = 
					[
						{	
							title: '1',
							image: 'images'
						},
						{	
							title: '2',
							image: 'images'
						},
						{	
							title: '3',
							image: 'images'
						},
						{	
							title: '4',
							image: 'images'
						},
						{	
							title: '5',
							image: 'images'
						}						
					];

let museumTemplate = document.getElementById('museum-template').innerHTML;
let carousel = document.getElementById('carousel');

Mustache.parse(museumTemplate);

function addDataToCarousel() {
	for(let i=0; i<carouselData.length; i++) {
		let generatedMuseum = Mustache.render(museumTemplate, carouselData[i]);
		carousel.insertAdjacentHTML('beforeend', generatedMuseum);
	}
}
