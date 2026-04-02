"use client"

import { useState } from "react"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { toast } from "sonner"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send form data to Next.js API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message)
      }

      // SUCCESS TOAST
      toast.success("Message sent!", {
        description: "Thanks for reaching out. I'll get back to you soon.",
        icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      })

      setFormData({ name: "", email: "", message: "" })

    } catch (error: unknown) {
      // ERROR TOAST
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred"
      toast.error("Something went wrong", {
        description: errorMessage || "Please try again later.",
        icon: <AlertCircle className="h-5 w-5 text-red-500" />,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Contact Me
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-md">
              I’d love to hear about your project. Fill the form, and I’ll get back to you as soon as possible.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-[var(--brand-green)] font-semibold mb-1">Email:</p>
                <a href="mailto:Moneta@gmail.com" className="text-neutral-900 hover:underline">yoftsh9843@gmail.com</a>
              </div>
              <div>
                <p className="text-sm text-[var(--brand-green)] font-semibold mb-1">Phone:</p>
                <a href="tel:+17631683" className="text-neutral-900 hover:underline">+251 956 262 290</a>
              </div>
              <div>
                <p className="text-sm text-[var(--brand-green)] font-semibold mb-1">Address:</p>
                <address className="not-italic text-neutral-900 leading-relaxed">
                  Addis Ababa, Ethiopia
                </address>
              </div>
            </div>
            <div>
              
              
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-[var(--brand-green)] font-medium mb-2">Your Name</label>
                <input required type="text" id="name" name="name" placeholder="Your full name" value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-100 rounded-md text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300 transition-all" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[var(--brand-green)] font-medium mb-2">Email address</label>
                <input required type="email" id="email" name="email" placeholder="Your email address" value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-100 rounded-md text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300 transition-all" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-[var(--brand-green)] font-medium mb-2">Message</label>
              <textarea required id="message" name="message" placeholder="Write something...." rows={6} value={formData.message} onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-100 rounded-md text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300 transition-all resize-none" />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-3.5 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}