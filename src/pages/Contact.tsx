import { useState } from "react";
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <header className="pt-28 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(218, 56%, 8%) 0%, hsl(220, 70%, 16%) 100%)" }}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-block text-xs font-semibold tracking-widest text-brand-light/80 uppercase mb-4">Get In Touch</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Your <span className="gradient-text">Digital Future</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Tell us your challenge. We'll respond within 4 hours with a clear, no-fluff assessment.
          </p>
        </div>
      </header>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 section-heading">Contact Details</h2>
              </div>
              <div className="space-y-4">
                <a href="tel:+919182970173" className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all group">
                  <div className="w-10 h-10 rounded-lg feature-icon flex items-center justify-center group-hover:bg-primary/20 transition-colors"><Phone size={18} /></div>
                  <div><div className="text-xs text-muted-foreground mb-0.5">Call Us</div><div className="font-semibold text-foreground">+91 9182970173</div></div>
                </a>
                <a href="mailto:info.pguniquedigitalsolutions@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all group">
                  <div className="w-10 h-10 rounded-lg feature-icon flex items-center justify-center group-hover:bg-primary/20 transition-colors"><Mail size={18} /></div>
                  <div><div className="text-xs text-muted-foreground mb-0.5">Email Us</div><div className="font-semibold text-foreground text-sm">info.pguniquedigitalsolutions@gmail.com</div></div>
                </a>
                <a href="https://wa.me/919182970173" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-green-500/30 hover:shadow-card transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 flex items-center justify-center"><MessageCircle size={18} /></div>
                  <div><div className="text-xs text-muted-foreground mb-0.5">WhatsApp</div><div className="font-semibold text-foreground">Chat Instantly</div></div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg feature-icon flex items-center justify-center"><Clock size={18} /></div>
                  <div><div className="text-xs text-muted-foreground mb-0.5">Response Time</div><div className="font-semibold text-foreground">Within 4 business hours</div></div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-secondary">
                <h3 className="font-display font-semibold text-foreground mb-2">What happens next?</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {["We review your message within 4 hours", "Schedule a 30-min discovery call", "Deliver a tailored solution roadmap", "Present a clear proposal with timeline & pricing"].map((s, i) => (
                    <div key={s} className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">{i + 1}</span>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="h-full flex items-center justify-center p-12 rounded-2xl border border-primary/30 bg-primary/5 text-center">
                  <div>
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Mail size={28} className="text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">Message Received!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. We'll review your message and get back to you within 4 hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border shadow-card space-y-5" aria-label="Contact form">
                  <h2 className="font-display text-2xl font-bold text-foreground">Send Us a Message</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="name">Full Name *</label>
                      <input id="name" type="text" required placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="email">Email Address *</label>
                      <input id="email" type="email" required placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="phone">Phone Number</label>
                      <input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="service">Service Interested In</label>
                      <select id="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors">
                        <option value="">Select a service</option>
                        <option>Digital Marketing</option>
                        <option>Custom Software Development</option>
                        <option>Cloud & DevOps</option>
                        <option>Business Process Management</option>
                        <option>Telecalling & Lead Operations</option>
                        <option>Digital Transformation Strategy</option>
                        <option>Not Sure Yet</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="message">Tell Us About Your Project *</label>
                    <textarea id="message" required rows={5} placeholder="Describe your challenge, goals, and any relevant context..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors resize-none" />
                  </div>
                  <button type="submit" className="btn-brand w-full py-4 rounded-xl text-white font-bold text-base">
                    Send Message → We'll Respond in 4 Hours
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                    No spam. No sales pitches without your permission.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
