'use strict';

let carouselData = 
					[
						{	
							title: 'Abguss-Sammlung Antiker Plastik',
							image: 'images/Abguss-Sammlungmin.jpg',
							coord: {lat: 52.455000, lng: 13.292135}
						},
						{	
							title: 'Architekturmuseum der TU',
							image: 'images/ArchitekturmuseumTUmin.jpg',
							coord: {lat: 52.513648, lng: 13.324098}
						},
						{	
							title: 'BStU-Bildungszentrum',
							image: 'images/BStU-Bildungszentrummin.jpg',
							coord: {lat: 52.507788, lng: 13.387907}
						},
						{	
							title: 'Deutscher Dom',
							image: 'images/DeutscherDommin.jpg',
							coord: {lat: 52.512750, lng: 13.392617}
						},
						{	
							title: 'Deutsch-Russisches Museum',
							image: 'images/Deutsch-RussischesMuseumin.jpg',
							coord: {lat: 52.486312, lng: 13.539744}
						}		
					];

let museumTemplate = document.getElementById('museum-template').innerHTML;
let carousel = document.getElementById('carousel');

Mustache.parse(museumTemplate);


(function(){

	for(let i=0; i<carouselData.length; i++) {
		let generatedMuseum = Mustache.render(museumTemplate, carouselData[i]);
		carousel.insertAdjacentHTML('beforeend', generatedMuseum);
	}

const flkty = new Flickity(carousel, {
  cellAlign: 'left',
  contain: true,
  pageDots: false
});

})();

function initMap() {

	let map = new google.maps.Map(document.getElementById('map'), {
		center: carouselData[0].coord,
		zoom: 10
	});

	for(let i=0; i<carouselData.length; i++) {
		let marker = new google.maps.Marker({
		    position: carouselData[i].coord,
		    map: map
		});
	}
}

