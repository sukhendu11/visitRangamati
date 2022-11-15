$(document).ready( function() {

	var itemSelector = '.categories'; 

	var $container = $('#filter').isotope({
		itemSelector: itemSelector,
		masonry: {
		  columnWidth: itemSelector,       
		  isFitWidth: true
		}
	});

	//Ascending order
	var responsiveIsotope = [
		[480, 7],
		[720, 8]
	];

	var itemsPerPageDefault = 12;
	var itemsPerPage = defineItemsPerPage();
	var currentNumberPages = 1;
	var currentPage = 1;
	var currentFilter = '*';
	var filterAtribute = 'data-filter';
	var pageAtribute = 'data-page';
	var pagerClass = 'isotope-pager';

	function changeFilter(selector) {
		$container.isotope({
			filter: selector
		});
	}


	function goToPage(n) {
		currentPage = n;

		var selector = itemSelector;
			selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
			selector += '['+pageAtribute+'="'+currentPage+'"]';

		changeFilter(selector);
	}

	function defineItemsPerPage() {
		var pages = itemsPerPageDefault;

		for( var i = 0; i < responsiveIsotope.length; i++ ) {
			if( $(window).width() <= responsiveIsotope[i][0] ) {
				pages = responsiveIsotope[i][1];
				break;
			}

			

		}

		return pages;
	}
	
	function setPagination() {

		var SettingsPagesOnItems = function(){

			var itemsLength = $container.children(itemSelector).length;
			
			var pages = Math.ceil(itemsLength / itemsPerPage);
			var item = 1;
			var page = 1;
			var selector = itemSelector;
				selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
			
			$container.children(selector).each(function(){
				if( item > itemsPerPage ) {
					page++;
					item = 1;
				}
				$(this).attr(pageAtribute, page);
				item++;
			});

			currentNumberPages = page;

		}();

		var CreatePagers = function() {

			var $isotopePager = ( $('.'+pagerClass).length == 0 ) ? $('<div class="'+pagerClass+'"></div>') : $('.'+pagerClass);

			$isotopePager.html('');
			
			for( var i = 0; i < currentNumberPages; i++ ) {
				var $pager = $('<a href="javascript:void(0);" class="pager" '+pageAtribute+'="'+(i+1)+'"></a>');
					$pager.html(i+1);
					
					$pager.click(function(){
						var page = $(this).eq(0).attr(pageAtribute);
						goToPage(page);
					});

				$pager.appendTo($isotopePager);
			}

			$container.after($isotopePager);

		}();

	}

	setPagination();
	goToPage(1);

	//Adicionando Event de Click para as categorias
	$('.filter-button').click(function(){
		var filter = $(this).attr(filterAtribute);
		currentFilter = filter;

		setPagination();
		goToPage(1);


	});

	//Evento Responsivo
	$(window).resize(function(){
		itemsPerPage = defineItemsPerPage();
		setPagination();
	});
	

});



 $(document).ready( function() {   

    // filter items on button click
    $('.category').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({ filter: filterValue });
        $('.category button').removeClass('active');
        $(this).addClass('active');
    });
})
	

 $(document).ready( function() {   

// filter items on button click
    $('.isotope-pager').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-page');
        
        $('.isotope-pager a').removeClass('active');
        $(this).addClass('active');
    });
})	

$(document).ready(function() {
	$('.gallery').magnificPopup({
		type: 'image',
		delegate: 'a',
		mainClass: 'mfp-fade', 
		gallery: {
			enabled: true,
			duration: 300, // duration of the effect, in milliseconds
		},
		callbacks: {
			resize: changeImgSize,
			imageLoadComplete:changeImgSize,
			change:changeImgSize,
			buildControls: function() {
				// re-appends controls inside the main container
				this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
			  }
		}
	});
	function changeImgSize(){
		var img = this.content.find('img');
		img.css('height', 'auto');
		img.css('max-height', '100%');
		img.css('width', '50vw');
		img.css('max-width', '100%');
	}
	$(function() {

		$(".item div").slice(0,3).show(); // select the first ten
		$("#more").click(function(e) { // click event for load more
		  e.preventDefault();
		  $(".item:hidden").slice(0, 2).show(); // select next 10 hidden divs and show them
		  if ($(".item:hidden").length == 0) { // check if any hidden divs still exist
			alert("No more divs"); // alert if there are none left
		  }
		});
	});
});

$(document).ready(function(){
 
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
	
	 // Show button after 100px
	 var showAfter = 100;
	 if ( $(this).scrollTop() > showAfter ) { 
	  $('.back-to-top').fadeIn();
	 } else { 
	  $('.back-to-top').fadeOut();
	 }
	});
	
	//Click event to scroll to top
	$('.back-to-top').click(function(){
	 $('html, body').animate({scrollTop : 0},500);
	 return false;
	});
	
});

$(function() {
	$('#header').load("/html/header.html");
	$('#footer').load("/html/footer.html");
	$('#backToTop').load("/html/backToTop.html");
})
