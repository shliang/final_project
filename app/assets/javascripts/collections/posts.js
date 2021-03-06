Blogger.Collections.Posts = Backbone.Collection.extend({
	model: Blogger.Models.Post,
	url: 'api/posts',
	
	getOrFetch: function (id) {
		var post = this.get(id);
		if (!post) {
			post = new this.model({id: id});
			post.fetch()
		} else {
			post.fetch();	
		}
		return post;
	},
	
	comparator: function (post) {
		var date = new Date(post.get("updated_at"))
		return date
	}
})

Blogger.Collections.posts = new Blogger.Collections.Posts();