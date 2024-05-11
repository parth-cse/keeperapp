import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function NewNote(props){
    const [clicked, setClicked] = useState(false);

    function handleClick(){
        setClicked(true);
    }


    return <form onSubmit={(event)=>{
        props.add();
        setClicked(false);
        event.preventDefault();
        }} className="create-note">
        <input style={{ display: clicked ? null : "none" }} onChange={props.handle} type="text" name="title" placeholder="Title" value={props.input.title}/>
        <textarea onClick={handleClick} onChange={props.handle} name="content" rows={clicked ? "3" : "1"} placeholder="Take a note..." value={props.input.content}/>
        <Zoom in={clicked ? true : false}><Fab type="submit">< AddIcon /></Fab></Zoom>
    </form>
}

export default NewNote;