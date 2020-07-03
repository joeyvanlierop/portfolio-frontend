import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Box } from "theme-ui";

export function Navbar({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Determines if the current window is scrolled down
    function onScroll() {
      if (window.pageYOffset > 10) {
        setIsScrolled(true);
      } else if (window.pageYOffset <= 10) {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isScrolled]);

  return (
    <Box as={"nav"} variant={isScrolled ? "nav.default" : "nav.flat"}>
      {children}
    </Box>
  );
}

export function NavLink({ href, children, ...props }) {
  let router = useRouter();

  return (
    <Link href={href}>
      <Box
        as={"a"}
        variant={"links.nav"}
        sx={{
          opacity: router.pathname === href ? "1" : "0.5",
        }}
        {...props}
      >
        {children}
      </Box>
    </Link>
  );
}

export default Navbar;
