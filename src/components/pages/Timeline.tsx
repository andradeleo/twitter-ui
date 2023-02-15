
import Tweet from '../Tweet';
import Header from '../Header';
import Separator from '../Separator';

import "./Timeline.css";

import { FormEvent, KeyboardEvent, useState } from 'react';

import MainProfile from "../../assets/images/main-profile.jpg";

export default function Timeline() {

  const [newTweet, setNewTweets] = useState("");
  const [tweets, setTweets] = useState([
    "Meu primeiro tweet",
    "teste",
    "Deu certo!"
  ]);

  function createNewTweet(ev: FormEvent) {
    ev.preventDefault();
    setTweets([ newTweet, ...tweets])
    setNewTweets("");
  }

  function handleHotKey(event: KeyboardEvent) {
    if(event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([ newTweet, ...tweets])
      setNewTweets("");
    }
  }

  return (
    <main className="timeline">
      <Header title="Home"/>

      <form className="new-tweet-form" onSubmit={createNewTweet}>
        <label htmlFor="tweet">
          <img src={MainProfile} alt="Leonardo Andrade" />
          <textarea
            id='tweet'
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKey}
            onChange={(ev) => setNewTweets(ev.target.value)}
          />
        </label>
          <button type='submit'>Tweet</button>
      </form>

        <Separator />

        {
          tweets.map((tweet) => (
            <Tweet key={tweet} content={tweet} />
          ))
        }
      </main>
  );
}