import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { toggleGptSearchView } from "../utils/gptSlice";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleGptSearchClick = () => {
    // toggle Gpt Search click
    dispatch(toggleGptSearchView());
  };
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <>
          <GptSearch />
        </>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {showGptSearch ? (
        <div className="relative">
          <button
            className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                  fixed bottom-0 right-0 right-5 rounded-lg
                  mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10"
            onClick={handleGptSearchClick}
          >
            <div className="p-3 rounded-full border-4 border-white bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0,0,256,256"
              >
                <defs>
                  <linearGradient
                    x1="14.623"
                    y1="-29.177"
                    x2="27.884"
                    y2="46.027"
                    gradientUnits="userSpaceOnUse"
                    id="color-1_Z6WudpuL13T9_gr1"
                  >
                    <stop offset="0" stopColor="#6d6d6d"></stop>
                    <stop offset="0.438" stopColor="#626262"></stop>
                    <stop
                      offset="0.998"
                      stopColor="#000000"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
                <g
                  fill="#000000"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
                </g>
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <g transform="scale(5.33333,5.33333)">
                    <path
                      d="M42,37c0,2.762 -2.238,5 -5,5h-26c-2.761,0 -5,-2.238 -5,-5v-26c0,-2.762 2.239,-5 5,-5h26c2.762,0 5,2.238 5,5z"
                      fill="url(#color-1_Z6WudpuL13T9_gr1)"
                    ></path>
                    <path
                      d="M30.5,11h-4c-0.827,0 -1.5,0.673 -1.5,1.5v4.828l-2.103,-5.374c-0.227,-0.58 -0.775,-0.954 -1.397,-0.954h-4c-0.497,0 -0.961,0.246 -1.241,0.658c-0.157,0.232 -0.222,0.51 -0.249,0.702l-0.01,0.07v0.07v23c0,0.466 0.211,0.897 0.578,1.183c0.262,0.204 0.589,0.317 0.922,0.317c0.125,0 0.249,-0.016 0.369,-0.046c0.011,-0.003 1.855,-0.454 3.631,-0.454c0.827,0 1.5,-0.673 1.5,-1.5v-4.711l2.107,5.268c0.23,0.573 0.776,0.943 1.393,0.943c1.772,0 3.62,0.451 3.638,0.456c0.121,0.029 0.242,0.044 0.362,0.044c0.431,0 0.842,-0.186 1.126,-0.51c0.311,-0.353 0.374,-0.871 0.374,-0.99v-23c0,-0.827 -0.673,-1.5 -1.5,-1.5z"
                      fill="#f6fcff"
                      opacity="0.05"
                    ></path>
                    <path
                      d="M22.5,27.692l3.071,7.679c0.153,0.382 0.518,0.629 0.929,0.629c1.854,0 3.748,0.468 3.766,0.473c0.332,0.08 0.743,-0.036 0.985,-0.312c0.198,-0.226 0.248,-0.599 0.249,-0.663v-22.998c0,-0.551 -0.449,-1 -1,-1h-4c-0.551,0 -1,0.449 -1,1v7.478l-3.069,-7.842c-0.151,-0.386 -0.516,-0.636 -0.931,-0.636h-4c-0.332,0 -0.641,0.164 -0.828,0.438c-0.08,0.118 -0.139,0.293 -0.167,0.492l-0.005,23.07c0,0.311 0.14,0.598 0.385,0.789c0.241,0.188 0.567,0.256 0.86,0.181c0.016,-0.005 1.914,-0.47 3.755,-0.47c0.551,0 1,-0.449 1,-1z"
                      fill="#f6fcff"
                      opacity="0.05"
                    ></path>
                    <path
                      d="M17.5,36c-0.11,0 -0.219,-0.037 -0.308,-0.106c-0.121,-0.095 -0.192,-0.24 -0.192,-0.394v-23c0,-0.276 0.224,-0.5 0.5,-0.5h4c0.276,0 0.5,0.224 0.5,0.5v22.5c0,0.276 -0.224,0.5 -0.5,0.5c-1.917,0 -3.859,0.48 -3.879,0.485c-0.04,0.01 -0.08,0.015 -0.121,0.015z"
                      fill="#b71c1c"
                    ></path>
                    <path
                      d="M30.5,36c-0.041,0 -0.081,-0.005 -0.121,-0.015c-1.913,-0.478 -3.86,-0.485 -3.879,-0.485c-0.276,0 -0.5,-0.224 -0.5,-0.5v-22.5c0,-0.276 0.224,-0.5 0.5,-0.5h4c0.276,0 0.5,0.224 0.5,0.5v23c0,0.154 -0.071,0.299 -0.192,0.394c-0.089,0.069 -0.198,0.106 -0.308,0.106z"
                      fill="#b71c1c"
                    ></path>
                    <path
                      d="M26,19.88v15.21l0.04,0.1c0.07,0.19 0.26,0.31 0.46,0.31c1.91,0 3.86,0.48 3.88,0.49c0.04,0.01 0.08,0.01 0.12,0.01c0.14,0 0.28,-0.06 0.38,-0.17c0.08,-0.09 0.1,-0.21 0.1,-0.32c0.01,-0.01 0.02,-0.01 0.02,-0.01v-2.84z"
                      fill="#f6fcff"
                      opacity="0.05"
                    ></path>
                    <path
                      d="M22,25.1v-12.703l-0.03,-0.077c-0.08,-0.19 -0.26,-0.32 -0.47,-0.32h-4c-0.17,0 -0.32,0.08 -0.41,0.22c-0.06,0.08 -0.08,0.18 -0.08,0.27c0,0 -0.01,0 -0.01,0.01v2.79l5,12.5z"
                      fill="#f6fcff"
                      opacity="0.05"
                    ></path>
                    <path
                      d="M31,34.032l-5,-12.78v13.751c0.007,0 0.518,0 0.524,0c1.678,0 3.499,0.373 3.973,0.505l0.001,-0.004l0.502,0.185z"
                      fill="#f6fcff"
                      opacity="0.05"
                    ></path>
                    <path
                      d="M22,12.579l-5,-0.031v1.396l5,12.5z"
                      fill="#f6fcff"
                      opacity="0.05"
                    ></path>
                    <path
                      d="M30.5,36c-0.041,0 -0.081,-0.005 -0.121,-0.015c-0.02,-0.005 -1.967,-0.485 -3.879,-0.485c-0.205,0 -0.388,-0.125 -0.464,-0.314l-9,-22.5c-0.062,-0.154 -0.042,-0.329 0.05,-0.466c0.093,-0.137 0.248,-0.22 0.414,-0.22h4c0.206,0 0.391,0.126 0.466,0.318l9,23c0.068,0.174 0.033,0.372 -0.09,0.512c-0.097,0.109 -0.234,0.17 -0.376,0.17z"
                      fill="#e50914"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </button>
        </div>
      ) : (
        <div className="relative">
          <button
            className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                  fixed bottom-0 right-0 right-5 rounded-lg
                  mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10"
            onClick={handleGptSearchClick}
          >
            <div className="p-3 rounded-full border-4 border-white bg-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#f6fcff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ color: "white" }}
                >
                  <g transform="scale(5.33333,5.33333)">
                    <path d="M30.7,7.27l-2.37,1.83c-1.605,-2.067 -4.068,-3.209 -6.697,-3.092c-4.32,0.192 -7.633,3.945 -7.633,8.269v9.143l10.5,6.12l-1,1.72l-11.706,-6.827c-0.492,-0.287 -0.794,-0.813 -0.794,-1.382v-8.687c0,-6.264 5.129,-11.574 11.39,-11.357c3.279,0.113 6.29,1.656 8.31,4.263z"></path>
                    <path d="M12.861,9.833l0.4,2.967c-2.592,0.357 -4.813,1.919 -6.026,4.254c-1.994,3.837 -0.4,8.582 3.345,10.745l7.918,4.571l10.55,-6.033l0.99,1.726l-11.765,6.724c-0.494,0.282 -1.101,0.281 -1.594,-0.003l-7.523,-4.343c-5.426,-3.133 -7.46,-10.23 -4.142,-15.543c1.738,-2.784 4.58,-4.619 7.847,-5.065z"></path>
                    <path d="M6.161,26.563l2.77,1.137c-0.987,2.423 -0.745,5.128 0.671,7.346c2.326,3.645 7.233,4.638 10.977,2.476l7.918,-4.572l0.05,-12.153l1.99,0.006l-0.059,13.551c-0.002,0.569 -0.307,1.094 -0.8,1.379l-7.523,4.343c-5.425,3.132 -12.588,1.345 -15.531,-4.185c-1.541,-2.897 -1.71,-6.275 -0.463,-9.328z"></path>
                    <path d="M17.3,40.73l2.37,-1.83c1.605,2.067 4.068,3.209 6.697,3.092c4.32,-0.192 7.633,-3.945 7.633,-8.269v-9.143l-10.5,-6.12l1,-1.72l11.706,6.827c0.492,0.287 0.794,0.813 0.794,1.382v8.687c0,6.264 -5.13,11.574 -11.39,11.358c-3.279,-0.114 -6.29,-1.657 -8.31,-4.264z"></path>
                    <path d="M35.139,38.167l-0.4,-2.967c2.592,-0.357 4.813,-1.919 6.026,-4.254c1.994,-3.837 0.4,-8.582 -3.345,-10.745l-7.918,-4.571l-10.55,6.033l-0.99,-1.726l11.765,-6.724c0.494,-0.282 1.101,-0.281 1.594,0.003l7.523,4.343c5.425,3.132 7.459,10.229 4.141,15.543c-1.737,2.784 -4.579,4.619 -7.846,5.065z"></path>
                    <path d="M41.839,21.437l-2.77,-1.137c0.987,-2.423 0.745,-5.128 -0.671,-7.346c-2.326,-3.645 -7.233,-4.638 -10.977,-2.476l-7.918,4.572l-0.05,12.153l-1.99,-0.006l0.059,-13.551c0.002,-0.569 0.307,-1.094 0.8,-1.379l7.523,-4.343c5.425,-3.132 12.588,-1.345 15.531,4.185c1.541,2.897 1.71,6.275 0.463,9.328z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Browse;
