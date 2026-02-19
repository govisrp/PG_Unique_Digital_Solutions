import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Users, Target, Rocket, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Target, title: "Results First", desc: "Every strategy, every line of code, every campaign — built around measurable business impact." },
  { icon: Rocket, title: "Engineering Excellence", desc: "We build systems that don't break under pressure. Reliability, performance, and scalability are non-negotiables." },
  { icon: Users, title: "True Partnership", desc: "We embed into your business, understand your context, and take ownership of your outcomes." },
  { icon: Award, title: "Continuous Innovation", desc: "We stay ahead of the technology curve so your business benefits from emerging capabilities before your competitors." },
];

const team = [
  { role: "Engineering", count: "15+", desc: "Full-stack engineers, cloud architects, DevOps specialists" },
  { role: "Marketing", count: "10+", desc: "SEO experts, performance marketers, content strategists" },
  { role: "Operations", count: "8+", desc: "Business analysts, project managers, QA engineers" },
  { role: "Sales & Lead Ops", count: "12+", desc: "Telecallers, CRM specialists, lead operations managers" },
];

const milestones = [
  { year: "2019", event: "Founded with a vision to bridge engineering and marketing" },
  { year: "2020", event: "First 20 clients across software development and digital marketing" },
  { year: "2021", event: "Expanded into Cloud & DevOps practice. 50+ projects delivered." },
  { year: "2022", event: "Launched Business Process Management division. Team grew to 30+" },
  { year: "2023", event: "Crossed 100 projects delivered. Expanded to enterprise clients." },
  { year: "2024", event: "150+ projects, 50+ clients. Full-service digital transformation partner." },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <header
        className="pt-28 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(218, 56%, 8%) 0%, hsl(220, 70%, 16%) 100%)" }}
      >
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block text-xs font-semibold tracking-widest text-brand-light/80 uppercase mb-4">
              About Us
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              The Engineering + Growth Company{" "}
              <span className="gradient-text">That Ships Results</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              PG Unique Digital Solutions was founded on a single belief: that the best marketing is backed by great engineering,
              and the best engineering serves clear business goals. We are the bridge.
            </p>
          </div>
        </div>
      </header>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Our Mission</div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4 section-heading">
                Empowering Companies to Compete in the Digital Age
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We exist to eliminate the gap between "what businesses want to achieve digitally" and "what actually gets executed."
                Too many companies hire agencies that over-promise and under-deliver. Too many hire developers who build without
                understanding the business. We do both — together.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                PG Unique Digital Solutions is a digital transformation company built for serious companies that
                need marketing, engineering, and operations to work as one integrated system — not three separate teams.
              </p>
              <div className="space-y-2">
                {[
                  "Custom software development company with marketing depth",
                  "Cloud deployment services with DevOps consulting expertise",
                  "Performance marketing agency with data engineering capabilities",
                  "Business process automation backed by implementation teams",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="p-5 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all">
                  <div className="w-10 h-10 rounded-lg feature-icon flex items-center justify-center mb-3">
                    <v.icon size={18} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Capacity */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Our Team</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground section-heading section-heading-center">
              The People Behind the Results
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.role} className="p-6 rounded-2xl bg-background border border-border text-center hover:shadow-card transition-all">
                <div className="stat-number font-display text-4xl font-bold mb-1">{t.count}</div>
                <div className="font-display font-semibold text-foreground mb-2">{t.role}</div>
                <p className="text-muted-foreground text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Our Journey</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground section-heading section-heading-center">
              From Startup to Trusted Partner
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />
              <div className="space-y-6">
                {milestones.map((m) => (
                  <div key={m.year} className="flex gap-6 relative">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center flex-shrink-0 z-10 text-primary font-display font-bold text-sm">
                      {m.year}
                    </div>
                    <div className="flex-1 py-4 border-b border-border last:border-0">
                      <p className="text-foreground leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-brand">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-white/80 mb-6 text-lg max-w-xl mx-auto">
            Tell us your challenge. We'll respond with a clear plan, not a generic sales pitch.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors"
          >
            Start the Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
