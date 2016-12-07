var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var AddButtonNew = require( '../../components/AddButtonNew' );

describe ( 'AddButton component', function() {

  let addButton;

  beforeEach( function() {
    addButton = shallow( <AddButtonNew /> );
  });

  it ( 'renders without problems', function() {
    expect( addButton ).to.exist;
  });

  it ( 'renders a div with class `icon-right-align`', function() {
    expect( addButton.find( 'div.icon-right-align' ) ).to.have.length( 1 );
  });

  it ( 'renders 1 button', function() {
    expect( addButton.find( 'button' ) ).to.have.length( 1 );
  });

  describe ( 'blank props', function() {
    it ( 'renders button with text `add` by default', function() {
      expect( addButton.find( 'button' ).text() ).to.equal( 'add' );
    });
  });

  describe ( 'documentName props matches in clickedDocumentNames props', function() {
    it ( 'renders button with text `added`', function() {
      addButton.setProps( { clickedDocumentNames: [ 'hello.txt' ], documentName: 'hello.txt' } );
      expect( addButton.find( 'button' ).text() ).to.equal( 'added' );
    });
  });

});
