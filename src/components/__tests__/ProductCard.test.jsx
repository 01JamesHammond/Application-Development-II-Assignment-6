import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../ProductCard';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    name: 'Wireless Headphones',
    price: 59.99,
    description: 'High quality sound',
    image: 'headphones.jpg'
  };

  test('renders product information and add to cart button', () => {
    renderWithRouter(
      <ProductCard 
        product={mockProduct} 
        onAddToCart={() => {}} 
      />
    );

    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
    expect(screen.getByText('Price: $59.99')).toBeInTheDocument();
    expect(screen.getByText('High quality sound')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
    
    expect(screen.getByAltText('Wireless Headphones')).toBeInTheDocument();
  });

  test('calls onAddToCart when button is clicked', () => {
    const mockAddToCart = vi.fn();

    renderWithRouter(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);

    const button = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(button);

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });

});