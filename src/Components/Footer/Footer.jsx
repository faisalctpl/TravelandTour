import React, {useEffect} from 'react'
import './footer.css'
import video from '../../Assets/video 2.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    // Lets Create a reack hook to add a scroll animation..
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
  



  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted typeof='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className="btn flex" type='submit'>
             SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
               <MdOutlineTravelExplore className='icon'/> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            Offering over 100 sports and adventure activities at over 500 locations nationwide. Either you are a solo traveler, traveling with family, friends or colleagues ...
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>


          </div>

          <div className="footerLinks grid">
            
            {/* Group One */}
            <div data-aos="fade-up"
            data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight classNam='icon'/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight classNam='icon'/>
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight classNam='icon'/>
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight classNam='icon'/>
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight classNam='icon'/>
                Payment
              </li>


            </div>

            {/* Group Two */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight classNam='icon'/>
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight classNam='icon'/>
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight classNam='icon'/>
                HotelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight classNam='icon'/>
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight classNam='icon'/>
                TripAdvisor
              </li>


            </div>

            {/* Group Three */}
            <div data-aos="fade-up" data-aos-duration="4000"  className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight classNam='icon'/>
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight classNam='icon'/>
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight classNam='icon'/>
                Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight classNam='icon'/>
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight classNam='icon'/>
                Oceania
              </li>


            </div>

          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Footer
