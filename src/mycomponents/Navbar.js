import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';



export default function Navbar() {
    const scrollintoskill=() =>{
        const e=document.getElementById('skill');
        // if (e) {
            e.scrollIntoView({behavior: 'smooth'});
        // }
    };
    const scrollintoabout=() =>{
        const e=document.getElementById('about');
        // if (e) {
            e.scrollIntoView({behavior: 'smooth'});
        // }
    };
    const scrollintocontact=() =>{
        const e=document.getElementById('contact');
        // if (e) {
            e.scrollIntoView({behavior: 'smooth'});
        // }
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#" >Piyush's Portfolio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <Link className="nav-link " to="./mycomponents/Skills.js">Skills</Link> */}
                            <a className="nav-link" href="#" onClick={scrollintoskill} >Skills</a> 
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="./mycomponents/About.js">About</Link> */}
                            <a className="nav-link" href="#" onClick={scrollintoabout} >About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#" onClick={scrollintocontact} >Contact me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


// {/* <a className="nav-link" href="#">Contact me</a> */}
