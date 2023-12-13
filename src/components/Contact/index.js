import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'





const Contact = () => {
    const form = useRef();
    const[lettersClass, setLettersClass] = useState ('text-animate')
    const position = [29.4252, -98.49114]
    
    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLettersClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        alert('Message successfully sent!')
        window.location.reload(false)
      }, (error) => {
        alert('Failed to send the message, please try again')
      });
  };
    
   
    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters lettersClass={lettersClass}
                    strArray={['C','o','n','t','a','c','','m','e']}
                    idx={15}/>
                </h1>
                <p>
                    Any advice or job offert send me and email.
                </p>
                <div className='contact-form'>
                   
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>

                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>

                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required>

                                </textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-buttom' value='SEND'/>
                            </li>
                        </ul>
                    </form>

                </div>
              
            </div>
            <div className='info-map'>
            Bryan Rocha,
            <br/>
            United States
            <br/>
            San Antonio, Texas

        </div>
        <div className='map-wrap'> 
              <MapContainer center={position} zoom={11} >
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position= {position}>
                    <Popup>Hello there</Popup>
                    
                </Marker> 
              </MapContainer>
        </div>
       

        </div>
        
      
        
        
          
        <Loader type ='pacman' />
   </>
    )
}

export default Contact