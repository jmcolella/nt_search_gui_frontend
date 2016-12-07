var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var Document = require( '../../components/Document' );
var AddButtonNew = require( '../../components/AddButtonNew' );

describe ( 'Document component', function() {

  let doc;

  beforeEach( function() {
    doc = shallow( <Document documentData={ 'hello.txt' } clickedDocumentNames={ [ 'hello.txt' ] } /> );
  });

  it ( 'renders to the DOM', function() {
    expect( doc ).to.exist;
  });

  it ( 'renders a `li` node with class `list-group-item`', function() {
    expect( doc.find( 'li.list-group-item' ) ).to.have.length( 1 );
  });

  it ( 'renders a `i` node with class `fa-file-o`', function() {
    expect( doc.find( 'i.fa-file-o' ) ).to.have.length( 1 );
  });

  it ( 'renders a `h4` node with text equal to documentData props', function() {
    expect( doc.find( 'h4' ).text() ).to.equal( doc.props().documentData );
  });

  it ( 'renders child component AddButtonNew', function() {
    expect( doc.find( AddButtonNew ) ).to.have.length( 1 );
  });

});
