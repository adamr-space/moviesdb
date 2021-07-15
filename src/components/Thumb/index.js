import { Link } from "react-router-dom";

// Styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`${process.env.PUBLIC_URL}/${movieId}`}>
        <Image src={image} alt="movie-thumb"></Image>
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb"></Image>
    )}
  </div>
);

export default Thumb;