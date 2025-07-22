import React from 'react'
import Header from './components/Header.jsx';
import Note from './components/Note.jsx';
import Footer from './components/Footer.jsx';
import notes from "./notes.js";

const App = () => {
    const createNote = (note) =>{
        return (
            <Note
                key = {note.key}
                title = {note.title}
                content = {note.content}
            />
        )
    }
  return (
    <>
      <Header/>
        {notes.map(createNote)}
      <Footer/>
    </>
  )
}

export default App

