import React from 'react';

const Footer = props => {

    
    
    return (
        <div>
            <footer id="footer">
                <div className="container">
                <div className="section-title">
                        <h2>Contact Me</h2>
                <div className="social-links">
                    <a href="https://github.com/NataliaSilva10" className="github"> </a>
                    <a href="mailto:nataliamirandaus10@gmail.com" className="gmail"> </a>
                    <a href="https://www.linkedin.com/in/natalia-silva-a0515b234/" className="link"> </a>
                
                  
                </div>
                </div>
                <div className="copyright">
                 &copy;Copyright <u><span><a href="/home">Natalia All Rights Reserved </a></span></u>
                </div>
                </div>
            </footer>

            {/* <a href="#" className="back-to-top">Back to top</a> */}
        </div>

    )
}

export default Footer;