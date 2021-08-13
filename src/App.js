import AboutusPage from "./pages/AboutusPage";
import Globalstyle from "./components/Globalstyle";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Switch, Route, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <Globalstyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutusPage />
          </Route>
          <Route exact path="/work">
            <OurWork />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
