import { Link } from 'react-router-dom';
//import LogoTitle from '../../assets/images/logo-b.png'
import AnimatedLetters from '../AnimatedLetters';

import { useEffect, useState } from 'react'
import Logo from './Logo';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
    const[lettersClass, setLettersClass] = useState ('text-animate')
    const nameArray = ['','B','r','y','a','n','','R','o','c','h','a']
    const jobArray = ['C','o','m','p','u','t','e','r','','S','c','i','e','n','t','i','s','t','.']

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLettersClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])


  

    return (
      <>
        
          <div className="container home-page">
            <div className="text-zone">
              <h1>
                <span className={lettersClass}>H</span>
                <span className={`${lettersClass} _16`}>i,</span>
                <br />
                <span className={`${lettersClass} _17`}>I</span>
                <span className={`${lettersClass} _18`}>'m</span>
               
                <AnimatedLetters
                  lettersClass={lettersClass}
                  strArray={nameArray}
                  idx={19}
                />
                <br />
                <AnimatedLetters
                  lettersClass={lettersClass}
                  strArray={jobArray}
                  idx={17}
                />
              </h1>
              <h2>Programming/ Cyber Security / Web Develoment</h2>
              <Link to="/contact" className="flat-button">
                CONTACT ME
              </Link>
            </div>
            <Logo/>
          
          </div>
          <Loader type='pacman'/>
          </>
          
                              
      )
    }
    
    export default Home