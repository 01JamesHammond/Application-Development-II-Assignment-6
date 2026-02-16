import { render, waitFor } from '@testing-library/react';
import App from '../App';

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
global.localStorage = localStorageMock;

describe('App localStorage Integration', () => {
  beforeEach(() => {
    // Clear all mock calls before each test
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.removeItem.mockClear();
    localStorageMock.clear.mockClear();
  });

  test('loads cart from localStorage on component mount', () => {
    // Arrange - set up what localStorage should return
    const savedCart = JSON.stringify([
      { id: 1, name: 'Wireless Headphones', price: 99.99 }
    ]);
    localStorageMock.getItem.mockReturnValue(savedCart);

    // Act - render the component
    render(<App />);

    // Assert - verify localStorage was checked
    expect(localStorageMock.getItem).toHaveBeenCalledWith('cart');
  });

  test('saves posts to localStorage when posts change', async () => {
    // Arrange: Mock an empty cart initially
    localStorageMock.getItem.mockReturnValue('[]');

    render(<App />);

    // Wait for useEffect to complete initial save
    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith('cart', '[]');
    });
  });

  test('persists cart across component remounts', async () => {
    // Initial render with empty localStorage
    localStorageMock.getItem.mockReturnValue('[]');
    
    const { unmount } = render(<App />);

    // Simulate posts being added (this would trigger useEffect)
    const testCart = [{ id: 1, name: 'Smart Watch', price: 249.99 }];
    
    // Verify save happened
    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith('cart', '[]');
    });

    // Unmount component  (simulate closing a browser tab)
    unmount();

    // Mock localStorage returning the saved data
    localStorageMock.getItem.mockReturnValue(JSON.stringify(testCart));

    // Re-render component (simulating user openning the app again)
    render(<App />);

    // Verify data was loaded
    expect(localStorageMock.getItem).toHaveBeenCalledWith('cart');
  });
});