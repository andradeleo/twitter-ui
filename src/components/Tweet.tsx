
import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from "react-router-dom";
import "./Tweet.css";

import Profile from "../assets/images/profile.jpg";

interface TweetProps  {
  content: string
}

export default function Tweet(props: TweetProps) {
  return (
    <Link to={"/status"} className="tweet">
      <img src={Profile} alt="Leonardo Andrade" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Leonardo Andrade</strong>
          <span>@andradeleo</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle /> 20
          </button>
          <button type="button">
            <ArrowsClockwise />
          </button>
          <button type="button">
            <Heart />
          </button>
        </div>
      </div>
    </Link>
  )
}
