Blogger.Views.ImagePostShow = Backbone.CompositeView.extend({
	className: "container-fluid",
	template: JST["posts/image_post"],
	
	initialize: function (options) {
		this.author = options.author;
	},
	
	renderPost: function () {
		var postShowView = new Blogger.Views.PostsShow({
			model : this.model,
			user: this.author
		});
		
		this.addSubview("div.only-post", postShowView);
	},
	
	render: function () {
		var renderedContent = this.template({
			post : this.model,
			user: this.author
		});
		
		this.$el.html(renderedContent);
		this.renderPost();
		
		return this;
	}
	
})