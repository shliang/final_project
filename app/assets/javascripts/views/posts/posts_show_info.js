Blogger.Views.PostsShowInfo = Backbone.CompositeView.extend({
	template: JST["posts/show_post_info"],
	className: "row",
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		
		this.comments = this.model.comments();
		this.likedUsers = this.model.likedUsers();
		this.author = this.model.user();
		
		this.listenTo(this.comments, "add", this.addComment);
		this.listenTo(this.comments, "remove", this.removeComment);
	},
	
	renderPost: function () {
		var postShowView = new Blogger.Views.PostsShow ({
			model: this.model,
			user: this.author
		})
		
		this.addSubview("div.post-show", postShowView);
	},
	
	addComment: function (comment) {
		var commentsShowView = new Blogger.Views.ImageCommentShow ({
			model: comment,
			post: this.model
		});
		
		this.addSubview("div.comments-show", commentsShowView);
	},
	
	renderComments: function () {
		this.comments.each(this.addComment.bind(this));
	},
	
	renderForm: function () {
		var commentsNewView = new Blogger.Views.CommentsNew ({
			post: this.model
		});
		
		this.addSubview("comment-new", commentsNewView);
	},
	
	removeComment: function (model) {
		var id = "#comment-" + model.id;
		$(id).parent().remove();
	},
	
	renderForm: function () {
		var commentNewView = new Blogger.Views.CommentsNew ({
			post: this.model
		});
		
		this.addSubview("div.comment-new", commentNewView);
	},
	
	render: function () {
		var renderedContent = this.template ({
			likedUsers: this.likedUsers,
			post: this.model
		});
		
		this.$el.html(renderedContent)
		this.renderPost();
		this.renderForm();
		this.renderComments();
		
		return this;
	}
	
})