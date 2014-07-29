Blogger.Views.ShowUser = Backbone.CompositeView.extend({
	template: JST["users/show"],
	
	initialize: function(options) {
		this.listenTo(this.model, "sync", this.render);
	},
	
	render: function () {
		debugger
		var renderedContent = this.template({
			user: this.model
		});
		
		this.$el.html(renderedContent);
		
		return this;
	},
})