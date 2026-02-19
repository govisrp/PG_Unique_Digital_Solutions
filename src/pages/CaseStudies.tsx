import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cases = [
  { industry: "E-Commerce", tag: "Digital Marketing", title: "3x Revenue Growth for D2C Brand", challenge: "A D2C fashion brand was spending heavily on ads with poor ROAS and declining organic traffic.", solution: "Rebuilt Google Ads campaigns, launched Meta retargeting funnels, and overhauled SEO strategy with content clusters.", result: "300% revenue increase in 6 months. ROAS improved from 1.2x to 4.1x. Organic traffic grew 180%.", metrics: ["300% Revenue Growth", "4.1x ROAS", "180% Organic Traffic"] },
  { industry: "FinTech", tag: "Software Development", title: "Core Banking API Platform", challenge: "A fintech startup needed a scalable transaction processing API capable of handling 100K+ daily transactions.", solution: "Built microservices architecture with Node.js, PostgreSQL, and Redis caching. Deployed on AWS with auto-scaling.", result: "Live in 10 weeks. Processing 150K+ transactions daily with 99.99% uptime since launch.", metrics: ["10 Week Delivery", "99.99% Uptime", "150K+ Daily Transactions"] },
  { industry: "Healthcare", tag: "Cloud & DevOps", title: "Legacy System Cloud Migration", challenge: "Healthcare company running on 10-year-old on-premise servers facing performance issues and security risks.", solution: "Migrated to AWS with containerized architecture, implemented CI/CD pipelines, and set up 24/7 monitoring.", result: "45% infrastructure cost reduction. Deployment time cut from 3 days to 2 hours. Zero security incidents.", metrics: ["45% Cost Reduction", "10x Faster Deploy", "Zero Security Incidents"] },
  { industry: "Real Estate", tag: "Telecalling & Lead Ops", title: "Qualified Lead Pipeline for PropTech", challenge: "Real estate company struggling with low-quality leads and high cost-per-acquisition from digital ads.", solution: "Set up a 10-member telecalling team with custom scripts, CRM integration, and lead scoring system.", result: "250% increase in qualified leads. Lead response time reduced to under 30 minutes. 28% closing rate.", metrics: ["250% More Qualified Leads", "<30 Min Response", "28% Close Rate"] },
  { industry: "Manufacturing", tag: "Business Process", title: "Operations Automation for Manufacturer", challenge: "Mid-size manufacturer losing 40% of productivity to manual data entry, invoice processing, and reporting.", solution: "Mapped all back-office processes, implemented RPA for data entry and invoicing, connected ERP with CRM.", result: "40% operational cost reduction. 85% of manual tasks eliminated. Real-time operational dashboards live.", metrics: ["40% Cost Reduction", "85% Automation Rate", "Real-Time Visibility"] },
  { industry: "EdTech", tag: "Digital Marketing + Software", title: "EdTech Platform Growth & Rebuild", challenge: "EdTech startup with a dated platform and poor user retention needing both a product rebuild and user acquisition.", solution: "Rebuilt the platform with React/Node.js, launched SEO content strategy, and performance marketing campaigns.", result: "Platform load time reduced 70%. User retention improved 55%. 10K new users acquired in 90 days.", metrics: ["70% Faster Platform", "55% Better Retention", "10K New Users"] },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <header className="pt-28 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(218, 56%, 8%) 0%, hsl(220, 70%, 16%) 100%)" }}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-block text-xs font-semibold tracking-widest text-brand-light/80 uppercase mb-4">Proof of Work</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Real Projects. <span className="gradient-text">Measurable Results.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We let outcomes speak. Every case study shows a real problem, our solution, and the specific business results delivered.
          </p>
        </div>
      </header>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((c) => (
              <div key={c.title} className="p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-card transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{c.industry}</span>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">{c.tag}</span>
                </div>
                <h2 className="font-display font-bold text-foreground text-xl mb-3">{c.title}</h2>
                <div className="space-y-3 mb-5">
                  <div><span className="text-xs font-semibold text-primary uppercase">Challenge: </span><span className="text-muted-foreground text-sm">{c.challenge}</span></div>
                  <div><span className="text-xs font-semibold text-primary uppercase">Solution: </span><span className="text-muted-foreground text-sm">{c.solution}</span></div>
                  <div><span className="text-xs font-semibold text-primary uppercase">Result: </span><span className="text-foreground text-sm font-medium">{c.result}</span></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.metrics.map((m) => (
                    <span key={m} className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">{m}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-brand">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Want Results Like These?</h2>
          <p className="text-white/80 mb-6">Let's discuss your specific situation and build a plan.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors">
            Book Free Strategy Call <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
