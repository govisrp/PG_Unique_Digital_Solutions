import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Code2, Cloud, Cog, Headphones, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "SEO, PPC, social media advertising, content marketing, and conversion rate optimization for measurable growth.",
    href: "/services/digital-marketing",
    tags: ["SEO", "Google Ads", "Meta Ads", "Content Marketing", "CRO", "Email Marketing"],
    outcomes: ["3x average ROAS improvement", "60% reduction in CPL", "Top 3 Google rankings"],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Full-stack web apps, mobile applications, APIs, SaaS platforms, and enterprise software built for scale.",
    href: "/services/software-development",
    tags: ["React", "Node.js", "Python", "PostgreSQL", "REST APIs", "Mobile Apps"],
    outcomes: ["Production-ready in 8-12 weeks", "99.9% uptime SLA", "Scalable to millions of users"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud migration, infrastructure automation, CI/CD pipelines, Kubernetes, and 24/7 monitoring.",
    href: "/services/cloud-devops",
    tags: ["AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform"],
    outcomes: ["45% average cost reduction", "10x deployment speed", "Zero-downtime migrations"],
  },
  {
    icon: Cog,
    title: "Business Process Management",
    description: "Workflow mapping, process automation, RPA implementation, and operational excellence frameworks.",
    href: "/services/business-process",
    tags: ["RPA", "Process Mapping", "Automation", "BPO", "ERP Integration", "Analytics"],
    outcomes: ["40% operational cost reduction", "80% manual task elimination", "Full process visibility"],
  },
  {
    icon: Headphones,
    title: "Telecalling & Lead Operations",
    description: "Trained inbound and outbound calling teams with CRM integration and real-time lead pipeline management.",
    href: "/services/telecalling",
    tags: ["Lead Generation", "CRM", "Inside Sales", "Outbound Calling", "Appointment Setting"],
    outcomes: ["200% more qualified leads", "Sub-2hr lead response time", "Full CRM integration"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <header
        className="pt-28 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(218, 56%, 8%) 0%, hsl(220, 70%, 16%) 100%)" }}
      >
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-block text-xs font-semibold tracking-widest text-brand-light/80 uppercase mb-4">
            Our Services
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            End-to-End Digital Transformation{" "}
            <span className="gradient-text">Services</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Every service we offer is built to generate measurable business impact.
            From marketing to engineering to operations — we execute, not just advise.
          </p>
          <Link
            to="/contact"
            className="btn-brand inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white"
          >
            Get Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </header>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="group grid lg:grid-cols-3 gap-6 p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-card transition-all bg-card"
              >
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl feature-icon flex items-center justify-center">
                      <service.icon size={22} />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Service 0{i + 1}</span>
                      <h2 className="font-display font-bold text-foreground text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs bg-secondary text-secondary-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={service.href}
                    className="btn-brand inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
                  >
                    Explore {service.title} <ChevronRight size={16} />
                  </Link>
                </div>

                <div className="bg-secondary rounded-xl p-5">
                  <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">
                    Typical Outcomes
                  </div>
                  <div className="space-y-2.5">
                    {service.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-brand">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Which Service Does Your Business Need?
          </h2>
          <p className="text-white/80 mb-6 text-lg">
            Let's diagnose your situation and match the right solution to your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors"
          >
            Book Free Strategy Call <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
