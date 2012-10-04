$(function() {
	
	$("#left_image").click(function() {
		
		$("#right_image").css("visibility","visible").hide();
		$("#right_image").fadeIn(1000);
		$("#left_image").fadeOut(1000);
		$("#menu").removeClass("right_text").hide();
		$("#menu").addClass("left_text").fadeIn(1000);
		$("#logo").removeClass("right_logo");
		$("#logo").addClass("left_logo");
		
	})
	
	$("#right_image").click(function() {
		$("body").delay(1000).addClass("night");
		$("#left_image").fadeIn(1000);
		$("#right_image").fadeOut(1000);
		$("#menu").removeClass("left_text");
		$("#menu").addClass("right_text");
		$("#logo").removeClass("left_logo");
		$("#logo").addClass("right_logo");	})
	
})
