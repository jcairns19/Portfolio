import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ contactInfo }) {
    // set state object to false to initially not display the contact info until clicked
    const [showContact, setShowContact] = useState(false);

    return (
        <header className="portfolio-header">
            <div>
                <Link to="/Portfolio" className="portfolio-name-link">
                    <span className="portfolio-name">
                        {contactInfo.firstName?.[0]}{contactInfo.lastName?.[0]}
                    </span>
                </Link>
            </div>
            <nav className="portfolio-nav">
                <Link to="/Portfolio/experiences">Experiences</Link>
                <Link to="/Portfolio/projects">Projects</Link>
                <Link to="/Portfolio/education">Education</Link>
            </nav>
            <div className="portfolio-header-actions">
                <button
                    className="contact-btn"
                    onClick={() => setShowContact(v => !v)}
                >
                    Contact Me
                </button>
                
                {showContact && (
                    <div className="contact-card" onClick={() => setShowContact(false)}>
                        {/* need to use stopPropagation() here to make sure card is not closed unexpectedly */}
                        <div className="contact-card-content" onClick={e => e.stopPropagation()}>
                            <h4>Contact Information</h4>
                            <p>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                            <p>Phone: {contactInfo.phone}</p>
                            <p>Location: {contactInfo.location}</p>
                            {/* set showContact back to false when close button is clicked (closed button only seem when = true)*/}
                            <button className="close-contact-btn" onClick={() => setShowContact(false)}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;