import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";
import {
  ArrowRight, Phone, CheckCircle2, TrendingUp, Code2, Cloud,
  BarChart3, Cog, Headphones, Shield, Zap, Globe, Users, Star, ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Performance-driven SEO, PPC, social media, and content marketing that generates qualified leads and revenue.",
    href: "/services/digital-marketing",
    tags: ["SEO", "PPC", "Social Media", "Content"],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Full-stack applications, APIs, and enterprise software built for scale, performance, and maintainability.",
    href: "/services/software-development",
    tags: ["React", "Node.js", "Python", "APIs"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud architecture, CI/CD pipelines, container orchestration, and infrastructure automation on AWS, GCP & Azure.",
    href: "/services/cloud-devops",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    icon: Cog,
    title: "Business Process Management",
    description: "Map, automate, and optimize your business workflows to reduce costs, eliminate bottlenecks, and scale faster.",
    href: "/services/business-process",
    tags: ["Automation", "RPA", "Workflow", "BPO"],
  },
  {
    icon: Headphones,
    title: "Telecalling & Lead Operations",
    description: "Trained telecalling teams with CRM-integrated lead pipelines that deliver consistent, qualified opportunities.",
    href: "/services/telecalling",
    tags: ["Lead Gen", "CRM", "Outbound", "Inside Sales"],
  },
];

const pillars = [
  {
    icon: TrendingUp,
    title: "Digital Growth & Marketing",
    description: "Data-driven marketing systems that acquire, convert, and retain customers at scale across every channel.",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Code2,
    title: "Engineering & Infrastructure",
    description: "Production-grade software, APIs, and cloud infrastructure built by engineers who understand business outcomes.",
    color: "from-blue-600/20 to-brand-blue/10",
  },
  {
    icon: Cog,
    title: "Business Operations Optimization",
    description: "Process redesign, automation, and operational excellence that compounds your team's efficiency over time.",
    color: "from-brand-blue/20 to-blue-500/10",
  },
];

const industries = [
  "E-Commerce & Retail", "FinTech & Banking", "Healthcare & MedTech",
  "Real Estate & PropTech", "EdTech & Learning", "SaaS & Software",
  "Manufacturing", "Logistics & Supply Chain",
];

const whyUs = [
  { icon: Zap, title: "End-to-End Execution", desc: "Strategy to deployment — we own the outcome, not just the deliverable." },
  { icon: Code2, title: "Engineering Mindset", desc: "Every solution is architected for reliability, scale, and long-term maintainability." },
  { icon: BarChart3, title: "Performance-Driven", desc: "KPIs and measurable outcomes define every engagement. No vanity metrics." },
  { icon: Globe, title: "Scalable Architecture", desc: "Systems that grow with your business without expensive re-engineering." },
  { icon: Shield, title: "Transparent Collaboration", desc: "Real-time visibility into progress, budget, and results. Always." },
  { icon: Users, title: "Dedicated Teams", desc: "Your growth team, not just a vendor. We become an extension of your company." },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Clients Served" },
  { value: "5+", label: "Years of Expertise" },
  { value: "98%", label: "Client Retention" },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechStartup India",
    content: "PG Unique Digital Solutions transformed our online presence completely. Their engineering team delivered our SaaS platform 2 weeks ahead of schedule, and the DevOps setup has been rock solid.",
    stars: 5,
  },
  {
    name: "Priya Mehta",
    role: "Head of Marketing, RetailBrand",
    content: "The digital marketing team at PG Unique is results-focused like no other agency I've worked with. Our lead volume increased 3x within 90 days.",
    stars: 5,
  },
  {
    name: "Arjun Reddy",
    role: "CTO, FinTech Company",
    content: "Their cloud and DevOps expertise is exceptional. They migrated our entire infrastructure to AWS with zero downtime. Highly recommend for any serious technical project.",
    stars: 5,
  },
];

const caseStudies = [
  {
    industry: "E-Commerce",
    title: "3x Revenue Growth for D2C Brand",
    result: "300% increase in monthly revenue in 6 months through integrated performance marketing and CRO.",
    tag: "Digital Marketing",
  },
  {
    industry: "FinTech",
    title: "Core Banking API Platform",
    result: "Built a microservices-based banking API platform serving 100K+ transactions daily with 99.99% uptime.",
    tag: "Software Development",
  },
  {
    industry: "Healthcare",
    title: "Cloud Migration & DevOps Transformation",
    result: "Migrated legacy on-premise systems to AWS, reducing infrastructure costs by 45% and deployment time by 80%.",
    tag: "Cloud & DevOps",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
    <header
  className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-30"
  style={{
    background:
      "linear-gradient(135deg, hsl(218, 56%, 8%) 0%, hsl(220, 70%, 16%) 50%, hsl(218, 56%, 8%) 100%)",
  }}
>
  {/* Background image overlay */}
  <div
    className="absolute inset-0 opacity-30"
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-transparent to-brand-navy/80" />
  <div className="absolute inset-0 grid-pattern opacity-40" />

  <div className="relative container mx-auto px-4 flex justify-center">
    <div className="max-w-4xl text-center">
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
        We Build{" "}
        <span className="gradient-text">Scalable Digital Systems</span>{" "}
        That Grow Your Business.
      </h1>

      <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
        End-to-end digital transformation — performance marketing, custom software engineering,
        cloud infrastructure, DevOps automation, and business process optimization.
        Built to scale from Day 1.
      </p>

      <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-300">
        <Link
          to="/contact"
          className="btn-brand inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white"
        >
          <Phone size={18} />
          Book Free Strategy Call
        </Link>

        <Link
          to="/services"
          className="btn-brand-outline inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-semibold"
        >
          Explore Services <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </div>
</header>

      {/* About Snapshot */}
      <section className="py-20 bg-background" aria-labelledby="about-heading">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3">
                About PG Unique
              </div>
              <h2
                id="about-heading"
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5 section-heading"
              >
                Your Engineering + Growth Partner
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                PG Unique Digital Solutions is a premium digital transformation company that bridges the gap between
                marketing and engineering. We don't just build websites — we architect growth systems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team of engineers, marketers, and business strategists work as one unit to deliver
                measurable outcomes. From custom software development and cloud infrastructure to performance
                marketing and lead operations — we are the end-to-end partner that serious companies trust.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["Marketing + Engineering", "Data-Driven", "Scalable Systems", "Transparent Process"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to="/about"
                className="btn-brand inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white"
              >
                Learn Our Story <ArrowRight size={16} />
              </Link>
            </div>

            {/* Visual card grid */}
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className={`p-5 rounded-2xl bg-gradient-to-br ${p.color} border border-primary/10 first:col-span-2 md:first:col-span-1 service-card`}
                >
                  <div className="w-10 h-10 rounded-lg feature-icon flex items-center justify-center mb-3">
                    <p.icon size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3">
              What We Do
            </div>
            <h2
              id="services-heading"
              className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 section-heading section-heading-center"
            >
              Full-Stack Digital Services
            </h2>
            <p className="text-muted-foreground text-lg">
              From strategy to execution. Every service designed to generate measurable business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group block p-6 rounded-2xl bg-background service-card"
              >
                <div className="w-12 h-12 rounded-xl feature-icon flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={22} />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs bg-primary/8 text-primary border border-primary/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More <ChevronRight size={16} />
                </div>
              </Link>
            ))}

            {/* CTA card */}
            <div className="p-6 rounded-2xl bg-gradient-brand flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-white text-lg mb-2">
                  Not sure where to start?
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Book a free 30-minute strategy session. We'll diagnose your biggest growth bottleneck and give you a clear roadmap.
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 bg-white text-primary font-semibold px-5 py-3 rounded-lg text-sm hover:bg-white/90 transition-colors"
              >
                Book Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background" aria-labelledby="why-us-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3">
              Why PG Unique
            </div>
            <h2
              id="why-us-heading"
              className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 section-heading section-heading-center"
            >
              Built for Results, Not Reports
            </h2>
            <p className="text-muted-foreground text-lg">
              We measure success by your business outcomes. Here's how we ensure it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-card transition-all">
                <div className="w-10 h-10 rounded-lg feature-icon flex items-center justify-center mb-4">
                  <item.icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-brand-navy" aria-labelledby="industries-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              id="industries-heading"
              className="font-display text-2xl md:text-3xl font-bold text-white mb-3"
            >
              Industries We Serve
            </h2>
            <p className="text-white/60">Deep domain expertise across the sectors that matter.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm font-medium hover:bg-white/10 hover:border-brand-light/40 transition-colors cursor-default"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-secondary" aria-labelledby="case-studies-heading">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">
                Proof of Work
              </div>
              <h2
                id="case-studies-heading"
                className="font-display text-3xl md:text-4xl font-bold text-foreground section-heading"
              >
                Case Studies
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="btn-brand-outline inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              View All Case Studies <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-card transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{cs.industry}</span>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">{cs.tag}</span>
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-3 group-hover:text-primary transition-colors">
                  {cs.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cs.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">
              Client Stories
            </div>
            <h2
              id="testimonials-heading"
              className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 section-heading section-heading-center"
            >
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-2xl border border-border bg-card hover:shadow-card transition-all">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-5 italic">"{t.content}"</p>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(218, 56%, 8%) 0%, hsl(220, 70%, 16%) 100%)" }}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">
            Ready to Scale Your Business?
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Get a free digital strategy consultation. We'll review your current setup, identify your biggest
            growth levers, and present a concrete roadmap — at no cost.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-brand inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white"
            >
              <Phone size={18} />
              Book Free Strategy Call
            </Link>
            <Link
              to="/services"
              className="btn-brand-outline inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
          <p className="text-white/40 text-sm mt-6">
            No commitment required · Response within 4 hours · +91 9182970173
          </p>
        </div>
      </section>
       
      <Footer />
    </div>
  );
}
