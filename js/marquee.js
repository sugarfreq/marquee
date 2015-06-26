//marquee.js

	// Here's another way to declare multiple vars:
	var assocWrap = document.getElementById('assoc_slide_wrap'),
			pos = -210,
			moveMarquee = setInterval ("marquee()", 4000);

	function marquee() {
		if (pos >= -3390){

			/**
			*   Be sure to use a var before any variables
			*     to avoid polluting the global namespace
			**/
			var position = pos + 'px';

			assocWrap.style.left = position;

			pos = pos - 210;
		} else {
			pos = 0;
		};
		console.log('pos:' + pos);
	};

