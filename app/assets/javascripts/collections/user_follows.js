Blogger.Collections.UserFollows = Backbone.Collection.extend({
	model: Blogger.Models.UserFollow,
	url: 'api/userfollows'
})