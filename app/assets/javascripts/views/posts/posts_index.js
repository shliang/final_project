Blogger.Views.PostsIndex = Backbone.CompositeView.extend({
	className: "row",
	template: JST["posts/index"],
	
	initialize: function (options) {
		this.followeesCollection = options.followeesCollection;
		
		this.listenTo(
			this.followeesCollection, 
			"sync", 
			this.render
		);
		
		this.listenTo(
			this.followeesCollection,
			"add",
			this.addFollowees
		);
		
		this.listenTo(
			this.followeesCollection,
			"remove",
			this.removeFollowees
		);
		
		this.listenTo(
			this.collection,
			"add",
			this.addPost
		);
		
		this.listenTo(
			this.collection,
			"remove",
			this.removePost
		);

		this.listenTo(
			Blogger.Collections.recommendedUsers,
			"sync",
			this.renderRecUsers
		);

		// this.listenTo(
		// 	Blogger.Collections.recommendedUsers,
		// 	"remove",
		// 	this.test1
		// );
	},
	
	addPost: function (post) {
		var postShowView = new Blogger.Views.PostsShow ({
			model: post,
			users: this.followeesCollection
		});
		
		this.addSubview("div#posts-show", postShowView);
	},
	
	removePost: function (post) {
		var id = "#post-" + post.id;
		$(id).remove();
	},
	
	renderPosts: function () {
		this.collection.each(this.addPost.bind(this));
	},
	
	renderForm : function () {
		var postForm = new Blogger.Views.PostsNew();
		
		this.addSubview("div#new-post", postForm);
	},
	
	addFollowees: function (model) {
		var view = this,
		   posts = new Blogger.Collections.UserPosts(
				 [], { user: model }
			 );
		posts.fetch({
			success: function() {
				view.collection.add(posts.models);
			}
		})
	},
	
	removeFollowees: function (model) {
		var posts = this.collection.where({
			owner_id: model.id
		});
		this.collection.remove(posts)
	},
	
	renderRecUsers: function () {
		var view = this;
		Blogger.Collections.recommendedUsers.each( function (user) {
			var following = 
				Blogger.Collections.userFollows.track(user);
			
			var followsShowView = new Blogger.Views.FollowsShow({
				model: user,
				follow: !!following,
				following: following
			})
			
			view.addSubview('ul#user-follows', followsShowView);
		})
	},
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		this.renderPosts();
		this.renderForm();
		this.renderRecUsers();
		return this;
	}
})
