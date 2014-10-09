Blogger.Routers.Router = Backbone.Router.extend({
	
	routes: {
		'' : 'postsIndex', 
		'posts/:id': 'postsShow', // shows a single post, this allows for commenting
		"users" : "usersIndex", // shows pictures of all users, when clicked, takes to posts/user/:id, also has
														// hover effect
		'users/:id': 'usersShow', // shows posts that belongs to user with :id
		'setting' : 'settingShow'
	},
	
	postsIndex: function () {
		Blogger.Collections.followees.fetch({silent: true, parse: true});
		
		var view = new Blogger.Views.PostsIndex({
			followeesCollection: Blogger.Collections.followees,
			collection: Blogger.Collections.posts
		});
		
		this._swapView(view)
	},
	
	postsShow: function (id) {
		var post = Blogger.Collections.posts.getOrFetch(id);
		
    var view  = new Blogger.Views.PostsShowInfo({
      model: post
    });
		
		this._swapView(view)
	},
	
	usersIndex: function () {
		Blogger.Collections.users.fetch();
		
		var view = new Blogger.Views.UsersIndex({
			collection: Blogger.Collections.users,
			userFollows: Blogger.Collections.userFollows
		});
		this._swapView(view)
	},

	usersShow: function (id) {
		var user;
		if (user = Blogger.Collections.followees.get(id)) {
			user.userPosts().set(
				Blogger.Collections.posts.where({owner_id: id})
			);
		} else {
			user = new Blogger.Models.User({id: id});
		}
		user.fetch();
		
		var userShowView = new Blogger.Views.UsersShow({
			collection: user.userPosts(),
			model: user
		});
		
		this._swapView(userShowView)
	},
	
	settingShow: function () {
		
	},
	
	_swapView: function (view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		$('.content').html(view.render().$el)
	}
})