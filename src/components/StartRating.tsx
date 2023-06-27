import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

const StartRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  console.log(rating);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      {[...Array(5)].map((star, index) => {
        const starRating = index + 1;
        return (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setRating(starRating)}
            onMouseEnter={() => setHover(starRating)}
            onMouseLeave={() => setHover(0)}
          >
            <input
              style={{ display: "none" }}
              type="radio"
              value={starRating}
            />
            <AiFillStar
              size="100px"
              color={starRating <= (hover || rating) ? "#D5AB55" : "black"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StartRating;
