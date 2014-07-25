window.Blogger = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		new Blogger.Routers.Router();
		Backbone.history.start();
  }
};
