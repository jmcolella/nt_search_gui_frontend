var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var AppHeader = require( '../../components/AppHeader' );
var Header = require( '../../components/Header' );

describe ( 'App Header component', function() {

  let header;

  beforeEach( function() {
    header = shallow( <AppHeader /> );
  });

  it ( 'renders to the DOM', function() {
    expect( header ).to.exist;
  });

  it ( 'renders a div with class `app-header`', function() {
    expect( header.find( 'div.app-header' ) ).to.have.length( 1 );
  });

  it ( 'renders child component Header', function() {
    expect( header.find( Header ) ).to.have.length( 1 );
  });

});
