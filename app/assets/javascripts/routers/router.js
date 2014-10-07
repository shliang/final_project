Blogger.Routers.Router = Backbone.Router.extend({
	
	routes: {
		'': "dashboard",
		'users/:id': 'usersShow',
		'posts/:id': 'postsShow',
		'posts': 'postsIndex',
		"users" : "usersIndex"
	},
	
	dashboard: function () {
		Blogger.Collections.recommendedUsers.fetch();
		Blogger.Collections.followees.fetch({silent: true, parse: true});
		Blogger.Collections.posts.reset([],{silent: true});
		
		var view = new Blogger.Views.PostsIndex({
			followeesCollection: Blogger.Collections.followees,
			collection: Blogger.Collections.posts
		});
		
		this._swapView(view)
	},
	
	postsShow: function (id) {
		var post = Blogger.Collections.posts.getOrFetch(id)
		
    var view  = new Blogger.Views.PostsShow({
      model: post
    });
		
		this._swapView(view)
	},
	
	postsIndex: function () {
		
	},
	
	usersIndex: function () {
		Blogger.Collections.users.fetch()
		Blogger.Collections.userFollows.fetch()
		
		var view = new Blogger.Views.UsersIndex({
			collection: Blogger.Collections.users
		});
		
		this._swapView(view)
	},
	
	usersShow: function (id) {
		var user = new Blogger.Models.User({id: id})
		user.fetch();

		var view = new Blogger.Views.ShowUser({
			model: user
		})
		
		this._swapView(view)
	},
	
	_swapView: function (view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		$('.content').html(view.render().$el)
	}
	
	
})