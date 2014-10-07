Blogger.Collections.UserFollows = Backbone.Collection.extend({
	model: Blogger.Models.UserFollow,
	url: 'api/userfollows',
	
	track: function (followee) {
		return this.findWhere({
			follower_id: current_user_id, 
			followee_id: followee.id
		})
	}
})

Blogger.Collections.userFollows = new Blogger.Collections.UserFollows()