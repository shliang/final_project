Backbone.UsersCollection = Backbone.Collection.extend({
	model: Blogger.Models.User,
	
	getOrFetch: function (id) {
		var user = this.get(id);
		if (!user) {
			user = new this.model({id: id});
			user.fetch({
				success: function(){
					this.add(user)
				}.bind(this)
			});
		} 
		return user;
	}
})

Blogger.Collections.Users = Backbone.UsersCollection.extend({
	url: "/api/users"
});

Blogger.Collections.Followees = Backbone.UsersCollection.extend({
	url: "/api/users/followees"
});

Blogger.Collections.Followers = Backbone.UsersCollection.extend({
	url: "api/users/followers"
})

Blogger.Collections.users = new Blogger.Collections.Users();

Blogger.Collections.recommendedUsers = new Blogger.Collections.Users();

Blogger.Collections.followers = new Blogger.Collections.Followers();

Blogger.Collections.followees = new Blogger.Collections.Followees();