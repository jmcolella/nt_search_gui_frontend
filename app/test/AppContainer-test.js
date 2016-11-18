var React = require('react');
var mount = require( 'enzyme' ).mount;
var expect = require( 'chai' ).expect;
var AppContainer = require('../containers/AppContainer'); //my root-test lives in components/__tests__/, so this is how I require in my components.

describe('App Container', function () {
  var renderer, app;

  beforeEach( function () {
    app = mount( <AppContainer/> );
  });

  it('renders without problems', function () {
      expect( app ).to.exist;
    });

  it( 'renders App Header', function () { 
    expect( app.find( '.app-header' ) ).to.have.length( 1 );
  });

});
