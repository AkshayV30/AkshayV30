"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import ThemeToggle from "@/components/layout/ThemeToggle";

import {
  desktopNavVariants,
  headerContainerVariants,
  iconVariants,
  navItemVariants,
} from "@/app/motions";

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: readonly NavLink[] = [
  { href: "/#hero", label: "Home" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#education", label: "Education" },
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/#contact", label: "Contact" },
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenu = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.header
      variants={headerContainerVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          variants={navItemVariants}
          whileHover={{ y: -1 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="/#hero"
            onClick={closeMenu}
            className="font-heading text-xl font-semibold tracking-tight transition-colors hover:text-primary"
          >
            Akshay Minz
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          aria-label="Primary navigation"
          variants={desktopNavVariants}
          initial="hidden"
          animate="visible"
          className="hidden items-center gap-5 md:flex"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <motion.div key={href} variants={navItemVariants}>
              <Link
                href={href}
                className="relative rounded-sm text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
              >
                {label}
              </Link>
            </motion.div>
          ))}

          <motion.div variants={navItemVariants}>
            <ThemeToggle />
          </motion.div>
        </motion.nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
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
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-4 lg:px-8">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Scroll progress */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-primary will-change-transform"
        style={{ scaleX }}
      />
    </motion.header>
  );
}
