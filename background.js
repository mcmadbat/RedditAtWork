'use strict';

const url = 'https://www.reddit.com/r/all/';
const hiddenHTML = '<center><h2>NSFW Content Hidden by Reddit At Work :)</h2></center>';

// if on r/all
if ( document.URL === url ){
	// all the divs
	let divs = $('#siteTable').children().toArray();
	
	// filter out to only the nsfw content
	let nsfw = divs.filter ( div => {
			return ( $(div).hasClass ('thing') );
		})
		.filter ( div => {
			let n = $(div).children('.entry').children('.flat-list')
			let firstChild = $(n).children('li')[0];

			// nsfw-stamp marks the nsfw content
			return ($(firstChild).children(0).hasClass('nsfw-stamp'));
		});


	console.log (`hiding ${nsfw.length} links(s)`);

	// hide the nsfw divs 
	nsfw.forEach ( toHide => {
		$(toHide).html(hiddenHTML);
	});
}