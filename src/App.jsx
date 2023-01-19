import Calendar from "./components/Pages/Calendar/Calendar";
import Contacts from "./components/Pages/Contacts/Contacts";
import Feedback from "./components/Pages/Feedback/Feedback";
import NotFound from "./components/Pages/NotFound/NotFound";
import { sendMessageToBot } from "./api/requests";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import Main from "./components/Pages/Main/Main";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    sendMessageToBot("Здійснено вхід на сайт");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Loader loading={loading} />
          <Main />
        </Route>
        <Route exact path="/calendar">
          <Calendar />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route exact path="/feedback">
          <Feedback />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
