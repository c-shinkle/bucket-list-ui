import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

describe('App Layout', () => {
  it('should render learn react link', () => {
    render(<App />);
    const linkComponent = screen.getByRole('link');
    expect(linkComponent).toHaveTextContent('Learn React');
  });
});
