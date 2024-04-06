import React from "react";
import { FaPlay } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
          <div className="flex">
            <div className="mr-1 mt-1">
              <FaPlay />
            </div>
            Play
          </div>
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          <div className="flex">
            <div className="mr-1 mt-1">
              <CiCircleInfo />
            </div>
            More Info
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
