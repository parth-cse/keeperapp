import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NewNote from "./NewNote";

function App(){
  const [notes, getNote] = useState([])

  function deleteNote(id){
    getNote(preValues => {
      return preValues.filter((note, index)=>{
        return index != id;
      })
    })
  }

  const [addNote, inputNode] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const {name, value} = event.target;
    inputNode( preValues=>({
      ...preValues,
      [name] : value,
    })
    )
  }

  function handleSubmit(event){
    try{if (addNote.title !== "" && addNote.content !== ""){
      getNote(preValues=>[...preValues, addNote]);
      inputNode({
        title: "",
        content: ""
      })
    }else{
      console.log("err")
    }}catch(err){
      console.log(err)
    }

    event.preventDefault()
  }

  return <>
    <Header />
    <NewNote handle={handleChange} add={handleSubmit} input={addNote} />
    {notes.map((note, index) => (
      <Note key={index} id={index} title={note.title} content={note.content} delete={deleteNote} />
    ))}
    <Footer />
  </>
}

export default App;