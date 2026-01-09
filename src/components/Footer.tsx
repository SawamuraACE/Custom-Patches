"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          {/* COLUMN 1: Brand Info */}
          <div className="space-y-6">
            <img
              src="/assets/logo.png"
              alt="My Custom Patches"
              className="h-16 w-auto object-contain -ml-2"
            />
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              My Custom Patches <br />
              Panda Makes Patches Easy!
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-brand-orange" />
                <span>admin@mycustompatches.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-brand-orange" />
                <span>302 773 8982</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-brand-orange mt-1" />
                <span>30 N GOULD ST STE 40128 SHERIDAN WY 82801</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Custom Patches Links */}
          <div>
            <h3 className="font-bold text-lg text-brand-dark mb-6">Custom Patches</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li>
                <Link href="#" className="hover:text-brand-orange transition-colors">
                  Custom Embroidered Patches
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-orange transition-colors">
                  Custom Chenille Patches
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-orange transition-colors">
                  Custom PVC Patches
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-orange transition-colors">
                  Custom Woven Patches
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-orange transition-colors">
                  Custom Printed Patches
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-orange transition-colors">
                  Custom Leather Patches
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-orange transition-colors">
                  No Background PVC
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-orange transition-colors">
                  Custom Sequin Patch
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Custom Products Links */}
          <div>
            <h3 className="font-bold text-lg text-brand-dark mb-6">Custom Products</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li>
                <Link href="#" className="hover:text-brand-orange transition-colors">
                  PVC Shoe Charms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-orange transition-colors">
                  Challenge Coins
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-orange transition-colors">
                  Keychains
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-orange transition-colors">
                  Lapel Pins
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 text-center text-xs text-gray-400">
          <p>© 2024 My Custom Patches. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
