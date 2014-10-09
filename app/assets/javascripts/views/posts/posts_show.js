Blogger.Views.PostsShow = Backbone.View.extend({
	className: "container-fluid",
	template: function () {
		if (this._edit) {
			return JST["posts/edit"]
		} else {
			return JST["posts/show"]
		}
	},
	
	events: {
		"click button.destroy": "destroyPost",
		"click a.edit" : "editPost",
		"click button.submit" : "submitUpdate",
		"click button.cancel" : "cancelEdit"
	},

	initialize: function (options) {
		this._edit = false;
		this.followeesCollection = options.users
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
	
	render: function () {
		var user = 
			this.followeesCollection.findWhere({id: this.model.get("owner_id")}) ||
			new Blogger.Models.User();
			
		var renderedContent = this.template()({
			post: this.model,
			user: user
		})
		
		this.$el.html(renderedContent);
		this.delegateEvents();
		
		return this
	}
	
	// editPost: function () {
// 		var editView = new Blogger.Views.EditPost({
// 			model: this.model
// 		})
// 		this.$(".post-show-place").html(editView.render().$el)
// 	}
	
})