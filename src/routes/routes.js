import config from "../config";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import BannerMovies from "../pages/BannerMovies";
import GenrePage from "../pages/GenrePage";

const policRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.contact, component: Contact, layout: Contact },
  { path: config.routes.baner, component: BannerMovies, layout: BannerMovies },
  {
    path: config.routes.genre,
    component: GenrePage,
    layout: GenrePage,
  },
];

export { policRoutes };
