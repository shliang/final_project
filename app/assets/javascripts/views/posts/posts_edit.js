Blogger.Views.EditPost = Backbone.View.extend({
	template: JST["posts/edit"],
	
	events: {
		"submit form.submitting": "editPost"
	},
	
	editPost: function (event) {
		event.preventDefault();
		params = $(event.currentTarget).serializeJSON()["post"]
		this.model.set(params)
		this.model.save()
	},
	
	render: function () {
		var renderedContent = this.template({
			post: this.model
		})
		
		this.$el.html(renderedContent);
		
		return this;
	}
})
	