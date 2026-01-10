"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BottomCTA } from "@/components/BottomCTA";
import { ContactForm } from "@/components/ContactForm";
import { Modal } from "@/components/ui/Modal";
import { QuoteForm } from "@/components/QuoteForm";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function ContactUs() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 1. Header Section */}
      <section className="pt-32 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-brand-dark">Contact </span>
          <span className="text-brand-orange">Us</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Any question or remarks? Just write us a message!
        </p>
      </section>

      {/* 2. Main Contact Card */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-[1100px] mx-auto bg-white rounded-2xl shadow-2xl p-2 md:p-3 flex flex-col md:flex-row overflow-hidden border border-gray-100">
          
          {/* LEFT SIDE: Black Info Card */}
          <div className="bg-[#1A1A1A] text-white p-8 md:p-10 rounded-xl md:w-[40%] flex flex-col justify-between relative overflow-hidden">
            {/* Background Circles for decoration */}
            <div className="absolute bottom-[-50px] right-[-50px] w-32 h-32 bg-white/10 rounded-full" />
            <div className="absolute bottom-[20px] right-[-80px] w-20 h-20 bg-white/10 rounded-full" />

            <div>
              <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
              <p className="text-gray-400 text-sm mb-10">Say something to start a live chat!</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-brand-orange" />
                  <span className="text-sm">+1 012 3456 789</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-brand-orange" />
                  <span className="text-sm">admin@mycustompatches.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-brand-orange mt-1" />
                  <span className="text-sm leading-relaxed max-w-[200px]">
                    132 Dartmouth Street Boston, Massachusetts 02156 <span className="text-brand-orange">United States</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-12">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-white/10 hover:bg-brand-orange transition-colors flex items-center justify-center cursor-pointer">
                  <Icon className="h-4 w-4 text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <div className="flex-1 p-8 md:p-12">
            <ContactForm />
          </div>

        </div>
      </section>

      <BottomCTA onOpenQuote={() => setIsQuoteOpen(true)} />
      
      <Modal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)}>
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-brand-dark">Get Your Free Quote</h2>
          <p className="mt-2 text-sm text-gray-500">
            Fill out the details below and attach your design.
          </p>
        </div>
        <QuoteForm />
      </Modal>

      <Footer />
    </main>
  );
}