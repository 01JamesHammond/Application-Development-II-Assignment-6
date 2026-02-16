import ProductCard from "../components/ProductCard";

function ProductsPage({ products, addToCart }) {
  return (
    <>
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={addToCart}
        />
      ))}
    </>
  );
}

export default ProductsPage;