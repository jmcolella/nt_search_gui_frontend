var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var DocumentsSubmittedListContainer = require( '../containers/DocumentsSubmittedListContainer' );
var Header = require( '../components/Header' );
var DocumentSubmittedContainer = require( '../containers/DocumentSubmittedContainer' );
var CancelButton = require( '../components/CancelButton' );
var MediationContainer = require( '../containers/MediationContainer' );

describe ( 'Documents Submitted List Container', function () {

  let submittedListContainer;

  beforeEach( function () {
    submittedListContainer = shallow( <DocumentsSubmittedListContainer documentList = { [{ doc: "hello.txt", relativePath: "./" }] }/> );
  });

    it ( 'renders a div with class `.document-list`', function () {
      expect( submittedListContainer.find( '.document-list' ) ).to.have.length( 1 );
    });

    it ( 'renders the Header component', function () {
      expect( submittedListContainer.find( Header ) ).to.have.length( 1 );
    });

    describe ( 'state `form` is true', function () {
       it ( 'renders a form with id `submit-form`', function () {
         expect( submittedListContainer.find( '#submit-form' ) ).to.have.length( 1 );
       });

       it( 'renders the DocumentSubmittedContainer component', function () {
         expect( submittedListContainer.find( DocumentSubmittedContainer ) ).to.exit;
       });

       it ( 'renders the CancelButton component', function () {
         expect( submittedListContainer.find( CancelButton ) ).to.have.length( 1 );
       });
    });
  
    describe ( 'state `form is false`', function () {
      beforeEach( function () {
        submittedListContainer.setState( { form: false } );
      });

      it ( 'renders the MediationContainer', function () {
        expect( submittedListContainer.find( MediationContainer ) ).to.have.length( 1 );
      });

      it ( 'does not render the form', function () {
        expect( submittedListContainer.find( '#submit-form' ) ).to.have.length( 0 );
      });
    });
});

