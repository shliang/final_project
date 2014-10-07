Blogger.Views.FollowsShow = Backbone.View.extend({
	template: JST["user_follows/show"],
	tagName: "li",
	className: "list-group-item",
	
	events: {
		"click button.unfollowing" : "be_unfollow",
		"click button.new-following" : "be_follow",
	},
	
	initialize: function (options) {
		this.follow = options.follow,
		this.following = options.following
	},
		
	render: function () {
		var renderedContent = this.template({
			user: this.model,
			follow: this.follow,
			following: this.following
		})
		this.$el.html(renderedContent);
		this.delegateEvents();
		return this;	
	},
	
	be_unfollow: function (event) {
		var view = this;
		event.preventDefault();
		this.following.destroy({
			success: function () {
				view.follow = false;
				view.render()
				// Blogger.Collections.recommendedUsers.add(view.model);
				Blogger.Collections.followees.remove(view.model);
			}
		})
	},
	
	be_follow: function (event) {
		var view = this;
		event.preventDefault()
		
		var followeeID = $(event.target).data("id"),
			 	newFollow = new Blogger.Models.UserFollow();
				
		newFollow.set({follower_id: current_user_id, followee_id: followeeID});
		newFollow.save({}, {
			success: function () {
				// Blogger.Collections.recommendedUsers.remove(view.model);
				
				Blogger.Collections.userFollows.add(newFollow);
				Blogger.Collections.followees.add(view.model);
				view.following = newFollow;
		    view.follow = true;
				view.render()
			}
		})
	}
	
})