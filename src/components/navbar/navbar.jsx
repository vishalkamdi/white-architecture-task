

import React from 'react'

import "./navbar.css"
import logo from "../../assets/images/Logo & Others/Logo.png"

const Navbar = () => {
    return (
        <section className='navbar-section'>
            <div className='logo-section'>
                {/* Fit the image logo */}
                <img src={logo} alt="Text" className="white-architecture-logo" />
            </div>
            <div className='menu'>
                {[
                    { title: "Project", path: "#projects" },
                    { title: "About", path: "#about" },
                    { title: "News", path: "#news" },
                    { title: "Services", path: "#services" },
                    { title: "Contact", path: "#contacts" }
                ].map((item, index) => {
                    return (<a key={item.title.concat(index)} href={item.path}>{item.title}</a>)
                })}
            </div>
        </section>
    )
}

export default Navbar