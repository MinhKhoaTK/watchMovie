import { Header, Footer } from "../components";
function WatchMovieOnly({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default WatchMovieOnly;
