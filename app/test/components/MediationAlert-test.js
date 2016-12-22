var React = require( 'react' );
var shallow = require( 'enzyme' ).mount;
var expect = require( 'chai' ).expect;
var MediationAlert = require( '../../components/MediationAlert' );

describe ( 'MediationAlert component', function() {

  let alert;

  beforeEach( function() {
    alert = mount( <MediationAlert incomingMsg={ { filename: 'hello.txt', status: '0' } } /> );
  });

  it ( 'renders to the DOM', function() {
    expect( alert ).to.exist;
  });

  describe ( 'status in props is 0', function() {
    it ( 'does not render error message', function() {
      expect( alert.find( 'mediation-alert-container' ) ).to.have.length( 0 );
    });
  });

  describe ( 'status in props is an error code', function() {
    beforeEach( function() {
      alert.setProps( { incomingMsg: { filename: 'hello.txt', status: '1' } } );
    });

    it ( 'has state of error with value true', function() {
      expect( alert.state().error ).to.equal( true );
    });

    it ( 'renders 1 div with class `mediation-alert-container`', function() {
      expect( alert.find( '.mediation-alert-container' ) ).to.have.length( 1 )''
    });

    it ( 'renders 1 p node inside the div', function() {
      expect( alert.find( '.mediation-alert-container p' ) ).to.have.length( 1 );
    });

    it ( 'renders 1 i node with class `fa-times`', function() {
      expect( alert.find( '.fa-times' ) ).to.have.length( 1 );
    });

    describe ( 'error status is 1', function() {
      it ( 'renders p node with text including `compromised`', function() {
        expect( alert.find( '.mediation-alert-container p ' ).text() ).to.include( 'compromised' );
      });
    });

    describe ( 'error status is 2', function() {
      it ( 'renders p node with text including `deleted`', function() {
        alert.setProps( { incomingMsg:  { filename: 'hello.txt', status: '2' } } );

        expect( alert.find( '.mediation-alert-container p' ).text() ).to.include( 'deleted' );
      });
    });
  });

  describe ( 'exit alert', function() {
    beforeEach( function() {
      alert.setProps( { incomingMsg: { filename: 'hello.txt', status: '1' } } );
    });

    it ( 'returns error state to false onClick of `x` icon', function() {
      alert.find( '.fa-times' ).simulate( 'click' );

      expect( alert.state().error ).to.equal( true );
    });
  });

});

