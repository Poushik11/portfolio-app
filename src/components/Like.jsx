import { useState } from "react";
import "../styles/like.css";
import { addALike } from "../conifg/firebase";
import { ref, onValue, getDatabase } from "firebase/database";

function Like() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(-1);

  onValue(ref(getDatabase(), "/likes"), (data) => {
    // console.log("TEST IS " + data.val()["totalLikes"]);
    if (likes > 0) {
      return;
    } else {
      setLikes(data.val()["totalLikes"]);
    }
  });

  async function handleLikeClick() {
    await addALike();
    if (!liked) {
      setLiked(true);
      setLikes(likes + 1);
    } else {
      setLiked(false);
      setLikes(likes - 1);
    }
  }

  return (
    <button
      className="likebtn"
      type="button"
      data-like={liked ? "1" : "0"}
      onClick={handleLikeClick}
    >
      <svg fill="#fa5353" viewBox="0 0 391.837 391.837">
        <path d="M285.257,35.528c58.743,0.286,106.294,47.836,106.58,106.58 c0,107.624-195.918,214.204-195.918,214.204S0,248.165,0,142.108c0-58.862,47.717-106.58,106.58-106.58l0,0 c36.032-0.281,69.718,17.842,89.339,48.065C215.674,53.517,249.273,35.441,285.257,35.528z"></path>
      </svg>
      <span>{likes}</span>
    </button>
  );
}

export default Like;
