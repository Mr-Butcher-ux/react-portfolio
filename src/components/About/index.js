import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    
    faPython
  } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About= () => {
    const[lettersClass, setLettersClass] = useState ('text-animate')
    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLettersClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return (
    <>
        
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    lettersClass={lettersClass}
                    strArray={['A','b','o','u','t','','m','e']} idx={15}/>
                </h1>
                <p>I am a new graduate computer scientist looking for the oportunity of a job.</p>
                <p>I love to learn.</p>
                <p>I like to use what I learned.</p>

            </div>
            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faPython} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>

        </div> 
        <Loader type = "pacman"/>
    </>
    )
}

export default  About