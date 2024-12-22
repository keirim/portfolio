import { NavLink } from "@/components/NavLink";
import { navLinks } from "@/lib/navConfig";

interface MobileNavProps {
  isOpen: boolean;
}

export function MobileNav({ isOpen }: MobileNavProps) {
  return (
    <nav
      className={`
        md:hidden bg-background absolute w-full left-0 
        transform transition-transform duration-200 ease-in-out
        ${isOpen ? "translate-y-0" : "-translate-y-full"}
      `}
      aria-hidden={!isOpen}
    >
      <div className="p-4 space-y-2">
        {navLinks.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
