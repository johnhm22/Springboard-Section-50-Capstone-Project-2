import React from 'react';
import { render } from '@testing-library/react';
import IssueHistory from './IssueHistory';

it('renders without crashing', () => {
  render(<IssueHistory />);
});