Blogger.Collections.Comments = Backbone.Collection.extend({
	model: Blogger.Models.Comment,
	
  initialize: function (models, options) {
    this.post = options.post;
  },
	
	url: function (options) {
		this.post.url() + "/comments"
	},
	
	comparator: function (comment) {
		var date = new Date(comment.get("updated_at"))
		return date
	}
})