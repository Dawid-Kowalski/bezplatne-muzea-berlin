let carouselData = 
					[
						{	
							title: 'Abguss-Sammlung Antiker Plastik',
							image: 'images/Abguss-Sammlungmin.jpg'
						},
						{	
							title: 'Architekturmuseum der TU',
							image: 'images/ArchitekturmuseumTUmin.jpg'
						},
						{	
							title: 'BStU-Bildungszentrum',
							image: 'images/BStU-Bildungszentrummin.jpg'
						},
						{	
							title: 'Deutscher Dom',
							image: 'images/DeutscherDommin.jpg'
						},
						{	
							title: 'Deutsch-Russisches Museum',
							image: 'images/Deutsch-RussischesMuseumin.jpg'
						}						
					];

let museumTemplate = document.getElementById('museum-template').innerHTML;
let carousel = document.getElementById('carousel');

Mustache.parse(museumTemplate);

'use strict';
(function(){

	for(let i=0; i<carouselData.length; i++) {
		let generatedMuseum = Mustache.render(museumTemplate, carouselData[i]);
		carousel.insertAdjacentHTML('beforeend', generatedMuseum);
	}

})();

const flkty = new Flickity(carousel, {
  cellAlign: 'left',
  contain: true,
  pageDots: false
});

