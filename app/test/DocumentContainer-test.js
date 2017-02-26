var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var DocumentContainer = require( '../containers/DocumentContainer' );
var Document = require( '../components/Document' );

describe ( 'Document Container', function () {

  let documentContainer;

  beforeEach( function () {
    documentContainer = shallow( <DocumentContainer /> );
  });

  it ( 'renders a child Document component', function () {
    expect( documentContainer.find( Document ) ).to.have.length( 1 );
  });

});
