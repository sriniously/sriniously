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
  {
    href: "/gear",
    label: "gear",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-3 py-5 text-lg">
        {links.map(({ href, label }) => {
          const isActive =
            pathname.includes("/blog/") && href.includes("/blog")
              ? pathname.includes(href)
              : pathname === href;

          return (
            <Link href={href} key={href}>
              <li
                className={`
                ${
                  isActive
                    ? "text-foreground font-semibold"
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
