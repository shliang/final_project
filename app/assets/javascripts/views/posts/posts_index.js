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
	},
	
	addPost: function (post) {
		var user = 
			this.followeesCollection.findWhere({id: post.get("owner_id")}) ||
			new Blogger.Models.User();
			
		var postShowView = new Blogger.Views.ImagePostShow ({
			model: post,
			author: user
		});
		
		this.addSubview("div#posts-show", postShowView);
	},
	
	removePost: function (post) {
		var id = "#post-" + post.id;
		$(id).parent().remove();
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
		   new_followee = new Blogger.Models.User({ id: model.id });
		new_followee.fetch({
			success: function() {
				view.collection.add(new_followee.userPosts().models);
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
			
			var followsShowView = new Blogger.Views.FollowsShow({
				model: user,
				follow: false,
				following: ""
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
