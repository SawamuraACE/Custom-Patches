"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar onOpenQuote={() => {}} />

      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          <h1 className="text-4xl font-extrabold text-brand-dark mb-2 uppercase">Privacy Policy</h1>
          <p className="text-gray-500 mb-10">Last Updated: January 10, 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Introduction</h2>
              <p>
                Welcome to My Custom Patches ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) 
                and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">2. The Data We Collect</h2>
              <p className="mb-4">We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together follows:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Identity Data:</strong> First name, last name, username, or similar identifier.</li>
                <li><strong>Contact Data:</strong> Billing address, delivery address, email address, and telephone numbers.</li>
                <li><strong>Transaction Data:</strong> Details about payments to and from you and other details of products you have purchased from us.</li>
                <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                <li><strong>Design Data:</strong> Artwork, logos, and images you upload for the purpose of creating custom patches.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">3. How We Use Your Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>To register you as a new customer.</li>
                <li>To process and deliver your order (including managing payments, fees, and charges).</li>
                <li>To manage our relationship with you (notifying you about changes to our terms or privacy policy).</li>
                <li>To produce your custom products (sharing artwork files with our production facility).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Intellectual Property & Artwork</h2>
              <p>
                Any artwork or designs uploaded to our "Instant Quote" or "Contact" forms are stored securely via Cloudinary services. 
                We do not share your proprietary designs with third parties other than our direct manufacturing partners required to fulfill your order. 
                Your designs remain your intellectual property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">5. International Transfers</h2>
              <p>
                As a business with a global clientele (USA, Europe, Asia), your data may be transferred to, and stored at, a destination outside the European Economic Area (EEA). 
                It may also be processed by staff operating outside the EEA who work for us or for one of our suppliers. 
                By submitting your personal data, you agree to this transfer, storing, or processing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Your Legal Rights (GDPR & CCPA)</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to receive a copy of the personal data we hold about you 
                and the right to make a complaint at any time to the relevant data protection authority.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Contact Details</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us:</p>
              <div className="mt-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <p><strong>My Custom Patches</strong></p>
                <p>Email: admin@mycustompatches.com</p>
                <p>Phone: 3027738982</p>
                <p>Address: 701 TILLERY ST STE 12 AUSTIN TX 78702</p>
              </div>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
