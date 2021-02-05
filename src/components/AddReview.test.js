import React from 'react';
import ReactDOM from 'react-dom';
import AddReview from './AddReview';

it(`Renders without crashing`, () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddReview />, div)
  ReactDOM.unmountComponentAtNode(div)
});
