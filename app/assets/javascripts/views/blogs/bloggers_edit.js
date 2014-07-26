Blogger.Views.BlogsEdit = Backbone.View.extend({
	template: JST["blogs/edit"],
	
	events: {
		"submit form.submitting": "editBlog"
	},
	
	editBlog: function (event) {
		event.preventDefault();
		params = $(event.currentTarget).serializeJSON()["blog"]
		this.model.set(params)
		this.model.save()
	},
	
	render: function () {
		var renderedContent = this.template({
			blog: this.model
		})
		
		this.$el.html(renderedContent);
		
		return this;
	}
})
	