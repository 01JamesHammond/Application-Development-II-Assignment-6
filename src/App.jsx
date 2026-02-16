import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react'; // Update to import useEffect


function App() { 
  const products = [
    { 
      id: 1, 
      name: "Wireless Headphones", 
      price: 99.99, 
      image: "https://placehold.co/600x400",
      description: "Premium noise-cancelling headphones with 30-hour battery life"
    },
    { 
      id: 2, 
      name: "Smart Watch", 
      price: 249.99, 
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    { 
      id: 3, 
      name: "Bluetooth Speaker", 
      price: 79.99, 
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    { 
      id: 4, 
      name: "Laptop Stand", 
      price: 49.99, 
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    { 
      id: 5, 
      name: "Webcam", 
      price: 129.99, 
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction"
    },
    { 
      id: 6, 
      name: "Mechanical Keyboard", 
      price: 159.99, 
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches"
    }
  ];

  

const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.warn('Could not save cart to localStorage:', error);
    }
  }, [cart]);


  const addToCart = (product) => {
    setCart([...cart, product]);
    //console.log("Cart contents:", [...cart, product]);
    //console.log("Cart updated. Total items:", cart.length + 1);
  };

  const removeFromCart = (indexToRemove) => {
    //Admittly used ai to help with this filter function, more specifically with finding the correct index.
    //I ran into the problem of deleting all of the items in the cart instead of each specific item as needed.
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <BrowserRouter>
      <div className="app">
          <Header
            storeName="ComponentCorner"
            cartCount={cart.length}
          />

          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" 
            element={
              <ProductsPage 
                products={products} 
                addToCart={addToCart} 
              />
            } 
          />
          <Route path="/cart" 
            element={
              <CartPage 
                cart={cart} 
                removeFromCart={removeFromCart} 
              />
            } 
          />
        </Routes>
      
        <Footer
          contactEmail="support@componentcorner.com" 
          storeDetails="ComponentCorner: Quality electronics for tech enthusiasts."
        />
      </div>
    </BrowserRouter>
    );
}

export default App
