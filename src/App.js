import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
    const [newNote, setNewNote] = useState();
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3001/notes")
            .then((res) => setNotes(res.data));
    }, []);
    const handleInputChange = (event) => {
        console.log(event.target.value);
    };
    const handleAdd = (event) => event.preventDefault();

    // return <>{Feedback()}</>;
    return (
        <>
            <h2>Notes</h2>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>{note.content}</li>
                ))}
            </ul>
            <form>
                <input value={newNote} onChange={handleInputChange} />
                <button onClick={handleAdd}>add</button>
            </form>
        </>
    );
}

export default App;
