import React, { useState } from "react";
import axios from "axios";

function CreateNotes() {

    const [input, setInput] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {

        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newNote = {
            title: input.title,
            content: input.content
        }
        axios.post("http://localhost:3001/create", newNote)

    }

    return (
        <div className="container">
            <h1>Create Notes page</h1>
            <form>
                <div className="form-group">
                    <input onChange={handleChange} className="form-control" name="title" value={input.title} placeholder="Note title"></input>
                </div>
                <div className="form-group">
                    <textarea onChange={handleChange} className="form-control" name="content" value={input.content} placeholder="Note content"></textarea>
                </div>
                <button onClick={handleClick} className="btm btn-lg btn-info">ADD NOTE</button>


            </form>
        </div >
    )
}

export default CreateNotes;