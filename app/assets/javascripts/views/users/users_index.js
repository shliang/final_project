Blogger.Views.UsersIndex = Backbone.CompositeView.extend({
	template: JST["users/index"],
	className: "row",
	
	// events: {
// 		"mouseover ul.user_all li a" : "list_user"
// 	},
	
	initialize: function (options) {
		this.userFollowCollection = options.userFollows;
		this.listenTo(this.collection, "sync", this.render);
	},
	
	// list_user: function(event) {
// 		var mousedUser = Blogger.Collections.users.findWhere({id: Number(event.target.id)})
// 		// var mousedUser = new Blogger.Models.User({id: Number(event.target.id)})
//
// 		if (mousedUser.posts().length === 0) {
// 			mousedUser.fetch()
// 		}
// 		this.$("div.current_moused_user").empty()
// 		var currentUserView = new Blogger.Views.ShowUser({
// 			model: mousedUser
// 		});
// 		this.addSubview("div.current_moused_user", currentUserView)
// 	},
	
	
	render: function () {
		var renderedContent = this.template({
			users: this.collection
		});
		
		this.$el.html(renderedContent);
		this.addUserFollow();
		
		return this;
	},
	
	renderUserFollow: function (user) {
		$('span#user-index-' + user.id).empty();
		var following = Blogger.Collections.userFollows.track(user);
		
		var followsShowView = new Blogger.Views.FollowsShow({
			model: user,
			follow: !!following,
			following: following
		});
			
		this.addSubview('span#user-index-' + user.id, followsShowView);
	},
	
	addUserFollow: function () {
		this.collection.each (this.renderUserFollow.bind(this))
	}
	
	// renderUsers: function() {
// 		var view = this;
// 		view.$("ul.user").empty()
// 		_(view.collection.models).each(function (user) {
// 			if (user.id !== current_user_id) {
// 				var following = Blogger.Collections.userFollows.findWhere({ follower_id: current_user_id, followee_id: user.id });
// 				var followButtonView = new Blogger.Views.FollowButton({
// 					model: user,
// 					following: following,
// 					follow: following !== undefined,
// 				})
//
// 			view.addSubview("ul.user_all", followButtonView)}
// 		})
// 	}
})