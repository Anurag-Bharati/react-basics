import { useState } from "react";

import Stats from "./Stats";

const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const increaseGood = () => setGood(good + 1);
    const increaseNeutral = () => setNeutral(neutral + 1);
    const increaseBad = () => setBad(bad + 1);

    return (
        <>
            <h2>give feedback</h2>
            <div class="flexbox-container">
                <button onClick={increaseGood}>good</button>
                <button onClick={increaseNeutral}>neutral</button>
                <button onClick={increaseBad}>bad</button>
            </div>
            <Stats good={good} bad={bad} neutral={neutral}></Stats>
        </>
    );
};

export default Feedback;
