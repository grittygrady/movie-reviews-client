import React from 'react';
import ReactDOM from 'react-dom';
import ReviewDetails from './ReviewDetails';


it(`Renders without crashing`, () => {
  const div = document.createElement('div')
  ReactDOM.render(<ReviewDetails />, div)
  ReactDOM.unmountComponentAtNode(div)
});