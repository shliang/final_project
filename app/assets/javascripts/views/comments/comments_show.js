Blogger.Views.CommentsShow = Backbone.CompositeView.extend({
	className: "panel comment-box",
	template: function () {
		if (this._edit) {
			return JST["comments/edit"];
		} else {
			return JST["comments/show"];
		}
	},
	
	events: {
		"click button.destroy": "destroyComment",
		"click a.edit" : "editPost",
		"click button.save" : "submitUpdate",
		"click button.cancel" : "cancelEdit"
	},

	initialize: function (options) {
		this._edit = false;
		this.post = options.post;
	},
	
	editPost: function (event) {
		event.preventDefault();
		this._edit = true;
		this.render();
	},
	
	submitUpdate: function (event) {
		event.preventDefault();
		var view = this;
		var params = this.$("form").serializeJSON()["comment"];
		this.model.save(params, {
			wait: true,
			success: function () {
				view._edit = false;
				view.render();
			}
		})
	},
	
	cancelEdit: function (event) {
		event.preventDefault();
		this._edit = false;
		this.render();
	},
	

	destroyComment: function (event) {
		event.preventDefault();
		var view = this;
		this.model.destroy({
			success: function (model) {
				view.post.comments().remove([model]);
			}
		});
		
	},
	
	render: function () {
		var renderedContent = this.template()({
			comment: this.model
		});
		this.$el.html(renderedContent);
		this.delegateEvents();
		
		return this;
	}
})