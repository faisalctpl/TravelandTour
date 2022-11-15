import React, {useEffect} from 'react'
import './main.css'

// Import icons

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'


// Let me import the images so we dont have this error on the browser.
import img from '../../Assets/img 1.jpg'
import img2 from '../../Assets/img 2.jpg'
import img3 from '../../Assets/img 3.jpg'
import img4 from '../../Assets/img 4.jpg'
import img5 from '../../Assets/img 5.jpg'
import img6 from '../../Assets/img 6.jpg'
import img7 from '../../Assets/img 7.jpg'
import img8 from '../../Assets/img 8.jpg'
import img9 from '../../Assets/img 9.jpg'

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

// Let me paste the array named data

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. '
  },



  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Machu Picchu is the most visited tourist destination in Peru. A symbol of the Incan Empire and built around 1450AD, Machu Picchu was designated a UNESCO World Heritage Site in 1983 and was named one of the New Seven Wonders of the World in 2007. '
  },



  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Austrailia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The Great Barrier Reef is one of the seven wonders of the natural world, and pulling away from it, and viewing it from a greater distance, you can understand . '
  },



  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'Famous for its unique rock formations and amazing hot air ballooning opportunities, the otherworldly landscapes of Cappadocia are one of Turkey. '
  },



  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Maxico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'Guanajuato officially the Free and Sovereign State of Guanajuato is one of the 32 states that make up the Federal Entities of Mexico. '
  },



  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'Cinque Terre is famous for its fresh seafood. The towns are, after all, fishing villages! Sample pesto with your pasta, or try some fresh focaccia bread. Anchovies are another staple, and you find the way they are prepared in Cinque Terre most delightful. '
  },



  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'Angkor Wat is the most famous ancient temple site in Cambodia. With its 5 lotus-like towers rising 65 meters into the sky, it is an awe-inspiring sight. Located in Siem Reap, this UNESCO World Heritage site was once the largest pre-industrial city in the world. '
  },



  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'It is a masterpiece of architectural style in conception, treatment and execution and has unique aesthetic qualities in balance, symmetry and harmonious blending of various elements.'
  },



  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers.'
  },




]

const Main = () => {
    // Lets Create a reack hook to add a scroll animation..
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
  
  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right" className='title'>Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {/* So guys here we are going to use high ordfer array method(map) . To do that we shall use a list of object in one array. I'm going to create an array named data and from that we shall .map() array to fetch destination at once. I hope this will make sence to you */}

        {
          Data.map(({id , imgSrc , destTitle , location , grade , fees , description})=>{
              return(
                <div key={id} data-aos="fade-up" className="singleDestination">
                  {/* Here it will return single id from the map array  */}

                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className='destTitle'>{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className='btn flex'>
                      DETAILS <HiOutlineClipboardCheck className='icon' />
                    </button>
                  </div>
                </div>
              )
          })
        }
      </div>


    </section>
  )
}

export default Main
