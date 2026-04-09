"use client"

import { useState } from "react"
import Link from "next/link"
import { Send, CheckCircle, X } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    privacyConsent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Bitte geben Sie Ihren Namen ein"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein"
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Bitte geben Sie einen Betreff ein"
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Bitte geben Sie Ihre Nachricht ein"
    }
    
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = "Sie müssen der Datenschutzerklärung zustimmen"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setShowSuccessPopup(true)
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      privacyConsent: false,
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors text-sm sm:text-base ${
              errors.name ? "border-destructive" : "border-border"
            }`}
            placeholder="Ihr Name"
          />
          {errors.name && (
            <p className="mt-1 text-xs sm:text-sm text-destructive">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors text-sm sm:text-base ${
              errors.email ? "border-destructive" : "border-border"
            }`}
            placeholder="ihre@email.de"
          />
          {errors.email && (
            <p className="mt-1 text-xs sm:text-sm text-destructive">{errors.email}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
            Betreff *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors text-sm sm:text-base ${
              errors.subject ? "border-destructive" : "border-border"
            }`}
            placeholder="Betreff Ihrer Nachricht"
          />
          {errors.subject && (
            <p className="mt-1 text-xs sm:text-sm text-destructive">{errors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
            Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none text-sm sm:text-base ${
              errors.message ? "border-destructive" : "border-border"
            }`}
            placeholder="Ihre Nachricht..."
          />
          {errors.message && (
            <p className="mt-1 text-xs sm:text-sm text-destructive">{errors.message}</p>
          )}
        </div>

        {/* Privacy Consent */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="privacyConsent"
              checked={formData.privacyConsent}
              onChange={handleChange}
              className="mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded border-border bg-background text-primary focus:ring-primary focus:ring-2"
            />
            <span className="text-xs sm:text-sm text-muted-foreground">
              Ich stimme der{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Datenschutzerklärung
              </Link>{" "}
              zu und willige in die Verarbeitung meiner personenbezogenen Daten ein *
            </span>
          </label>
          {errors.privacyConsent && (
            <p className="mt-1 text-xs sm:text-sm text-destructive">{errors.privacyConsent}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm sm:text-base"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Wird gesendet...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 sm:h-5 sm:w-5" />
              Nachricht senden
            </>
          )}
        </button>
      </form>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowSuccessPopup(false)}
          />
          <div className="relative bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 fade-in duration-300">
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 p-1.5 sm:p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Schließen"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                Nachricht gesendet!
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                Vielen Dank für Ihre Anfrage. Wir werden uns so schnell wie möglich bei Ihnen melden.
              </p>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors text-sm sm:text-base"
              >
                Ausgezeichnet!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
