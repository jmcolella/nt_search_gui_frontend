//var require = require('webpack');
var context = require.context('./app/test', true, /-test\.js?$/);
context.keys().forEach(context);
