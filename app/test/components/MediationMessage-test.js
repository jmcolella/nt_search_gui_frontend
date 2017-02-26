var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var MediationMessage = require( '../../components/MediationMessage' );

describe ( 'Mediation Message component', function() {

  var message;

  beforeEach( function() {
    message = shallow( <MediationMessage mediation={ true } message={ {filename: './hello.txt', status: "0"} } incomingMessage={ { filename: './hello.txt', status: '0' } }/> );
  });

  it ( 'renders to the DOM', function() {
    expect( message ).to.exist;
  });

  it ( 'renders 1 `li` node with class name `list-group-item`', function() {
    expect( message.find( 'li.list-group-item' ) ).to.have.length( 1 );
  });
  
  it ( 'renders 1 `span` node', function() {
    expect( message.find( 'span' ) ).to.have.length( 1 );
  });

  it ( 'renders span with message.filename text in props', function() {
    expect( message.find( 'span' ).text() ).to.equal( message.unrendered.props.message.filename );
  });

  describe ( 'mediation true and message same as inComingMessage', function() {
    describe ( 'status is 0', function() {
      it ( 'renders 1 `i` node with class name `fa-check`', function() {
        expect( message.find( 'i.fa-check' ) ).to.have.length( 1 );
      });
    });

    describe( 'status is 1 or 2', function() {
      it ( 'renders 1 `i` node with class name `fa-exclamation-triangle`', function() {
        message.setProps( { message: { filename: './hello.txt', status: '1' }, mediation: true, incomingMessage: { filename: './hello.txt', status: '0' } } );

        expect( message.find( 'i.fa-exclamation-triangle' ) ).to.have.length( 1 );
      });
    });
  });

  describe ( 'mediation true and message not same as incomingMessage', function() {
    it ( 'renders 1 `i` node with class name fa-circle-o-notch', function() {
      message.setProps( { message: { filename: './hello.txt', status: '0' }, mediation: true, incomingMessage: { filename: './asdf.txt', status: '0' } } );

      expect( message.find( 'i.fa-circle-o-notch' ) ).to.have.length( 1 );
    });
  });

  describe( 'mediation false', function() {
    describe( 'message status is 0', function() {
      it ( 'renders 1 `i` node with class name fa-check', function() {
        message.setProps( { message: { filename: './hello.txt', status: '0' }, mediation: false, incomingMessage: { filename: './asdf.txt', status: '0' } } );

        expect( message.find( 'i.fa-check' ) ).to.have.length( 1 );
      });
    });

    describe ( 'message status is 1 or 2', function() {
      it ( 'renders 1 `i` node with class name fa-exclamation-triangle', function() {
        message.setProps( { message: { filename: './hello.txt', status: '1' }, mediation: false, incomingMessage: { filename: './asdf.txt', status: '0' } } );

        expect( message.find( 'i.fa-exclamation-triangle' ) ).to.have.length( 1 );
      });
    });
  });

});
