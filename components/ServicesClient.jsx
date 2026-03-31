'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check, Layout, ShoppingBag, Terminal, Zap, Settings, Link as LinkIcon } from 'lucide-react'

const services = [
    {
        icon: <Layout size={22} />, title: 'Business Websites',
        desc: 'Professional 5–7 page sites that make a strong first impression. Mobile-first & SEO-ready.',
        price: '$800', tag: 'Popular',
        features: ['5–7 responsive pages', 'Basic SEO setup', 'Contact form integration'],
    },
    {
        icon: <ShoppingBag size={22} />, title: 'E-Commerce Stores',
        desc: 'Full online stores with payment integration and custom delivery zones.',
        price: '$1,500',
        features: ['Stripe / PayPal', 'Inventory tracking', 'Order dashboard'],
    },
    {
        icon: <Terminal size={22} />, title: 'Custom Web Apps',
        desc: 'Booking systems, client portals, and internal tools built for your workflow.',
        price: '$2,000+',
        features: ['User Auth', 'Custom Database', 'Admin Panel'],
    },
    {
        icon: <Zap size={22} />, title: 'Landing Pages',
        desc: 'High-converting single-page sites for campaigns or product launches.',
        price: '$400',
        features: ['Lead capture form', 'Analytics setup', 'Fast turnaround'],
    },
    {
        icon: <Settings size={22} />, title: 'Maintenance',
        desc: 'Monthly retainer to keep your site updated, secure, and performing best.',
        price: '$100/mo',
        features: ['Security monitoring', 'Regular backups', 'Content updates'],
    },
    {
        icon: <LinkIcon size={22} />, title: 'API & Integrations',
        desc: 'Connect your site to CRMs, booking platforms, and third-party services.',
        price: 'Custom',
        features: ['CRM integration', 'Email automation', 'Webhook config'],
    },
]

export default function ServicesClient() {
    return (
        <div className="page-wrap" style={{ background: 'var(--bg)', minHeight: '100vh' }}>

            {/* HEADER */}
            <section className="svc-header">
                <div className="orb" style={{ width: 400, height: 400, background: 'var(--accent-glow)', top: -100, left: '50%', transform: 'translateX(-50%)' }} />
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="sec-tag">Capabilities</div>
                        <h1 className="sec-title" style={{ fontSize: 'clamp(44px, 7vw, 84px)', marginBottom: 24 }}>
                            Our <span className="grad-text">Services</span>
                        </h1>
                        <p className="svc-subtitle">
                            Fixed prices. Clear scope. On-time delivery. We build tools that grow your business.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* GRID */}
            <section className="svc-grid-sec">
                <div className="container">
                    <div className="svc-grid">
                        {services.map((s, i) => (
                            <motion.div
                                key={s.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -5 }}
                                className="svc-card"
                            >
                                {s.tag && <span className="svc-tag">{s.tag}</span>}

                                <div className="svc-icon-box">{s.icon}</div>

                                <h2 className="svc-title">{s.title}</h2>
                                <p className="svc-desc">{s.desc}</p>

                                <div className="svc-features">
                                    {s.features.map(f => (
                                        <div key={f} className="svc-feature-row">
                                            <Check size={14} color="var(--accent)" strokeWidth={3} />
                                            {f}
                                        </div>
                                    ))}
                                </div>

                                <div className="svc-footer">
                                    <div>
                                        <div className="svc-investment-label">Investment</div>
                                        <div className="svc-price">{s.price}</div>
                                    </div>
                                    <Link href="/contact">
                                        <motion.div whileHover={{ x: 5 }} className="svc-arrow-btn">
                                            <ArrowRight size={18} />
                                        </motion.div>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="svc-cta-sec">
                <div className="container">
                    <div className="svc-cta-box">
                        <div className="orb" style={{ width: 300, height: 300, background: 'var(--accent-glow)', bottom: -150, right: -100 }} />
                        <h2 className="sec-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: 20 }}>
                            Ready to <span className="grad-text">get started?</span>
                        </h2>
                        <p className="svc-cta-desc">Contact us today for a free consultation and a detailed quote.</p>
                        <Link href="/contact">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary">
                                Book a Free Call
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </section>

            <style>{`
        .container { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
        .svc-header { padding: 120px 48px 80px; position: relative; text-align: center; }
        .svc-subtitle { font-size: 18px; color: var(--t2); font-weight: 300; max-width: 600px; margin: 0 auto; line-height: 1.7; }
        .svc-grid-sec { padding: 0 0 100px; }
        .svc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px; }
        .svc-card { background: var(--card); border: 1px solid var(--b1); border-radius: 24px; padding: 40px; position: relative; transition: all 0.3s ease; }
        .svc-card:hover { border-color: var(--accent-border); background: var(--card2); }
        .svc-tag { position: absolute; top: 24px; right: 24px; background: var(--accent-glow); color: var(--accent-bright); font-size: 10px; font-weight: 600; padding: 4px 12px; border-radius: 100px; border: 1px solid var(--accent-border); text-transform: uppercase; letter-spacing: 0.05em; }
        .svc-icon-box { width: 48px; height: 48px; border-radius: 12px; background: var(--bg3); display: flex; align-items: center; justify-content: center; color: var(--accent); margin-bottom: 28px; }
        .svc-title { font-family: var(--font-display); font-weight: 600; font-size: 24px; color: var(--t1); margin-bottom: 12px; letter-spacing: -0.02em; }
        .svc-desc { font-size: 14px; color: var(--t2); line-height: 1.6; margin-bottom: 28px; }
        .svc-features { margin-bottom: 32px; display: flex; flex-direction: column; gap: 8px; }
        .svc-feature-row { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--t2); }
        .svc-footer { display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--b1); padding-top: 24px; }
        .svc-investment-label { font-size: 10px; color: var(--t3); text-transform: uppercase; letter-spacing: 0.1em; }
        .svc-price { font-size: 22px; font-weight: 700; color: var(--t1); font-family: var(--font-display); }
        .svc-arrow-btn { width: 44px; height: 44px; border-radius: 50%; background: var(--accent); color: #fff; display: flex; align-items: center; justify-content: center; transition: 0.2s; }
        .svc-cta-sec { padding: 0 48px 120px; }
        .svc-cta-box { background: var(--card); border: 1px solid var(--b2); border-radius: 32px; padding: 80px 40px; text-align: center; position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; }
        .svc-cta-desc { color: var(--t2); margin-bottom: 40px; font-weight: 300; }
        .btn-primary { background: var(--accent); color: var(--accent-t); padding: 16px 40px; border-radius: 12px; font-weight: 600; font-size: 15px; box-shadow: 0 10px 30px var(--accent-glow); border: none; cursor: pointer; font-family: var(--font-body); }
        @media (max-width: 768px) {
          .container, .svc-header, .svc-cta-sec { padding-left: 24px !important; padding-right: 24px !important; }
          .svc-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    )
}