
import React from 'react';
import { FileText, Briefcase, DollarSign, Shield } from 'lucide-react';
import '../styles/Services.css';

const Services: React.FC = () => {
    return (
        <div className="services-page">
            <div className="services-hero">
                <div className="container">
                    <h1>Our Complete Business Consulting Services</h1>
                    <p>From Registration to Compliance, we have you covered.</p>
                </div>
            </div>

            <div className="container">

                <div className="services-category">
                    <h2 className="category-title">Company & Business Registration</h2>
                    <div className="services-grid">
                        <div className="service-item">
                            <div className="service-icon"><Briefcase /></div>
                            <h3>Company Incorporation</h3>
                            <p>Private Limited, LLP, OPC, and Partnership registration service with complete legal adherence.</p>
                        </div>
                        <div className="service-item">
                            <div className="service-icon"><Shield /></div>
                            <h3>Business Registration</h3>
                            <p>Proprietorship & Shop Act registration for small businesses.</p>
                        </div>
                    </div>
                </div>

                <div className="services-category">
                    <h2 className="category-title">Govt & Legal Compliance</h2>
                    <div className="services-grid">
                        <div className="service-item">
                            <div className="service-icon"><Shield /></div>
                            <h3>MSME (Udyam) & Startup</h3>
                            <p>MSME registration to unlock government benefits and subsidies.</p>
                        </div>
                        <div className="service-item">
                            <div className="service-icon"><Briefcase /></div>
                            <h3>FSSAI, DSC & ESI-PF</h3>
                            <p>Food License (FSSAI), Digital Signature Certificate (DSC), and ESI/PF registration for employees.</p>
                        </div>
                    </div>
                </div>

                <div className="services-category">
                    <h2 className="category-title">Financial Services & Taxation</h2>
                    <div className="services-grid">
                        <div className="service-item">
                            <div className="service-icon"><FileText /></div>
                            <h3>Income Tax Filing</h3>
                            <p>Expert ITR filing for individuals and businesses to ensure zero penalties.</p>
                        </div>
                        <div className="service-item">
                            <div className="service-icon"><FileText /></div>
                            <h3>GST Services</h3>
                            <p>Seamless GST Registration and regular filing services.</p>
                        </div>
                        <div className="service-item">
                            <div className="service-icon"><DollarSign /></div>
                            <h3>Financial Services</h3>
                            <p>Business & Project Loan assistance including DPR preparation.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;
