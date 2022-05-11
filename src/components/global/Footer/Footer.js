import React from 'react';
import './Footer.scss';

class Footer extends React.Component{
    render(){
        return (
            <footer className="app-footer">
                <div className="footer-section">
                    <a href="#">Help</a>
                    <a href="#">About Rotten Potatoes</a>
                    <a href="#">What's the Potatometer?</a>
                </div>
                <div className="footer-section">
                    <a href="#">Critic Submission</a>
                    <a href="#">Licensing</a>
                    <a href="#">Advertise</a>
                    <a href="#">Careers</a>
                </div>
                <div className="footer-section">
                    <span>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                        </svg>
                        <a href="#">JOIN THE NEWSLETTER</a>
                    </span>
                    <a href="#">Get the freshest reviews, news, and more delivered right to your inbox!</a>
                </div>
                <div className="footer-section">
                    <a href="#">FOLLOW US</a>
                    <ul className="social">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Google</a></li>
                    </ul> 
                </div>
            </footer>
        );
    }
  }

export default Footer;