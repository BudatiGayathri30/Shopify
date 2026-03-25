import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main className="pt-28 md:pt-32">
        {/* Hero */}
        <section className="section-padding">
          <div className="container-narrow mx-auto text-center">
            <p className="label-caps text-accent mb-4">Our Story</p>
            <h1 className="heading-display mb-8">
              Born From a Belief in{" "}
              <span className="italic">Nature's Power</span>
            </h1>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              VEYRA was founded with a singular mission: to create skincare that honors both your skin and the planet. We believe that the most transformative ingredients already exist in nature — they just need to be expertly formulated.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-card">
          <div className="container-narrow mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                {
                  title: "Sustainably Sourced",
                  text: "Every botanical ingredient is ethically harvested from sustainable farms around the world.",
                },
                {
                  title: "Science-Backed",
                  text: "Our formulas are developed by leading dermatologists and backed by clinical research.",
                },
                {
                  title: "Cruelty-Free Always",
                  text: "We never test on animals. Period. Our commitment to kindness extends to every part of our process.",
                },
              ].map((v) => (
                <div key={v.title}>
                  <h3 className="font-heading text-2xl font-light mb-4">{v.title}</h3>
                  <p className="body-base text-muted-foreground">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding">
          <div className="container-narrow mx-auto text-center">
            <p className="label-caps text-accent mb-4">Our Promise</p>
            <h2 className="heading-section mb-8">Clean Beauty, Real Results</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto mb-8">
              We hold ourselves to the highest standard. No parabens, no sulfates, no artificial fragrances. Just pure, potent botanicals that deliver visible results you can see and feel.
            </p>
            <div className="divider" />
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
