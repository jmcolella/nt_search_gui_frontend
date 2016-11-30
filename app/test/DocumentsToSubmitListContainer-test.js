var React = require( 'react' );
var mount = require( 'enzyme' ).mount;
var expect = require( 'chai' ).expect;
var DocumentsToSubmitListContainer = require( '../containers/DocumentsToSubmitListContainer' );
var Header = require( '../components/Header' );
var SubmitDocumentListCount = require( '../components/SubmitDocumentListCount' );
var DocumentToSubmitContainer = require( '../containers/DocumentToSubmitContainer' );
var SubmitDocumentListButton = require( '../components/SubmitDocumentListButton' );
 
describe ( 'DocumentsToSubmitList Container', function () {
  let documentsToSubmitList;

  beforeEach( function () {
    documentsToSubmitList = mount( <DocumentsToSubmitListContainer
                                     documentList={ [] }
                                     submit={ false } /> );
  });

  it ( 'renders without problems', function () {
    expect( documentsToSubmitList ).to.exist;
  });

  it ( 'renders a top div with id `document-list`', function () {
    expect( documentsToSubmitList.find( '#document-list' ) ).to.have.length( 1 );
  });

  it ( 'renders child component Header', function () {
    expect( documentsToSubmitList.find( Header ) ).to.exist;
  });

  it ( 'renders Header with title `Documents to Submit`', function () {
    expect( documentsToSubmitList.find( 'h1' ).text() ).to.equal( 'Documents to Submit' );
  });

  it ( 'renders child component `SubmitDocumentListCount`', function ()  {
    expect( documentsToSubmitList.find( SubmitDocumentListCount ) ).to.exist;
  });

  it ( 'renders an unordered list with class `list-group`', function () {
    expect( documentsToSubmitList.find( '.list-group' ) ).to.have.length( 1 );
  });

  describe( 'documentList with length > 0', function () {
    beforeEach( function () {
      documentsToSubmitList.setProps( { documentList: [ { name: 'hello.txt' } ] } );
    });

    it ( 'renders child component DocumentToSubmitContainer', function () {
      expect( documentsToSubmitList.find( DocumentToSubmitContainer ) ).to.exist;
    });

    it ( 'renders child component SubmitDocumentListButton', function () {
      expect( documentsToSubmitList.find( SubmitDocumentListButton ) ).to.have.length( 1 );
    });
  });
});
