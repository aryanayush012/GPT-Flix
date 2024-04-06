import React, { useState } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";
import UserForm from "./UserForm";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const openAIKey = useSelector((store) => store.gpt?.openAIKey);
  return (
    <>
      <div className="absolute bg-gradient-to-b from-black to-black">
        <img
          className="h-auto object-cover  max-w-full bg-cover bg-center bg-gradient-to-b from-black"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div className="z-2">
        {openAIKey === null ? (
          <UserForm />
        ) : (
          <>
            <GptSearchBar />
            <GptMovieSuggestions />
          </>
        )}
      </div>
    </>
  );
};

export default GptSearch;
