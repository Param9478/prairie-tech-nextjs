'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
    ArrowRight, Zap, Shield, CheckCircle2,
    Laptop, ShoppingCart, Code, Settings,
    Terminal, ShieldCheck, Globe, Cpu, Smartphone
} from 'lucide-react'

// Spline dynamic load
const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => <div className="loader-placeholder" />
})

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }
})

export default function LandingPage() {
    const [mounted, setMounted] = useState(false)
    const [splineLoaded, setSplineLoaded] = useState(false)

    useEffect(() => { setMounted(true) }, [])
    if (!mounted) return null

    return (
        <div className="lp-container">
            {/* ─── HERO SECTION ─── */}
            <section className="hero-wrap">
                <div className="container hero-grid">
                    <div className="hero-content">
                        <motion.div {...fadeUp(0)} className="badge">
                            <span className="dot" /> Based in High Prairie, AB
                        </motion.div>

                        <motion.h1 {...fadeUp(0.1)} className="main-title">
                            Digital Growth <br />
                            <span className="text-gradient">Simplified.</span>
                        </motion.h1>

                        <motion.p {...fadeUp(0.2)} className="sub-text">
                            We build high-performance websites and IT infrastructure for local businesses.
                            From **The Boondocks Grill** to your next big idea.
                        </motion.p>

                        <motion.div {...fadeUp(0.3)} className="cta-group">
                            <Link href="/contact" className="btn-prime">
                                Start Your Project <ArrowRight size={18} />
                            </Link>
                            <Link href="/work" className="btn-sec">View Our Work</Link>
                        </motion.div>

                        <motion.div {...fadeUp(0.4)} className="tech-stack">
                            <p>Expertise in:</p>
                            <div className="stack-icons">
                                <span>React</span> • <span>Next.js</span> • <span>Node</span> • <span>Cloud IT</span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="hero-visual">
                        <AnimatePresence>
                            {!splineLoaded && <div className="spline-loading">Loading 3D Experience...</div>}
                        </AnimatePresence>
                        <Spline
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            onLoad={() => setSplineLoaded(true)}
                        />
                    </div>
                </div>
            </section>

            {/* ─── SERVICES GRID ─── */}
            <section className="services-wrap">
                <div className="container">
                    <motion.div {...fadeUp()} className="section-head">
                        <span className="tag">What We Do</span>
                        <h2 className="title-md">Tailored Solutions for Your Business</h2>
                    </motion.div>

                    <div className="grid-3">
                        {[
                            {
                                title: "Web Development",
                                desc: "Fast, SEO-optimized sites that turn visitors into customers.",
                                icon: <Globe size={24} />
                            },
                            {
                                title: "IT Infrastructure",
                                desc: "Secure networking, firewall setup, and business hardware support.",
                                icon: <Cpu size={24} />
                            },
                            {
                                title: "E-Commerce",
                                desc: "Full-scale online stores with seamless payment integration.",
                                icon: <ShoppingCart size={24} />
                            }
                        ].map((s, i) => (
                            <motion.div key={i} {...fadeUp(i * 0.1)} className="glass-card">
                                <div className="card-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── WHY LOCAL SECTION ─── */}
            <section className="local-trust">
                <div className="container trust-box">
                    <div className="trust-text">
                        <h2 className="title-md">Why Choose Prairie Tech?</h2>
                        <div className="check-list">
                            <div className="check-item"><CheckCircle2 color="var(--accent)" /> <span>Direct Developer Access (No Middlemen)</span></div>
                            <div className="check-item"><CheckCircle2 color="var(--accent)" /> <span>Under 2-Week Turnaround for Most Sites</span></div>
                            <div className="check-item"><CheckCircle2 color="var(--accent)" /> <span>On-Site IT Support in Northern Alberta</span></div>
                        </div>
                    </div>
                    <div className="trust-stats">
                        <div className="stat-card">
                            <h4>100%</h4>
                            <p>Local Delivery</p>
                        </div>
                        <div className="stat-card">
                            <h4>24/7</h4>
                            <p>Reliability</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CTA FOOTER ─── */}
            <section className="final-cta">
                <motion.div {...fadeUp()} className="cta-inner">
                    <h2>Ready to Build Your Digital Presence?</h2>
                    <p>Let's grab a coffee in High Prairie or jump on a quick call.</p>
                    <Link href="/contact" className="btn-prime big">Book My Free Consultation</Link>
                </motion.div>
            </section>

            <style jsx>{`
                /* CSS VARIABLES - Next.js globals matching */
                :root {
                    --bg: #050505;
                    --card: rgba(255, 255, 255, 0.03);
                    --accent: #3b82f6;
                    --t1: #ffffff;
                    --t2: #a1a1aa;
                    --b1: rgba(255, 255, 255, 0.1);
                }

                .lp-container { background: var(--bg); color: var(--t1); font-family: 'Inter', sans-serif; }
                .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
                
                /* HERO */
                .hero-wrap { min-height: 100vh; display: flex; align-items: center; padding-top: 80px; position: relative; overflow: hidden; }
                .hero-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; align-items: center; }
                .main-title { font-size: clamp(40px, 8vw, 84px); font-weight: 800; line-height: 1; letter-spacing: -0.03em; margin: 20px 0; }
                .text-gradient { background: linear-gradient(to right, #60a5fa, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .sub-text { font-size: 1.2rem; color: var(--t2); max-width: 500px; line-height: 1.6; margin-bottom: 40px; }
                .badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); padding: 6px 16px; border-radius: 100px; font-size: 14px; color: #60a5fa; }
                .dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 10px #22c55e; }
                
                .hero-visual { height: 600px; position: relative; }
                .spline-loading { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: var(--t2); }

                /* BUTTONS */
                .cta-group { display: flex; gap: 16px; margin-bottom: 50px; }
                .btn-prime { background: var(--accent); color: white; padding: 16px 32px; border-radius: 12px; font-weight: 600; text-decoration: none; display: flex; align-items: center; gap: 8px; transition: 0.3s; }
                .btn-prime:hover { transform: translateY(-3px); box-shadow: 0 20px 40px -10px rgba(59, 130, 246, 0.5); }
                .btn-sec { background: transparent; border: 1px solid var(--b1); padding: 16px 32px; border-radius: 12px; color: white; text-decoration: none; transition: 0.3s; }
                .btn-sec:hover { background: var(--card); }

                /* SERVICES */
                .services-wrap { padding: 100px 0; }
                .section-head { text-align: center; margin-bottom: 60px; }
                .tag { color: var(--accent); text-transform: uppercase; letter-spacing: 0.2em; font-size: 12px; font-weight: 700; }
                .title-md { font-size: clamp(28px, 4vw, 42px); margin-top: 10px; }
                .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
                .glass-card { background: var(--card); border: 1px solid var(--b1); padding: 40px; border-radius: 24px; transition: 0.3s; }
                .glass-card:hover { border-color: var(--accent); background: rgba(255, 255, 255, 0.05); transform: translateY(-10px); }
                .card-icon { color: var(--accent); margin-bottom: 20px; }

                /* TRUST SECTION */
                .local-trust { padding: 80px 0; }
                .trust-box { background: linear-gradient(145deg, #0a0a0a, #111); border: 1px solid var(--b1); padding: 60px; border-radius: 40px; display: grid; grid-template-columns: 1.5fr 1fr; gap: 40px; align-items: center; }
                .check-list { margin-top: 30px; display: grid; gap: 16px; }
                .check-item { display: flex; align-items: center; gap: 12px; font-size: 1.1rem; }
                .trust-stats { display: flex; gap: 20px; }
                .stat-card { background: var(--bg); border: 1px solid var(--b1); padding: 30px; border-radius: 20px; flex: 1; text-align: center; }
                .stat-card h4 { font-size: 32px; color: var(--accent); margin-bottom: 5px; }

                /* FINAL CTA */
                .final-cta { padding: 120px 0; text-align: center; }
                .cta-inner { max-width: 800px; margin: 0 auto; background: var(--accent); padding: 80px 40px; border-radius: 40px; color: white; }
                .cta-inner h2 { font-size: 36px; margin-bottom: 20px; }
                .cta-inner p { opacity: 0.9; margin-bottom: 40px; font-size: 18px; }
                .btn-prime.big { background: white; color: var(--accent); font-size: 18px; display: inline-flex; }

                @media (max-width: 900px) {
                    .hero-grid { grid-template-columns: 1fr; text-align: center; }
                    .hero-content { display: flex; flex-direction: column; align-items: center; order: 2; }
                    .hero-visual { order: 1; height: 400px; }
                    .trust-box { grid-template-columns: 1fr; padding: 40px 24px; }
                    .cta-group { flex-direction: column; width: 100%; }
                }
            `}</style>
        </div>
    )
}