import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Header should display Login and Register when component mounts', () => {
  render(<Header />);
  screen.getByText('Login');
  screen.getByText('Register');
});
