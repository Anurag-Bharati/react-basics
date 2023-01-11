const Stats = (props) => {
    const { good, neutral, bad } = props;
    const all = () => good + bad + neutral;
    const avg = () => good - bad / all();
    const pos = () => (good / all()) * 100;

    return (
        <>
            <h2>Statistics</h2>
            <h2>Good: {good}</h2>
            <h2>Neutral: {neutral}</h2>
            <h2>Bad: {bad}</h2>
            <h2>Average: {avg()}</h2>
            <h2>Positive : {pos()}%</h2>
        </>
    );
};

export default Stats;
