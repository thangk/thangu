/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { slideshow } from '../constants/slideshow';
import { motion, AnimatePresence } from 'framer-motion';


const Slideshow = () => {

    const [index, setIndex] = useState(0)    
    const [renderCount, setRenderCount] = useState(0)

    useEffect(() => {

        let intervalID = setInterval(() => {

            if (index < slideshow.length) {
                setIndex(prev => prev + 1)
            }

            if (index === slideshow.length - 1) {
                setIndex(prev => 0)
            }
            
            }, 7000)
            console.log(renderCount)

        return () => {
            clearInterval(intervalID)
            setRenderCount(prev => prev + 1)
        }

    }, [index])

    return (
        <AnimatePresence presenceAffectsLayout>
        
        <motion.div
        initial={{ x: `${renderCount > 0 ? `-100vw` : `0vw`}`}}
        animate={{ x: '0vw'}}
        exit={{ x: '100vw'}}
        transition={{ duration: 2}}
        
        className="slideshow__wrapper" key={index}>

            <img src={slideshow[index].image} className="slideshow__image" alt={`slide${index}.jpg`} />
        
            <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ delay: renderCount > 0 ? 2 : 0}}
            
            className='slideshow__textbox'
            key={`${index}-slideshow__textbox`}>
                <h1>{slideshow[index].title}</h1>
                <h2>{slideshow[index].subtitle}</h2>
            </motion.div>
             
        </motion.div>
            
        </AnimatePresence>
    )};

export default Slideshow;