import Home from './components/home/home'
import homeImage from "./assets/images/Projects Images/p1.jpg"
import AboutNews from './components/about/aboutNews'
import Contact from './components/contacts/contact'
import Services from './components/services/services'
import Footer from './components/footer/footer'

import "./app.css"


function App() {
  return (
    <>
      <section style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        // backgroundColor: "black",
        // opacity: 0.7,
        
      }}>
        <Home />
      </section>

      <AboutNews />

      <section className='services-contact-section'>
        <Services />
        <Contact />
      </section>
      
      <Footer />
    </>
  )
}

export default App
