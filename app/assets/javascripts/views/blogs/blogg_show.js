Blogger.Views.BlogsShow = Backbone.View.extend({
	template: JST["blogs/show"],
	
	render: function () {
		var renderedContent = this.template({
			blog: this.model
		})
		
		this.$el.html(renderedContent);
		
		return this
		
	}
})