videoSelection = $('.video')

// which video to begin watching
function startVideo() {
	var scrollValue = $(window).scrollTop()
	while (videoSelection.offset().top < scrollValue) {
		videoSelection = videoSelection.next()
	}
	videoSelection.get(0).play()
}
startVideo()

var lastScrollTop = 0
$(window).scroll(function() {
	var scrollValue = $(window).scrollTop()
	if (scrollValue > lastScrollTop) {
		if (videoSelection.offset().top + 100 < scrollValue) {
			videoSelection.get(0).pause()
			videoSelection = videoSelection.next()
			videoSelection.get(0).play()
		}
	} else {
		if (videoSelection.offset().top - 650 > scrollValue) {
			videoSelection.get(0).pause()
			videoSelection = videoSelection.prev()
			videoSelection.get(0).play()
		}
	}
	lastScrollTop = scrollValue;
});
