function ContentControls() {
	this.$el = $('#content-controls');

	this.next = function() {
		var el = this.$el.find('#next')[0]
		el && el.click();
	}

	this.prev = function() {
		var el = this.$el.find('#prev')[0]
		el && el.click();
	}

	this.onkeydown = function(e) {
        var left = 37;
        var right = 39;
        var up = 38;
        var down = 40;
        var space = 32;
        switch (e.which) {
            case up:
            case left:
                this.prev();
                return false;
            case down:
            case right:
                this.next();
                return false;
            // case space:
            //     this.play() && this.next();
            //     return false;
        }
        return true;
    }

    $('body').on('keydown', _.bind(this.onkeydown, this));
}