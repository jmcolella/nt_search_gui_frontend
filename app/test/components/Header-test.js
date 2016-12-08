var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var Header = require( '../../components/Header' );

describe ( 'Header component', function() {

  var header;

  beforeEach( function() {
    header = shallow( <Header title={ "Test" } /> );
  });

  it ( 'renders to the DOM', function() {
    expect( header ).to.exist;
  });

  it ( 'renders a `h1` node with text props.title', function() {
    expect( header.find( 'h1' ).text() ).to.equal( header.unrendered.props.title );
  });

});
