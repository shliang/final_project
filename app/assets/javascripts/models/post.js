Blogger.Models.Post = Backbone.Model.extend({
	urlRoot: 'api/posts',
	
	comments: function () {
	  this._comments ||
			new Blogger.Collections.Comments(
				[], { post: this }
			)
		return this_comments
	},
	
	likes: function () {
		this._likes ||
			new Blogger.Collections.Likes(
				[], { post: this }
			)
		return this._likes
	},
	
	parse: function (response) {
		if (response.comments) {
			this.comments().set(response.comments)
		} else if (response.likes) {
			this.likes().set(response.likes)
		}
		
		return response
	}
})