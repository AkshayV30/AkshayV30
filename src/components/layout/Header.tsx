"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/layout/ThemeToggle";

import {
  buttonHover,
  desktopNavVariants,
  headerContainerVariants,
  iconVariants,
  navItemVariants,
} from "@/app/motions";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenu = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <motion.header
      variants={headerContainerVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          variants={navItemVariants}
          whileHover={{ y: -1 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="#hero"
            onClick={closeMenu}
            className="font-heading text-xl font-semibold tracking-tight"
          >
            Akshay Minz
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          aria-label="Primary navigation"
          variants={desktopNavVariants}
          initial="hidden"
          animate="visible"
          className="hidden items-center gap-5 md:flex"
        >
          {navLinks.map((link) => (
            <motion.div key={link.href} variants={navItemVariants}>
              <Link
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          <motion.div {...buttonHover}>
            <Button size="sm" radius="sm">
              <Link href="#contact">Hire Me</Link>
            </Button>
          </motion.div>

          {/* ThemeToggle handle motions internally, wrapped in standard nav entry tree */}
          <motion.div variants={navItemVariants}>
            <ThemeToggle />
          </motion.div>
        </motion.nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
