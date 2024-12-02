"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.elements.name.value.toUpperCase(),
      email: e.target.elements.email.value.toUpperCase(),
      mobile: e.target.elements.mobile.value.toUpperCase(),
      message: e.target.elements.message.value.toUpperCase(),
    };

    // Using fetch to send data
    await fetch("https://api.emailservice.com/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "codewithpanda28@gmail.com",
        subject: "New Contact Form Submission",
        body: `Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nMessage: ${formData.message}`,
      }),
    });
  };

  return (
    <div className="min-h-screen bg-[#001B37] p-4 md:p-8 lg:p-12">
      <div className="h-28">
        <header className="fixed top-0 left-[-8px] right-2 z-50 flex items-center p-2 min-h-[100px] min-w-full sm:justify-between  lg:pl-24 lg:pt-0 lg:left-20 ">
          <div className="text-white text-3xl font-bold ml-8 mt-4 z-10">
       <Link href="/">
  <Image
    src="/logo.svg"
    alt="Description of the image"
    width={144}
    height={100}
  />
</Link>
          </div>

          {/* navbar */}
          <Navbar />

          {/* image for large devices */}
          <div className="hidden lg:block mr-[10%] mt-[4%]">
            <Image src="/Tittle.svg" alt="SIde Logo" width={64} height={64} />
          </div>
        </header>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column */}
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4">
            <h1 className="news-title text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Get In Touch With Our Team{" "}
              <span className="text-[#FE6F00]">Team</span>
              <br />
            </h1>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-white/90">
              <Mail className="w-6 h-6 text-[#FE6F00]" />
              <Link
                href="mailto:contact@iimw.in"
                className="contact hover:text-[#FE6F00] transition-colors"
              >
                contact@iimw.in
              </Link>
            </div>
            <div className="flex items-center gap-4 text-white/90">
              <Phone className="w-6 h-6 text-[#FE6F00]" />
              <Link
                href="tel:+919876543210"
                className="contact hover:text-[#FE6F00] transition-colors"
              >
                +91 98765 43210
              </Link>
            </div>
            <div className="flex items-center gap-4 text-white/90">
              <MapPin className="w-6 h-6 text-[#FE6F00] " />
              <span className="contact">IIMW Office, Mumbai, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-8">
            <Link
              href="https://www.linkedin.com/showcase/iimw/?viewAsMember=true"
              className="w-12 h-12 rounded-full bg-[#FE6F00] flex items-center justify-center hover:bg-[#FE6F00]/80 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </Link>
            <Link
              href="https://www.instagram.com/iimw.in?igsh=czFocGVuMjZydDJ5"
              className="w-12 h-12 rounded-full bg-[#FE6F00] flex items-center justify-center hover:bg-[#FE6F00]/80 transition-colors"
            >
              <Instagram className="w-6 h-6 text-white" />
            </Link>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900 footer-fontleft">
                I am interested in...
              </h2>
              <div className="flex flex-wrap gap-3">
                <Button
                  type="button"
                  variant="secondary"
                  className="bg-[#FE6F00] text-white hover:bg-[#FE6F00]/90 contact"
                >
                  Music Production
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-white contact"
                >
                  Live Performance
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-white contact"
                >
                  Artist Management
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-white contact"
                >
                  Event Planning
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-white contact"
                >
                  Other
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your name"
                  className="contact border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#FE6F00]"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="contact border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#FE6F00]"
                />
              </div>
              <div>
                <Input
                  name="mobile"
                  type="number"
                  placeholder="Your mobile number"
                  className="contact border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#FE6F00]"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your message"
                  className="min-h-[100px] contact border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#FE6F00]"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#FE6F00] contact text-white hover:bg-[#FE6F00]/90"
            >
              <Send className="w-4 h-4 mr-2" /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
