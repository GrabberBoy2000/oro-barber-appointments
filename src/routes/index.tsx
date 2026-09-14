import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Instagram, Scissors, Clock, ImagePlus } from "lucide-react";
import logoAsset from "@/assets/oro-logo.png.asset.json";

function ImagePlaceholder({ className = "", label }: { className?: string; label?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed border-muted-foreground/30 bg-secondary/50 text-muted-foreground ${className}`}
    >
      <ImagePlus className="size-10" />
      <span className="text-sm font-semibold">{label ?? "Kuva tulossa"}</span>
    </div>
  );
}

const PHONE = "041 796 2012";
const PHONE_LINK = "tel:+358417962012";
const INSTAGRAM = "https://www.instagram.com/orobarbershop2";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oro Barbershop — Parturi Norkkokuja 3" },
      {
        name: "description",
        content:
          "Oro Barbershop sijaitsee osoitteessa Norkkokuja 3. Hiustenleikkuut, fadet ja parranajot. Ajanvaraus puhelimitse 041 796 2012 tai tule suoraan paikan päälle — walk-in.",
      },
      { property: "og:title", content: "Oro Barbershop — Parturi Norkkokuja 3" },
      {
        property: "og:description",
        content:
          "Hiustenleikkuut, fadet ja parranajot. Ajanvaraus: 041 796 2012 tai walk-in.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Barbershop",
          name: "Oro Barbershop",
          telephone: "+358417962012",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Norkkokuja 3",
            addressCountry: "FI",
          },
          sameAs: [INSTAGRAM],
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Hiustenleikkaus",
    desc: "Klassinen leikkaus tai moderni fade — aina siisti lopputulos.",
  },
  {
    title: "Parranajo & muotoilu",
    desc: "Perinteinen partaveitsiajo ja parran trimmaus tarkalla kädellä.",
  },
  {
    title: "Muotoilu & viimeistely",
    desc: "Viimeistele look laadukkailla tuotteilla ja tyylillä.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#" className="flex items-center gap-3" aria-label="Oro Barbershop">
            <img
              src={logoAsset.url}
              alt="Oro Barbershop logo"
              className="h-12 w-auto rounded-full border border-border/60"
            />
            <span className="font-display text-2xl tracking-wider text-primary">ORO BARBERSHOP</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#palvelut" className="transition-colors hover:text-primary">
              Palvelut
            </a>
            <a href="#ajanvaraus" className="transition-colors hover:text-primary">
              Ajanvaraus
            </a>
            <a href="#sijainti" className="transition-colors hover:text-primary">
              Sijainti
            </a>
          </nav>
          <a
            href={PHONE_LINK}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="size-4" />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">Soita</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-svh items-end overflow-hidden">
        <ImagePlaceholder
          label="Liiketilan kuva tulossa"
          className="absolute inset-0 border-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-40">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
            <MapPin className="size-4" /> Norkkokuja 3
          </p>
          <h1 className="font-display text-6xl leading-none sm:text-8xl">
            Terävä tukka.
            <br />
            <span className="text-primary">Ei kiemuroita.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Oro Barbershop — laadukkaat leikkaukset ja parranajot. Soita ja varaa aika
            tai tule suoraan käyntiin.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="size-5" /> Varaa aika: {PHONE}
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/70 px-6 py-3 font-bold backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="size-5" /> @orobarbershop2
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="palvelut" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
        <h2 className="font-display text-5xl sm:text-6xl">
          Palvelut<span className="text-primary">.</span>
        </h2>
        <p className="mt-3 max-w-lg text-muted-foreground">
          Jokainen leikkaus tehdään huolella — istuttuasi tuoliin saat täyden
          huomion ja siistin lopputuloksen.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-lg border border-border bg-card"
            >
              <ImagePlaceholder className="aspect-[4/5] border-0" />
              <div className="p-5">
                <h3 className="flex items-center gap-2 font-display text-2xl tracking-wide">
                  <Scissors className="size-5 text-primary" /> {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section id="ajanvaraus" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-2">
          <div>
            <h2 className="font-display text-5xl sm:text-6xl">
              Ajanvaraus<span className="text-primary">.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Varaaminen on helppoa — soita numeroon{" "}
              <a href={PHONE_LINK} className="font-bold text-primary hover:underline">
                {PHONE}
              </a>{" "}
              ja sovi sopiva aika. Ei sovelluksia, ei tunnuksia.
            </p>
            <a
              href={PHONE_LINK}
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="size-5" /> Soita {PHONE}
            </a>
          </div>
          <div className="flex flex-col justify-center gap-6 rounded-lg border border-primary/40 bg-background p-8">
            <div className="flex items-start gap-4">
              <Clock className="mt-1 size-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-display text-2xl tracking-wide">Walk-in tervetullut</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Voit myös tulla suoraan liikkeeseen ilman ajanvarausta — otamme
                  asiakkaita jonotusjärjestyksessä aukioloaikoina.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Instagram className="mt-1 size-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-display text-2xl tracking-wide">Seuraa Instagramissa</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tuoreimmat leikkaukset, aukiolot ja vapaat ajat:{" "}
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-primary hover:underline"
                  >
                    @orobarbershop2
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="sijainti" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
        <h2 className="font-display text-5xl sm:text-6xl">
          Löydä perille<span className="text-primary">.</span>
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 size-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-display text-2xl tracking-wide">Osoite</h3>
                <p className="mt-1 text-muted-foreground">Norkkokuja 3</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Norkkokuja+3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-bold text-primary hover:underline"
                >
                  Avaa Google Mapsissa →
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 size-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-display text-2xl tracking-wide">Puhelin</h3>
                <a
                  href={PHONE_LINK}
                  className="mt-1 block text-muted-foreground hover:text-primary"
                >
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              title="Oro Barbershop kartalla — Norkkokuja 3"
              src="https://www.google.com/maps?q=Norkkokuja%203&output=embed"
              className="h-72 w-full md:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row">
          <a href="#" className="flex items-center gap-3" aria-label="Oro Barbershop">
            <img
              src={logoAsset.url}
              alt="Oro Barbershop logo"
              className="h-10 w-auto rounded-full border border-border/60"
            />
            <span className="font-display text-xl tracking-wider text-foreground">
              ORO <span className="text-primary">BARBERSHOP</span>
            </span>
          </a>
          <p>
            Norkkokuja 3 ·{" "}
            <a href={PHONE_LINK} className="hover:text-primary">
              {PHONE}
            </a>
          </p>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-primary"
          >
            <Instagram className="size-4" /> @orobarbershop2
          </a>
        </div>
      </footer>
    </div>
  );
}
