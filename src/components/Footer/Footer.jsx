import "./Footer.modules.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="links">
          <div className="one">
            <p>Abstract</p>
            <ul>
              <li>Start Trial</li>
              <li>Pricing</li>
              <li>Download</li>
            </ul>
          </div>
          <div className="two">
            <p>Resources</p>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="three">
            <p>Community</p>
            <ul>
              <li>Twitter</li>
              <li>Linkedin</li>
              <li>Facebook</li>
              <li>Dribble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div className="four">
            <div>
              <p>Company</p>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Legal</li>
              </ul>
            </div>
            <div>
              <p>Contact Us</p>
              <p>info@abstract.com</p>
            </div>
          </div>
        </div>
        <div className="info">
          <img src="#" />
          <div>
            <p>© Copyright 2023</p>
            <p>Abstract Studio Design, Inc.</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};
