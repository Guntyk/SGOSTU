import { dateToLocalFormat } from "../../../../helpers/dateToLocalFormat";
import { eventsSelector } from "../../../../redux/events/selectors";
import { getEvents } from "../../../../redux/events/thunk";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../common/Button/Button";
import { Link, useParams } from "react-router-dom";
import Loader from "../../../Loader/Loader";
import { useEffect } from "react";
import { useState } from "react";
import "./EventInfo.css";

export default function EventInfo() {
  const [info, setInfo] = useState("Спонсори та партнери");
  const url = "https://backend-tbpix.ondigitalocean.app";
  const events = useSelector(eventsSelector);
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (events.length === 0) {
      dispatch(getEvents());
    }
  }, []);

  useEffect(() => {
    [...events].map((eventObj) => {
      if (Number(eventObj.id) === Number(eventId)) {
        setEvent(eventObj.attributes);
      }
    });
  }, [events]);

  useEffect(() => {
    if (event) {
      const list = document.querySelectorAll(".event-details-list");
      function activeLink() {
        list.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
        setInfo(this.innerText);
      }
      list.forEach((item) => item.addEventListener("click", activeLink));
    }
  }, [event]);

  return (
    <>
      {event ? (
        <article className="event-info">
          <div className="container event-details-container">
            <Link className="back-link" to="/calendar">
              ˂ Назад
            </Link>
            <div className="event-detail-info-row">
              <div className="img-wrapper">
                {event.banner?.data ? (
                  <img
                    src={url + event.banner.data?.attributes.url}
                    alt="Банер турніру"
                  />
                ) : (
                  <span>Не заповнено</span>
                )}
              </div>
              <ul className="event-details">
                <li className="event-detail-info-title">{event.title}</li>
                <li>
                  <span className="event-detail-stroke-name">
                    Організація:{" "}
                  </span>
                  {event.organizations?.data
                    .map((organization) => organization.attributes.name)
                    .join(", ")}
                </li>
                <li>
                  <span className="event-detail-stroke-name">
                    Організатор:{" "}
                  </span>
                  {event.organizator}
                </li>
                <li>
                  <span className="event-detail-stroke-name">Місто: </span>
                  {event.town}
                </li>
                <li>
                  <span className="event-detail-stroke-name">Дата: </span>
                  {event.end
                    ? `${dateToLocalFormat(event.start).slice(
                        0,
                        5
                      )} — ${dateToLocalFormat(event.end).slice(0, 5)}`
                    : dateToLocalFormat(event.start).slice(0, 5)}
                </li>
              </ul>
            </div>
            <div className="event-detail-info-row">
              <Button
                className="event-info-btn"
                buttonText="Інформація"
                disabled={!event.entry.data ? true : false}
              />
              <Button
                className="event-info-btn"
                buttonText="Судді"
                disabled={!event.judges ? true : false}
              />
              <Button
                className="event-info-btn black"
                buttonText="Реєстрація учасників"
                disabled={!event.registration ? true : false}
              />
            </div>
            <div className="event-detail-info-row">
              <ul className="event-detail-buttons">
                <li className="event-details-list active">
                  Спонсори та партнери
                </li>
                <li className="event-details-list">Готелі</li>
                <li className="event-details-list">Адреса</li>
                <div className="indicator"></div>
              </ul>
            </div>
            <div className="event-detail-information">
              <p>
                {info === "Спонсори та партнери" &&
                  event.partners.data.map((partner) => partner.attributes.name).join(", ")}
                {info === "Готелі" && event.hotels}
                {info === "Адреса" && (
                  <iframe
                    src={event.address}
                    width="100%"
                    height="490px"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                )}
              </p>
            </div>
          </div>
        </article>
      ) : (
        <Loader />
      )}
    </>
  );
}
