import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Jorge Alberto Hernandez Sanchez</h1>
                <p>Based in Saltillo, Coahuila, Mexico</p>
            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>And let's get down to work</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Design By Jorge Alberto
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/jorgeehdzs/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/Jorgeehdz" target="_blank" rel="noreferrer">
                        <i className="fab fa-github github"></i>
                    </a>
                    <a href="https://twitter.com/Jorge06578899" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter twitter"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
