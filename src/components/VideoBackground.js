import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?controls=0&playlist = " +
          trailerVideo?.key +
          "&autohide=1&wmode=opaque&loop=1&rel=0&showinfo=0&mute=1&enablejsapi=1&end=0&fs=0&autoplay=1&playsinline=0&modestbranding = 1&iv_load_policy=3"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share,fullscreen"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
