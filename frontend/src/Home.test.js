import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

it('renders without crashing', () => {
  render(<Home />);
});

it('matches snapshot', () => {
    const {asFragment} = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
});

it('finds text that should be there', () => {
    const {queryByText} = render(<Home />);
    expect(queryByText("All the tools in one convenient place!")).toBeInTheDocument();
});


// it('show text when user is true', () => {
//     const {getByText} = render(<Home user="john" />);
//     console.log(getByText("Checking test"))
// });


