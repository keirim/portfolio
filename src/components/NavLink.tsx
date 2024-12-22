import { Link } from 'react-router-dom'

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      to={href}
      className="flex items-center text-primary font-bold hover:text-primary/80 
          transition-colors duration-200 py-2"
    >
      {children}
    </Link>
  );
}