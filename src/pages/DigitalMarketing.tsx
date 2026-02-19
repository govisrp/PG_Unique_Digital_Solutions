import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const solutions = [
  { title: "Search Engine Optimization (SEO)", desc: "Technical SEO, on-page optimization, link building, and local SEO. Rank for the keywords that bring revenue, not just traffic." },
  { title: "Paid Advertising (PPC)", desc: "Google Ads, Meta Ads, LinkedIn Ads — built for ROI. Rigorous A/B testing, audience segmentation, and bid optimization." },
  { title: "Social Media Marketing", desc: "Organic + paid social strategies that build brand authority and generate pipeline across Instagram, LinkedIn, and YouTube." },
  { title: "Content Marketing", desc: "Strategic content that ranks, converts, and builds trust. Blog, video, case studies, and thought leadership frameworks." },
  { title: "Conversion Rate Optimization", desc: "Heatmaps, session recordings, A/B testing — turning existing traffic into more leads and customers." },
  { title: "Email & Marketing Automation", desc: "CRM-integrated email sequences, drip campaigns, and lifecycle automation that nurtures leads at scale." },
];

const process = [
  { step: "01", title: "Audit & Strategy", desc: "Deep analysis of your current digital presence, competitors, and growth opportunities." },
  { step: "02", title: "Campaign Architecture", desc: "Build the targeting, messaging, funnel, and tracking infrastructure before spending a rupee." },
  { step: "03", title: "Launch & Test", desc: "Execute campaigns with rapid iteration cycles. Test creatives, audiences, and copy constantly." },
  { step: "04", title: "Scale & Optimize", desc: "Double down on what works. Eliminate what doesn't. Scale profitably." },
];

const faqs = [
  {
    q: "How long before we see results from SEO?",
    a: "SEO results typically begin showing within 3-6 months for most competitive keywords. Quick wins can appear within 30-60 days for lower-competition terms. We provide monthly reporting with clear progress metrics.",
  },
  {
    q: "What's the minimum budget for paid advertising?",
    a: "We recommend a minimum ad spend of ₹30,000-50,000/month to gather meaningful data and optimize effectively. Our management fee is separate. We always present a clear ROI case before any spend.",
  },
  {
    q: "Do you specialize in B2B or B2C digital marketing?",
    a: "We have strong experience in both. Our approach differs — B2B focuses more on LinkedIn, content, and lead nurturing while B2C is more performance-focused on Meta, Google, and conversion optimization.",
  },
  {
    q: "How do you measure marketing ROI?",
    a: "We track end-to-end: impressions → clicks → leads → qualified leads → customers → revenue. We set up proper attribution and integrate with your CRM so every rupee of spend is accountable.",
  },
  {
    q: "What's included in your SEO and performance marketing agency services?",
    a: "Full-spectrum: keyword research, technical SEO, content strategy, on-page optimization, link building, local SEO, Google Ads, Meta Ads, analytics setup, and monthly performance reporting.",
  },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item py-4">
      <button
        className="w-full flex items-center justify-between text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-foreground">{q}</span>
        <ChevronDown size={18} className={`text-primary flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pt-3 text-muted-foreground text-sm leading-relaxed">{a}</div>
      )}
    </div>
  );
}

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <header
        className="pt-28 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(218, 56%, 8%) 0%, hsl(220, 70%, 16%) 100%)" }}
      >
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <Link to="/services" className="text-xs text-brand-light/60 hover:text-brand-light mb-4 inline-block transition-colors">
              ← Back to Services
            </Link>
            <div className="inline-block text-xs font-semibold tracking-widest text-brand-light/80 uppercase mb-4">
              Digital Marketing
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Performance Marketing That{" "}
              <span className="gradient-text">Generates Revenue</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              We are an SEO and performance marketing agency that connects strategy to execution.
              Data-driven campaigns that generate qualified leads, not just impressions.
            </p>
          </div>
        </div>
      </header>

      {/* Problem */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Most Marketing Agencies Optimize for Vanity Metrics. We Optimize for Revenue.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              High website traffic with low conversions. Beautiful social media with no pipeline. Ad spend
              without attribution. Sound familiar? Most digital marketing agencies don't connect their work
              to your revenue. We do. Every campaign we run is tied to a measurable business outcome.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4 section-heading section-heading-center">
              Our Digital Marketing Services
            </h2>
            <p className="text-muted-foreground text-lg">Full-funnel marketing systems, not one-off campaigns.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-card transition-all">
                <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">Technologies & Platforms</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Google Ads", "Meta Business Suite", "Google Analytics 4", "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "LinkedIn Ads", "Google Search Console", "Hotjar", "Klaviyo", "Zapier"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full border border-border bg-background text-sm text-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12 section-heading section-heading-center">
            Our Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center p-6 rounded-2xl bg-secondary">
                <div className="stat-number font-display text-4xl font-bold mb-3">{p.step}</div>
                <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-brand-navy">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-white text-center mb-8">Measurable Outcomes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metric: "3x", label: "Average ROAS Improvement" },
              { metric: "60%", label: "Average CPL Reduction" },
              { metric: "Top 3", label: "Google Rankings Achieved" },
              { metric: "45%", label: "Organic Traffic Growth" },
            ].map((m) => (
              <div key={m.label} className="text-center p-6 rounded-xl glass-card">
                <div className="stat-number font-display text-4xl font-bold mb-1">{m.metric}</div>
                <div className="text-white/65 text-sm">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-10 section-heading section-heading-center">
            Frequently Asked Questions
          </h2>
          <div className="border-t border-border">
            {faqs.map((faq) => (
              <FAQ key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-brand">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to 3x Your Marketing ROI?
          </h2>
          <p className="text-white/80 mb-6 text-lg">Get a free audit of your current marketing setup.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors"
          >
            Get Free Marketing Audit <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
