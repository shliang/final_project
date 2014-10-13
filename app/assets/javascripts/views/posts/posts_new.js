Blogger.Views.PostsNew = Backbone.View.extend({
	formTemplate: JST["posts/new"],
	buttonTemplate: JST["posts/new_button"],
	pictureTemplate: JST["posts/new_pic"],
	
	className: "row",
	id: "buttons-new",
	
	initialize: function () {
		this._show = false;
	},
	
	events: {
		"click #create-post" : "showForm",
		"click #create-picture": "showPic",
		"click a" : "hideForm",
		"change input#filepicker-pic-2" : "reRenderPicture",
		"click #submit" : "submit"
	},
	
	showForm : function () {
		this._show = "form";
		this.$("div.new-collection-buttons").animate({
			opacity: 0.25,
			height: [ "toggle", "swing" ]
		}, 200, "linear", this.render.bind(this));
		// this.render();
	},
	
	showPic: function () {
		this._show = "picture";
		this.$("div.new-collection-buttons").animate({
			opacity: 0.25,
			height: [ "toggle", "swing" ]
		}, 200, "linear", this.render.bind(this));
	},
	
	reRenderPicture: function (event) {
		event.preventDefault();
		this.$("div.alert-danger").remove();
		var image = this.$("input#filepicker-pic-2").val();
		this.$("img#maybe-pic").attr("src", image);
	},
	
	hideForm: function () {
		this._show = false;
		this.$("form").animate({
			opacity: 0.25,
			height: [ "toggle", "swing" ]
		}, 100, "linear", this.render.bind(this));
		// this.render();
	},
	
	submit: function (event) {
		event.preventDefault();
		var view = this;
		var params = this.$("form").serializeJSON()["post"];
		var newPost = new Blogger.Models.Post(params);
		newPost.save({}, { 
			success: function () { 
				Blogger.Collections.posts.add(newPost);
				view._show = false;
				view.render();
			},
			error: function (model, response) {
				this.$("div.alert-danger").remove();
				var $div = $('<div class="alert alert-danger" role="alert"></div>')
				_(response.responseJSON).each(function(msg) {
					var $span = $("<span></span>");
					$div.append($span.html(msg + "     "))
				})
				view.$el.append($div)
			}
		})
	},
	
	render: function () {
		var template;
		if (this._show == "form") {
			template = this.formTemplate;
		} else if (this._show == "picture"){
			template = this.pictureTemplate;
		} else {
			template = this.buttonTemplate;
		}
		
		var renderedContent = template();
		this.$el.html(renderedContent);
		if (this._show == "picture") {
			filepicker.constructWidget(this.$("input[type=filepicker]")[0]);
		}
		this.delegateEvents();
		return this;
	}
})