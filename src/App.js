import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
    const [newNote, setNewNote] = useState();
    const [notes, setNotes] = useState([]);
    const [showAll, setShowAll] = useState(true);
    const notesToShow = showAll
        ? notes
        : notes.filter((n) => n.important == true);

    useEffect(() => {
        axios
            .get("http://localhost:3001/notes")
            .then((res) => setNotes(res.data));
    }, []);
    const handleDelete = (id) => {
        if (window.confirm("do you relly want to delete this note?")) {
        }
    };
    const handleInputChange = (event) => {
        console.log(event.target.value);
        setNewNote(event.target.value);
    };
    const handleAdd = (event) => {
        event.preventDefault();
        const note = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toString(),
            important: Math.random() < 0.5,
        };
        if (newNote !== "") setNotes(notes.concat(note));
    };
    const handleImpAdd = (event) => {
        event.preventDefault();
        const note = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toString(),
            important: true,
        };
        if (newNote !== "") setNotes(notes.concat(note));
    };

    return (
        <>
            <h2>Notes</h2>
            <button onClick={() => setShowAll(!showAll)}>
                {showAll ? "Show Important" : "Show All"}
            </button>
            <ul>
                {notesToShow.map((note) => (
                    <li key={note.id}>{note.content}</li>
                ))}
            </ul>
            <form>
                <input value={newNote} onChange={handleInputChange} />
                <button onClick={handleAdd}>add</button>
                <button onClick={handleImpAdd}>add important</button>
            </form>
        </>
    );
}

export default App;
