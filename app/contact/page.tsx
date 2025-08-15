"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [language, setLanguage] = useState<"en" | "ro">("en")

  const content = {
    en: {
      title: "First Time Chess Lessons",
      nav: {
        home: "Home",
        contact: "Lessons & Contact",
      },
      pricing: {
        title: "Chess Lessons & Pricing",
        subtitle: "Choose the lesson duration that works best for you",
        thirtyMin: {
          title: "30 Minutes",
          desc: "Perfect for focused learning sessions",
          features: [
            "One-on-one instruction",
            "Beginner-friendly approach",
            "Flexible scheduling",
            "Personalized learning pace",
          ],
        },
        sixtyMin: {
          title: "60 Minutes",
          desc: "Comprehensive learning experience",
          features: [
            "Extended practice time",
            "Deep strategy discussions",
            "Multiple game scenarios",
            "Better value per minute",
          ],
        },
        mostPopular: "Most Popular",
        moreInfo:
          "Need more lessons? Packages and extended learning plans will be discussed and negotiated privately based on your specific goals and schedule.",
      },
      contact: {
        title: "Ready to Start Learning?",
        info: {
          title: "Get in Touch",
          desc: "I'm here to help you start your chess journey",
          whatsapp: "WhatsApp",
          instagram: "Instagram",
          superprof: "Superprof",
          findSuperprof: "Find me on Superprof",
        },
        why: {
          title: "Why Choose These Lessons?",
          reasons: [
            "Designed specifically for complete beginners",
            "Patient, encouraging teaching approach",
            "Flexible scheduling to fit your life",
            "Focus on practical skills and winning games",
          ],
        },
      },
      footer: "© 2024 First Time Chess Lessons. Ready to make your first move? Back to Home",
    },
    ro: {
      title: "Lecții de Șah pentru Prima Dată",
      nav: {
        home: "Acasă",
        contact: "Lecții și Contact",
      },
      pricing: {
        title: "Lecții de Șah și Prețuri",
        subtitle: "Alege durata lecției care ți se potrivește cel mai bine",
        thirtyMin: {
          title: "30 de Minute",
          desc: "Perfect pentru sesiuni de învățare concentrate",
          features: [
            "Instrucțiuni individuale",
            "Abordare prietenoasă pentru începători",
            "Programare flexibilă",
            "Ritm de învățare personalizat",
          ],
        },
        sixtyMin: {
          title: "60 de Minute",
          desc: "Experiență de învățare cuprinzătoare",
          features: [
            "Timp extins de practică",
            "Discuții strategice aprofundate",
            "Scenarii multiple de joc",
            "Valoare mai bună pe minut",
          ],
        },
        mostPopular: "Cel Mai Popular",
        moreInfo:
          "Ai nevoie de mai multe lecții? Pachetele și planurile de învățare extinse vor fi discutate și negociate în privat pe baza obiectivelor și programului tău specific.",
      },
      contact: {
        title: "Gata să Începi să Înveți?",
        info: {
          title: "Intră în Legătură",
          desc: "Sunt aici să te ajut să îți începi călătoria în șah",
          whatsapp: "WhatsApp",
          instagram: "Instagram",
          superprof: "Superprof",
          findSuperprof: "Găsește-mă pe Superprof",
        },
        why: {
          title: "De Ce să Alegi Aceste Lecții?",
          reasons: [
            "Concepute special pentru începători completi",
            "Abordare răbdătoare și încurajatoare în predare",
            "Programare flexibilă pentru a se potrivi vieții tale",
            "Concentrare pe abilități practice și câștigarea jocurilor",
          ],
        },
      },
      footer: "© 2024 Lecții de Șah pentru Prima Dată. Gata să faci prima mișcare? Înapoi la Acasă",
    },
  }

  const handleGetStarted = () => {
    const phoneNumber = "40758783145"
    const message =
      language === "ro"
        ? "Salut! Sunt interesat de lecții de șah pentru începători. Poți să îmi dai mai multe detalii?"
        : "Hi! I'm interested in beginner chess lessons. Can you give me more details?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100">
      {/* Header */}
      <header className="border-b border-stone-200 bg-stone-50/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="First Time Chess Lessons Logo" className="h-24 w-auto" />
            </Link>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2 py-1 rounded text-sm ${language === "en" ? "bg-emerald-600 text-white" : "text-stone-600 hover:text-emerald-600"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("ro")}
                  className={`px-2 py-1 rounded text-sm ${language === "ro" ? "bg-emerald-600 text-white" : "text-stone-600 hover:text-emerald-600"}`}
                >
                  RO
                </button>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-stone-700 hover:text-emerald-600 transition-colors">
                  {content[language].nav.home}
                </Link>
                <Link href="/contact" className="text-emerald-600 font-medium">
                  {content[language].nav.contact}
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Pricing Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center text-stone-800 mb-4 font-[family-name:var(--font-playfair)]">
            {content[language].pricing.title}
          </h1>
          <p className="text-center text-stone-600 mb-12 text-lg">{content[language].pricing.subtitle}</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/70 border-stone-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-[family-name:var(--font-playfair)] text-stone-800">
                  {content[language].pricing.thirtyMin.title}
                </CardTitle>
                <CardDescription className="text-stone-600">{content[language].pricing.thirtyMin.desc}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-4">25 lei</div>
                <ul className="text-stone-600 space-y-2 mb-6">
                  {content[language].pricing.thirtyMin.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-emerald-500 border-2 relative bg-white/70">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {content[language].pricing.mostPopular}
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-[family-name:var(--font-playfair)] text-stone-800">
                  {content[language].pricing.sixtyMin.title}
                </CardTitle>
                <CardDescription className="text-stone-600">{content[language].pricing.sixtyMin.desc}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-4">40 lei</div>
                <ul className="text-stone-600 space-y-2 mb-6">
                  {content[language].pricing.sixtyMin.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Card className="max-w-2xl mx-auto bg-stone-100/70 border-stone-200">
              <CardContent className="pt-6">
                <p className="text-stone-600">
                  <strong>{language === "ro" ? "Ai nevoie de mai multe lecții?" : "Need more lessons?"}</strong>{" "}
                  {content[language].pricing.moreInfo}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-stone-800 mb-4 font-[family-name:var(--font-playfair)]">
            {content[language].contact.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/70 border-stone-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-[family-name:var(--font-playfair)] text-stone-800">
                  {content[language].contact.info.title}
                </CardTitle>
                <CardDescription className="text-stone-600">{content[language].contact.info.desc}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4">
                  <button
                    onClick={handleGetStarted}
                    className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors"
                  >
                    {content[language].contact.info.whatsapp}
                  </button>
                  <div className="flex items-center justify-center text-stone-600">
                    <Link
                      href="https://www.instagram.com/firsttimechess/"
                      target="_blank"
                      className="hover:text-emerald-600 transition-colors"
                    >
                      {content[language].contact.info.instagram}
                    </Link>
                    <span>/</span>
                    <Link
                      href="https://l.instagram.com/?u=https%3A%2F%2Fwww.superprof.com.ro%2Fexperienta-gradinita-copii-ani-experienta-sah-nivel-amator-amator-intermediar.html%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaf8NjUBeOHF80ebdVdIZKWIQuiLqkdp9h4vF14Kc4oWVN1XudcsZOInKXQP7g_aem_gTcd5WVAsqadLN7VSC0nXQ&e=AT16Wc9RlvLR0AxURRQEMf7oVjzaJw2KwFNIgBQrlYD3LZFbf1sFhFaIpaP9RjbEeuJ6MxezJgrZX3h44bTioL89d3WYHS8T_n33G88"
                      target="_blank"
                      className="hover:text-emerald-600 transition-colors"
                    >
                      {content[language].contact.info.superprof}
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 border-stone-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-[family-name:var(--font-playfair)] text-stone-800">
                  {content[language].contact.why.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-stone-600 space-y-2 mb-6">
                  {content[language].contact.why.reasons.map((reason, index) => (
                    <li key={index}>• {reason}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-50/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 text-center text-stone-600">{content[language].footer}</div>
      </footer>
    </div>
  )
}
