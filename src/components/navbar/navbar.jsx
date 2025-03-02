

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
                    { title: "Project", path: "" },
                    { title: "About", path: "" },
                    { title: "News", path: "" },
                    { title: "Services", path: "" },
                    { title: "Contact", path: "" }
                ].map((item, index) => {
                    return (<a key={item.title.concat(index)} href="/">{item.title}</a>)
                })}
            </div>
        </section>
    )
}

export default Navbar