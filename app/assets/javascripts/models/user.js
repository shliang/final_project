Blogger.Models.User = Backbone.Model.extend({
	urlRoot: "api/users",
	userFollows: function () {
		return Blogger.Collections.userFollows
	},
	
	posts: function () {
		return Blogger.Collections.posts
	},
	
	// top level posts, posts of people you follow and your own posts
	
	userPosts: function () {
		this._userPosts  || 
			(this._userPosts = new Blogger.Collections.Posts())
		return this._userPosts
	},
	
	// posts that belongs to a specific user

	
	parse: function(payload) {
		if (payload.posts) {
			this.posts().set(payload.posts, {remove: false, silent: true});
			delete payload.posts;
		} 
		
		if (payload.recom_users) {
			Blogger.Collections.recommendedUsers.set(payload.recom_users, {silent: true});
			delete payload.recom_users;
		}
		
		if (payload.followers) {
			Blogger.Collections.followers.set(payload.followers);
			delete payload.followers;
		}
		
		if (payload.user_follows) {  // take a look at this later
			this.userFollows().set(payload.user_follows, {silent: true});
			delete payload.user_follows;
		}
		
		if (payload.user_posts) {
			this.userPosts().set(payload.user_posts); //this will trigger both add and sync event on collection.
			delete payload.user_posts;
		}
		return payload
	}
})