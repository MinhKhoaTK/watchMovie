import config from "../config";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const policRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.contact, component: Contact, layout: Contact },
];

export { policRoutes };
