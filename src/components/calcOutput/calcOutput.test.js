import React from 'react';
import renderer from 'react-test-renderer';
import calcOutput from './calcOutput';


it('renders a snapshot', () => {
    const tree = renderer.create(<calcOutput/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  