'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Search, Sun, Moon, Database, Menu, X, Landmark } from 'lucide-react';
import { useSearchStore } from '@/lib/store';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const openSearch = useSearchStore((state) => state.openSearch);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    const timer = window.setTimeout(() => setMobileMenuOpen(false), 0);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  const navLinks = [
    { label: 'Exhibits', href: '/aircraft' },
    { label: 'Chronology', href: '/timeline' },
    { label: 'Compare Matrix', href: '/compare' },
  ];

  const isActive = (path: string) => {
    if (path === '/aircraft') {
      return pathname.startsWith('/aircraft');
    }
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 group-hover:scale-105 shadow-sm">
            <Landmark className="h-5 w-5 text-accent" />
          </div>
          <span className="font-heading text-2xl font-semibold tracking-wider text-primary dark:text-foreground">
            AERO<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  active
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-primary dark:hover:text-foreground'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Controls */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Quick Search */}
          <button
            onClick={openSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-muted-foreground bg-background-alt/50 border border-border rounded-full hover:bg-background-alt/80 hover:text-foreground transition-all duration-300 shadow-inner"
          >
            <Search className="h-3.5 w-3.5" />
            <span>Search exhibits</span>
            <kbd className="hidden lg:inline-flex h-4 items-center gap-0.5 rounded border border-border bg-background px-1.5 font-mono text-[9px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>

          {/* Admin Dashboard Quick Link */}
          <Link
            href="/admin"
            className="p-2.5 rounded-full text-muted-foreground hover:bg-background-alt hover:text-foreground transition-all duration-300"
            title="Admin Console"
          >
            <Database className="h-5 w-5" />
          </Link>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-full text-muted-foreground hover:bg-background-alt hover:text-foreground transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
        </div>

        {/* Mobile controls & toggle */}
        <div className="flex md:hidden items-center space-x-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full text-muted-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <button
            onClick={openSearch}
            className="p-2 rounded-full text-muted-foreground"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-muted-foreground hover:bg-background-alt hover:text-foreground transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg animate-fade-in-up py-4 px-6 absolute top-20 left-0 w-full shadow-lg transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium tracking-wide uppercase py-2 ${
                  isActive(link.href) ? 'text-accent border-l-2 border-accent pl-2' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className={`text-base font-medium tracking-wide uppercase py-2 flex items-center gap-2 ${
                pathname === '/admin' ? 'text-accent border-l-2 border-accent pl-2' : 'text-muted-foreground'
              }`}
            >
              <Database className="h-4 w-4" />
              <span>Admin Console</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
