import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Bhojan Tracker. All rights reserved.</p>
        <div className="contact-info">
          <h4>Contact Information</h4>
          <ul>
            <li>
              <strong>Name:</strong> Akanksha Gaur<br />
              <strong>Email:</strong> <a href="mailto:abcd@gmail.com">abcd@gmail.com</a>
            </li>
            <li>
              <strong>Name:</strong> Aanchal Kumawat<br />
              <strong>Email:</strong> <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
            </li>
            <li>
              <strong>Name:</strong> Astha Shukla<br />
              <strong>Email:</strong> <a href="mailto:sdf@gmail.com">sdf@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
