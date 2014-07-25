Blogger.Routers.Router = Backbone.Router.extend({
	
	routes: {
		'': "blogsIndex",
		'blogs/new' : "blogsNew",
		"blogs/:id" : "blogsShow"
	},
	
	blogsIndex: function () {
		Blogger.Collections.blogs.fetch()
		
		var view = new Blogger.Views.BlogsIndex({
			collection: Blogger.Collections.blogs
		});
		
		this._swapView(view)
	},
	
	blogsNew: function () {
		var view = new Blogger.Views.BlogsNew()
		this._swapView(view)
	},
	
	blogsShow: function (id) {
		var blog = Blogger.Collections.blogs.getOrFetch(id)
    var view  = new Blogger.Views.BlogsShow({
      model: blog
    });
		
		this._swapView(view)
	},
	
	_swapView: function (view) {
		this.currentView && this.currentView.remove();
		this.currentView = view;
		$('#content').html(view.render().$el)
	}
	
	
})