Blogger.Views.RecommendedIndex = Backbone.CompositeView.extend({
	template: JST["users/rec_userindex"],
	
	initialize: function (options) {
		this.listenTo(
			this.collection,
			"sync",
			this.render)
	},
	
	render: function () {
		var renderedContent = this.template({
			users : this.collection,
			follow: false
		});
		
		this.$el.html(renderedContent);
		this.addRecommendedUsers()
		
		return this;
	},
	
	addRecommendedUsers: function () {
		var view = this;
		view.$("ul.user").empty()
		_(view.collection.models).each(function (user) {
			var followButtonView = new Blogger.Views.FollowButton({
				model: user,
				following: new Blogger.Models.UserFollow(),
				follow: false
			})
		
		view.addSubview("ul.user", followButtonView)})
	}
	
	// follow: function (event) {
	// 	event.preventDefault()
	// 	var followeeID = $(event.target).data("id")
	// 	var newFollow = new Blogger.Models.UserFollow({
	// 		followee_id: followeeID
	// 	});
	// 	newFollow.save( {}, {
	// 		success: function () {
	// 			Blogger.Collections.userFollows.add(newFollow)
	// 			Backbone.history.navigate("", { trigger: true })
	// 		}
	// 	})
	// }
})