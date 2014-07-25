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
		// var params = $(event.currentTarget).serializeJSON()[:blog];
		var content = $("#post_content").val();
		var title = $("#post_title").val();
		var params = {title: title, content: content};
		var newBlog = new Blogger.Models.Blog(params);
		newBlog.save({},
			{success: function () { 
				Blogger.Collections.blogs.add(newBlog)
				Backbone.history.navigate("", {trigger: true})
			}}
		)
	}
	
})