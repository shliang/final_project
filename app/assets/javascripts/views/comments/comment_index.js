Blogger.Views.CommentsIndex = Backbone.View.extend({
	tabName: "ul",
	template: JST["comments/index"],
	
	
	render: function() {
		var renderedContent = this.template({
		  comments : this.collection
		})
		this.$el.html(renderedContent);
		
		return this;
	}
	
})