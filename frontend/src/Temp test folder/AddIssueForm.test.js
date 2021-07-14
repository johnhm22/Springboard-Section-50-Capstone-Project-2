import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import AddIssueForm from './AddIssueForm';

it('renders without crashing', () => {
  render(<AddIssueForm />);
});

// it('matches snapshot', () => {
//     const {asFragment} = render(<AddIssueForm />);
//     expect(asFragment()).toMatchSnapshot();
// });

// it('finds text that should be there', () => {
//     const {queryByText} = render(<AddIssueForm />);
//     expect(queryByText("Add a new issue")).toBeInTheDocument();
// });

// it('executes form', () => {
//     const {getByText} = render(<AddIssueForm />);
//     fireEvent.click(getByText("Add"));
//     expect("Add a new issue").not.toBeInTheDocument();

// })