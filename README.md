# Node_website
My repository for my personal website using angular material design.  Note: website url is pending


To get working:

Installing dependencies:

Using NPM:
  
  npm install express angular-material angular-route


Using Bower:
  
bower install express angular-material angular-route

*If using bower you will need to include the following line in your "server.js" file:

  app.use(express.static(__dirname + '/bower_components'))

and remove the line:

  app.use(express.static(__dirname + '/node_modules'))
