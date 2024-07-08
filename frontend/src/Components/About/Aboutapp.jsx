import React from 'react'
import './About.css'
export const Aboutapp = () => {
  return (
    <section id="about-app" className="section-p1">
        <h1>download our <a href="#">app</a></h1>
        <div className="video">
            <video muted loop autoplay data-src="https://cdn.dribbble.com/users/2564256/screenshots/15544535/media/579c06f5303c072053b5be3edd5ebbe1.mp4"
            data-video-small="https://cdn.dribbble.com/users/2564256/screenshots/15544535/media/d7ff186e5ba8479f2db3df9b759efa31.mp4" 
            data-video-medium="https://cdn.dribbble.com/users/2564256/screenshots/15544535/media/cfa1e1335336c7d542671bb2979392e8.mp4"
            data-video-large="https://cdn.dribbble.com/users/2564256/screenshots/15544535/media/579c06f5303c072053b5be3edd5ebbe1.mp4" 
            src="https://cdn.dribbble.com/users/2564256/screenshots/15544535/media/579c06f5303c072053b5be3edd5ebbe1.mp4"></video>
        </div>
    </section>
  )
}

export default Aboutapp