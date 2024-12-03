"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.elements.senderemail.value.toUpperCase(),
      email: e.target.elements.email.value.toUpperCase(),
      mobile: e.target.elements.mobileno.value.toUpperCase(),
      message: e.target.elements.message.value.toUpperCase(),
      interest: Array.from(e.target.querySelectorAll('.interest-button[style*="background-color: rgb(254, 111, 0)"]'))
                    .map(button => button.textContent.trim()),
    };

    if (formData.name && formData.email && formData.mobile && formData.message && formData.interest.length > 0) {
      // Using emailjs to send data to your Gmail
      emailjs.send("service_k09wrnl", "template_6y635xg", {
        to_name: "YOUR_GMAIL_ADDRESS",
        from_name: formData.name,
        reply_to: formData.email,
        message: `Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}
Message: ${formData.message}
Interest: ${formData.interest.join(", ")}`,
      }, "9V4RhGDUCUauho_oJ")
      .then((response) => {
        alert('Your message has been sent successfully!');
      }, (error) => {
        alert('There was an error sending your message. Please try again.');
      });
    } else {
      alert('Please fill in all fields and select at least one interest.');
    }
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
  <Link href="/">
    <Image src="/Tittle.svg" alt="SIde Logo" width={64} height={64} />
  </Link>
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
              className="w-12 h-12 rounded-full  flex items-center justify-center hover:bg-[#FE6F00]/80 transition-colors"
            >
              <img src="footer/linkedin.svg" alt="LinkedIn" className="w-14 h-14" />
            </Link>
            <Link
              href="https://www.instagram.com/iimw.in?igsh=czFocGVuMjZydDJ5"
              className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#FE6F00]/80 transition-colors"
            >
              <img src="footer/instagram.svg" alt="Instagram" className="w-14 h-14" />
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
      variant="outline"
      className="bg-white contact interest-button"
      onClick={(e) => {
        if (e.currentTarget.style.backgroundColor === 'rgb(254, 111, 0)') { // Using RGB value for color comparison
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.color = 'black';
        } else {
          e.currentTarget.style.backgroundColor = '#FE6F00';
          e.currentTarget.style.color = 'white';
        }
      }}
    >
      Music Production
    </Button>
    <Button
      type="button"
      variant="outline"
      className="bg-white contact interest-button"
      onClick={(e) => {
        if (e.currentTarget.style.backgroundColor === 'rgb(254, 111, 0)') {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.color = 'black';
        } else {
          e.currentTarget.style.backgroundColor = '#FE6F00';
          e.currentTarget.style.color = 'white';
        }
      }}
    >
      Live Performance
    </Button>
    <Button
      type="button"
      variant="outline"
      className="bg-white contact interest-button"
      onClick={(e) => {
        if (e.currentTarget.style.backgroundColor === 'rgb(254, 111, 0)') {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.color = 'black';
        } else {
          e.currentTarget.style.backgroundColor = '#FE6F00';
          e.currentTarget.style.color = 'white';
        }
      }}
    >
      Artist Management
    </Button>
    <Button
      type="button"
      variant="outline"
      className="bg-white contact interest-button"
      onClick={(e) => {
        if (e.currentTarget.style.backgroundColor === 'rgb(254, 111, 0)') {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.color = 'black';
        } else {
          e.currentTarget.style.backgroundColor = '#FE6F00';
          e.currentTarget.style.color = 'white';
        }
      }}
    >
      Event Planning
    </Button>
    <Button
      type="button"
      variant="outline"
      className="bg-white contact interest-button"
      onClick={(e) => {
        if (e.currentTarget.style.backgroundColor === 'rgb(254, 111, 0)') {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.color = 'black';
        } else {
          e.currentTarget.style.backgroundColor = '#FE6F00';
          e.currentTarget.style.color = 'white';
        }
      }}
    >
      Other
    </Button>
  </div>
</div>

            <div className="space-y-4">
              <div>
                <Input
                  name="senderemail"
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
                  name="mobileno"
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

