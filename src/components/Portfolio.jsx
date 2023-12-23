import { React, useRef } from 'react';
import './Portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
const items = [
    {
        id: 1,
        name: 'Weather-App',
        tech: "HTML CSS JS",
        image: './weatherApp.avif',
        link:'https://github.com/TheAdich/Weather.github.io',
        des: "Uses the user location and gives the information about user's weather also updates the background image related to weather conditions"

    },

    {
        id: 2,
        name: 'Movie-App',
        tech: "React JS",
        image: './movieApp.avif',
        link:'https://github.com/TheAdich/React-movie-app',
        des: "Fetches movie data from Ombd and Imbd movie api and updates the interface also have put search functionality"
    },

    {
        id: 3,
        name: "Prelims Alcheringa Website",
        tech: "HTML CSS JS DJANGO",
        image: './alcher.jpg',
        link:'https://prelims.alcheringa.in/',
        des: "Created a fully functional prelims Alcheringa website with WebOps Team(Alcher) with modern web-designing and registration database"
    },

    
]



const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref
    })

    const yMotion = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    const imgMotion = useTransform(scrollYProgress, [0, 1], [-20, 20]);
    return (
        <div className='item-container'>
            <div className='wrapper'>
                <div className='app-image-container' ref={ref}>
                    <motion.img src={item.image} style={{ y: imgMotion }}></motion.img>
                </div>
                <motion.div className='app-des' style={{ y: yMotion }} >
                    <h1>{item.name}</h1>
                    <h3>TechStack : {item.tech}</h3>
                    <p>{item.des}</p>
                    <button><a href={item.link}>Code</a></button>
                </motion.div>
            </div>

        </div>
    )
}


const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start']
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 400,
        damping: 100
    })
    return (
        <div ref={ref} className='Portfolio-Container'>
            <div className='progress'>
                <h1>Featured Projects</h1>
                <motion.div style={{ scaleX: scaleX }} className='progressBar'></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id}></Single>
            ))}
        </div>
    )
}
export default Portfolio;