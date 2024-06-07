"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Home() {
  const sections = gsap.utils.toArray(".panel");

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sections, {
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // markers: true,
      },
      xPercent: -100 * (sections.length - 1),
      ease: "none",
    });
    // gsap.to(".redBox", {
    //   scrollTrigger: {
    //     trigger: ".redBox",
    //     start: "top top",
    //     end: "5000px top",
    //     pin: true,
    //     scrub: 1,
    //     // markers: true,
    //   },
    //   x: "1500px",
    //   ease: "none",
    //   duration: 3,
    //   rotate: 720,
    // });
  });
  return (
    <div className="w-screen">
      <div id="firstContent" className="panel h-dvh bg-slate-500">
        First content block
        <div className="redBox w-10 h-10 bg-red-700"></div>
      </div>
      <div id="secondContent" className="panel h-dvh bg-stone-800">
        Second content block
      </div>
      <div id="thirdContent" className="panel h-dvh bg-stone-700">
        Third content block
      </div>
    </div>
  );
}
