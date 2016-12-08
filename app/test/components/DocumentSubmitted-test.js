var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var DocumentSubmitted = require( '../../components/DocumentSubmitted' );

describe ( 'DocumentSubmitted component', function() {

  let docSubmitted;

  beforeEach( function() {
    docSubmitted = shallow( <DocumentSubmitted data={ { doc: 'hello.txt', relativePath: "./hello.txt" } } interval={ 1 } /> );
  });

  it ( 'renders to the DOM', function() {
    expect( docSubmitted ).to.exist;
  });

  it ( 'renders a div with class `form-group`', function() {
    expect( docSubmitted.find( 'div.form-group' ) ).to.have.length( 1 );
  });

  it ( 'renders 2 label nodes', function() {
    expect( docSubmitted.find( 'label' ) ).to.have.length( 2 );
  });

  it ( 'renders 2 input nodes', function() {
    expect( docSubmitted.find( 'input' ) ).to.have.length( 2 );
  });

  it ( 'renders the first label with text props.data.relativePath', function() {
    expect( docSubmitted.find('label').nodes[0].props.children ).to.equal( docSubmitted.unrendered.props.data.relativePath );
  });


});
