import pgLogo from "@/assets/pg-logo.jpg";
import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";

const services = [
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Custom Software Development", href: "/services/software-development" },
  { label: "Cloud & DevOps", href: "/services/cloud-devops" },
  { label: "Business Process Management", href: "/services/business-process" },
  { label: "Telecalling & Lead Operations", href: "/services/telecalling" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white/80" role="contentinfo">
      
      {/* CTA Banner */}
      <div className="bg-gradient-brand py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/85 mb-6 text-lg">
            Let's build something that scales. Book a free strategy call today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
            >
              Book Free Strategy Call <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/919182970173"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/10 py-14">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-light/40">
                <img src={pgLogo} alt="PG Unique Digital Solutions" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white leading-tight block">
                  PG <span className="gradient-text">Unique</span>
                </span>
                <span className="text-xs text-white/50">Digital Solutions</span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Premium digital transformation partner helping startups and enterprises scale through marketing, software, cloud, and automation.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+919182970173"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-light transition-colors"
              >
                <Phone size={14} className="text-brand-light" />
                +91 9182970173
              </a>
              <a
                href="mailto:info.pguniquedigitalsolutions2@gmail.com"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-light transition-colors break-all"
              >
                <Mail size={14} className="text-brand-light flex-shrink-0" />
                info.pguniquedigitalsolutions2@gmail.com
              </a>
            </div>
            {/* Social Icons */}
           <div className="flex items-center gap-3 mt-5">
  <a href="https://www.linkedin.com/company/112013198/admin/dashboard/" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue/50 transition-colors">
    <Linkedin size={14} />
  </a>

  <a href="https://x.com/pgunique2" aria-label="Twitter/X" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue/50 transition-colors">
    <Twitter size={14} />
  </a>

  <a href="https://www.facebook.com/profile.php?id=61588259556418" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue/50 transition-colors">
    <Facebook size={14} />
  </a>

  <a href="https://www.instagram.com/info.pguniquedigitalsolutions/" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue/50 transition-colors">
    <Instagram size={14} />
  </a>

  <a href="https://www.youtube.com/@PGUniqueDigitalSolutions" aria-label="YouTube" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue/50 transition-colors">
    <Youtube size={14} />
  </a>
</div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="text-sm text-white/60 hover:text-brand-light transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-light/40 group-hover:bg-brand-light transition-colors" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm text-white/60 hover:text-brand-light transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-light/40 group-hover:bg-brand-light transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-sm text-white/60 mb-4 leading-relaxed">
              Subscribe to our newsletter for digital transformation insights, tech trends, and growth strategies.
            </p>
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing!");
              }}
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-brand-light/50 transition-colors"
              />
              <button
                type="submit"
                className="btn-brand w-full py-2.5 rounded-lg text-sm font-semibold text-white"
              >
                Subscribe
              </button>
            </form>

            {/* WhatsApp floating */}
            <a
              href="https://wa.me/919182970173"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} PG Unique Digital Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white/70 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919182970173"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all animate-pulse-glow"
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </footer>
  );
}
