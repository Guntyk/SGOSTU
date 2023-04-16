import { useContext } from "react";
import { LanguageContext } from "../../App";
import "./Loader.css";

export default function Loader() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="loader-sec">
      <div className="loader-wrapper">
        <span className="text">{language === "ua" ? "СГ" : "SG"}</span>
        <span className="text">{language === "ua" ? "СТУ" : "STU"}</span>
        <div className="loader">
          <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
}
