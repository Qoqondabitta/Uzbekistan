import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./HeaderVideo.css";
import headerVideo from "../../assets/images/uzbekistanHeaderVideo.mp4";

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const video = videoRef.current;

    video.addEventListener("loadedmetadata", () => {
      gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: ".header-container",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <header className="header-container">
      <video ref={videoRef} src={headerVideo} muted preload="auto" />
      <h1 className="header-text">Scroll to Play</h1>
    </header>
  );
};

export default Header;
