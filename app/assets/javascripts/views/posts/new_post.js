Blogger.Views.NewPost = Backbone.View.extend({
	template: JST["posts/new"],
	
	events: {
		"submit form": "submit"
	},
	
	render: function () {
		var renderedContent = this.template({
			post: this.model
		})
		
		this.$el.html(renderedContent)
		
		return this
	},
	
	submit: function (event) {
		event.preventDefault();
		var params = $(event.currentTarget).serializeJSON()["post"];
		var newPost = new Blogger.Models.Post(params);
		newPost.save({}, { 
			success: function () { 
				Blogger.Collections.posts.add(newPost)
				// Backbone.history.navigate("", { trigger: true })
			}
		})
	}
	
})