import { Route } from "react-router-dom";
import Seasons from "./pages/Home";
import TopAnime from "./pages/TopAnime";
import { Routes as Router } from "react-router-dom";
import Anime from "./pages/Anime";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Seasons />} />
      <Route path="/top" element={<TopAnime />} />
      <Route path="/anime/:id" element={<Anime />} />
    </Router>
  );
};

export default Routes;
