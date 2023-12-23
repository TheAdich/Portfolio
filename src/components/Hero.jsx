import React from "react";
import './Hero.scss';
import {motion} from 'framer-motion';
import {useTypewriter , Cursor} from 'react-simple-typewriter';
const wrapperVariants={
    initial:{
        x:-100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1.5,
            staggerChildren:0.1
        }
    },
};



const Hero = () => {

    
    const [text]=useTypewriter({
        words:['HTML-CSS-JS','React.JS','React-Three-Fiber','Animation-lib'],
        loop:{},
        typeSpeed:120,
        delaySpeed:80,
    });

   



    return (
        <div className="hero-section">
            <div className="wrapper">

                <motion.div className="textContainer" variants={wrapperVariants} initial="initial" animate="animate">
                    <motion.h2 variants={wrapperVariants} >ADITYA DADHICH</motion.h2>
                    <motion.h1 variants={wrapperVariants} >Web developer</motion.h1>
                    <h3 > Skills:  {`  `}
                        <span style={{fontWeight:'bold'}}>{text}    </span>
                        <span style={{color:'grey'}}><Cursor cursorStyle='|'/></span>
                    </h3>
                    <motion.div variants={wrapperVariants} className="buttons">
                        <button  ><a href='#Portfolio'>See the Latest Works</a></button>
                        <button  ><a href='https://www.linkedin.com/in/aditya-dadhich-9a708a262/?originalSubdomain=in'>Connect With Me</a></button>
                    </motion.div>
                    <motion.div variants={wrapperVariants}  className="scrollIcon">
                        <motion.img  initial={{opacity:1,y:0}}  animate={{opacity:0.4,y:20}}
                            transition={{duration:2,repeat:Infinity}}
                         src='./scroll.png'></motion.img>
                    </motion.div>
                </motion.div>
               

                <motion.div className="imageContainer " 
                initial={{opacity:0, x:300}} animate={{opacity:1,x:0}} 
                    transition={{duration:1,type:'spring',stiffness:400}}>
                    <motion.img  src='./Dazai.webp'
                    initial={{y:30}} animate={{y:-30}} transition={{duration:2,repeat:Infinity,repeatType:'reverse',ease:'easeInOut'}}
                    ></motion.img>
                </motion.div>
            </div>


        </div>
    )
}
export default Hero;