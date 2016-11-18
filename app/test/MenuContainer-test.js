var React = require('react');
var mount = require( 'enzyme' ).mount;
var expect = require( 'chai' ).expect;
var MainMenu = require('../../app/containers/MainMenu');
var Menu = require('../../app/components/Menu');

describe( 'Main Menu Container', function () {
  var renderer, menuContainer;

  beforeEach( function () {
    menuContainer = mount( <MainMenu /> );
  });

  it( 'renders without problems', function () { 
    expect( menuContainer ).to.exist;
  });

  it( 'renders the Menu component on initial load', function () { 
    expect( menuContainer.find( 'a' ).text() ).to.equal( 'New Mediation' );
  });

  it( 'it changes partition state from false to true when New Mediation link is clicked', function () {
    expect( menuContainer.state().partition ).to.equal( false );
    var newMediationLink = menuContainer.find( "a" );
    newMediationLink.simulate( 'click' );
    expect( menuContainer.state().partition ).to.equal( true );
  });

});
