var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
var AppContainer = require('../containers/AppContainer'); //my root-test lives in components/__tests__/, so this is how I require in my components.

describe('App Container', function () {
  var renderer, app;

  beforeEach( function () {
    app = TestUtils.renderIntoDocument( <AppContainer/> );
  });

  it('renders without problems', function () {
      expect( app ).toExist();
    });

  it( 'renders App Header', function () { 
    expect( TestUtils.findRenderedDOMComponentWithClass( app, "app-header" ) ).toExist();
  });

});
