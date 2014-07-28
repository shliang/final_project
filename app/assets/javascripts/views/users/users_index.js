Blogger.Views.UsersIndex = Backbone.CompositeView.extend({
	template: JST["users/userIndex"],
	
	initialize: function () {
		this.listenTo(
			this.collection,
			"sync",
			this.render)
	},
	
	events: {
		"click button.new-follow": "follow"
	},
	
	render: function () {
		var renderedContent = this.template();
		
		this.$el.html(renderedContent);
		this.renderUsers()
		
		return this;
	},
	
	follow: function (event) {
		event.preventDefault()
		
	},
	
	renderUsers: function() {
		var view = this;
		_(this.collection.models).each(function (user) {
			var following = Blogger.Collections.userFollows.findWhere({ followee_id: user.id });
			
			var followButtonView = new Blogger.Views.FollowButton({
				model: user,
				following: following,
				follow: following !== undefined
			})
			
			view.addSubview("ul.user", followButtonView);
		});
	}
	
})