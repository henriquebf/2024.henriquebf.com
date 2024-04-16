"use client";

import { useEffect, useState } from "react";
import { classNames } from "@/helpers/utilsHelper";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Container from "@/components/layout/Container";
import SocialIcons from "@/components/shared/SocialIcons";

export default function About() {
  const scrollPosition = useScrollPosition();

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (scrollPosition > 150) {
      setShowIntro(false);
    } else {
      setShowIntro(true);
    }
  }, [scrollPosition, setShowIntro]);

  const _handleCaretClick = () => {};

  return (
    <section id="about">
      <div className={classNames(["content", showIntro ? "show" : "hide"])}>
        <Container>
          <div className="wrapper">
            <div className={classNames(["scale", showIntro ? "show" : "hide"])}>
              <div className="avatar" />
              <h1>
                I am <b>Henrique Ferreira</b>
              </h1>
              <h3>
                A <b>Road Cycling</b> enthusiast and <b>Fullstack Developer</b>{" "}
                specialist on React based frameworks.
              </h3>
              <h3>
                20+ years experience building e-commerce and applications for
                Web, Desktop, Mobile or anything you can write code for.
              </h3>
              <div className="social-icons">
                <SocialIcons />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div
        className={classNames(["caret", showIntro ? "show" : "hide"])}
        onClick={_handleCaretClick}
      />
    </section>
  );
}
