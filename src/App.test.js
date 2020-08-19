import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Go Nuclear/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders relativity equation', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/e = mc/i);
  expect(linkElement).toBeInTheDocument();
});
