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
			"remove",
			this.renderRecUsers
		)
	},
	
	events: {
		"click button#update-picture" : "updatePicture",
		"change input#filepicker-1" : "reRenderPicture"
	},
	
	updatePicture: function (event) {
		event.preventDefault();
		
		var user = this.followeesCollection.get(current_user_id),
				image_url = this.$("input#filepicker-1").val(),
				view = this;
		
		if (image_url == "") {
			this.$("div.alert-danger").remove();
			var $div = $('<div class="alert alert-danger"></div');
			this.$("div.picture-update").append($div.html("please choose a picture"));
		} else {
			$("div.modal-backdrop").remove();
			$("body.modal-open").attr("class", "modal-close")
			user.save({image_url: image_url}, {
				success: function () {
					current_user_imgURL = image_url;
					view.render();
				}
			})
		}
	},
	
	reRenderPicture: function (event) {
		event.preventDefault();
		this.$("div.alert-danger").remove();
		var image_url = this.$("input[type=filepicker]").val();
		this.$("img#profile-pic").attr("src", image_url);
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
		this.$("ul#user-follows").empty();
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
	
	renderFollowers: function () {
		var followersView = new Blogger.Views.UsersIndex ({
			collection: Blogger.Collections.followers
		});
		
		this.addSubview("div.followers-modal", followersView);
	},
	
	render: function () {
		var renderedContent = this.template({
			user: this.followeesCollection.get(current_user_id)
		});
		this.$el.html(renderedContent);
		filepicker.constructWidget(this.$("input[type=filepicker]")[0]);
		this.renderPosts();
		this.renderForm();
		this.renderRecUsers();
		this.renderFollowers();
		return this;
	}
})
