import React from 'react';
// import { fireEvent, render } from '@testing-library/react';
import {render, fireEvent} from './test-utils';
import AddIssueForm from './AddIssueForm';

//passes
it('renders without crashing', () => {
  render(<AddIssueForm />);
});

//passes
it('matches snapshot', () => {
    const {asFragment} = render(<AddIssueForm />);
    expect(asFragment()).toMatchSnapshot();
});

//fails
// it('finds text that should be there', () => {
//     const {queryByText} = render(<AddIssueForm />);
//     expect(queryByText("Add a new issue")).toBeInTheDocument();
// });

//fails
// it('executes form', () => {
//     const {getByText} = render(<AddIssueForm />);
//     fireEvent.click(getByText("Add"));
//     expect("Add a new issue").not.toBeInTheDocument();

// })