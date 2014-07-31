Blogger.Views.UsersIndex = Backbone.CompositeView.extend({
	template: JST["users/userIndex"],
	
	events: {
		"mouseover ul.user_all" : "list_user"
	},
	
	initialize: function (options) {
		this.listenTo(
			this.collection,
			"sync",
			this.render)
			
		this.listenTo(
			Blogger.Collections.userFollows,
			"sync",
			this.render)

	},
	
	list_user: function(event) {
		if (event.target.id !== "button_text" || event.target.id !== "") {
			debugger
			// var mousedUser = Blogger.Collections.users.findWhere({id: Number(event.target.id)})
			var mousedUser = new Blogger.Models.User({id: Number(event.target.id)})
			mousedUser.fetch()
			this.$("div.current_moused_user").empty()
			var currentUserView = new Blogger.Views.ShowUser({
				model: mousedUser
			});
			this.addSubview("div.current_moused_user", currentUserView)	
		}
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
					follow: following !== undefined,
				})
	
			view.addSubview("ul.user_all", followButtonView)}
		})
	}
})