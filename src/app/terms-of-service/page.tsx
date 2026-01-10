"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar onOpenQuote={() => {}} />

      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          <h1 className="text-4xl font-extrabold text-brand-dark mb-2 uppercase">Terms of Service</h1>
          <p className="text-gray-500 mb-10">Last Updated: January 10, 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the My Custom Patches website, you accept and agree to be bound by the terms and provision of this agreement. 
                In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Custom Orders & Artwork</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Copyright Responsibility:</strong> You represent and warrant that you have the legal right to reproduce any logos, trademarks, or copyrighted artwork you submit to us. You agree to indemnify and hold My Custom Patches harmless from any legal disputes arising from intellectual property infringement.</li>
                <li><strong>Digital Proofs:</strong> We provide a digital mockup for every order. It is your responsibility to check spelling, colors, and dimensions. Once the proof is approved, production begins immediately, and changes cannot be made.</li>
                <li><strong>Color Matching:</strong> While we strive for accuracy, thread and PVC colors may vary slightly from what is seen on a computer screen. We use standard Pantone matching where possible.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Production & Shipping</h2>
              <p>
                Turnaround times are estimates and not guarantees. While we make every effort to meet deadlines, delays caused by shipping carriers, customs (for international orders), or acts of God are beyond our control.
              </p>
              <p className="mt-2">
                <strong>International Shipping:</strong> For orders shipped outside the USA, the customer is responsible for any applicable customs duties, tariffs, or import taxes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Returns & Refunds</h2>
              <p>
                <strong>Custom Items:</strong> Due to the personalized nature of our products (custom patches), we cannot accept returns or offer refunds for "change of mind."
              </p>
              <p className="mt-2">
                <strong>Defects:</strong> If there is a manufacturing defect (e.g., wrong backing, incorrect size vs proof), you must notify us within 7 days of receipt with photographic evidence. We will reproduce the defective patches at no cost.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Payment</h2>
              <p>
                All custom orders must be paid in full before production begins. We accept major credit cards and PayPal. Prices are subject to change without notice, but confirmed quotes are valid for 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Contact Us</h2>
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
