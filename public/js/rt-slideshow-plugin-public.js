jQuery( document ).ready( function( $ ) {

	var sliderOptions = {
        pager: true,
        gallery: true,
        item: 1,
        thumbItem: 10,
        slideMargin: 0,
        speed: 500,
        auto: true,
        mode:'fade',
        keyPress:true,
        loop: true
	};

	$( '#lightSlider' ).lightSlider( sliderOptions );

});
