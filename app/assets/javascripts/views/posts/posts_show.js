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
		// "change input#filepicker-pic-3" : "reRenderPicture"
	},

	initialize: function (options) {
		this._filepickerID = "filepicker-pic-" + this.model.id;
		this._buttons = options.buttons; //whether to show buttons
		this._edit = false;
		this.user = options.user;
	},
	
	reRenderPicture: function (event) {
		event.preventDefault();
		var image = this.$("input#" + this._filepickerID).val();
		this.$("img#edit-pic").attr("src", image);
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
		if (this.model.get("image_url") && params["image_url"] == "") {
			params["image_url"] = this.model.get("image_url");
		}
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
	

	destroyPost: function (event) {
		event.preventDefault();
		this.model.destroy({
			success: function (model) {
				Blogger.Collections.posts.remove([model]);
			}
		});
		
	},
	
	renderLikeButton: function () {
		var likeShowView = new Blogger.Views.LikesShow ({
			post: this.model,
			collection: this.model.likes()
		});
		
		this.addSubview("div.like", likeShowView);
	},
	
	render: function () {
		var renderedContent = this.template()({
			post: this.model,
			user: this.user,
			showButton: this._buttons,
			filepickerID: this._filepickerID
		})
		
		this.$el.html(renderedContent);
		if (this._buttons) {
			this.renderLikeButton();	
		}
		this.delegateEvents();
		
		if (this._edit && this.model.get("image_url")) {
			filepicker.constructWidget(this.$("input#" + this._filepickerID)[0]);
			this.$("input#" + this._filepickerID).change(this.reRenderPicture.bind(this));
		}
		
		return this
	}
})