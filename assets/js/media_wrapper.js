function MediaWrapper(controls) {
	this.$el = $('.media a');

	this.onClick = function(e) {
		controls && controls.next();
	}	
	
	this.$el.on('click', _.bind(this.onClick, this));
}