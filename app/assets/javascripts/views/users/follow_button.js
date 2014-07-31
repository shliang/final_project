Blogger.Views.FollowButton = Backbone.View.extend({
	tagName: "ul",
	className: "nav nav-pills nav-stacked",
	template: JST["buttons/show"],
	
	events: {
		"click button.unfollowing" : "be_unfollow",
		"click button.new-following" : "be_follow"
	},
	
	initialize: function (options) {
		this.follow = options.follow
		this.following = options.following
	},
		
	render: function () {
		var renderedContent = this.template({
			user: this.model,
			follow: this.follow,
		})
		this.$el.html(renderedContent);
		return this;	
	},
	
	be_unfollow: function (event) {
		var view = this;
		event.preventDefault();
		this.following.destroy({
			success: function () {
				view.follow = false;
				view.render()
			}
		})
	},
	
	be_follow: function (event) {
		var view = this;
		event.preventDefault()
		var followeeID = $(event.target).data("id")
		// var newFollow = this.following;
		var newFollow = new Blogger.Models.UserFollow()
		newFollow.set({follower_id: current_user.id, followee_id: followeeID})
		newFollow.save({}, {
			success: function () {
				var followed_model = 
				  Blogger.Collections.recommendedUsers.where({id: newFollow.get("followee_id")});
				Blogger.Collections.recommendedUsers.remove(followed_model)
				Blogger.Collections.userFollows.add(newFollow)
				
		    view.follow = true;
				view.render()
			}
		})
	}
	
})