Blogger.Views.BlogsIndex = Backbone.View.extend({
	template: JST["blogs/index"],
	
	initialize: function () {
		this.listenTo(
			this.collection,
			"sync",
			this.render)
	},
	
	render: function () {
		var renderedContent = this.template({
			blogs: this.collection
		})
		
		this.$el.html(renderedContent);
		
		return this;
	}
})