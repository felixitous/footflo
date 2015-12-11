// javascript for dynamic sizing
function inTheMiddle(parent, child) {
	parent_height = $(parent).height();
	child_height = $(child).height();
	padding = (parent_height - child_height) / 2
	$(child).css("padding-top", padding)
	$(child).css("padding-bottom", padding)
}

$(window).load(function() {
	inTheMiddle('.navbar', '.navbar-title')
});