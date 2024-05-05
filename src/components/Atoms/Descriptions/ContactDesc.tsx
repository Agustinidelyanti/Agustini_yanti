import React from "react";
import { Reveal } from "../../ui/FramerMotion/onReveal";

export default function ContactDesc() {
  return (
    <div>
      <Reveal delay={0.2} duration={0.5}>
        <h2 className="text-xl lg:text-3xl text-black dark:text-white font-bold ">
          Contact
        </h2>
      </Reveal>
      <Reveal delay={0.3} duration={0.8}>
        <p className="font-ghaly text-gray-600 dark:text-[#d3d4d6] pt-3">
        Hubungi saya untuk kolaborasi, terutama pekerjaan frontend.
        Saya senang bisa membantu! (temukan email saya di footer)
        </p>
      </Reveal>
    </div>
  );
}
