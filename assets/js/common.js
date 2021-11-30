(function() {
	var categoryViewWrapper = new CategoryViewWrapper();
	var contentControls = new ContentControls();
	var mediaWrapper = new MediaWrapper(contentControls);

	// home page routine
	$('body').on('openFirstCategory', function(){categoryViewWrapper.openLastCategory()});
})();

