
import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import Header from "../Header";
import Separator from "../Separator";
import Tweet from "../Tweet";
import "./Status.css";

import MainProfile from "../../assets/images/main-profile.jpg";

export default function Status() {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    "concordo .. ",
    "Olha, faz sentido!",
    "Parabéns pelo progresso"
  ]);

  function createNewAnswer(ev: FormEvent) {
    ev.preventDefault();
    setAnswers([ newAnswer, ...answers])
    setNewAnswer("");
  }

  function handleHotKey(event: KeyboardEvent) {
    if(event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([ newAnswer, ...answers])
      setNewAnswer("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet"/>

      <Tweet content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium a non quia nihil sequi, sapiente explicabo quidem neque nulla."}/>

      <Separator />

      <form className="answer-tweet-form" onSubmit={createNewAnswer}>
        <label htmlFor="tweet">
          <img src={MainProfile} alt="Leonardo Andrade" />
          <textarea
            id='tweet'
            value={newAnswer}
            onKeyDown={handleHotKey}
            placeholder="Tweet your answer"
            onChange={(ev) => setNewAnswer(ev.target.value)}
          />
        </label>
          <button type='submit'>
            <PaperPlaneRight />
            <span>Answer</span>
          </button>
        </form>



        {
          answers.map((answer) => (
            <Tweet key={answer} content={answer} />
          ))
        }
      </main>
  )
}
