import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';

it('renders without crashing', () => {
  render(<LoginForm />);
});

it('matches snapshot', () => {
    const {asFragment} = render(<LoginForm />);
    expect(asFragment()).toMatchSnapshot();
});
