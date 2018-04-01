import React from 'react';
import renderer from 'react-test-renderer';
import calcInput from './calcInput';


it('renders a snapshot', () => {
    const tree = renderer.create(<calcInput/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  