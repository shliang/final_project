Blogger.Collections.Blogs = Backbone.Collection.extend({
	model: Blogger.Models.Blog,
	url: 'api/blogs',
	
	getOrFetch: function (id) {
		var blog = this.get(id);
		if (!blog) {
			blog = new this.model({id: id});
			blog.fetch({
				success: function(){
					this.add(blog)
				}.bind(this)
			});
		} 
		return blog;
	}
	
})

Blogger.Collections.blogs = new Blogger.Collections.Blogs()