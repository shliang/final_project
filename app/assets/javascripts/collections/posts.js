Blogger.Collections.Posts = Backbone.Collection.extend({
	model: Blogger.Models.Post,
	url: 'api/posts',
	
	getOrFetch: function (id) {
		var post = this.get(id);
		if (!post) {
			post = new this.model({id: id});
			post.fetch({
				success: function(){
					this.add(post)
				}.bind(this)
			});
		} 
		return post;
	}
	
})

Blogger.Collections.posts = new Blogger.Collections.Posts()