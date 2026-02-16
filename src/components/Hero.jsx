function Hero({ title, subtitle, callToActionText }) {
  const bannerImage = "https://placehold.co/1200x400/667eea/ffffff?text=1200 x 400";

  return (
    <div className="hero">
      <img src={bannerImage} alt="Featured Banner" className="hero-image" />
      <div className="hero-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <button className="hero-button">{callToActionText}</button>
      </div>
    </div>
  );
}

export default Hero;