import React from 'react';
// import { render } from '@testing-library/react';
import {render} from './test-utils';
import AllIssuesList from './AllIssuesList';


//fails
//Cannot read property 'username' of undefined
it('renders without crashing', () => {
  render(<AllIssuesList />);
});


// it('matches snapshot', () => {
//     const {asFragment} = render(<AllIssuesList />);
//     expect(asFragment()).toMatchSnapshot();
// });

// it('finds text that should be there', () => {
//     const {queryByText} = render(<AllIssuesList />);
//     expect(queryByText("All issues")).toBeInTheDocument();
// });


