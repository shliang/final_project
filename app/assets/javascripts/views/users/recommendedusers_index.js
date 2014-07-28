Blogger.Views.RecommendedIndex = Backbone.CompositeView.extend({
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
		var renderedContent = this.template({
			users : this.collection,
			follow: false
		});
		
		this.$el.html(renderedContent);
		
		return this;
	},
	
	follow: function (event) {
		event.preventDefault()
		var followeeID = $(event.target).data("id")
		var newFollow = new Blogger.Models.UserFollow({
			followee_id: followeeID
		});
		newFollow.save({
			success: function () {
				Blogger.Collections.userFollows.add(newFollow)
				
			}
		})
	}
})