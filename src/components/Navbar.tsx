import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "../lib/utils";

interface NavbarProps {
  onOpenQuote: () => void;
}

export function Navbar({ onOpenQuote }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/assets/logo.png"
              alt="My Custom Patches"
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {["Home", "About", "Products", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-700 hover:text-brand-orange transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button onClick={onOpenQuote} size="sm" className="hidden sm:inline-flex bg-white text-black hover:bg-brand-orange hover:text-white border-2 border-brand-orange">
            Instant Quote
          </Button>
          
          {/* Mobile Menu Button */}
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}