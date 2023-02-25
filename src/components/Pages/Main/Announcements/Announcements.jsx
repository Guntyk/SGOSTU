import AnnouncementsCard from "./AnnouncementsCard/AnnouncementsCard";
import "./Announcements.css";
import { useContext } from "react";
import { Context } from "../../../..";

export default function Announcements() {
  const { announcements } = useContext(Context);

  return (
    <article className="last-news announcements">
      <span className="news-title">Анонси</span>
      <div className="container">
        <div className="last-news-wrapper">
          {announcements.length !== 0
            ? announcements
                .slice(0, 3)
                .map((announcement) => (
                  <AnnouncementsCard key={announcement.id} newspaper={announcement} />
                ))
            : alert("No news")}
        </div>
      </div>
    </article>
  );
}
