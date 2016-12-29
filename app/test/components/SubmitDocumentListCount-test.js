var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var SubmitDocumentListCount = require( '../../components/SubmitDocumentListCount' );

describe ( 'SubmitDocumentListCount component', function() {

  var count;

  beforeEach( function() {
    count = shallow( <SubmitDocumentListCount documentList={ ['hello.txt', 'adsf.txt', 'hello1.txt'] } /> );
  });

  it ( 'renders to the DOM', function() {
    expect( count ).to.exist;
  });

  it ( 'renders 1 `li` node with text of documentList length', function() {
    expect( count.find( 'li' ).text() ).to.equal( 'Documents to Submit: ' + count.unrendered.props.documentList.length );
  });

});
