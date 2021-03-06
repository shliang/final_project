// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.serializejson
//= require marked.min
//= require jquery_ujs
//= require underscore
//= require bootstrap
//= require backbone
//= require blogger
//= require_tree ./util
//= require_tree ../templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .

$(function () {
	$(".demo-button").on("click", function (event) {
		event.preventDefault();
		$.post( '/users', { user:{username: guestName, password: "123456"} }, function() {
			location.reload();
		});
	})
})