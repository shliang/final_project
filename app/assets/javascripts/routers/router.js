Blogger.Routers.Router = Backbone.Router.extend({
	
	routes: {
		'': "postsIndex",
		'posts/new' : "newPost",
		'users/:id': 'userShow',
		'posts/:id': 'postShow',
		'posts/:id/edit': 'editPost'
		// "recommendedusers" : "recommendedIndex"
	},
	
	postsIndex: function () {
		
		var view = new Blogger.Views.BlogsIndex({
			collection: Blogger.Collections.posts
		});
		
		this._swapView(view)
	},
	
	postsNew: function () {
		var view = new Blogger.Views.BlogsNew()
		this._swapView(view)
	},
	
	postShow: function (id) {
		var post = Blogger.Collections.posts.getOrFetch(id)
    var view  = new Blogger.Views.BlogsShow({
      model: post
    });
		
		this._swapView(view)
	},
	
	usersIndex: function () {
		Blogger.Collections.users.fetch()
		
		var view = new Blogger.Views.UsersIndex({
			collection: Blogger.Collections.users
		});
		
		this._swapView(view)
	},
	
	recommendedIndex: function () {
		Blogger.Collections.recommendedusers.fetch()
		
		var view = new Blogger.Views.RecommendedIndex({
			collection: Blogger.Collections.recommendedusers
		});
		
		this._swapView(view)
	},
	
	_swapView: function (view) {
		this.currentView && this.currentView.remove();
		this.currentView = view;
		$('#content').html(view.render().$el)
	}
	
	
})