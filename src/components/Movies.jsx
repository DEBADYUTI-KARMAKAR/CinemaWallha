import axios from "axios";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import Pagination from "./Pagination";
function Movies() {
  let [movies, setMovies] = useState([]);
  let [pageNumber, setPageNumber] = useState(1);
  let [hover, setHover] = useState("");
  let [fevourites, setFevourites] = useState([]);
  //Making api request
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=7be79fbdaefa9130160b7b09f793c813" +
          `&page=${pageNumber}`
      )
      .then(
        (res) => {
          setMovies(res.data.results);
        },
        [pageNumber]
      );
  });

  // Pagination
  const onPrevious = () => {
    if (pageNumber > 1) {
      setPageNumber(--pageNumber);
    }
  };
  const onNext = () => {
    setPageNumber(++pageNumber);
  };

  // emogi show hide on hover
  const showEmoji = (id) => {
    setHover(id);
  };
  const hideEmoji = () => {
    setHover("");
  };

  // adding emogies to fev
  const addEmoji = (id) => {
    const newFev = [...fevourites, id];
    setFevourites(newFev);
  };
  const removeEmoji = (id) => {
    // whichever elem -> not equal to my id
    const filteredFav = fevourites.filter((elem) => {
      return elem != id;
    });
    setFevourites(filteredFav);
  };

  return (
    <div className="mt-8">
      <div
        className="
      mb-8 font-bold text-2xl
      text-center
      text-blue-950
      "
      >
        Tranding Movies
      </div>

      <div
        className="flex 
      flex-wrap justify-center  "
      >
        {movies.length == 0 ? (
          <div
            className="
        flex justify-center"
          >
            <Oval
              height="80"
              width="80"
              radius="9"
              color="gray"
              secondaryColor="gray"
              ariaLabel="loading"
            />
          </div>
        ) : (
          movies.map((movie) => {
            console.log(movie);
            return (
              <div
                onMouseOver={() => {
                  showEmoji(movie.id);
                }}
                onMouseLeave={() => {
                  hideEmoji(movie.id);
                }}
                key={movie.id}
                className="
                
            w-50
            h-50
            md: h-[40vh]
            md: w-[180px]
            m-4 bg-center bg-cover
            rounded-xl
            hover:scale-110
            duration-300
            border-4
            flex
             items-end
             
            "
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
                }}
              >
                <div
                  className="
                p-2
                bg-gray-200
                absolute top-2 right-2
                cursor-pointer
                rounded-full
                "
                  style={{
                    display: hover == movie.id ? "block" : "none",
                  }}
                >
                  {fevourites.includes(movie.id) ? (
                    <div
                      className="text-2xl"
                      onClick={() => removeEmoji(movie.id)}
                    >
                      ❌
                    </div>
                  ) : (
                    <div
                      className="text-2xl"
                      onClick={() => addEmoji(movie.id)}
                    >
                      💖
                    </div>
                  )}
                </div>

                <div
                  className="
              text-white
              bg-gray-900
              p-4
               bg-opacity-30
               w-full
               font-bold
               text-center
               rounded-b-xl
               
              "
                >
                  {movie.title}
                </div>
              </div>
            );
          })
        )}
      </div>

      <Pagination
        pageNumber={pageNumber}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
  );
}

export default Movies;
