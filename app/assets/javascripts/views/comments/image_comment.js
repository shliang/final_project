Blogger.Views.ImageCommentShow = Backbone.CompositeView.extend({
	className: "row",
	template: JST["comments/image_comment"],
	
	initialize: function (options) {
		this.post = options.post;
	},
	
	renderComment: function () {
		var commentShowView = new Blogger.Views.CommentsShow({
			model : this.model,
			post: this.post
		});
		
		this.addSubview("div.only-comment", commentShowView);
	},
	
	render: function () {
		var renderedContent = this.template({
			comment : this.model
		});
		
		this.$el.html(renderedContent);
		this.renderComment();
		
		return this;
	}
	
})