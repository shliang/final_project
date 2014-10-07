Blogger.Models.User = Backbone.Model.extend({
	urlRoot: "api/users",
	userFollows: function () {
		return Blogger.Collections.userFollows
	},
	
	posts: function () {
		return Blogger.Collections.posts
	},
// making posts not really an association anymore, but a collection of
// posts from selected users.
	
	parse: function(payload) {
		if (payload.posts) {
			this.posts().set(payload.posts, {remove: false});
			delete payload.posts;
		} 
		if (payload.user_follows) {
			this.userFollows().set(payload.user_follows);
			delete payload.user_follows;
		}
		return payload
	}
})