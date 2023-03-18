import { dateToLocalFormat } from "../../../../../helpers/dateToLocalFormat";
import SpartakIcon from "../../../../../materials/icons/categories/Spartak";
import SgostuIcon from "../../../../../materials/icons/categories/Sgostu";
import GlobeIcon from "../../../../../materials/icons/categories/Globe";
import StarIcon from "../../../../../materials/icons/categories/Star";
import Button from "../../../../../common/Button/Button";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "./EventCard.css";

export default function EventCard({ event, eventId }) {
  const [empty, setEmpty] = useState("");
  useEffect(() => {
    if (event.spartak || event.rating || event.foreign)
      setEmpty("hide-categories");
  }, []);

  const cardClassName = `event-card ${empty}`;
  const { push } = useHistory();

  return (
    <div className={cardClassName}>
      <span className="event-date">
        {dateToLocalFormat(event.start).slice(0, 5)}
      </span>
      <div className="event-categories">
        {event.rating && <StarIcon />}
        {event.spartak && <SpartakIcon />}
        {/* {event.organization.indexOf("СГОСТУ") >= 0 && <SgostuIcon />} */}
        {event.foreign && <GlobeIcon />}
      </div>
      <span className="event-town">{event.town}</span>
      <p className="event-title">{event.title}</p>
      <Button
        className="event-details-btn"
        buttonText="Більше"
        onClick={() => {
          push(`/calendar/${eventId}`);
        }}
      />
    </div>
  );
}
