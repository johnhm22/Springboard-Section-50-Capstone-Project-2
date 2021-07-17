import React from 'react';
// import { render } from '@testing-library/react';
import {render} from './test-utils';
import IssueHistory from './IssueHistory';

//passes
it('renders without crashing', () => {
  render(<IssueHistory />);
});

//passes
it('matches snapshot', () => {
  const {asFragment} = render(<IssueHistory />);
  expect(asFragment()).toMatchSnapshot();
});