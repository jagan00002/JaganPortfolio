import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
// import Starfield from "./components/Starfield"
import "./styles.css"




export default function App() {
return (
<div className="app">
  {/* <Starfield nebulaSrc="/nebula.png" starCount={220} speed={0.5} /> */}
<Header />
<Hero />
<About />
<Projects />
<Skills /> 
<Contact />
<Footer />
</div>
)
}