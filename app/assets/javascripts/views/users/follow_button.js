Blogger.Views.FollowButton = Backbone.View.extend({
	template: JST["buttons/show"],
	
	events: {
		"click button.unfollow" : "unfollow",
		"click button.new-follow" : "follow"
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
	
	unfollow: function (event) {
		event.preventDefault();
		this.following.destroy()
	},
	
	follow: function () {
		var view = this;
		event.preventDefault()
		var followeeID = $(event.target).data("id")
		var newFollow = new Blogger.Models.UserFollow({
			followee_id: followeeID
		});
		newFollow.save({
			success: function () {
				Blogger.Collections.userFollows.add(newFollow)
		    view.follow = true;
				view.render()
			}
		})
	}
	
})