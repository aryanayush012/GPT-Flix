import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices?.[0]?.message?.content);

    // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

    // For each movie I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    if (!gptResults.choices) {
    }

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" p-12 my-24 absolute mx-auto left-0 right-0 text-white mt-[15%] "
      >
        <h1 className="text-white font-extrabold text-5xl text-center">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-white text-2xl text-center mt-4 text-semibold">
          Get Recommendation anywhere anytime.
        </p>
        <p className="text-white text-2xl text-center mt-4 text-semibold">
          Ready to watch? Enter the details to get recommendation
        </p>
        <div className="flex justify-center">
          <input
            ref={searchText}
            type="text"
            placeholder="Enter the details"
            className="px-4 my-6 w-1/3 bg-gray-900 bg-opacity-70 rounded-md border-red-500"
          />
          <button
            className="p-4 my-6 w-1/6 bg-red-700 font-semibold text-2xl rounded-lg mx-3 text-extra-white"
            onClick={handleGptSearchClick}
          >
            Get Started &gt;
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
