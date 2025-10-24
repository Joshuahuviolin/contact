import './ProfileCard.css'

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img 
          src="/D8E6FBB3-0589-45B1-913A-3B0A15102D87.png" 
          alt="Joshua Hu" 
          className="profile-image"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div className="profile-placeholder">
          <span className="placeholder-text">♪</span>
          <span className="placeholder-subtext">Add your photo here</span>
        </div>
      </div>
      
      <h1 className="name">Joshua Hu</h1>
      
      <div className="title-section">
        <p className="title">Classical Violinist and Composer</p>
        <p className="subtitle">Open to Booking Events</p>
      </div>
      
      <div className="contact-section">
        <a href="tel:0421992510" className="contact-item">
          <span className="icon">📱</span>
          <span>0421 992 510</span>
        </a>
        
        <a href="mailto:joshuahu270@gmail.com" className="contact-item">
          <span className="icon">✉️</span>
          <span>joshuahu270@gmail.com</span>
        </a>
      </div>
      
      <div className="cta-section">
        <a href="mailto:joshuahu270@gmail.com?subject=Booking Inquiry" className="cta-button">
          Book Now
        </a>
      </div>
    </div>
  )
}

export default ProfileCard

