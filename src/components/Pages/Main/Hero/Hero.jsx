import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../../../../App";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useContext } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import "./Hero.css";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    setTimeout(() => {
      // const cursor = document.querySelector(".hero-cursor");

      gsap.to(".title-stroke", {
        y: 0,
        duration: 0.55,
        onComplete: parallaxText(),
      });

      // document.addEventListener("mousemove", (e) => {
      //   const y = e.clientY - 400;
      //   cursor.style.cssText = "left: " + e.clientX + "px; top: " + y + "px; transform: translate(-50%, -50%) scale(1)";
      // });
    }, 500);
  }, []);

  function parallaxText() {
    gsap.to(".title", {
      y: -100,
      ease: "linear",
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "+=250px",
        scrub: true,
      },
    });
  }

  return (
    <div className="hero">
      <h1 className="title">
        <div>
          <span className="title-stroke">
            {language === "ua"
              ? "Спілка громадських організацій"
              : "Union of public organizations"}
          </span>
        </div>
        <div>
          <span className="title-stroke">
            {language === "ua"
              ? "спортивного танцю України"
              : "of sports dance of Ukraine"}
          </span>
        </div>
      </h1>
      <FontAwesomeIcon className="hero-arrow-down" icon={faArrowDown} fade />
      <span className="blur"></span>
    </div>
  );
}
