// Improved
$(document).on('ready', function() {
	$('.figure').each(function () {
		var $figure = $(this);
		var figureValue = $(this).text()
		$figure.prop('countNum',0).animate({countNum: figureValue}, {
			duration: 500,
			easing: 'linear',
			step: function(now) {
				$figure.text(Math.floor(now));
			}
		});
	});
})
