import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const solutions = [
  { title: "Process Mapping & Analysis", desc: "Document current workflows, identify inefficiencies, and design optimized future-state processes with clear ROI projections." },
  { title: "Robotic Process Automation (RPA)", desc: "Automate repetitive, rule-based tasks using RPA tools. Eliminate manual data entry, reconciliation, and reporting." },
  { title: "Business Process Outsourcing (BPO)", desc: "Managed operations for back-office functions — data processing, customer support, document management, and more." },
  { title: "ERP & CRM Integration", desc: "Connect your business systems to eliminate data silos, automate data flows, and create a single source of truth." },
  { title: "Workflow Automation", desc: "Design and deploy intelligent workflows that route tasks, trigger actions, and escalate exceptions automatically." },
  { title: "Performance Analytics", desc: "Real-time dashboards and KPI tracking so operations leadership has full visibility into process health and team productivity." },
];

const faqs = [
  {
    q: "What is business process management and why does it matter?",
    a: "BPM is the practice of systematically improving your business operations. It involves mapping processes, identifying waste, automating repetitive tasks, and measuring outcomes. Companies that invest in BPM typically reduce operational costs by 25-40% and improve throughput significantly.",
  },
  {
    q: "How long does a BPM engagement typically take?",
    a: "A process audit and redesign typically takes 4-6 weeks. Automation implementation takes 6-12 weeks depending on complexity. We deliver value incrementally — you see improvements within the first 30 days.",
  },
  {
    q: "What tools do you use for RPA and process automation?",
    a: "We work with UiPath, Automation Anywhere, Make (formerly Integromat), Zapier, n8n, and custom Python automation. Tool selection depends on your existing systems and complexity requirements.",
  },
  {
    q: "Do we need to replace our existing systems to benefit from BPM?",
    a: "No. We design solutions that work with your existing tools and infrastructure. Our goal is to augment and integrate what you have, not force expensive system replacements.",
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

export default function BusinessProcess() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <header className="pt-28 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(218, 56%, 8%) 0%, hsl(220, 70%, 16%) 100%)" }}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <Link to="/services" className="text-xs text-brand-light/60 hover:text-brand-light mb-4 inline-block transition-colors">← Back to Services</Link>
            <div className="inline-block text-xs font-semibold tracking-widest text-brand-light/80 uppercase mb-4">Business Process Management</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Automate Operations. <span className="gradient-text">Scale Without Headcount.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              Business process automation services that eliminate manual work, reduce errors,
              and free your team to focus on work that actually moves the business forward.
            </p>
          </div>
        </div>
      </header>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Growing Teams Shouldn't Mean Growing Complexity
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Manual processes that worked at 10 employees break at 50. Disconnected systems create
            data gaps. Repetitive tasks drain high-value team members. Business process management
            is how scaling companies remove friction from their operations and multiply team output.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4 section-heading section-heading-center">BPM Services</h2>
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
          <h2 className="font-display text-2xl font-bold text-white text-center mb-8">Measurable Impact</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metric: "40%", label: "Average Operational Cost Reduction" },
              { metric: "80%", label: "Manual Tasks Eliminated" },
              { metric: "3x", label: "Team Productivity Increase" },
              { metric: "100%", label: "Process Visibility Achieved" },
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
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Automate Your Business Processes?</h2>
          <p className="text-white/80 mb-6">Get a free process audit and automation opportunity report.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors">
            Get Free Process Audit <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
