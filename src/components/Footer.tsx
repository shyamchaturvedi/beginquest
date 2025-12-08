

import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-light)', padding: '3rem 0', marginTop: 'auto' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

                <div className="footer-section">
                    <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Beginquest Services</h3>
                    <p>Your expert partner for financial, legal, and business consultancy services. We simplify compliance so you can focus on growth.</p>
                </div>

                <div className="footer-section">
                    <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Quick Links</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Contact Info</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <MapPin size={18} color="var(--color-secondary)" style={{ marginTop: '5px', flexShrink: 0 }} />
                            <span>Office No- 310, 3rd Floor, Time Square, B-98, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Phone size={18} color="var(--color-secondary)" />
                            <span>+91 9616125261</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Mail size={18} color="var(--color-secondary)" />
                            <span>info@beginquest.in</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '2rem', paddingTop: '1rem', fontSize: '0.9rem' }}>
                &copy; {new Date().getFullYear()} Beginquest Services Private Limited. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
