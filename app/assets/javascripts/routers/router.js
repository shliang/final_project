Blogger.Routers.Router = Backbone.Router.extend({
	
	routes: {
		'': "blogsIndex",
		'blogs/new' : "blogsCreate",
		"blogs/:id" : "blogShow"
	},
	
	blogsIndex: function () {
		Blogger.Collections.blogs.fetch()
		
		var view = new Blogger.Views.BlogsIndex({
			collection: Blogger.Collections.blogs
		});
		
		this._swapView(view)
	},
	
	blogsCreate: function () {
		
	},
	
	blogsShow: function (id) {
		
	},
	
	_swapView: function (view) {
		this.currentView && this.currentView.remove();
		this.currentView = view;
		$('#main').html(view.render().$el)
	}
	
	
})