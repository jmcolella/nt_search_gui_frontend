var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
var MenuMenu = require('../../app/containers/MainMenu');

describe( 'Menu Container', function () {
  var renderer, menu;

  beforeEach( function () {
    menu = TestUtils.renderIntoDocument( <MainMenu/> );
  });

  it( 'renders the main menu on initial load', function () { 
   
   
   
  });
});
