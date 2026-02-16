import Hero from "../components/Hero";

function HomePage() {
  return (
    <>
      <Hero 
        title="Welcome to ComponentCorner"
        subtitle="Discover amazing products built with React components"
        callToActionText="Shop Now"
      />
      
      <div>
        <h2>Why Shop with Us?</h2>
        <p>
          ComponentCorner is your one-stop shop for the best tech essentials. 
          We pride ourselves on quality, speed, and premium customer service. 
          Browse our collection today to find the perfect gear for your setup!
        </p>
      </div>
    </>
  );
}

export default HomePage;