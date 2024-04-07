import React, { useState, useEffect } from 'react';
import './Jokes.css';
function Joke() {
    const [Jokes, setJokes] = useState("");
    const [reveal, setReveal] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        const URL = `https://official-joke-api.appspot.com/jokes/random`;
        const Jokesforfun = async () => {
            const response = await fetch(URL);
            const meme = await response.json();
            setJokes(meme.setup);
            setReveal(meme.punchline);
        }
        Jokesforfun();
    }, []);

    const revealAnswer = () => {
        setShowAnswer(true);
    };

    return (
        <>
            <h1>{Jokes}</h1>
            <button className="revealbutton" onClick={revealAnswer}><b>Click this button to reveal answer</b></button>
            {showAnswer && <p><b>The Answer is: {reveal}</b></p>}
        </>
    );
}

export default Joke;
