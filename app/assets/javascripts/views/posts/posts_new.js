Blogger.Views.PostsNew = Backbone.View.extend({
	formTemplate: JST["posts/new"],
	buttonTemplate: JST["posts/new_button"],
	className: "row",
	id: "buttons-new",
	
	initialize: function () {
		this._showForm = false;
	},
	
	events: {
		"click #create-post" : "showForm",
		"click a" : "hideForm",
		"keydown textarea" : "createOnEnter",
		"click #submit" : "submit"
	},
	
	showForm : function () {
		this._showForm = true;
		this.$("div.new-collection-buttons").animate({
			opacity: 0.25,
			height: [ "toggle", "swing" ]
		}, 200, "linear", this.render.bind(this));
		// this.render();
	},
	
	hideForm: function () {
		this._showForm = false;
		this.$("form").animate({
			opacity: 0.25,
			height: [ "toggle", "swing" ]
		}, 100, "linear", this.render.bind(this));
		// this.render();
	},
	
	createOnEnter : function (event) {
    if(event.keyCode == 13) {
      this.submit(event);
    }
	},
	
	submit: function (event) {
		event.preventDefault();
		var view = this;
		var params = this.$("form").serializeJSON()["post"];
		var newPost = new Blogger.Models.Post(params);
		newPost.save({}, { 
			success: function () { 
				Blogger.Collections.posts.add(newPost);
				view._showForm = false;
				view.render();
			},
			error: function (model, response) {
				var $div = $('<div class="alert alert-danger" role="alert"></div>')
				_(response.responseJSON).each(function(msg) {
					var $span = $("<span></span>");
					$div.append($span.html(msg + "   "))
				})
				view.$el.append($div)
			}
		})
	},
	
	render: function () {
		var template;
		if (this._showForm) {
			template = this.formTemplate
		} else {
			template = this.buttonTemplate
		}
		
		var renderedContent = template();
		this.$el.html(renderedContent);
		this.delegateEvents();
		return this;
	}
})