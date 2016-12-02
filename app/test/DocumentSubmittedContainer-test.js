var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var DocumentSubmittedContainer = require( '../containers/DocumentSubmittedContainer' );
var DocumentSubmitted = require( '../components/DocumentSubmitted' );

describe ( 'DocumentSubmitted Container', function () {
  let documentSubmittedContainer;

  beforeEach( function () {
    documentSubmittedContainer = shallow( <DocumentSubmittedContainer /> );
  });

  it ( 'renders without problems', function () {
    expect( documentSubmittedContainer ).to.exist;
  });

  it ( 'renders child component DocumentSubmitted', function () {
    expect( documentSubmittedContainer.find( DocumentSubmitted ) ).to.exist;
  });
});
