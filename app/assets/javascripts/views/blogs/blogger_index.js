Blogger.Views.BlogsIndex = Backbone.View.extend({
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
		
		return this;
	},
	
	newBlog: function (event) {
		event.preventDefault()
		var newView = new Blogger.Views.BlogsNew()
		this.$("div.new-blog").html(newView.render().$el)
	},
	
	
})