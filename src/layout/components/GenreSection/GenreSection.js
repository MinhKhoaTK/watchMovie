import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import { useState } from "react";

import CardMovies from "../CardMovies";
import Styles from "./GenreSection.module.scss";
import Button from "../../../components/Button";

const cx = classNames.bind(Styles);

function GenreSection({ data = [] }) {
  const { genreName } = useParams();

  // lộc phim theo từng thể loại
  //- Dùng .filter() để chỉ lấy các phim có category trùng với genreName
  //- Dấu ?. giúp tránh lỗi nếu category bị undefined

  const genreMovie = data.filter(
    (movie) => movie.category?.toLowerCase() === genreName?.toLowerCase()
  );

  console.table(genreMovie);
  console.log(genreMovie.map((m) => m.category) + "genreCategory");
  /// Phép tính next trang
  const itemPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * itemPerPage;
  const indexOfFirst = indexOfLast - itemPerPage;
  const currentMovies = genreMovie.slice(indexOfFirst, indexOfLast);

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>
        Thể Loại Phim : {}
        {genreName
          ? genreName.charAt(0).toUpperCase() + genreName.slice(1)
          : "Không xác định"}
      </h2>
      <div className={cx("genre-catagory")}>
        {genreMovie.length === 0 ? (
          <p>Không tìm thấy phim nào thuộc thể loại "{genreName}"</p>
        ) : (
          currentMovies.map((movies) => (
            <CardMovies
              id={movies.id}
              image={movies.img}
              title={movies.title}
              description={movies.description}
              videoTrailer={movies.videoTrailer}
              episodes={movies.episodes}
            />
          ))
        )}
      </div>
      <div className={cx("pagination")}>
        {[...Array(Math.ceil(genreMovie.length / itemPerPage)).keys()].map(
          (num) => (
            <Button
              key={num}
              onClick={() => setCurrentPage(num + 1)}
              className={cx({ active: currentPage === num + 1 })}
            >
              {num + 1}
            </Button>
          )
        )}
      </div>
    </div>
  );
}

export default GenreSection;
