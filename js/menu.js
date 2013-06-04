function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    	vars[key] = value;
    	});
    return vars;
}

function init() {
	// close all items
	$('#series ul, #type ul').hide();
	$('#type').hide();
}

$(document).ready(function() {
	
	init();
	
	// handle state between pages ////////////
	//////////////////////////////////////////

	// get var passed in url and cache DOM elements
	if (getUrlVars()['sort']) {
		var urlVar = {
			sort: getUrlVars()['sort'],
			series: getUrlVars()['series']
		}
		// highlite current link state between pages if land from menu
		var url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
		$('[href$="' + url + '"]').addClass('active');
		console.log(url);
	} else {
		var urlVar = {
			sort: target.sort,
			series: target.series
		}
		// highlite current link state of page if directly landed
		var url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
		$('[href$="' + url + '?sort=' + urlVar.sort + '&series=' + urlVar.series + '"]').addClass('active');
	}
	
	// create cached elements as object
	var el = {
		series: $('ul#series'),
		type: $('ul#type'),
		bySeries: $('#by_series'),
		byType: $('#by_type')
	}
	
	// open to correct series and highlite
	$('#' + urlVar.series).show().prev().addClass('active');
	
	// open to correct section and highlight
	if (urlVar.sort === 'type') {
		el.series.hide();
		el.type.show();
		el.bySeries.removeClass('active');
		el.byType.addClass('active');
	} else {
		el.type.hide();
		el.series.show();
		el.byType.removeClass('active');
		el.bySeries.addClass('active');
	}
	
	// handle clicking around the menu ////////////
	///////////////////////////////////////////////
 
	// open by-type menu when 'By Type' clicked
	el.byType.on('click', function() {
		el.series.slideUp('normal');
		el.bySeries.removeClass('active');
		$(this).addClass('active');
	});
	
	// open by-series menu when 'By Series' clicked
	el.bySeries.on('click', function() {
		el.type.slideUp('normal');
		el.byType.removeClass('active');
		$(this).addClass('active');
	});
	
	// open menu as each item is clicked
	$('a').on('click', function() {
		if ($(this).hasClass('product')) {
			$('a.product').removeClass('active');
			$(this).addClass('active');
		}

		var getElement = $(this).next();
		
		if((getElement.is('ul')) && (getElement.is(':visible'))) {
			return false;
		}
		if((getElement.is('ul')) && (!getElement.is(':visible'))) {
			$('#series ul:visible, #type ul:visible').slideUp('normal');
			getElement.slideDown('normal');
			$('a.series, a.type').removeClass('active');
			$(this).addClass('active');
			return false;
		}
	});
	
	// force browser to reload on back button ////////////
	//////////////////////////////////////////////////////
	
	window.onunload = function() { };
	
});