import React from "react";

function NewNote(props){
    return <form onSubmit={props.add} >
        <input onChange={props.handle} type="text" name="title" placeholder="Title" value={props.input.title}/>
        <textarea onChange={props.handle} name="content" placeholder="content" value={props.input.content}/>
        <button type="submit">ADD</button>
    </form>
}

export default NewNote;