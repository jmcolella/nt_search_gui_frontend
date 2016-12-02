var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var RenderDocumentsSubmittedListContainer = require( '../containers/RenderDocumentsSubmittedListContainer' );
var DocumentsSubmittedListContainer = require( '../containers/DocumentsSubmittedListContainer' );

describe ( 'RenderDocumentsSubmitedList Container', function () {

  var renderDocumentsSubmitted;

  beforeEach( function () {
    renderDocumentsSubmitted = shallow( <RenderDocumentsSubmittedListContainer /> );
  });

  it ( 'renders without problems', function () {
    expect( renderDocumentsSubmitted ).to.exist;
  });

  it ( 'renders a top div with class `.row`', function () {
    expect( renderDocumentsSubmitted.find( '.row' ) ).to.have.length( 1 );
  });

  it ( 'renders child component `DocumentSubmittedListContainer`', function () {
    expect( renderDocumentsSubmitted.find( DocumentsSubmittedListContainer ) ).to.have.length( 1 );
  });

});
