Blogger.Routers.Router = Backbone.Router.extend({
	
	routes: {
		'': "dashboard",
		'posts' : 'postsIndex', // that hover over effect page
		'posts/:id': 'postsShow', // shows a single post, this allows for commenting
		"users" : "usersIndex", // shows pictures of all users, when clicked, takes to posts/user/:id
		'users/:id': 'usersShow' // shows posts that belongs to user with :id
	},
	
	dashboard: function () {
		// Blogger.Collections.recommendedUsers.fetch();
		Blogger.Collections.followees.fetch({silent: true, parse: true});
		// Blogger.Collections.posts.reset([],{silent: true}); //can remove this line if
		
		var view = new Blogger.Views.PostsIndex({
			followeesCollection: Blogger.Collections.followees,
			collection: Blogger.Collections.posts
		});
		
		this._swapView(view)
	},
	
	postsShow: function (id) {
		var post = new Blogger.Collections.UserPosts()
		
    var view  = new Blogger.Views.PostsShow({
      model: post
    });
		
		this._swapView(view)
	},
	
	usersShow: function (id) {
		var posts, user;
		if (user = Blogger.Collections.followees.get(id)) {
			posts = Blogger.Collections.posts.where({owner_id: id});
			posts = new Blogger.Collections.UserPosts(posts, {user: id})
		} else {
			posts = new Blogger.Collections.UserPosts([], {user: id});
			user = new Blogger.Models.User({id: id});
		}
		user.fetchPost(posts);
		
		var userShowView = new Blogger.Views.UsersShow({
			collection: posts,
			model: user
		});
		
		this._swapView(userShowView)
	},
	
	usersIndex: function () {
		Blogger.Collections.users.fetch();
		Blogger.Collections.userFollows.fetch();
		
		var view = new Blogger.Views.UsersIndex({
			collection: Blogger.Collections.users,
			userFollows: Blogger.Collections.userFollows
		});
		
		this._swapView(view)
	},
	
	_swapView: function (view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		$('.content').html(view.render().$el)
	}
})