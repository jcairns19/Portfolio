import './Footer.css';

function Footer({ contactInfo }) {
  return (
    <footer className="portfolio-footer">
      <div>
        &copy; {new Date().getFullYear()} {contactInfo.firstName} {contactInfo.lastName} &mdash;
      </div>
      <div>
        Contact: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
      </div>
      <div>
        All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;