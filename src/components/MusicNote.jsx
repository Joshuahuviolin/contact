import './MusicNote.css'

function MusicNote({ type, left, delay, duration, size, opacity }) {
  const style = {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    fontSize: `${size}px`,
    opacity: opacity
  }

  return (
    <div className="music-note" style={style}>
      {type}
    </div>
  )
}

export default MusicNote

