$(function() {
	$(window).on("resize", function(){
		if (window.innerWidth > 600) {
			$(".hidden-nav").css("display", "none");
		}
	});

    $(".hidden-apply").click(function() {
    	$(".hidden-nav").slideToggle();
    });
});