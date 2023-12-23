import {React , useRef} from "react";
import './Parallax.scss';
import {motion , useScroll , useTransform} from 'framer-motion';

const Parallax=()=>{
    const ref=useRef();
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:['start start','end start'],
    });

    const mountainOpacity=useTransform(scrollYProgress,[0,1],[0,1]);
    const beachOpacity=useTransform(scrollYProgress,[0,1],[0.5,0]);
    const bgText=useTransform(scrollYProgress,[0,1],['0%','700%']);
    const bgMotion=useTransform(scrollYProgress,[0,1],['0%','300%']);
    return(
    <motion.div className="parallaxContainer"
        ref={ref}
    >
        <motion.h1 style={{y:bgText}}>What I Did !</motion.h1>
        <motion.div style={{opacity:beachOpacity}} className="beach"><img src='./beach.jpg' /></motion.div>
        <motion.div style={{opacity:mountainOpacity}} className="mountain"><img src='./mountains.png'></img></motion.div>
        <motion.div style={{x:bgMotion}} className="stars"><img src='./stars.png'/></motion.div>
    </motion.div>
    )
}
export default Parallax;