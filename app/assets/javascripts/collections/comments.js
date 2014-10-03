Blogger.Collections.Comments = Backbone.Collection.extend({
	model: Blogger.Models.Comment,
	
  initialize: function (models, options) {
    this.comment = options.comment;
  },
	
	url: function (options) {
		this.post.url() + "/comments"
	},
	
	getOrFetch: function (id) {
		var comment = this.get(id);
		if (!comment) {
			comment = new this.model({id: id});
			comment.fetch({
				success: function(){
					this.add(comment)
				}.bind(this)
			});
		} 
		return comment;
	},
	
})