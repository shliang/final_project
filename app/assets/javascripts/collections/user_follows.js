Blogger.Collections.UserFollows = Backbone.Collection.extend({
	model: Blogger.Models.UserFollow,
	url: 'api/userfollows',
	
	getOrFetch: function (id) {
		var follow = this.get(id);
		if (!follow) {
			follow = new this.model({id: id});
			follow.fetch({
				success: function(){
					this.add(follow)
				}.bind(this)
			});
		} 
		return follow;
	}
})

Blogger.Collections.userFollows = new Blogger.Collections.UserFollows()