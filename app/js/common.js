$(function() {


    $(".toggle-mnu").click(function () {
    	$(".top-mnu-sf-menu li.on").remove();
        $(this).toggleClass("on");
        $(".top-mnu-lf-menu li").addClass("on")
        $(".top-mnu-lf-menu li").clone().appendTo(".top-mnu-sf-menu");


        $(".top-mnu-sf-menu").slideToggle();
    });

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
