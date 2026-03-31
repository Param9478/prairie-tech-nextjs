'use client'

import Link from 'next/link'
import { Facebook, GitHub, LinkedIn } from './SocialIcons'
import { ArrowUpRight, Mail, MapPin, Globe } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="footer-wrap">
            <div className="footer-container">

                <div className="footer-cta-box">
                    <div className="cta-content">
                        <h3>Have a project in mind?</h3>
                        <p>Let's build something exceptional together.</p>
                    </div>
                    <Link href="/contact" className="cta-link-btn">
                        Get Started <ArrowUpRight size={18} />
                    </Link>
                </div>

                <div className="footer-main-grid">
                    <div className="brand-col">
                        <div className="footer-logo">
                            <div className="logo-box">
                                <img src="/assets/logo-icon.png" alt="Prairie Tech" className="footer-logo-img" />
                            </div>
                            <span className="logo-text">Prairie Tech <span className="services-span">Services</span></span>
                        </div>
                        <p className="brand-desc">
                            High-performance web solutions for businesses in Alberta. Engineering digital products with precision.
                        </p>
                        <div className="social-tray">
                            <a href="https://www.facebook.com/profile.php?id=61579469731460" target="_blank" rel="noopener noreferrer" className="s-link" aria-label="Facebook"><Facebook size={18} /></a>
                            <a href="https://github.com/Param9478" target="_blank" rel="noopener noreferrer" className="s-link" aria-label="Github"><GitHub size={18} /></a>
                            <a href="mailto:info@prairietechs.com" className="s-link" aria-label="Email"><Mail size={18} /></a>
                        </div>
                    </div>

                    <div className="links-group">
                        <div className="l-col">
                            <label>Navigation</label>
                            <Link href="/">Home</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/projects">Projects</Link>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                        </div>

                        <div className="l-col">
                            <label>Contact</label>
                            <span className="l-info">
                                <MapPin size={15} className="footer-icon" />
                                High Prairie, Alberta
                            </span>
                            <a href="mailto:info@prairietechs.com" className="l-info highlight">
                                <Mail size={15} className="footer-icon" />
                                info@prairietechs.com
                            </a>
                            <span className="l-info">
                                <Globe size={15} className="footer-icon" />
                                prairietechs.com
                            </span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copy-text">
                        © {new Date().getFullYear()} Prairie Tech Services. <span className="hide-mobile">All Rights Reserved.</span>
                    </div>
                    <div className="legals">
                        <span>Registered in Alberta, Canada</span>
                    </div>
                </div>
            </div>

            <style>{`
        .footer-wrap { background: var(--bg); border-top: 1px solid var(--b1); padding: 100px 0 40px; }
        .footer-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .footer-cta-box { background: var(--card); border: 1px solid var(--b1); border-radius: 24px; padding: 48px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 80px; }
        .cta-content h3 { font-family: var(--font-display); font-size: 28px; color: var(--t1); margin-bottom: 8px; font-weight: 700; }
        .cta-content p { color: var(--t2); font-size: 16px; }
        .cta-link-btn { background: var(--accent); color: #fff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 600; display: flex; align-items: center; gap: 10px; transition: 0.3s; white-space: nowrap; }
        .cta-link-btn:hover { opacity: 0.9; transform: translateY(-2px); }
        .footer-main-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; margin-bottom: 80px; }
        .brand-col .brand-desc { color: var(--t2); font-size: 15px; line-height: 1.6; max-width: 340px; margin: 24px 0; }
        .footer-logo { display: flex; align-items: center; gap: 12px; }
        .logo-box { width: 40px; height: 40px; background: var(--bg3); border: 1px solid var(--b2); border-radius: 10px; display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0; }
        .footer-logo-img { width: 30px; height: 30px; object-fit: contain; }
        .logo-text { font-family: var(--font-display); font-size: 20px; font-weight: 700; color: var(--t1); }
        .logo-text .services-span { color: var(--t2); font-weight: 400; font-size: 16px; margin-left: 4px; }
        .social-tray { display: flex; gap: 12px; }
        .s-link { width: 42px; height: 42px; border-radius: 10px; background: var(--bg2); border: 1px solid var(--b2); display: flex; align-items: center; justify-content: center; color: var(--t1); transition: 0.3s; }
        .s-link:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
        .links-group { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .l-col { display: flex; flex-direction: column; gap: 16px; }
        .l-col label { font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--t1); font-weight: 800; margin-bottom: 8px; }
        .l-col a, .l-info { text-decoration: none; color: var(--t2); font-size: 15px; display: flex; align-items: center; gap: 12px; font-weight: 450; transition: 0.2s; }
        .l-col a:hover { color: var(--accent); }
        .footer-icon { color: var(--accent); flex-shrink: 0; }
        .l-info.highlight { color: var(--t1); font-weight: 600; }
        .footer-bottom { border-top: 1px solid var(--b1); padding-top: 40px; display: flex; justify-content: space-between; }
        .copy-text, .legals { font-size: 13px; color: var(--t2); }
        @media (max-width: 900px) {
          .footer-wrap { padding: 40px 0 30px; }
          .footer-cta-box { flex-direction: column; text-align: center; gap: 24px; padding: 40px 24px; margin-bottom: 60px; }
          .footer-main-grid { grid-template-columns: 1fr; gap: 40px; margin-bottom: 40px; }
        }
        @media (max-width: 600px) {
          .brand-col, .footer-logo, .social-tray, .l-col, .footer-bottom { align-items: center; text-align: center; justify-content: center; }
          .links-group { grid-template-columns: 1fr; text-align: center; }
          .l-info { justify-content: center; }
          .footer-bottom { flex-direction: column; gap: 12px; }
          .hide-mobile { display: none; }
        }
      `}</style>
        </footer>
    )
}