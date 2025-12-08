
import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, FileText, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-content">
                    {/* Animated Title */}
                    <motion.div
                        className="hero-title"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.05
                                }
                            }
                        }}
                    >
                        {Array.from("Business Registration & Compliance Made Simple").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Animated Subtitle */}
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2, duration: 1 }}
                    >
                        Beginquest Services is your trusted partner for Business Registration, GST, Legal Compliance, and Financial Consultancy associated with Startups and established companies across India.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
                    >
                        <Link to="/contact" className="btn btn-primary">Get Started</Link>
                        <Link to="/services" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Explore Services</Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section" style={{ padding: '4rem 0', backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container">
                    <h2 className="section-title">Why Choose Beginquest?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                        {[
                            { Icon: ShieldCheck, title: "100% Compliance", desc: "Stay legally secure with complete compliance support as per government regulations." },
                            { Icon: TrendingUp, title: "Fast Approval", desc: "Get your registration processed in 3–5 days with accurate documentation." },
                            { Icon: FileText, title: "Expert Guidance", desc: "Documentation handled by certified experts to avoid errors and rejection." },
                            { Icon: Users, title: "Ongoing Support", desc: "Continuous assistance after registration for filings and updates." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div style={{ color: 'var(--color-secondary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}><item.Icon size={40} /></div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Summary */}
            <section className="services-preview section">
                <div className="container">
                    <h2 className="section-title">Our Expertise</h2>
                    <div className="services-grid">
                        {[
                            { Icon: ShieldCheck, title: "Business Registration", desc: "Proprietorship, Partnership, Pvt Ltd, OPC, and LLP registration with complete documentation support." },
                            { Icon: FileText, title: "GST & Compliance", desc: "Timely GST registration, return filing, and corrections to ensure your business never faces penalties." },
                            { Icon: TrendingUp, title: "MSME & Startup", desc: "Udyam Registration and Startup India recognition to unlock government benefits and subsidies." },
                            { Icon: Users, title: "Loans & Finance", desc: "Expert guidance for securing Business Loans and Project Loans with strong financial reporting." }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="service-icon"><service.Icon size={48} /></div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/services" className="btn btn-outline" style={{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>View All Services</Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-section">
                <div className="container">
                    <h2 className="section-title">What Our Clients Say</h2>
                    <div className="testimonial-grid">
                        {[
                            { text: "Beginquest helped me register my startup in just a few days. Their team is extremely professional and knowledgeable.", author: "Rahul Sharma, Tech Entrepreneur" },
                            { text: "I was struggling with my GST filings. beginquest not only sorted it out but also saved me money with their advice.", author: "Anita Gupta, Retail Business Owner" },
                            { text: "Highly recommended for anyone looking for hassle-free loan processing. They guided me through every step.", author: "Vikram Singh, Manufacturer" }
                        ].map((t, i) => (
                            <motion.div
                                className="testimonial-card"
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <p>"{t.text}"</p>
                                <div className="testimonial-author">- {t.author}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ marginBottom: '1rem' }}>Ready to Take Your Business to the Next Level?</h2>
                        <p style={{ marginBottom: '2rem', opacity: '0.9' }}>Contact us today for a personalized consultation.</p>
                        <Link to="/contact" className="btn btn-primary">Contact Us Now</Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;
