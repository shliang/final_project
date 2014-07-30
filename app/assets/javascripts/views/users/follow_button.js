Blogger.Views.FollowButton = Backbone.View.extend({
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
		var newFollow = this.following;
		newFollow.set({follower_id: current_user.id, followee_id: followeeID})
		newFollow.save({}, {
			success: function () {
				Blogger.Collections.userFollows.add(newFollow)
		    view.follow = true;
				view.render()
			}
		})
	}
	
})