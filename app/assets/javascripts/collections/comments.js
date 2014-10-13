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
	// getOrFetch: function (id) {
	// 	var comment = this.get(id);
	// 	if (!comment) {
	// 		comment = new this.model({id: id});
	// 		comment.fetch({
	// 			success: function(){
	// 				this.add(comment)
	// 			}.bind(this)
	// 		});
	// 	} else {
	// 		comment.fetch();
	// 	}
	// 	return comment;
	// },
	
})