import { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
// import banner from "../img/banner.png";
function Banner() {
  let [bannerMovie, setBannerMovie] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=7be79fbdaefa9130160b7b09f793c813"
      )
      .then((res) => {
        setBannerMovie(res.data.results[0]);
      }, []);
  });

  return (
    <div className="pl-10 pr-10">
      {
        bannerMovie == ""?
        <div className="
        flex justify-center"><Oval
        
            height="80"
            width="80"
            radius="9"
            color="gray"
            secondaryColor='gray'
            ariaLabel="loading"

        /></div>
        :
        <div className={
          `bg-cover   h-auto text-white py-24 px-10 rounded-xl relative
          `
        }
        style={{
          backgroundImage:
          `url(https://image.tmdb.org/t/p/original/t/p/original/${bannerMovie.backdrop_path})`
        }}
        >

<div className="md:w-1/2">
        <p className="font-bold text-sm uppercase">Movie</p>
        <p className="text-3xl font-bold">{bannerMovie.title}</p>
        <p className="text-2xl mb-10 leading-none">{bannerMovie.overview}</p>
        {/* <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Movie</a> */}
        </div>  
{/* 
          <div className="
          text-xl
          font-bold
          text-white
          bg-gray-900
          bg-opacity-50
          w-full
          text-center
          p-4
          
          ">
            {bannerMovie.title}
          </div> */}
        </div>
      }
    </div>
    
    

    // <div>
    //   <img src={banner} className="w-full h-96" />

    //   <div>
    //     <div
    //       className="relative
    //         bottom-16 text-3xl
    //         text-white
    //         bg-gray-900
    //         w-full h-16
    //         bg-opacity-40
    //         pt-2
    //         text-center
    //         font-bold
    //         "
    //     >
    //       Don't Breathe 2
    //     </div>
    //   </div>
    // </div>
  );
}

export default Banner;
