import React from 'react';
// import { render } from '@testing-library/react';
import {render} from './test-utils';

import LoginForm from './LoginForm';

//passes
it('renders without crashing', () => {
  render(<LoginForm />);
});

//passes
it('matches snapshot', () => {
    const {asFragment} = render(<LoginForm />);
    expect(asFragment()).toMatchSnapshot();
});
