import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const solutions = [
  { title: "Web Application Development", desc: "Scalable, high-performance web apps using React, Next.js, and Node.js with modern architecture patterns." },
  { title: "Mobile App Development", desc: "Cross-platform mobile applications with React Native. Native performance, shared codebase." },
  { title: "API & Backend Development", desc: "RESTful APIs, GraphQL, microservices architectures designed for reliability and horizontal scale." },
  { title: "SaaS Product Development", desc: "End-to-end SaaS platform development from MVP to enterprise-ready with multi-tenancy, billing, and analytics built in." },
  { title: "Database Architecture", desc: "Schema design, query optimization, and data modeling for PostgreSQL, MongoDB, Redis, and distributed databases." },
  { title: "Legacy System Modernization", desc: "Migrate legacy codebases to modern stacks without business disruption. Incremental migration strategies." },
];

const process = [
  { step: "01", title: "Discovery & Architecture", desc: "Requirements gathering, system design, technology selection, and detailed technical specifications." },
  { step: "02", title: "Agile Development Sprints", desc: "2-week sprints with demos, code reviews, and continuous delivery to staging environments." },
  { step: "03", title: "QA & Security Testing", desc: "Automated testing, manual QA, security audits, and performance testing before any production release." },
  { step: "04", title: "Deployment & Handover", desc: "CI/CD pipeline setup, production deployment, documentation, and team knowledge transfer." },
];

const faqs = [
  {
    q: "How long does it take to build a custom software product?",
    a: "An MVP typically takes 8-12 weeks. A full-featured product takes 16-24 weeks depending on complexity. We always define scope clearly upfront so there are no surprises.",
  },
  {
    q: "What tech stack do you use for custom software development?",
    a: "We primarily use React/Next.js for frontend, Node.js/Python for backend, PostgreSQL/MongoDB for databases, and AWS/GCP for hosting. We select the best stack for your specific requirements.",
  },
  {
    q: "Do you provide post-launch maintenance and support?",
    a: "Yes. We offer retainer-based maintenance plans covering bug fixes, security patches, performance monitoring, and feature development.",
  },
  {
    q: "Can you work with our existing development team?",
    a: "Absolutely. We can augment your team with specialist engineers, or work as a fully autonomous development pod. Both models are available.",
  },
  {
    q: "How do you handle IP and code ownership?",
    a: "All code and intellectual property developed belongs 100% to you upon final payment. We sign clear NDAs and IP assignment agreements at project start.",
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

export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <header className="pt-28 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(218, 56%, 8%) 0%, hsl(220, 70%, 16%) 100%)" }}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <Link to="/services" className="text-xs text-brand-light/60 hover:text-brand-light mb-4 inline-block transition-colors">← Back to Services</Link>
            <div className="inline-block text-xs font-semibold tracking-widest text-brand-light/80 uppercase mb-4">Custom Software Development</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Software That <span className="gradient-text">Scales With Your Business</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              We are a custom software development company India businesses trust to build production-grade
              systems — from SaaS platforms to enterprise APIs. Engineering excellence at every layer.
            </p>
          </div>
        </div>
      </header>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Generic Development Fails Growing Companies
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Offshore dev shops deliver code that works today but breaks at scale. Freelancers disappear.
              Agencies over-promise and under-deliver. Growing companies need a development partner who
              understands architecture, performance, and business context simultaneously.
              That's PG Unique Digital Solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4 section-heading section-heading-center">Development Services</h2>
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

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs", "React Native", "AWS", "Docker", "Kubernetes", "GitHub Actions"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full border border-border bg-background text-sm text-foreground hover:border-primary/40 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12 section-heading section-heading-center">Development Process</h2>
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

      <section className="py-16 bg-brand-navy">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-white text-center mb-8">Delivered Outcomes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metric: "50+", label: "Software Products Shipped" },
              { metric: "99.9%", label: "Uptime SLA Delivered" },
              { metric: "8-12 wks", label: "Average MVP Timeline" },
              { metric: "0", label: "Production Downtime Events" },
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
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Build Your Software Product?</h2>
          <p className="text-white/80 mb-6 text-lg">Get a free technical consultation and project estimate.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors">
            Get Free Technical Review <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
