"use client";

import { useState } from "react";
import { Snippet } from "@heroui/snippet";
import { Button } from "@heroui/button";

import { title, subtitle } from "@/components/primitives";
import ConfettiButton from "@/components/confettiButton";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Ranking&nbsp;</span>
        <span className={title({ color: "violet" })}>Disney Movies&nbsp;</span>
        <br />
        <span className={title()}>By Popularity</span>
        <div className={subtitle({ class: "mt-4" })}>
          Which one is your favorite?
        </div>
      </div>

      <div className="flex gap-3">
        <ConfettiButton />

        <div className={spinning ? "animate-spin" : ""}>
          <Button radius="full" variant="ghost" onPress={spinButton}>
            Spin
          </Button>
        </div>
      </div>

      <img
        alt="zootopia"
        src="https://editorial.rottentomatoes.com/wp-content/uploads/2026/01/ZOOTOPIAheader.jpg"
        width="50%"
      />
      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            <ol>
              <li>1. Pinocchio</li>
              <li>2. Zootopia</li>
              <li>3. 101 Dalmations</li>
              <li>4. Snow White and the Seven Dwarf</li>
              <li>5. Aladdin</li>
            </ol>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
