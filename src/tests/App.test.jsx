import React from 'react';
import '@testing-library/jest-dom';

import {
  render, screen,
} from '@testing-library/react';
import App from '../App';

describe('any testing', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
