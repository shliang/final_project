Blogger.Views.BlogsShow = Backbone.View.extend({
	template: JST["blogs/show"],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({
			blog: this.model
		})
		
		this.$el.html(renderedContent);
		
		return this
		
	}
})