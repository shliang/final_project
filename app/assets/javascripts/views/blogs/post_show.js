Blogger.Views.ShowPost = Backbone.View.extend({
	template: JST["blogs/show"],
	
	events: {
		"click button.destroy": "destroyBlog",
		"click button.edit" : "editBlog"
	},
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
	},
	
	destroyBlog: function (event) {
		event.preventDefault();
		this.model.destroy();
		Backbone.history.navigate("", {trigger: true})
	},
	
	render: function () {
		var renderedContent = this.template({
			blog: this.model
		})
		
		this.$el.html(renderedContent);
		
		return this
	},
	
	editBlog: function () {
		var editView = new Blogger.Views.BlogsEdit ({
			model: this.model
		})
		this.$(".post-show-place").html(editView.render().$el)
	}
	
})