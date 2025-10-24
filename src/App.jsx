import { useEffect, useState } from 'react'
import './App.css'
import MusicNote from './components/MusicNote'
import ProfileCard from './components/ProfileCard'

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    // Generate initial musical notes
    const initialNotes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      type: ['♩', '♪', '♫', '♬', '𝄞'][Math.floor(Math.random() * 5)],
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 20 + Math.random() * 30,
      opacity: 0.2 + Math.random() * 0.3
    }))
    setNotes(initialNotes)
  }, [])

  return (
    <div className="app">
      <div className="background">
        {notes.map(note => (
          <MusicNote key={note.id} {...note} />
        ))}
      </div>
      
      <div className="content">
        <ProfileCard />
      </div>
    </div>
  )
}

export default App

