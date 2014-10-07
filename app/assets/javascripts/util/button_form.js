Backbone.ButtonForm = Backbone.View.extend({
	events: {
		"click button" : "showForm",
		"click .cancel" : "hideForm",
		"keydown textarea" : "createOnEnter",
		"submit form" : "create"
	},
	
	showForm : function () {
		this._showForm = true;
		this.render();
	},
	
	hideForm: function () {
		this._showForm = false;
		this.render();
	},
	
	createOnEnter : function (event) {
    if(event.keyCode == 13) {
      this.create(event);
    }
	}
})