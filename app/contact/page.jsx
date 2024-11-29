'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      name: e.target.elements.name.value.toUpperCase(),
      email: e.target.elements.email.value.toUpperCase(),
      mobile: e.target.elements.mobile.value.toUpperCase(),
      message: e.target.elements.message.value.toUpperCase()
    };

    // Using fetch to send data
    await fetch('https://api.emailservice.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: 'codewithpanda28@gmail.com',
        subject: 'New Contact Form Submission',
        body: `Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nMessage: ${formData.message}`
      })
    });
  }

  return (
    <div className="min-h-screen bg-[#001B37] p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column */}
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Lets discuss on something{' '}
              <span className="text-[#E91E63]">cool</span>
              <br />
              together
            </h1>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-white/90">
              <Mail className="w-6 h-6 text-[#E91E63]" />
              <a href="mailto:contact@iimw.in" className="hover:text-[#E91E63] transition-colors">
                contact@iimw.in
              </a>
            </div>
            <div className="flex items-center gap-4 text-white/90">
              <Phone className="w-6 h-6 text-[#E91E63]" />
              <a href="tel:+919876543210" className="hover:text-[#E91E63] transition-colors">
                +91 98765 43210
              </a>
            </div>
            <div className="flex items-center gap-4 text-white/90">
              <MapPin className="w-6 h-6 text-[#E91E63]" />
              <span>IIMW Office, Mumbai, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-8">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#E91E63] flex items-center justify-center hover:bg-[#E91E63]/80 transition-colors"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#E91E63] flex items-center justify-center hover:bg-[#E91E63]/80 transition-colors"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#E91E63] flex items-center justify-center hover:bg-[#E91E63]/80 transition-colors"
            >
              <Twitter className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900">I am interested in...</h2>
              <div className="flex flex-wrap gap-3">
                <Button
                  type="button"
                  variant="secondary"
                  className="bg-[#E91E63] text-white hover:bg-[#E91E63]/90"
                >
                  Music Production
                </Button>
                <Button type="button" variant="outline" className="bg-white">
                  Live Performance
                </Button>
                <Button type="button" variant="outline" className="bg-white">
                  Artist Management
                </Button>
                <Button type="button" variant="outline" className="bg-white">
                  Event Planning
                </Button>
                <Button type="button" variant="outline" className="bg-white">
                  Other
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your name"
                  className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#E91E63]"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#E91E63]"
                />
              </div>
              <div>
                <Input
                  name="mobile"
                  type="number"
                  placeholder="Your mobile number"
                  className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#E91E63]"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your message"
                  className="min-h-[100px] border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#E91E63]"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#E91E63] text-white hover:bg-[#E91E63]/90"
            >
              <Send className="w-4 h-4 mr-2" /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}