import React from 'react';
import '../status.css'
import ImageSection from './ImageSection'
const StatusBar = ()=>{
    return(
        <div>
        <div className="main">
            <div >
                
                <div className ="nav">

                {/* logo */}
                    <div className="logo">
                        <span className="spanx">FOX.</span>
                        <span className="uni">University</span>
                        
                    </div>
                    {/* Email */}
                    <div className="logo">
                        <span className="uni">Email</span>
                        <span>rohanrajput@16.phyGmail.com</span>
                    </div>
                    {/* call */}
                    <div className="logo">
                        <span className="uni">Call</span>
                        <span>+9125744555455</span>
                    </div>

                    <div>
                        <button className="applybtn">Apply now</button>
                    </div>

                </div>

                {/* Navbar */}
                <div className="nav_items">
                    <div >
                    <ul className="btns">
                        <li className="btn">Home</li>
                        <li className="btn" >About</li>
                        <li className="btn">Courses</li>
                        <li className="btn">Staff</li>
                        <li className="btn">Blog</li>
                        <li className="btn">Contact</li>
                    </ul>
                    </div>
                    <div >
                         <input className="inp" placeholder="search" />
                    </div>
                </div>
             
            </div>
            
        </div>
        <ImageSection/>
        </div>
    )
}
export default StatusBar;