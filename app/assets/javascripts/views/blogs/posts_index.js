Blogger.Views.PostsIndex = Backbone.CompositeView.extend({
	template: JST["posts/index"],
	
	initialize: function () {
		this.listenTo(
			this.collection,
			"sync",
			this.render)
	},
	
	events: {
		"click button#create-post" : "newPost"
	},
	
	render: function () {
		var renderedContent = this.template({
			posts: this.collection
		})
		
		this.$el.html(renderedContent);
		this.userFollow();
		
		return this;
	},
	
	
	userFollow: function () {
		Blogger.Collections.recommendedUsers.fetch();
		var userFollowView = new Blogger.Views.RecommendedIndex({
			collection: Blogger.Collections.recommendedUsers
		});
		
		this.addSubview('div.user-follows', userFollowView)
	},
	
	newBlog: function (event) {
		event.preventDefault()
		var newView = new Blogger.Views.NewPost()
		this.addSubview("div.new-blog",newView)
	}
	
	
})