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

                          

                          </div>
                        </div>


                        </div>
    </div>
  )
}