import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const solutions = [
  { title: "Cloud Migration & Architecture", desc: "Move from on-premise to cloud (AWS, GCP, Azure) with zero-downtime migration strategies and optimized architecture." },
  { title: "DevOps Consulting & Implementation", desc: "CI/CD pipeline design, GitOps workflows, infrastructure-as-code, and developer productivity toolchains." },
  { title: "Container Orchestration", desc: "Docker containerization, Kubernetes cluster management, and Helm chart development for microservices at scale." },
  { title: "Infrastructure as Code (IaC)", desc: "Terraform, Ansible, and CloudFormation for reproducible, version-controlled infrastructure that teams can trust." },
  { title: "Monitoring & Observability", desc: "End-to-end observability with Prometheus, Grafana, ELK Stack, and alerting systems that catch issues before users do." },
  { title: "Cloud Cost Optimization", desc: "Rightsize compute, architect for cost efficiency, and implement FinOps practices to reduce cloud bills by 30-50%." },
];

const process = [
  { step: "01", title: "Infrastructure Audit", desc: "Assess current infrastructure, identify risks, bottlenecks, and cost optimization opportunities." },
  { step: "02", title: "Architecture Design", desc: "Design target architecture for reliability, security, scalability, and cost optimization." },
  { step: "03", title: "Migration & Implementation", desc: "Execute migration with rigorous testing at each phase. Zero business disruption." },
  { step: "04", title: "Handover & Documentation", desc: "Full runbooks, documentation, and team training for long-term operational independence." },
];

const faqs = [
  {
    q: "What does a DevOps consulting engagement look like?",
    a: "It starts with a 1-2 week assessment of your current SDLC, infrastructure, and deployment processes. We then design and implement improvements in phases — CI/CD first, then IaC, then monitoring, then cost optimization.",
  },
  {
    q: "Which cloud provider do you recommend — AWS, GCP, or Azure?",
    a: "It depends on your team's existing skills, workload characteristics, and vendor relationships. We work across all three and provide unbiased recommendations based on your specific situation.",
  },
  {
    q: "How do you ensure zero downtime during cloud migration?",
    a: "We use blue-green deployments, feature flags, strangler fig patterns, and incremental traffic shifting. Every migration is rehearsed in staging before production execution.",
  },
  {
    q: "Can you help us reduce our cloud bills without compromising performance?",
    a: "Yes — cloud cost optimization is one of our core services. We typically reduce costs by 30-50% through rightsizing, reserved instances, spot instances for batch workloads, and architecture optimizations.",
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

export default function CloudDevOps() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <header className="pt-28 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(218, 56%, 8%) 0%, hsl(220, 70%, 16%) 100%)" }}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <Link to="/services" className="text-xs text-brand-light/60 hover:text-brand-light mb-4 inline-block transition-colors">← Back to Services</Link>
            <div className="inline-block text-xs font-semibold tracking-widest text-brand-light/80 uppercase mb-4">Cloud & DevOps</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Cloud Deployment & <span className="gradient-text">DevOps Solutions</span> That Scale
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              From cloud migration to CI/CD pipelines to Kubernetes orchestration — we modernize your
              infrastructure so your engineering team ships faster with higher confidence.
            </p>
          </div>
        </div>
      </header>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Slow Deployments, Fragile Infrastructure, and Unpredictable Cloud Bills
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Engineering teams that deploy manually, run on bare metal, or lack proper monitoring are
            constantly fighting fires instead of building product. Our cloud and DevOps solutions
            eliminate infrastructure anxiety and give your team the confidence to ship fast, safely.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4 section-heading section-heading-center">Cloud & DevOps Services</h2>
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
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">Technologies We Work With</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["AWS", "Google Cloud", "Microsoft Azure", "Kubernetes", "Docker", "Terraform", "Ansible", "GitHub Actions", "GitLab CI", "ArgoCD", "Prometheus", "Grafana", "ELK Stack", "Helm", "Istio", "Vault"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full border border-border bg-background text-sm text-foreground hover:border-primary/40 transition-colors cursor-default">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12 section-heading section-heading-center">Our Engagement Process</h2>
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
          <h2 className="font-display text-2xl font-bold text-white text-center mb-8">Proven Results</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metric: "45%", label: "Average Cost Reduction" },
              { metric: "10x", label: "Faster Deployments" },
              { metric: "99.99%", label: "Uptime Achieved" },
              { metric: "0", label: "Production Incidents (post-implementation)" },
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
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Modernize Your Infrastructure?</h2>
          <p className="text-white/80 mb-6 text-lg">Get a free cloud infrastructure audit.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors">
            Get Free Infrastructure Audit <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
