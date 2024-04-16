"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import SocialIcons from "@/components/shared/SocialIcons";
import IconCopyClipboard from "@/components/svg/IconCopyClipboard";
import { classNames, sleep } from "@/helpers/utilsHelper";

export default function Footer() {
  const emailAddress = "contact@henriquebf.com";
  const [hasCopied, setCopied] = useState(false);
  const [isFading, setFading] = useState(false);

  const copyToClipboard = async () => {
    navigator.clipboard.writeText(emailAddress);
    if (hasCopied) return;
    // show "copied" message
    setCopied(true);
    // fade "copied message"
    await sleep(1000);
    setFading(true);
    // reset
    await sleep(1000);
    setCopied(false);
    setFading(false);
  };

  return (
    <section id="footer">
      <Container>
        <div className="wrapper">
          <div className="email">
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            <div className="icon" onClick={copyToClipboard}>
              <IconCopyClipboard size="20px" />
            </div>
            {hasCopied && (
              <span
                className={classNames(["copied", isFading ? "fading" : ""])}
              >
                saved in clipboard
              </span>
            )}
          </div>
          <div>
            <div className="social">
              <SocialIcons />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
