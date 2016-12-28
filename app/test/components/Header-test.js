var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var Header = require( '../../components/Header' );

describe ( 'Header component', function() {

  let header;

  beforeEach( function() {
    header = shallow( <Header className={} title={ 'Test' } /> );
  });

  it ( 'renders to the DOM', function() {
    expect( header ).to.exist;
  });

  it ( 'renders 1 `h1` node', function() {
    expect( header.find( 'h1' ) ).to.have.length( 1 );
  });

  it ( 'renders `h1` node with text of props.title', function() {
    expect( header.find( 'h1' ).text() ).to.equal( header.unrendered.props.title );
  });

});
