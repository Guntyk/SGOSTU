import { dateToLocalFormat } from "../../../../../helpers/dateToLocalFormat";
import trofey from "../../../../../materials/icons/calendar-card/trofey.png";
import master from "../../../../../materials/icons/calendar-card/master.png";
import SpartakIcon from "../../../../../materials/icons/categories/Spartak";
import crowd from "../../../../../materials/icons/calendar-card/crowd.png";
import GlobeIcon from "../../../../../materials/icons/categories/Globe";
import StarIcon from "../../../../../materials/icons/categories/Star";
import Button from "../../../../../common/Button/Button";
import { useHistory } from "react-router-dom";
import "./EventCard.css";

export default function EventCard({ event, eventId }) {
  const { push } = useHistory();

  function Category({ type }) {
    if (type === "Змагання") {
      return <img src={trofey} />;
    }
    if (type === "Збори") {
      return <img src={crowd} />;
    }
    if (type === "Майстер-клас") {
      return <img src={master} />;
    }
  }

  return (
    <div className="event-card">
      <span className="event-date">
        {dateToLocalFormat(event.start).slice(0, 5)}
      </span>
      <span className="event-town">{event.town}</span>
      <p className="event-title">{event.title}</p>
      <div className="event-categories">
        <Category type={event.type} />
        {event.foreign && <GlobeIcon />}
        {event.rating && <StarIcon />}
        {event.spartak && <SpartakIcon />}
      </div>
      <p className="event-organizer">{event.organizator}</p>
      <Button
        className="event-more event-details-btn"
        buttonText="Більше"
        onClick={() => {
          push(`/calendar/${eventId}`);
        }}
      />
    </div>
  );
}
