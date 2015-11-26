var header_anim = (function() {
		var doc_ele = document.documentElement,
		header = document.querySelector( '.navbar-default' ),
		Scroll = false,
		change_header = 30;
		function first() {
		window.addEventListener( 'scroll', function( event ) {
			if( !Scroll ) {
				Scroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= change_header) {
			header1.add( header, 'navbar-shrink' );
		}
		else {
			header1.remove( header, 'navbar-shrink' );
		}
		Scroll = false;
	}

	function scrollY() {
		return window.pageYOffset || doc_ele.scrollTop;
	}

	first();

})();