Blogger.Views.BlogsNew = Backbone.View.extend({
	template: JST["blogs"],
	
	events: {
		"submit form": "submit"
	},
	
	render: function () {
		var renderedContent = this.template()
		
		this.$el.html(renderedContent)
		
		render this
	}
	
	submit: function () {
		
	}
	
})