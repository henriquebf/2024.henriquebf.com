"use client";

import { useEffect, useState } from "react";
import { classNames } from "@/helpers/utilsHelper";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Container from "@/components/layout/Container";

export default function Header() {
  const scrollPosition = useScrollPosition();

  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (scrollPosition > 150) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  }, [scrollPosition, setShowHeader]);

  const hideHeader = (e: any) => {
    e.preventDefault();
    const target = e.target.href?.split("#")[1] ?? "";
    const element = document.getElementById(target);
    element?.scrollIntoView();
    setTimeout(() => setShowHeader(false), 50);
  };

  return (
    <header id="header" className={classNames([showHeader ? "show" : "hide"])}>
      <Container>
        <nav>
          <a href="#about" onClick={hideHeader}>
            About
          </a>
          <div> &middot; </div>
          <a href="#projects" onClick={hideHeader}>
            Projects & Interest
          </a>
          <div> &middot; </div>
          <a href="#experience" onClick={hideHeader}>
            Experience
          </a>
          <div> &middot; </div>
          <a href="#availability" onClick={hideHeader}>
            Availability
          </a>
        </nav>
      </Container>
    </header>
  );
}
