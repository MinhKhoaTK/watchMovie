import config from "../config";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import BannerMovies from "../pages/BannerMovies";
import GenrePage from "../pages/GenrePage";
import WatchMovie from "../pages/WatchMovie";

const policRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.contact, component: Contact, layout: Contact },
  { path: config.routes.baner, component: BannerMovies, layout: BannerMovies },
  {
    path: config.routes.genre + "/:genreName",
    component: GenrePage,
    layout: GenrePage,
  },
  { path: (config.routes.genre || "/genre") + "/:genreName" },
  // { path: config.routes.watch + "/:id", component: WatchMovie, layout: null },
  {
    path: config.routes.watch + "/:slug/:ep",
    component: WatchMovie,
    layout: null,
  },
  {
    path: config.routes.watch + "/:slug", //  fallback nếu chưa có ep
    component: WatchMovie,
    layout: null,
  },
  ///////
];

export { policRoutes };
