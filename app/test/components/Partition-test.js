var React = require( 'react' );
var shallow = require( 'enzyme' ).shallow;
var expect = require( 'chai' ).expect;
var Partition = require( '../../components/Partition' );

describe ( 'Partition component', function() {

  var partiton;

  beforeEach( function() {
    partition = shallow( <Partition id={ 1 } data={ { type: 'NTFS', size: '100', start: '50', end: '150' } } /> );
  });

  it ( 'renders to the DOM', function() {
    expect( partition ).to.exist;
  });

  it ( 'renders 1 `h1` node with text `partition-1` from id props', function() {
    expect( partition.find('h1').children().nodes[0].props.children.join('') ).to.equal( 'partition-' + partition.unrendered.props.id );
  });

  describe ( 'partition info specifics', function() {
    it ( 'renders 4 nodes with class `partition-info-specifics`', function() {
      expect( partition.find( '.partition-info-specifics' ) ).to.have.length( 4 );
    });

    it ( 'renders first info node with text partition.type', function() {
      expect( partition.find('.partition-info-specifics').nodes[0].props.children ).to.equal( partition.unrendered.props.data.type );
    });

    it ( 'renders second info node with text partition.size', function() {
      expect( partition.find('.partition-info-specifics').nodes[1].props.children ).to.equal( partition.unrendered.props.data.size );
    });

    it ( 'renders third info node with text partition.start', function() {
      expect( partition.find('.partition-info-specifics').nodes[2].props.children ).to.equal( partition.unrendered.props.data.start );
    });

    it ( 'renders fourth info node with text partition.end', function() {
      expect( partition.find('.partition-info-specifics').nodes[3].props.children ).to.equal( partition.unrendered.props.data.end );
    });
  });

});
