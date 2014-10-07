Blogger.Views.PostsShow = Backbone.View.extend({
	className: "container-fluid",
	template: JST["posts/show"],
	
	// events: {
// 		"click button.destroy": "destroyPost",
// 		"click button.edit" : "editPost"
// 	},
//
	initialize: function (options) {
// 		this.listenTo(this.model, "sync", this.render);
		this.followeesCollection = options.users
	},
//
// 	destroyPost: function (event) {
// 		event.preventDefault();
// 		this.model.destroy();
// 		Backbone.history.navigate("", {trigger: true})
// 	},
	
	render: function () {
		var img_url = this.followeesCollection.length == 0 ?
			"" :
			this.followeesCollection.findWhere({id: this.model.get("owner_id")}).get("image_url");
		var renderedContent = this.template({
			post: this.model,
			image_url: img_url
			// user_id: this.model.get("user") && this.model.get("user").id
		})
		
		this.$el.html(renderedContent);
		
		return this
	}
	
	// editPost: function () {
// 		var editView = new Blogger.Views.EditPost({
// 			model: this.model
// 		})
// 		this.$(".post-show-place").html(editView.render().$el)
// 	}
	
})