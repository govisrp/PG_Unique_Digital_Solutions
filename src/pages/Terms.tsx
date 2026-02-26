import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Terms() {
  return (
    <div className="min-h-screen">
      <Navbar />
     <header
  className="relative min-h-[40vh] flex items-center justify-center pt-28 pb-20 overflow-hidden text-center"
  style={{
    background:
      "linear-gradient(135deg, hsl(218, 56%, 8%) 0%, hsl(220, 70%, 16%) 100%)",
  }}
>
  <div className="container mx-auto px-4">
    <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
      Terms & Conditions
    </h1>
    <p className="text-white/70 mt-3">
      Last updated: February 2026
    </p>
  </div>
</header>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {[
              { title: "1. Acceptance of Terms", content: "By accessing and using the PG Unique Digital Solutions website and services, you accept and agree to be bound by these Terms and Conditions." },
              { title: "2. Services", content: "PG Unique Digital Solutions provides digital transformation services including but not limited to digital marketing, custom software development, cloud & DevOps, business process management, and lead operations. Service specifics are governed by individual project agreements." },
              { title: "3. Intellectual Property", content: "All deliverables created for clients become the property of the client upon final payment, unless otherwise specified in the project agreement. Our proprietary processes, frameworks, and tools remain the intellectual property of PG Unique Digital Solutions." },
              { title: "4. Confidentiality", content: "We treat all client information as confidential. We sign NDAs upon request and ensure all team members are bound by confidentiality obligations." },
              { title: "5. Limitation of Liability", content: "PG Unique Digital Solutions' liability is limited to the value of services provided. We do not accept liability for indirect, consequential, or punitive damages." },
              { title: "6. Governing Law", content: "These terms are governed by the laws of India. Any disputes shall be resolved through arbitration in accordance with Indian law." },
              { title: "7. Contact", content: "For any questions regarding these terms, contact info.pguniquedigitalsolutions2@gmail.com." },
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
