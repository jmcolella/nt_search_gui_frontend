var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var DocumentToSubmit = require( '../../components/DocumentToSubmit' );

describe ( 'DocumentToSubmit component', function() {

  var documentSubmit;

  beforeEach( function() {
    documentSubmit = shallow( <DocumentToSubmit data={ 'hello.txt' } /> );
  });

  it ( 'renders to the DOM', function() {
    expect( documentSubmit ).to.exist;
  });

  it ( 'renders an `li` node with class `individual-submit-document-container`', function() {
    expect( documentSubmit.find( 'li.individual-submit-document-container' ) ).to.have.length( 1 );
  });

  it ( 'renders a `h4` with text of props.data', function() {
    expect( documentSubmit.find( 'h4' ).text() ).to.equal( documentSubmit.unrendered.props.data );
  });

  it ( 'renders a `button` node with class `remove-button`', function() {
    expect( documentSubmit.find( 'button.remove-button' ) ).to.have.length( 1 );
  });

  it ( 'renders an `i` node with class `fa-times`', function() {
    expect( documentSubmit.find( 'i.fa-times' ) ).to.have.length( 1 );
  });

});
