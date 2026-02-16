import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../HomePage';



vi.mock('../../components/Hero', () => {
  return {
    default: ({ title }) => 
    <div data-testid="hero-component">{title}</div>,
  };
});

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('HomePage', () => {
  test('renders without crashing and displays main content', () => {
    renderWithRouter(<HomePage />);
    
    expect(screen.getByTestId('hero-component')).toBeInTheDocument();
    
    expect(screen.getByText('Welcome to ComponentCorner')).toBeInTheDocument();

    expect(screen.getByText('Why Shop with Us?')).toBeInTheDocument();
  });
});