// Write a RecommendedUsers collection
// url: "/api/users/recommended"
// model: User
// when you fetch this collection you'll get users you don't follow.

Blogger.Collections.RecommendedUsers = Backbone.Collection.extend({
	url: "/api/users/userfollows",
	model: Blogger.Models.User
})


Blogger.Collections.Users = Backbone.Collection.extend({
	url: "/api/users",
	model: Blogger.Models.User
})

Blogger.Collections.users = new Blogger.Collections.Users();

Blogger.Collections.recommendedUsers = new Blogger.Collections.RecommendedUsers()