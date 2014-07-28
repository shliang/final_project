Blogger.Views.BlogsIndex = Backbone.CompositeView.extend({
	template: JST["blogs/index"],
	
	initialize: function () {
		this.listenTo(
			this.collection,
			"sync",
			this.render)
	},
	
	events: {
		"click button#create-blog" : "newBlog"
	},
	
	render: function () {
		var renderedContent = this.template({
			blogs: this.collection
		})
		
		this.$el.html(renderedContent);
		this.userFollow();
		
		return this;
	},
	
	
	userFollow: function () {
		Blogger.Collections.recommendedusers.fetch();
		var userFollowView = new Blogger.Views.RecommendedIndex({
			collection: Blogger.Collections.recommendedusers
		});
		
		this.addSubview('div.user-follows', userFollowView)
	},
	
	newBlog: function (event) {
		event.preventDefault()
		var newView = new Blogger.Views.BlogsNew()
		this.addSubview("div.new-blog",newView)
	}
	
	
})