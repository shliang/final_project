Blogger.Views.PostsShowInfo = Backbone.CompositeView.extend({
	template: JST["posts/show_post_info"],
	className: "row",
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		
		this.comments = this.model.comments();
		this.likes = this.model.likes();
	},
	
	renderPost: function () {
		var user;
		if (this.model.user().get("image_url")) {
			user = this.model.user();
		} else {
			user = new Blogger.Models.User();
		}
		
		var postShowView = new Blogger.Views.PostsShow ({
			post: this.model,
			user: this.user
		})
		
		this.addSubview("div.post-show", postShowView);
	},
	
	addComment: function (comment) {
		var commentShowView = new Blogger.Views.CommentsShow ({
			model: comment // fetch for user img as well?
		});
		
		this.addSubview("div.comments-show", commentShowView);
	},
	
	renderComments: function () {
		this.comments.each (this.addComment.bind(this));
	},
	
	addLike: function (like) {
		var likeShowView = new Blogger.Views.LikesShow ({
			model: like // fetch for user img as well?
		});
		
		this.addSubview("div.likes-show", likeShowView);
	},
	
	renderLikes: function () {
		this.likes.each (this.addLike.bind(this));
	},
	
	
	render: function () {
		var renderedContent = this.template ({
			
		});
	}
	
})