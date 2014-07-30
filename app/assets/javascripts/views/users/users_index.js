Blogger.Views.UsersIndex = Backbone.CompositeView.extend({
	template: JST["users/userIndex"],
	
	initialize: function () {
		this.listenTo(
			this.collection,
			"sync",
			this.render)
			
		this.listenTo(
			Blogger.Collections.userFollows,
			"sync",
			this.render)

	},
	
	render: function () {
		var renderedContent = this.template();
		
		this.$el.html(renderedContent);
		this.renderUsers()
		
		return this;
	},
	
	// follow: function (event) {
	// 	event.preventDefault()
	//
	// },
	
	renderUsers: function() {
		var view = this;
		view.$("ul.user").empty()
		_(view.collection.models).each(function (user) {
			if (user.id !== current_user.id) {
				var following = Blogger.Collections.userFollows.findWhere({ follower_id: current_user.id, followee_id: user.id });
				var followButtonView = new Blogger.Views.FollowButton({
					model: user,
					following: following,
					follow: following !== undefined
				})
	
			view.addSubview("ul.user", followButtonView)}
		})
		
	}
})