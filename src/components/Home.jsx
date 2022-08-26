import React from 'react';
import styles from "./Home.module.css";
import { Swiper, SwiperSlide } from "swiper";
import "swiper/css";
import { Input } from '@chakra-ui/react'
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Inspotlight } from './Insportlight/Inspotlight';
import { Find } from './Find/Find';
import { Place } from './Place/Place';
import { Check } from './Check/Check';
import { Travel } from './Travel/Travel';
import { Readmore } from './Creator/Readmore';
import { Creator } from './Creator/Creator';
import { Plan } from './Plan/Plan';
import { Watch } from './Watch/Watch';
import { Book } from './Book/Book';

export const Home = () => {
  return (
    <div>
        <div className={styles.hometop}>
            <img src='https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg' alt='Home Page Banner Image'
            className={styles.banner} />
            <div className={styles.bannerh1}>
                <h1 className={styles.hh1}>India&#x27;s Largest Community of Travellers</h1>
                <div className={styles.dark}>
                   <div className={styles.inp}>
                        <div className={styles.lig}>
                      <Input  type="text" variant='unstyled' placeholder='Search for itineraries, destinations, hotels or activities' className={styles.in} 
                      />
                        <button className={styles.btn}>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1zIs2wZ8hnyZW6IX0l0x9dXv0j6exnnALqw&usqp=CAU' 
                          alt='' />
                        </button>

                      
                        </div>
                      
                   </div>
                </div>
            </div>
        </div>
        <div className={styles.bottomhome}>

       
        <div className={styles.bandown}>
                          <div>
                            <img src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png'/>
                          </div>
                          <div>
                          <img src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png'/>
                          </div>
                          <div>
                          <img src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png'/>
                          </div>
                          <div>
                          <img src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png'/>
                          </div>

                        </div>
                        <div className={styles.container}>
                          <div className={styles.cont}>
                          <h2 style={{textAlign:"left", fontSize:"28px"}}>In the Spotlight: Partnerships</h2>
                          <div >
                              <Inspotlight />
                          </div>
                          <div className={styles.divgif}>
                            <img src='https://cdn1.tripoto.com/media/transfer/img/2224454/Image/1656479622_header_web2.gif' className={styles.gif} />
                          </div>


                            <div className={styles.find}>

                           
                          <div >
                            <h2  style={{textAlign:"left", fontSize:"28px", marginBottom:"1rem"}}>Find Best Places to Visit in India in August & September</h2>
                          </div>
                          <div>
                                <Find />
                          </div>
                          </div>

                          <div className={styles.place}>
                          <div >
                            <h2  style={{textAlign:"left", fontSize:"28px", marginBottom:"1rem"}}>Plan International Trips for August & September</h2>
                          </div> 
                          <div>
                            <Place />
                            </div>
                          </div>

                          <div className={styles.checkout}>
                            <div>
                              <h2  style={{textAlign:"left", fontSize:"28px", marginBottom:"1rem"}}>Check Out Best Hotels and Properties for Every Type of Traveller</h2>
                            </div>
                            <div>
                            <Check />
                            </div>
                          </div>

                          <div className={styles.travel}>
                            <div>
                            <h2  style={{textAlign:"left", fontSize:"28px", marginBottom:"1rem"}}>Travel and Learn with Tripoto's Mindful Retreats</h2>
                            </div>
                            <div>
                              <Travel />
                              </div>
                          </div>


                          <div className={styles.book}>
                            <div>
                            <h2  style={{textAlign:"left", fontSize:"28px", marginBottom:"1rem"}}>Book Budget Tour Packages Curated For You</h2>
                            </div>
                            <div>
                              <Book />
                            </div>

                          </div>


                          <div className={styles.creator}>
                            <div>
                            <h2  style={{textAlign:"left", fontSize:"28px", marginBottom:"1rem"}}>In the Spotlight: Tripoto Creators of the Month - July 2022</h2>
                            </div>
                            <div>
                             <Creator />
                             
<div className={styles.creimg}>
    <div>
        <img src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1660286748_12.jpg' alt="" />
    </div>
    <div>
        <img src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1660290817_13.jpg' alt="" />
    </div>
    <div>
        <img src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1660290935_11.jpg' alt="" />
    </div>
    </div>
                            </div>
                          </div>


                          <div className={styles.plan}>
                            <div>
                            <h2  style={{textAlign:"left", fontSize:"28px", marginBottom:"1rem"}}>Plan Your Next Trip Using Tripoto's Complete Destination Guides</h2>
                            </div>
                            <div>
                              <Plan />
                            </div>
                          </div>



                          <div className={styles.watch}>
                            <div>
                            <h2  style={{textAlign:"left", fontSize:"28px", marginBottom:"1rem"}}>
                            Watch Tripoto's Top Travel Vlogs of the Week
                            </h2>
                            </div>

                            <div>
                              <Watch />
                            </div>

                          </div>



                          </div>
                        </div>


                        </div>

                        <div>
                          <hr/>
                        </div>
    </div>
  )
}