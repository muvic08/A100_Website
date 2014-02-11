$(function() {
	$(window).on("resize", function(){
		if (window.innerWidth > 600) {
			$(".hidden-nav").css("display", "none");
		}
	});

    $(".hidden-apply").click(function() {
    	$(".hidden-nav").slideToggle(300);
    });

    $(".nav a").click(function() {
    	if ($(this).hasClass("apply-btn") == false) {
    		$(".nav a").removeClass("active-link");
    		$(this).addClass("active-link");
    	}
    });
});