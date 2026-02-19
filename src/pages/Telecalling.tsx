import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const solutions = [
  { title: "Outbound Lead Generation", desc: "Targeted cold calling campaigns with researched prospect lists, customized scripts, and quality call recordings." },
  { title: "Inbound Lead Handling", desc: "Rapid response to inbound inquiries with trained callers who qualify leads to your sales criteria before handoff." },
  { title: "Appointment Setting", desc: "Full appointment booking service — we call, qualify, and schedule meetings directly on your sales team's calendar." },
  { title: "CRM Integration & Pipeline Management", desc: "All lead data flows into your CRM in real-time. No spreadsheets, no data loss, complete pipeline visibility." },
  { title: "Lead Nurturing Sequences", desc: "Multi-touch follow-up sequences combining calls, SMS, and email to convert prospects over longer sales cycles." },
  { title: "Sales Analytics & Reporting", desc: "Daily dashboards showing calls made, connect rates, leads qualified, and pipeline generated — with full transparency." },
];

const faqs = [
  {
    q: "What industries do your telecalling teams specialize in?",
    a: "We have experience across real estate, EdTech, FinTech, healthcare, SaaS, and manufacturing. We invest in industry-specific training so callers understand your offering, not just scripts.",
  },
  {
    q: "How quickly can you start a telecalling campaign?",
    a: "We can typically onboard and launch within 7-14 days. This includes script development, team training, CRM setup, and compliance review.",
  },
  {
    q: "How do you ensure lead quality?",
    a: "We define qualification criteria with you upfront — budget, authority, need, timeline (BANT or your framework). Callers only pass leads that meet your criteria. We record all calls for quality review.",
  },
  {
    q: "Do you provide lead generation services for the Indian market specifically?",
    a: "Yes — we specialize in lead generation services India-wide. Our teams understand regional languages, business culture, and market dynamics across Tier 1, 2, and 3 cities.",
  },
  {
    q: "What's the minimum engagement size?",
    a: "Minimum engagements start with a team of 3 callers. We recommend 90-day minimum contracts to allow for optimization and ramp-up.",
  },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item py-4">
      <button className="w-full flex items-center justify-between text-left gap-4" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="font-medium text-foreground">{q}</span>
        <ChevronDown size={18} className={`text-primary flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pt-3 text-muted-foreground text-sm leading-relaxed">{a}</div>}
    </div>
  );
}

export default function Telecalling() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <header className="pt-28 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(218, 56%, 8%) 0%, hsl(220, 70%, 16%) 100%)" }}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <Link to="/services" className="text-xs text-brand-light/60 hover:text-brand-light mb-4 inline-block transition-colors">← Back to Services</Link>
            <div className="inline-block text-xs font-semibold tracking-widest text-brand-light/80 uppercase mb-4">Telecalling & Lead Operations</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Qualified Leads. <span className="gradient-text">Consistent Pipeline. Zero Guesswork.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              Our trained telecalling teams generate and manage your inbound and outbound lead
              pipeline with CRM integration, quality tracking, and full transparency.
              Lead generation services India businesses rely on for predictable revenue.
            </p>
          </div>
        </div>
      </header>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Sales Teams Shouldn't Waste Time on Unqualified Prospects
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Your high-value sales reps are spending 60% of their time on prospecting and follow-up.
            That's revenue left on the table. Our telecalling and lead operations teams handle the
            top of your funnel so your closers can focus on closing.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4 section-heading section-heading-center">Lead Operations Services</h2>
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

      <section className="py-16 bg-brand-navy">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-white text-center mb-8">Typical Performance Benchmarks</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metric: "200%", label: "More Qualified Leads" },
              { metric: "<2hr", label: "Lead Response Time" },
              { metric: "35%", label: "Connect-to-Qualify Rate" },
              { metric: "100%", label: "CRM Integration" },
            ].map((m) => (
              <div key={m.label} className="text-center p-6 rounded-xl glass-card">
                <div className="stat-number font-display text-4xl font-bold mb-1">{m.metric}</div>
                <div className="text-white/65 text-sm">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-10 section-heading section-heading-center">FAQ</h2>
          <div className="border-t border-border">
            {faqs.map((faq) => <FAQ key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-brand">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Build a Predictable Lead Pipeline?</h2>
          <p className="text-white/80 mb-6">Get a free lead operations assessment.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors">
            Start Lead Generation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
