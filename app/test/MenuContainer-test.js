var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
var MainMenu = require('../../app/containers/MainMenu');
var Menu = require('../../app/components/Menu');

describe( 'Main Menu Container', function () {
  var renderer, menuContainer;

  beforeEach( function () {
    menuContainer = TestUtils.renderIntoDocument( <MainMenu /> );
  });

  it( 'renders without problems', function () { 
    expect( menuContainer ).toExist();
  });

  it( 'renders the Menu component on initial load', function () { 
    var initialListComponents = TestUtils.scryRenderedDOMComponentsWithTag( menuContainer, "a" );
    expect( initialListComponents[0].textContent ).toEqual( 'New Mediation' );
  });

  it( 'it changes partition state from false to true when New Mediation link is clicked', function () {
    expect( menuContainer.state.partition ).toEqual( false );
    var newMediationLink = TestUtils.findRenderedDOMComponentWithTag( menuContainer, "a" );
    TestUtils.Simulate.click( newMediationLink );
    //menuContainer = TestUtils.renderIntoDocument( <MainMenu /> );
    expect( menuContainer.state.partition ).toEqual( true );
  });

});
