Blogger.Views.BlogsIndex = Backbone.View.extend({
	template: JST["blogs/index"],
	
	render: function () {
		var renderedContent = this.template({
			blogs: this.collection
		})
		
		this.$el.html(renderedContent);
		
		return this;
	}
})