
import type { FormEvent } from 'react';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev: typeof formData) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const { name, email, subject, message } = formData;
        const whatsappMessage = `*New Inquiry from Website Contact Form*
        
*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}
*Message:* ${message}`;

        const phoneNumber = "919616125261";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(url, '_blank');

        // Optional: Reset form or show success message (Whatsapp opens in new tab)
        // setFormData({ name: '', email: '', subject: '', message: '' }); 
    };

    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact Us | Beginquest Services - Get In Touch</title>
                <meta name="description" content="Contact Beginquest Services for expert business consultancy. Call +91 9616125261 or visit our office in Gomti Nagar, Lucknow." />
            </Helmet>
            <div style={{ backgroundColor: '#001F3F', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
                <h1>Contact Us</h1>
                <p>We are here to help you.</p>
            </div>

            <div className="container" style={{ padding: '4rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                {/* Contact Info */}
                <div>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>Get In Touch</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ backgroundColor: 'var(--color-bg-off-white)', padding: '0.8rem', borderRadius: '50%', height: 'fit-content' }}>
                                <MapPin color="var(--color-primary)" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Our Office</h3>
                                <p style={{ color: '#666' }}>Office No- 310, 3rd Floor, Time Square,<br />B-98, Vibhuti Khand, Gomti Nagar,<br />Lucknow, Uttar Pradesh 226010</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ backgroundColor: 'var(--color-bg-off-white)', padding: '0.8rem', borderRadius: '50%', height: 'fit-content' }}>
                                <Phone color="var(--color-primary)" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Phone Number</h3>
                                <p style={{ color: '#666' }}>+91 9616125261</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ backgroundColor: 'var(--color-bg-off-white)', padding: '0.8rem', borderRadius: '50%', height: 'fit-content' }}>
                                <Mail color="var(--color-primary)" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Email</h3>
                                <p style={{ color: '#666' }}>info@beginquest.in</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ backgroundColor: 'var(--color-bg-off-white)', padding: '0.8rem', borderRadius: '50%', height: 'fit-content' }}>
                                <Clock color="var(--color-primary)" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Office Hours</h3>
                                <p style={{ color: '#666' }}>Mon - Sat: 10:00 AM - 07:00 PM<br />Sunday: Closed</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Contact Form */}
                <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>Send us a Message on WhatsApp</h2>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Inquiry about..."
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                required
                                placeholder="How can we help you?"
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical' }}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                            Send via WhatsApp
                        </button>
                    </form>
                </div>

            </div>

            {/* Map Placeholder */}
            <div style={{ height: '400px', backgroundColor: '#e9e9e9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                <p>Google Maps Embed will go here</p>
            </div>

        </div>
    );
};

export default Contact;
