import { Header, Footer } from "../components";

function GenrePageOnly({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default GenrePageOnly;
