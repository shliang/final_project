Blogger.Views.CommentsNew = Backbone.View.extend ({
	template: JST["comments/new"],
	
	events: {
		"submit" : "createComment",
		"focus textarea": "enlargeTextarea",
		"click button.cancel": "cancelCreate"
	},
	
	initialize: function (options) {
		this.post = options.post;
	},
	
	createComment: function (event) {
		event.preventDefault();
		var view = this;
		var params = this.$("form").serializeJSON()["comment"];
		var newComment = new Blogger.Models.Comment(params);
		
		newComment.save({post_id: this.post.id}, { 
			success: function () { 
				view.post.comments().add(newComment);
				view.render();
			}
		})
	},
	
	enlargeTextarea: function () {
		if (this.$("textarea").attr("rows") == 1) {
			this.$("button.cancel").toggleClass("hide");
			this.$("button.save").toggleClass("hide");
		}
		this.$("textarea").attr("rows", 4);
	},
	
	cancelCreate: function (event) {
		event.preventDefault();
		this.$("textarea").val("");
		this.$("textarea").attr("rows", 1);
		this.$("button.cancel").toggleClass("hide");
		this.$("button.save").toggleClass("hide");
	},
	
	render: function () {
		this.$el.html(this.template());
		this.$("button.cancel").toggleClass("hide");
		this.$("button.save").toggleClass("hide")	
		return this;
	}
})