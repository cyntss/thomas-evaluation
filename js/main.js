var figures = $('.figure');

function init(){
	countFiguresUp();
}

function countFiguresUp(){
	figures.each(function(){
		var figure = $(this);
		var figureTargetValue = $(this).data('binding');

		$({countNum: 0}).animate({countNum: figureTargetValue}, {
			duration: 500,
			easing:'linear',
			step: function() {
				figure.text(Math.floor(this.countNum));
			},
			complete: function() {
				// do highlight figures to @Orange for ~200ms
			}
		});
	});
}

init();