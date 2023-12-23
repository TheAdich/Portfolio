import React from "react";
import './Navbar.scss';
import Sidebar from "./Sidebar";
import { motion } from 'framer-motion';
const Navbar=()=>{
    return(
        <div className="navbar">
                <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0,scale:0}}
                animate={{opacity:1,scale:1,x:100}}
                transition={{duration:0.5,type:'spring',stiffness:'500'}} style={{fontFamily:'sans-serif' , fontSize:'1.2rem'}}
                >My Portfolio || My Work</motion.span>
            </div>
        </div>
    )
}
export default Navbar;