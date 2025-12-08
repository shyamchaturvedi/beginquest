
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.jpg';
import '../index.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-light)' }}>
            {/* Top Bar for Contact Info */}
            <div className="top-bar container" style={{ display: 'flex', justifyContent: 'flex-end', padding: '0.5rem 1rem', fontSize: '0.9rem', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}><Phone size={14} style={{ marginRight: '5px' }} /> +91 9616125261</div>
                <div style={{ display: 'flex', alignItems: 'center' }}><Mail size={14} style={{ marginRight: '5px' }} /> info@beginquest.in</div>
            </div>


            <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Beginquest Services" style={{ height: '50px', objectFit: 'contain' }} />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'none' }}> {/* Will fix with media queries in CSS or inline style for now */}
                    {/* Temporary inline styles for speed, better to move to CSS */}
                    <style>{`
             @media (min-width: 768px) {
               .desktop-nav { display: flex !important; gap: 2rem; }
               .mobile-menu-btn { display: none !important; }
             }
           `}</style>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/services" className="nav-link">Services</Link>
                    <Link to="/about" className="nav-link">About Us</Link>
                    <Link to="/contact" className="nav-link btn-primary" style={{ padding: '0.5rem 1rem', borderRadius: '4px' }}>Contact Us</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <nav className="mobile-nav" style={{ backgroundColor: 'var(--color-primary-light)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
                    <Link to="/services" className="nav-link" onClick={toggleMenu}>Services</Link>
                    <Link to="/about" className="nav-link" onClick={toggleMenu}>About Us</Link>
                    <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact Us</Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
