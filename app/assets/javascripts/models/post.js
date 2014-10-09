Blogger.Models.Post = Backbone.Model.extend({
	urlRoot: 'api/posts',
	
	comments: function () {
	  this._comments = this._comments ||
			new Blogger.Collections.Comments(
				[], { post: this }
			)
		return this_comments
	},
	
	likes: function () {
		this._likes = this._likes ||
			new Blogger.Collections.Likes(
				[], { post: this }
			)
		return this._likes
	},
	
	user: function () {
		this._user = this._user ||
			new Blogger.Models.User({
				id: this.get("owner_id")
			});
		return this._user;
	},
	
	parse: function (response) {
		if (response.comments) {
			this.comments().set(response.comments)
		} 
		
		if (response.likes) {
			this.likes().set(response.likes)
		}
		
		return response
	}
})