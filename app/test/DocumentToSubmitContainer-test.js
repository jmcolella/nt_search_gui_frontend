var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var DocumentToSubmitContainer = require( '../containers/DocumentToSubmitContainer' );
var DocumentToSubmit = require( '../components/DocumentToSubmit' );

describe ( 'DocumentToSubmit Container', function () {

  var documentToSubmit;

  beforeEach( function () {
    documentToSubmit = shallow( <DocumentToSubmitContainer /> )
  });

  it ( 'renders without problems', function () {
    expect( documentToSubmit ).to.exist;
  });

  it ( 'renders child component `DocumentToSubmit`', function () {
    expect( documentToSubmit.find( DocumentToSubmit ) ).to.exist;
  });

});
