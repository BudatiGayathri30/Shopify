import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { useState } from "react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main className="pt-28 md:pt-32">
        <section className="section-padding">
          <div className="container-narrow mx-auto max-w-2xl">
            <div className="text-center mb-16">
              <p className="label-caps text-accent mb-4">Get In Touch</p>
              <h1 className="heading-section mb-4">Contact Us</h1>
              <p className="body-base text-muted-foreground">
                Have a question or need help? We'd love to hear from you. Our team typically responds within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-16">
                <h2 className="heading-subsection mb-4">Thank You!</h2>
                <p className="body-base text-muted-foreground">We've received your message and will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="label-caps text-muted-foreground block mb-2">First Name</label>
                    <input required type="text" className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="label-caps text-muted-foreground block mb-2">Last Name</label>
                    <input required type="text" className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="label-caps text-muted-foreground block mb-2">Email</label>
                  <input required type="email" className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="label-caps text-muted-foreground block mb-2">Subject</label>
                  <input required type="text" className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="label-caps text-muted-foreground block mb-2">Message</label>
                  <textarea required rows={5} className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none" />
                </div>
                <button type="submit" className="btn-accent w-full">Send Message</button>
              </form>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border text-center">
              <div>
                <p className="label-caps text-accent mb-2">Email</p>
                <p className="text-sm text-muted-foreground">hello@veyra.com</p>
              </div>
              <div>
                <p className="label-caps text-accent mb-2">Phone</p>
                <p className="text-sm text-muted-foreground">+1 (800) 555-0199</p>
              </div>
              <div>
                <p className="label-caps text-accent mb-2">Hours</p>
                <p className="text-sm text-muted-foreground">Mon–Fri, 9am–6pm EST</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
