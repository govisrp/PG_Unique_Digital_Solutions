import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_n2l3i5x",     
        "template_1bdthts",    
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        "gzMEk3CwvezLSCxgK"      
      );

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <header
        className="pt-28 pb-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(218, 56%, 8%) 0%, hsl(220, 70%, 16%) 100%)",
        }}
      >
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-block text-xs font-semibold tracking-widest text-brand-light/80 uppercase mb-4">
            Get In Touch
          </div>
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
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 section-heading">
                  Contact Details
                </h2>
              </div>

              <div className="space-y-4">
                <a href="tel:+919182970173" className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all group">
                  <div className="w-10 h-10 rounded-lg feature-icon flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Call Us</div>
                    <div className="font-semibold text-foreground">+91 9182970173</div>
                  </div>
                </a>

                <a href="mailto:info@pguniquedigitalsolutions.com" className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all group">
                  <div className="w-10 h-10 rounded-lg feature-icon flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Email Us</div>
                    <div className="font-semibold text-foreground text-sm">
                      info@pguniquedigitalsolutions.com
                    </div>
                  </div>
                </a>

                <a href="https://wa.me/919182970173" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-green-500/30 hover:shadow-card transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 flex items-center justify-center">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">WhatsApp</div>
                    <div className="font-semibold text-foreground">Chat Instantly</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg feature-icon flex items-center justify-center">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Response Time</div>
                    <div className="font-semibold text-foreground">Within 4 business hours</div>
                  </div>
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
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      Message Received!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll review your message and get back to you within 4 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border shadow-card space-y-5">

                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Send Us a Message
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input"
                    />

                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input"
                    />
                  </div>

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input"
                  />

                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input"
                  >
                    <option value="">Select a service</option>
                    <option>Digital Marketing</option>
                    <option>Custom Software Development</option>
                    <option>Cloud & DevOps</option>
                    <option>Business Process Management</option>
                    <option>Telecalling & Lead Operations</option>
                    <option>Digital Transformation Strategy</option>
                    <option>Not Sure Yet</option>
                  </select>

                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input resize-none"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-brand w-full py-4 rounded-xl text-white font-bold"
                  >
                    {loading ? "Sending..." : "Send Message → We'll Respond in 4 Hours"}
                  </button>

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