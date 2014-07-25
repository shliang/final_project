Blogger.Views.BlogsNew = Backbone.View.extend({
	template: JST["blogs/new"],
	
	events: {
		"submit form": "submit"
	},
	
	render: function () {
		var renderedContent = this.template({
			blog: this.model
		})
		
		this.$el.html(renderedContent)
		
		return this
	},
	
	submit: function (event) {
		event.preventDefault();
		var params = $("#post_content").val();
		var newBlog = new Blogger.Models.Blog({content: params});
		newBlog.save({},
			{success: function () { 
				Blogger.Collections.blogs.add(newBlog)
				Backbone.history.navigate("", {trigger: true})
			}}
		)
	}
	
})