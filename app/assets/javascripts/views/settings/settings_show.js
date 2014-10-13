Blogger.Views.SettingsShow = Backbone.View.extend({
	template: JST["settings/show"],
	
	render: function () {
		var renderedContent = this.template({
			user: this.model
		});
		
		this.$el.html(renderedContent);
		
		return this;
	}
})