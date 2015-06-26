//marquee.js

	var assocWrap = document.getElementById('assoc_slide_wrap');
	var pos = -210;
	var moveMarquee = setInterval ("marquee()", 4000);

	function marquee() {
		if (pos >= -3390){
			position = pos + 'px';

			assocWrap.style.left = position;

			pos = pos - 210;
		} else {
			pos = 0;
		};
		console.log('pos:' + pos);
	};

