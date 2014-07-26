Blogger.Views.RecommendedIndex = Backbone.View.extend({
	template: JST["users/userIndex"],
	
	initialize: function () {
		this.listenTo(
			this.collection,
			"sync",
			this.render)
	},
	
	render: function () {
		var renderedContent = this.template({
			users : this.collection
		});
		
		this.$el.html(renderedContent);
		
		return this;
	}
	
})