
import { Target, Award, Users } from 'lucide-react';
import '../index.css';

// ... imports
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ownerBannerImg from '../assets/owner_banner.jpg';

const About: React.FC = () => {
    return (
        <div className="about-page" style={{ paddingBottom: '4rem' }}>
            <Helmet>
                <title>About Us | Beginquest Services - Leading Business Consultancy in Lucknow</title>
                <meta name="description" content="Learn about Beginquest Services Pvt. Ltd., a Lucknow-based consultancy led by L.S. Tripathi, dedicated to simplifying business compliance and financial growth." />
            </Helmet>
            <div className="bg-primary text-white" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '6rem 0', textAlign: 'center' }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}
                >
                    About Beginquest Services
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', opacity: '0.9' }}
                >
                    We are dedicated to simplifying legal, financial, and business compliance for entrepreneurs and established companies alike.
                </motion.p>
            </div>

            <div className="container" style={{ marginTop: '5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ color: 'var(--color-primary)', fontSize: '2.2rem', marginBottom: '1.5rem', borderLeft: '5px solid var(--color-secondary)', paddingLeft: '1rem' }}>Who We Are</h2>
                        <p style={{ marginBottom: '1.2rem', color: '#444', lineHeight: '1.6', fontSize: '1.05rem' }}>
                            Beginquest Services Pvt. Ltd. is a Lucknow-based business consultancy offering GST registration, company registration, tax consulting, legal compliance, MSME (Udyam), DSC, FSSAI, ESI–PF, and business/project loan assistance.
                        </p>
                        <p style={{ marginBottom: '1.2rem', color: '#444', lineHeight: '1.6', fontSize: '1.05rem' }}>
                            We provide fast service, expert guidance, and transparent processes to help businesses grow with confidence.
                        </p>
                        <img
                            src={ownerBannerImg}
                            alt="L.S. Tripathi - Chairman"
                            style={{ width: '100%', borderRadius: '12px', marginTop: '2rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                        />
                        <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#555', textAlign: 'center' }}>
                            "Leading with integrity and innovation, we build a future where success is shared." <br />
                            <strong style={{ color: 'var(--color-primary)' }}>— L. S. Tripathi, Chairman</strong>
                        </p>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {/* Mission Cards with Stagger Animation */}
                        {[
                            { Icon: Target, title: "Our Mission", desc: "To empower businesses by removing compliance hurdles, allowing them to focus on innovation and growth." },
                            { Icon: Award, title: "Quality First", desc: "We adhere to the highest standards of professional ethics and service quality in every task we undertake." },
                            { Icon: Users, title: "Client Centric", desc: "Your success is our success. We provide personalized attention to every client query." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                style={{ display: 'flex', gap: '1.5rem', padding: '2rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', borderLeft: '4px solid var(--color-secondary)' }}
                            >
                                <item.Icon color="var(--color-secondary)" size={36} style={{ flexShrink: 0 }} />
                                <div>
                                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)', fontSize: '1.3rem' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.5' }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
