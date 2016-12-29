var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var Folder = require( '../../components/Folder' );

describe ( 'Folder component', function() {

  var folder;

  beforeEach( function() {
    folder = shallow( <Folder folder={ 'hello' } /> );
  });

  it ( 'renders to the DOM', function() {
    expect( folder ).to.exist;
  });

  it ( 'renders a `li` node with class `individual-folder-container`', function() {
    expect( folder.find( 'li.individual-folder-container' ) ).to.have.length( 1 );
  });

  it ( 'renders an `i` node with class `fa-folder`', function() {
    expect( folder.find( 'i.fa-folder' ) ).to.have.length( 1 );
  });

  it ( 'renders a `h4` node with text of props.folder', function() {
    expect( folder.find( 'h4' ).text() ).to.equal( folder.unrendered.props.folder );
  });

});
