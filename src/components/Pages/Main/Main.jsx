import { articlesSelector } from "../../../redux/articles/selectors";
import { eventsSelector } from "../../../redux/events/selectors";
import { getArticles } from "../../../redux/articles/thunk";
import Announcements from "./Announcements/Announcements";
import NearestEvents from "./NearestEvents/NearestEvents";
import { getEvents } from "../../../redux/events/thunk";
import { useDispatch, useSelector } from "react-redux";
import Advantages from "./Advantages/Advantages";
import Database from "./Database/Database";
import Feedback from "./Feedback/Feedback";
import LastNews from "./LastNews/LastNews";
import Loader from "../../Loader/Loader";
import { useEffect } from "react";
import About from "./About/About";
import Hero from "./Hero/Hero";

export default function Main() {
  const articles = useSelector(articlesSelector);
  const events = useSelector(eventsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (events.length === 0) {
      dispatch(getEvents());
    }
    if (articles.length === 0) {
      dispatch(getArticles());
    }
  }, []);

  return (
    <>
      {events.length !== 0 && articles.length !== 0 ? (
        <main className="main">
          <Hero />
          <About />
          <Advantages />
          <NearestEvents events={events} />
          <LastNews articles={articles} />
          <Database />
          <Announcements articles={articles} />
          <Feedback />
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
}
