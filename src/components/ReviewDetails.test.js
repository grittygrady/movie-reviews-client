import React from 'react';
import ReactDOM from 'react-dom';
import ReviewDetails from './ReviewDetails';
import { BrowserRouter as Router } from 'react-router-dom';

it(`Renders without crashing`, () => {
  const testReviewArray = [{
    "id": 1,
    "title": "Fight Club",
    "rating": 5,
    "body": "Review goes here blah blah blah",
    "author": "Candice"
  }]
  const div = document.createElement('div')
  ReactDOM.render(
  <Router>
    <ReviewDetails reviews={testReviewArray} />
  </Router>,
  div)
  ReactDOM.unmountComponentAtNode(div)
});