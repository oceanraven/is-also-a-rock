import './App.css';
import wordlist from './wordlists.csv';
import {useEffect, useState} from "react";

function App() {
  const [word, setWord] = useState("name");
  const [meaning, setMeaning] = useState("meaning");

  const setRandomWord = () => {
    const randomNum = Math.floor(Math.random() * wordlist.length);
    setWord(wordlist[randomNum].word);
    setMeaning(wordlist[randomNum]?.meaning);
  }

  useEffect(setRandomWord, []);

  return (
    <main className={"background"}>
      <h1 className={"title"}>
        <span className={"highlight"}>{word}</span>도 <span className={"highlight"}>락</span>이다
      </h1>
      <p className={"meaning"}>{meaning}</p>
      <img className={"separator"} src="https://i.imgur.com/i6hvJjx.gif" alt={""} aria-hidden={true}/>
      <button className={"random"} onClick={setRandomWord}>가져오다 무작위 새로운 <span className={"highlight"}>돌</span></button>
    </main>
  );
}

export default App;