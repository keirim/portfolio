import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "@/components/NavLink";
import { MobileNav } from "@/components/MobileNav";
import { navLinks } from "@/lib/navConfig";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background shadow-md relative">
      <div className="container mx-auto px-4 pt-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary">
          Keiran
        </div>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary hover:text-primary/80 transition-colors"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <MobileNav isOpen={isOpen} />
    </header>
  );
}
