Blogger.Views.ShowPost = Backbone.View.extend({
	template: JST["posts/show"],
	
	events: {
		"click button.destroy": "destroyPost",
		"click button.edit" : "editPost"
	},
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
	},
	
	destroyPost: function (event) {
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
	
	editPost: function () {
		var editView = new Blogger.Views.EditPost({
			model: this.model
		})
		this.$(".post-show-place").html(editView.render().$el)
	}
	
})