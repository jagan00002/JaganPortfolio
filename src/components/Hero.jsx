import { motion } from 'framer-motion';

import hero3 from "/images/hero3.jpg";

export default function Hero(){
  return (
    <section id="home" className="hero">
      <div className="blobs">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>

      <div className="hero-inner">
        <motion.img
          // src="/JaganPortfolio/images/hero3.jpg" 
          src={hero3}
          alt="Jagan"
          className="hero-photo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9 }}
          onError={(e)=>{ e.target.src='https://via.placeholder.com/280' }}
        />

        <motion.div className="hero-card" initial={{ x:-30, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.7 }}>
          <h1 className="hero-title">Hi There ! <span className="accent"></span></h1>
          <h1 className="hero-title">I'm <span className="accent">Jagannath G H</span></h1>
          {/* <h2 className="hero-sub"><Typewriter words={["Full-Stack Developer"]} /></h2> */}
          <h2 className="hero-sub">Full-Stack Developer</h2>
          {/* <p className="hero-desc">Tech enthusiast passionate about full-stack development and machine learning. */}
          {/* Curious learner who loves exploring new tools, solving real-world problems, and staying ahead in the evolving tech world.</p> */}
          <div className="hero-cta">
            <a className="btn primary" href="mailto:jagannathyadav342@gmail.com" rel="noopener noreferrer">Hire Me</a>
            <a className="btn outline download-btn" href="https://drive.google.com/uc?export=download&id=19-k97ILXtQOnFFwdvuL6KBPSPFNnq4uC" rel="noopener noreferrer" download>Download CV</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}