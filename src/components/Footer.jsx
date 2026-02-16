import "./Footer.css";

function Footer({ contactEmail, storeDetails }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{storeDetails}</p>
        <p>Contact us: {contactEmail}</p>
      </div>
    </footer>
  );
}

export default Footer;