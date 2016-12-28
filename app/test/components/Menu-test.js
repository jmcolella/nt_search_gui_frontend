var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var Menu = require( '../../components/Menu' );
var Header = require( '../../components/Header' );

describe( 'Menu component', function() {

  var menu;

  beforeEach( function() {
    menu = shallow( <Menu mediationButton={ false } /> );
  });

  it ( 'renders to the DOM', function() {
    expect( menu ).to.exist;
  });

  it ( 'renders 1 div with id `menu-container`', function() {
    expect( menu.find( 'div#menu-container' ) ).to.have.length( 1 );
  });

  describe ( 'mediationButton false', function() {
    it ( 'renders an `li` node with text `No Current Mediation in Progress`', function() {
      expect( menu.find('li').nodes[1].props.children ).to.equal( 'No Current Mediation in Progress' );
    });
  });

});
