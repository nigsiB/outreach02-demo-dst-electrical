import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ServiceCard } from "@/components/ServiceCard";

const heroImg = "https://images.unsplash.com/photo-1682345262055-8f95f3c513ea?auto=format&fit=crop&w=1600&q=80";
const aboutImg = "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1600&q=80";
const galleryImg = "https://images.unsplash.com/photo-1635335874521-7987db781153?auto=format&fit=crop&w=1600&q=80";

const services = [
  { image: "https://images.unsplash.com/photo-1635335874521-7987db781153?auto=format&fit=crop&w=600&q=80", alt: "Electrical consumer unit", title: "Consumer units", desc: "Upgrades, RCBO protection, and compliance for modern homes." },
  { image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=600&q=80", alt: "Domestic electrical rewire", title: "Domestic rewires", desc: "Full and partial rewires with minimal disruption." },
  { image: "https://images.unsplash.com/photo-1682345262055-8f95f3c513ea?auto=format&fit=crop&w=600&q=80", alt: "Interior lighting installation", title: "Lighting design", desc: "Indoor, garden, and feature lighting installed neatly." },
  { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80", alt: "Commercial electrical work", title: "Commercial testing", desc: "EICR, maintenance contracts, and shop fit-outs." },
  { image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80", alt: "EV charge point installation", title: "EV & smart home", desc: "Charge points, smart controls, and future-ready installs." },
];

const reviews = [
  { quote: "DST rewired our extension — tidy, certified, and on schedule.", name: "Paul W.", detail: "Domestic client" },
  { quote: "Responsive seven-day service when our shop lighting failed.", name: "Retail unit", detail: "Commercial" },
  { quote: "Clear quote, no surprises. Highly recommend in Cranleigh.", name: "Anna K.", detail: "5★ concept" },
];

export default function Page() {
  return (
    <main>
      <section className="bg-[var(--black)] text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--yellow)]">3 Mead Close · Cranleigh GU6 7BH</p>
            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Domestic &amp; commercial electrics, seven days.</h1>
            <p className="mt-4 text-white/75 leading-relaxed">
              Demo concept for DST Electrical — certified work for homes and businesses across Surrey.
            </p>
            <Link href="/contact" className="mt-8 inline-block bg-[var(--yellow)] px-8 py-3 text-sm font-bold text-black">
              Request a quote
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src={heroImg} alt="Electrician at fuse board" fill className="object-cover" priority sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="section-trust border-b border-black/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-6 py-6 text-center text-sm">
          <p><span className="font-bold">NICEIC concept</span> · certified installs</p>
          <p><span className="font-bold">Mead Close GU6 7BH</span></p>
          <p><span className="font-bold">7-day availability</span></p>
        </div>
      </section>

      <section className="section-services mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-bold">Services</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} image={s.image} alt={s.alt} title={s.title} desc={s.desc} />
          ))}
        </ul>
      </section>

      <section className="section-about">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={aboutImg} alt="Commercial electrical installation" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Power you can trust</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              From consumer unit upgrades to full commercial testing, DST Electrical focuses on safe,
              certificated work with clear communication — whether it&apos;s a weekend call-out or a planned rewire.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        image={galleryImg}
        imageAlt="Electrical testing equipment"
        title="Book a site visit"
        body="Domestic quotes and commercial maintenance — demo site for outreach. Confirm certifications and availability directly."
        primaryHref="/contact"
        primaryLabel="Get a quote"
        secondaryHref="/contact"
        secondaryLabel="Commercial enquiry"
      />

      <section className="section-reviews mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-bold">Reviews</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name} className="bg-white p-6 shadow-sm">
              <p className="text-sm italic text-[var(--muted)]">&ldquo;{r.quote}&rdquo;</p>
              <p className="mt-4 font-bold">{r.name}</p>
              <p className="text-xs text-[var(--muted)]">{r.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-gallery mx-auto max-w-6xl px-6 pb-14">
        <h2 className="text-2xl font-bold">Project gallery</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden">
            <Image src={galleryImg} alt="Electrical panel work" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative aspect-video overflow-hidden">
            <Image src={heroImg} alt="Lighting installation" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </section>

      <CtaBand
        reverse
        image={aboutImg}
        imageAlt="DST Electrical Cranleigh"
        title="Ready to upgrade your electrics?"
        body="3 Mead Close, Cranleigh. Domestic and commercial — seven-day service concept."
        primaryHref="/contact"
        primaryLabel="Contact DST"
      />
    </main>
  );
}
