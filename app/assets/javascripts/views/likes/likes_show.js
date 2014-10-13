Blogger.Views.LikesShow = Backbone.View.extend({
	template: JST["likes/show"],
		
	initialize: function (options) {
		this.post = options.post;
		this.model = this.collection.first();
	},
	
	events: {
		"click a#like" : "createLike",
		"click a#unlike" : "destroyLike"
	},
	
	createLike: function (event) {
		event.preventDefault();
		var view = this;
		var like = new Blogger.Models.Like ({
			post_id: this.post.id
		});
		
		like.save({}, {
			success: function (model) {
				Blogger.Collections.likes.add (model);
				view.model = model;
				view.render();
			}
		})
	},
	
	destroyLike: function (event) {
		event.preventDefault();
		this.model.destroy();
		this.model = undefined;
		this.render();
	},
	
	render: function () {
		var renderedContent = this.template ({
			like: this.model
		});
		
		this.$el.html(renderedContent);
		this.delegateEvents();
		
		return this;
	}
	
})