"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useState, useEffect } from "react"

interface Review {
  id: string
  name: string
  rating: number
  text: string
  date: string
}

const getStoredReviews = (): Review[] => {
  if (typeof window === "undefined") return []
  const stored = localStorage.getItem("chessLessonsReviews")
  return stored ? JSON.parse(stored) : []
}

const saveReviews = (reviews: Review[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("chessLessonsReviews", JSON.stringify(reviews))
  }
}

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "ro">("en")
  const [reviewName, setReviewName] = useState("")
  const [reviewText, setReviewText] = useState("")
  const [reviewRating, setReviewRating] = useState(5)
  const [reviews, setReviews] = useState<Review[]>([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    setReviews(getStoredReviews())
  }, [])

  const content = {
    en: {
      title: "First Time Chess Lessons",
      nav: {
        home: "Home",
        contact: "Lessons & Contact",
      },
      hero: {
        title: "Discover the World of Chess",
        subtitle:
          "Friendly lessons for complete beginners. Learn chess from scratch and win your first games with personalized instruction.",
        cta: "Get Started",
        ctaSubtext: "get in touch with me now!",
      },
      about: {
        title: "My Mission",
        p1: "My mission is to teach chess from level zero and up until you start winning your own games! We will start learning the pieces one by one, how to move them, and play games while I explain the thought process and why it's better to do a move over the other. I'll guide you to the best of my abilities, play practice games until the student beats the master! :]",
        p2: "With time and practice you will learn not only to play, but to think and love chess!",
      },
      learn: {
        title: "What You'll Learn",
        basics: {
          title: "Chess Basics",
          desc: "Learn how each piece moves, basic rules, and fundamental chess concepts from the ground up.",
        },
        strategies: {
          title: "Winning Strategies",
          desc: "Develop tactical awareness and strategic thinking to start winning your first games.",
        },
        confidence: {
          title: "Confidence Building",
          desc: "Gain the confidence to play against friends, family, or in casual chess environments.",
        },
      },
      reviews: {
        title: "Leave a Review",
        namePlaceholder: "Your name",
        reviewPlaceholder: "Share your experience with the chess lessons...",
        submitButton: "Submit Review",
        thankYou: "Thank you for your review!",
      },
      footer: "© 2024 First Time Chess Lessons. Ready to start your chess journey? Contact me today",
    },
    ro: {
      title: "Lecții de Șah pentru Prima Dată",
      nav: {
        home: "Acasă",
        contact: "Lecții și Contact",
      },
      hero: {
        title: "Descoperă Lumea Șahului",
        subtitle:
          "Lecții prietenoase pentru începători completi. Învață șahul de la zero și câștigă primele tale jocuri cu instrucțiuni personalizate.",
        cta: "Începe Acum",
        ctaSubtext: "intră în legătură cu mine acum!",
      },
      about: {
        title: "Misiunea Mea",
        p1: "Misiunea mea este să predau șahul de la nivelul zero până când începi să îți câștigi propriile tale meciuri! Vom începe să învățăm piesele una câte una, cum să le mișcăm, să jucăm meciuri în timp ce îți explic procesul de gândire și de ce este mai bună o mutare în locul alteia. Te voi ghida cu toate abilitățile mele, o să avem meciuri de antrenament până când elevul îl învinge pe maestru! :]",
        p2: "Cu timp și practică vei învăța nu doar să joci, ci să gândești și să iubești șahul!",
      },
      learn: {
        title: "Ce Vei Învăța",
        basics: {
          title: "Bazele Șahului",
          desc: "Învață cum se mișcă fiecare piesă, regulile de bază și conceptele fundamentale ale șahului de la început.",
        },
        strategies: {
          title: "Strategii Câștigătoare",
          desc: "Dezvoltă conștientizarea tactică și gândirea strategică pentru a începe să câștigi primele tale jocuri.",
        },
        confidence: {
          title: "Construirea Încrederii",
          desc: "Câștigă încrederea de a juca împotriva prietenilor, familiei sau în medii de șah casual.",
        },
      },
      reviews: {
        title: "Lasă o Recenzie",
        namePlaceholder: "Numele tău",
        reviewPlaceholder: "Împărtășește experiența ta cu lecțiile de șah...",
        submitButton: "Trimite Recenzia",
        thankYou: "Mulțumesc pentru recenzia ta!",
      },
      footer: "© 2024 Lecții de Șah pentru Prima Dată. Gata să îți începi călătoria în șah? Contactează-mă astăzi",
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

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newReview: Review = {
      id: Date.now().toString(),
      name: reviewName,
      rating: reviewRating,
      text: reviewText,
      date: new Date().toLocaleDateString(language === "ro" ? "ro-RO" : "en-US"),
    }

    const updatedReviews = [newReview, ...reviews]
    setReviews(updatedReviews)
    saveReviews(updatedReviews)

    alert(content[language].reviews.thankYou)
    setReviewName("")
    setReviewText("")
    setReviewRating(5)
    setShowForm(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-stone-200 bg-stone-200 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/logo.png" alt="First Time Chess Lessons Logo" className="h-24 w-auto" />
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2 py-1 rounded text-sm ${language === "en" ? "bg-emerald-600 text-white" : "text-stone-700 hover:text-emerald-600"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("ro")}
                  className={`px-2 py-1 rounded text-sm ${language === "ro" ? "bg-emerald-600 text-white" : "text-stone-700 hover:text-emerald-600"}`}
                >
                  RO
                </button>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-stone-700 hover:text-emerald-600 transition-colors">
                  {content[language].nav.home}
                </Link>
                <Link href="/contact" className="text-stone-700 hover:text-emerald-600 transition-colors">
                  {content[language].nav.contact}
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6 font-[family-name:var(--font-playfair)]">
            {content[language].hero.title}
          </h1>
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">{content[language].hero.subtitle}</p>
          <div className="flex flex-col items-center space-y-4">
            <Button
              size="lg"
              className="text-lg px-8 py-3 bg-emerald-600 hover:bg-emerald-700"
              onClick={handleGetStarted}
            >
              {content[language].hero.cta}
            </Button>
            <a
              href="https://first-time-chess-app-uajf-jq0k1ofe1-paulmarin663-1342s-projects.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              {language === "ro" ? "Joacă Șah" : "Play Chess"}
            </a>
            <p className="text-sm text-stone-600 text-center max-w-md mx-auto">
              {language === "ro" 
                ? "Accesează aplicația FirstTimeChess pentru a învăța și practica șahul" 
                : "Access the FirstTimeChess learning app to practice and improve your chess skills"
              }
            </p>
            <p className="text-sm text-stone-600">{content[language].hero.ctaSubtext}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6 font-[family-name:var(--font-playfair)]">
                {content[language].about.title}
              </h2>
              <p className="text-stone-600 mb-4 leading-relaxed">{content[language].about.p1}</p>
              <p className="text-stone-600 leading-relaxed">{content[language].about.p2}</p>
            </div>
            <div className="flex justify-center">
              <img
                src="/chess-lesson.png"
                alt="Chess instructor teaching a beginner"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-stone-800 mb-12 font-[family-name:var(--font-playfair)]">
            {content[language].learn.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/70 border-stone-200">
              <CardHeader>
                <div className="text-3xl mb-2">♟️</div>
                <CardTitle className="text-stone-800">{content[language].learn.basics.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-stone-600">{content[language].learn.basics.desc}</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white/70 border-stone-200">
              <CardHeader>
                <div className="text-3xl mb-2">🎯</div>
                <CardTitle className="text-stone-800">{content[language].learn.strategies.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-stone-600">{content[language].learn.strategies.desc}</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white/70 border-stone-200">
              <CardHeader>
                <div className="text-3xl mb-2">🏆</div>
                <CardTitle className="text-stone-800">{content[language].learn.confidence.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-stone-600">{content[language].learn.confidence.desc}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-stone-800 mb-12 font-[family-name:var(--font-playfair)]">
            {language === "ro" ? "Recenzii" : "Reviews"}
          </h2>

          {/* Display existing reviews */}
          {reviews.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {reviews.map((review) => (
                <Card key={review.id} className="bg-white/70 border-stone-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-stone-800 text-lg">{review.name}</CardTitle>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={`text-lg ${star <= review.rating ? "text-yellow-400" : "text-stone-300"}`}
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-stone-500">{review.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Add review button and form */}
          <div className="text-center">
            {!showForm ? (
              <Button onClick={() => setShowForm(true)} className="bg-emerald-600 hover:bg-emerald-700">
                {content[language].reviews.title}
              </Button>
            ) : (
              <Card className="bg-white/70 border-stone-200 max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <form onSubmit={handleReviewSubmit} className="space-y-6">
                    <div>
                      <Input
                        placeholder={content[language].reviews.namePlaceholder}
                        value={reviewName}
                        onChange={(e) => setReviewName(e.target.value)}
                        required
                        className="bg-white/50"
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-stone-700">Rating:</span>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setReviewRating(star)}
                            className={`text-2xl transition-colors hover:scale-110 ${
                              star <= reviewRating ? "text-yellow-400" : "text-stone-300 hover:text-yellow-200"
                            }`}
                          >
                            {star <= reviewRating ? "★" : "☆"}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Textarea
                        placeholder={content[language].reviews.reviewPlaceholder}
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        required
                        rows={4}
                        className="bg-white/50"
                      />
                    </div>
                    <div className="flex space-x-4">
                      <Button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                        {content[language].reviews.submitButton}
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setShowForm(false)} className="flex-1">
                        {language === "ro" ? "Anulează" : "Cancel"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-200 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-stone-700">
            {content[language].footer.split("Contact me today")[0]}
            <Link href="/contact" className="text-emerald-600 hover:underline">
              {language === "ro" ? "Contactează-mă astăzi" : "Contact me today"}
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
