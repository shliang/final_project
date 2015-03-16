[Zenpost](http://www.zenpost.info/)
============

I built this web application using Ruby on Rails (version 4) as the back-end MVC and Backbone.js as the front-end MVC. This is an attempt to clone some of the features found on Tumblr. Features you can find on this website includes writing posts (also supports uploading photos in your posts) and following other users. 

Some of the implementations in building this app include: 
* Deeply nested JSON objects with JBuilder to limit AJAX requests to the server.
* Overrides Backbone's Model#parse method to create Rails-like associations on the client.
* Custom CompositeView class with overridden #remove method to delete nested subviews recursively

###TODO
Fix search post funtionality
Allow users to embed videos
