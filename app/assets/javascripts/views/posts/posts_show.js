Blogger.Views.PostsShow = Backbone.CompositeView.extend({
	className: "panel post-box",
	template: function () {
		if (this._edit) {
			return JST["posts/edit"]
		} else {
			return JST["posts/show_post"]
		}
	},
	
	events: {
		"click button.destroy": "destroyPost",
		"click a.edit" : "editPost",
		"click button.save" : "submitUpdate",
		"click button.cancel" : "cancelEdit"
	},

	initialize: function (options) {
		this._edit = false;
		this.user = options.user;
	},
	
	editPost: function (event) {
		event.preventDefault();
		this._edit = true;
		this.render();
	},
	
	submitUpdate: function (event) {
		event.preventDefault();
		var view = this;
		var params = this.$("form").serializeJSON()["post"];
		this.model.save(params, {
			wait: true,
			success: function () {
				view._edit = false;
				view.render();
			}
		})
	},
	
	cancelEdit: function () {
		this._edit = false;
		this.render();
	},
	

	destroyPost: function () {
		this.model.destroy({
			success: function (model) {
				Blogger.Collections.posts.remove([model]);
			}
		});
		
	},
	
	renderLikeButton: function () {
		
	},
	
	render: function () {
		var renderedContent = this.template()({
			post: this.model,
			user: this.user
		})
		
		this.$el.html(renderedContent);
		this.delegateEvents();
		
		return this
	}
})