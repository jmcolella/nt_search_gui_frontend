var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var SubmitDocumentListButton = require( '../../components/SubmitDocumentListButton' );

describe ( 'SubmitDocumentListButton component', function() {

  var button;

  beforeEach( function() {
    button = shallow( <SubmitDocumentListButton /> );
  });

  it ( 'renders to the DOM', function() {
    expect( button ).to.exist;
  });

  it ( 'renders 1 button node', function() {
    expect( button.find( 'button' ) ).to.have.length( 1 );
  });

});
