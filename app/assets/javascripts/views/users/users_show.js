Blogger.Views.UsersShow = Backbone.CompositeView.extend({
	template: JST["users/show"],
	className: "user-content",
	initialize: function(options) {
		this.listenTo(this.model, "sync", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({
			user: this.model,
			posts: this.collection
		});
		
		this.$el.html(renderedContent);
		
		return this;
	},
})