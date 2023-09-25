"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/blog",
    label: "blog",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-3 py-10 text-lg">
        {links.map(({ href, label }) => {
          return (
            <Link href={href} key={href}>
              <li
                className={`
                ${
                  pathname === href
                    ? "text-foreground font-bold"
                    : "text-gray-500 hover:text-foreground transition-colors duration-200"
                }
                `}
              >
                {label}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
