import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <header className="pt-28 pb-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl font-bold text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">Last updated: February 2026</p>
        </div>
      </header>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <div className="space-y-8 text-foreground">
            {[
              { title: "1. Information We Collect", content: "We collect information you provide directly to us through our contact forms, newsletter subscriptions, and service inquiries. This includes your name, email address, phone number, and any project details you share." },
              { title: "2. How We Use Your Information", content: "We use collected information to respond to your inquiries, provide requested services, send relevant communications you've opted into, and improve our website and services." },
              { title: "3. Information Sharing", content: "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our business, subject to confidentiality agreements." },
              { title: "4. Data Security", content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction." },
              { title: "5. Cookies", content: "Our website uses cookies to enhance your browsing experience and analyze site traffic. You can control cookie settings through your browser preferences." },
              { title: "6. Contact Us", content: "For any privacy-related questions, contact us at info.pguniquedigitalsolutions@gmail.com or call +91 9182970173." },
            ].map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-xl font-bold text-foreground mb-2">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
