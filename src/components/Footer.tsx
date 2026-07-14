import React from 'react';
import Link from 'next/link';
import { Landmark, Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background-alt/30 transition-colors duration-300 py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Landmark className="h-4.5 w-4.5 text-accent" />
              </div>
              <span className="font-heading text-xl font-semibold tracking-wider text-primary dark:text-foreground">
                AERO<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Welcome to the digital exhibit of human aviation. A premium interactive archive detailing
              aerospace design engineering, historical significance, and physical specifications of defining aircraft.
            </p>
          </div>

          {/* Quick Exhibits Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-primary dark:text-foreground">
              Collections
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/aircraft?category=fighter-jets" className="hover:text-accent transition-colors">
                  Fighter Jets
                </Link>
              </li>
              <li>
                <Link href="/aircraft?category=bombers" className="hover:text-accent transition-colors">
                  Bombers
                </Link>
              </li>
              <li>
                <Link href="/aircraft?category=passenger-aircraft" className="hover:text-accent transition-colors">
                  Passenger Liners
                </Link>
              </li>
              <li>
                <Link href="/aircraft?category=experimental" className="hover:text-accent transition-colors">
                  Experimental & Concept
                </Link>
              </li>
            </ul>
          </div>

          {/* Museum Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-primary dark:text-foreground">
              Curator Notes
            </h4>
            <p className="text-xs italic text-muted-foreground leading-relaxed">
              &ldquo;Once you have tasted flight, you will forever walk the earth with your eyes turned skyward,
              for there you have been, and there you will always long to return.&rdquo;
              <span className="block mt-1 font-sans not-italic font-medium text-accent">— Leonardo da Vinci</span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-border/30 pt-6 text-xs text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} AERO Museum of Digital Flight. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/admin" className="hover:text-accent transition-colors flex items-center gap-1">
              <Compass className="h-3 w-3" />
              <span>Curator Portal</span>
            </Link>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Exhibit
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Guide
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
