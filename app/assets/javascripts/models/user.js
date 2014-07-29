Blogger.Models.User = Backbone.Model.extend({
	urlRoot: "api/users",
	
	posts: function () {
		this._posts = this._posts ||
			new Blogger.Collections.Posts();
		return this._posts
	},
	
	parse: function(payload) {
		if (payload.posts) {
			this.posts().set(payload.posts, {parse: true});
			delete payload.posts;
		}
		return payload
	}
})