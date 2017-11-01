function CategoryViewWrapper() {
	this.items = [];
	$('.bs-docs-sidebar ul:first-child > li').each(_.bind(function(n, el) {
		var view = new CategoryView(el);
		view.menu = this;
		this.items.push(view);
	}, this));
}

function CategoryView(el) {
	this.$el = $(el);
	var submenuPattern = 'ul.nav';
	this.$submenu = this.$el.find(submenuPattern); // <ul>

	this.doClick = function(e) {
		//console.log('doClick');
		this.doAnimate(_.bind(this.selectFirstAnchor, this));
	}

    this.$el.on('click', _.bind(this.doClick, this));

    this.selectFirstAnchor = function() {
	    // menu already opened. imitate click on first submenu item
        if (this.$submenu.length && this.$el.hasClass('active')) {
        	this.$submenu.find('li:first').toggleClass('active');

            var firstAnchor = this.$submenu.find('a:first')[0];
            firstAnchor && firstAnchor.click();
        }
    }
    
    this.doAnimate = function(onFinish) {
        var that = null;
        
        // find previously clicked item
        _.each(this.menu.items, function(item){
            if (item.isActive() && item != this) {
                that = item;
            }
        }, this);

        var el1 = that && that.$submenu.length ? that.$submenu : null;
        var el2 = this.$submenu.length ? this.$submenu : null;
        if (!el1 && !el2){
            this.setActive(true);
            that && that.setActive(false);
            return;
        }
        var queue = [
            {
                el: el1,
            },
            {
                el: el2,
            },
        ];

        $.slideQueue(queue, {callback: function(arr){
            _.each(arr, function(that, index){
                that && that.toggleActive();
                that && that.$submenu.length && that.$submenu.css('display', '');
            });
            onFinish && onFinish();
        }}, [this, that]);
    }

    this.isActive = function() {
        return this.$el.hasClass('active');
    }

    this.toggleActive = function() {
        this.$el.toggleClass('active');
    }

    this.setActive = function(val) {
        if (val) {
            this.$el.addClass('active');
        } else {
            this.$el.removeClass('active');
        }
    }
}