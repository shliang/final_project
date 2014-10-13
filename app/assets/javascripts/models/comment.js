Blogger.Models.Comment = Backbone.Model.extend({
	urlRoot: "api/comments",
	
	commmenter: function () {
		this._commmenter = this._commmenter ||
			new Blogger.Models.User();
		return this._commmenter
	},
	
	parse: function (response) {
		if (response.commenter) {
			this.commmenter().set(response.commenter);
			delete response.commenter;
		}
		
		return response;
	}
})