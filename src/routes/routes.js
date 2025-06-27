import config from "../config";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import BannerMovies from "../pages/BannerMovies";

const policRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.contact, component: Contact, layout: Contact },
  { path: config.routes.baner, component: BannerMovies, layout: BannerMovies },
];

export { policRoutes };
