import React from 'react';
import "../css/Navbar.css";

function Navbar() {
    return (
        <div className='navWrapper'>
            <div className='navLeft'>
                <div className='navName'>Akash</div>
                <span>Toggle</span>
            </div>
            <div className='navRight'>
                <div className='navList'>
                    <ul style={{ listStyleType: "none" }}>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Education</li>
                    </ul>
                </div>

                <button className='button navButton'>
                    Contact Me
                </button>
            </div>
        </div>
    )
}

export default Navbar;
