Blogger.Models.Post = Backbone.Model.extend({
	urlRoot: 'api/posts',
	
	comments: function () {
	  this._comments = this._comments ||
			new Blogger.Collections.Comments(
				[], { post: this }
			)
		return this._comments;
	},
	
	likedUsers: function () {
		this._likeUsers = this._likeUsers ||
			new Blogger.Collections.Users();
		return this._likeUsers
	},
	
	user: function () {
		this._user = this._user ||
			new Blogger.Models.User({
				id: this.get("owner_id")
			});
		return this._user;
	},
	
	likes: function () {
		this._likes = this._likes ||
			new Blogger.Collections.Likes ()
		return this._likes
	},
	
	parse: function (response) {
		if (response.comments) {
			this.comments().set(response.comments, { parse: true })
			delete response.comments;
		} 
		
		if (response.liked_users) {
			this.likedUsers().set(response.liked_users)
			delete response.liked_users;
		}
		
		if (response.likes) {
			this.likes().set(response.likes);
			delete response.likes;
		}
		
		if (response.user) {
			this.user().set(response.user);
			delete response.user
		}
		
		return response
	}
})