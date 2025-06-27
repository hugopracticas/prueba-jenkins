// src/components/TestJest.test.jsx
import { render, screen } from '@testing-library/react';
import { TestJest } from './TestJest';

test('muestra el texto Hola mundo', () => {
  render(<TestJest />);
  expect(screen.getByText(/Hola mundo/i)).toBeInTheDocument();
});