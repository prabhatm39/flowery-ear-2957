import React, {Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Travel.module.css";
import { Button, ButtonGroup } from '@chakra-ui/react'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey", border: "soild red" }}
        onClick={onClick}
      />
    );
  }
  


export const Travel = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
        <div>
          <Slider {...settings}>





          <div className={styles.box}>
            <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1653391344_ln_c1.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
            PACKAGE
            </div>
          <div className={styles.des}>
         Explore An Artist's Estate & Stay In A Kathkuni Home Hidden In Manali's Forests | North
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>
                <i class="fa-solid fa-location-dot"></i>
                    </span> <span className={styles.byname}>Manali</span>
                    <span className={styles.spbtn}>
                        <Button className={styles.btn}>3D{" "}-{" "}2N</Button>
                    </span>
                    <div className={styles.pri}>
                      <div className={styles.prdiv}>
                      <span className={styles.pr}>₹ {" "} 9,850 <span className={styles.per}>{" "}/ person </span></span>
                      </div>
                      <div className={styles.smbox} >
                      Book Now
                      </div>
                      
                   </div>
          </div>

          <div style={{width:"20rem"}}>
            <hr/>
          </div>
            <div className={styles.ls}>
               
                    <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg' 
                    className={styles.lsimg} />
                    <span className={styles.lstex}>
                        Tripoto Mindful retreats 
                    </span>
               
             
            </div>
          </div>






          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657734830_image_cover_a.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
            PACKAGE

            </div>
          <div className={styles.des}>
        Explore One Of Asia's Spookiest Spots While Unwinding Amidst Nature | Seegreen Lodges, Mussoorie
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>
                <i class="fa-solid fa-location-dot"></i>
                    </span> <span className={styles.byname}>Mussoorie</span>
                    <span className={styles.spbtn}>
                        <Button className={styles.btn}>3D{" "}-{" "}2N</Button>
                    </span>
                    <div className={styles.pri}>
                      <div className={styles.prdiv}>
                      <span className={styles.pr}>₹ {" "} 7,500 <span className={styles.per}>{" "}/ person </span></span>
                      </div>
                      <div className={styles.smbox} style={{marginRight:"5.4rem"}}>
                    Book Now
                      </div>
                      
                   </div>
          </div>
          <div style={{width:"20rem"}}>
            <hr/>
          </div>
          <div className={styles.ls}>
               
               <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg' 
               className={styles.lsimg} />
               <span className={styles.lstex}>
                   Tripoto Verified Partner
               </span>
          
        
       </div>
          </div>





          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660666126_image_covera.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
           PACKAGE

            </div>
          <div className={styles.des}>
         Embrace Minimalistic Community Life & Learn A Traditional Martial Art | Beyond Commuunity, Auroville
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>
                <i class="fa-solid fa-location-dot"></i>
                    </span> <span className={styles.byname}>Auroville</span>
                    <span className={styles.spbtn}>
                        <Button className={styles.btn} style={{marginLeft:"5rem"}}>3D{" "}-{" "}2N</Button>
                    </span>
                    <div className={styles.pri}>
                      <div className={styles.prdiv}>
                      <span className={styles.pr}>₹ {" "} 8500 <span className={styles.per}>{" "}/ person </span></span>
                      </div>
                      <div className={styles.smbox} style={{marginRight:"3.4rem"}}>
                    Book Now
                      </div>
                      
                   </div>
                  
          </div>
          <div style={{width:"22rem"}}>
            <hr/>
          </div>
          <div className={styles.ls}>
               
               <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg' 
               className={styles.lsimg} />
               <span className={styles.lstex}>
                   Tripoto Verified Partner
               </span>
          
        
       </div>
          </div>







          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660316705_image_cover_1.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
            PACKAGE

            </div>
          <div className={styles.des}>
        Learn Sketching & Go On Guided Forest WAlk Around  The Himalayan Trails | Cosmic Greek, Dharamkot
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>
                <i class="fa-solid fa-location-dot"></i>
                    </span> <span className={styles.byname}>Himachal Pradesh</span>
                    <span className={styles.spbtn}>
                        <Button className={styles.btn}>3D{" "}-{" "}2N</Button>
                    </span>
                    <div className={styles.pri}>
                      <div className={styles.prdiv}>
                      <span className={styles.pr}>₹ {" "} 8500 <span className={styles.per}>{" "}/ person </span></span>
                      </div>
                      <div className={styles.smbox} style={{marginRight:"6rem"}}>
                    Book Now
                      </div>
                      
                   </div>
          </div>
          <div style={{width:"19rem"}}>
            <hr/>
          </div>
          <div className={styles.ls}>
               
               <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg' 
               className={styles.lsimg} />
               <span className={styles.lstex}>
                   Tripoto Verified Partner
               </span>
          
        
       </div>
          </div>


      




        



          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2163002/Image/1638778652_image_cover_b.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
            PACKAGE

            </div>
          <div className={styles.des}>
        Learn To Cook A Traditional Rajasthani Meal At A 200 Year-Old Luxury Haveli
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>
                <i class="fa-solid fa-location-dot"></i>
                    </span> <span className={styles.byname}>Rajasthan
</span>
<span className={styles.spbtn}>
                        <Button className={styles.btn} style={{marginLeft:"5rem"}}>3D{" "}-{" "}2N</Button>
                    </span>
                    <div className={styles.pri}>
                      <div className={styles.prdiv}>
                      <span className={styles.pr}>₹ {" "} 3,799 <span className={styles.per}>{" "}/ person </span></span>
                      </div>
                      <div className={styles.smbox} style={{marginRight:"4rem"}}>
                     Book Now
                      </div>
                      
                   </div>
          </div>
          <div style={{width:"21rem"}}>
            <hr/>
          </div>
          <div className={styles.ls}>
               
               <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg' 
               className={styles.lsimg} />
               <span className={styles.lstex}>
                   Tripoto Verified Partner
               </span>
          
        
       </div>
          </div>








          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1654504108_ce_c1.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
            PACKAGE

            </div>
            <div className={styles.des}>
          Trek To Triund And Stay At The Residence Of Kangra's Maharaja | Clouds End Villa, Dharamshala
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>
                <i class="fa-solid fa-location-dot"></i>
                    </span> <span className={styles.byname}>Dharamshala
</span>
<span className={styles.spbtn}>
                        <Button className={styles.btn}>3D{" "}-{" "}2N</Button>
                    </span>
                    <div className={styles.pri}>
                      <div className={styles.prdiv}>
                      <span className={styles.pr}>₹ {" "} 13,750 <span className={styles.per}>{" "}/ person </span></span>
                      </div>
                      <div className={styles.smbox} style={{marginRight:"1rem"}}>
                       Book Now
                      </div>
                      
                   </div>
                 
          </div>
          <div style={{width:"23rem"}}>
            <hr/>
          </div>
          <div className={styles.ls}>
               
                    <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg' 
                    className={styles.lsimg} />
                    <span className={styles.lstex}>
                        Tripoto Verified Partner
                    </span>
               
             
            </div>
          </div>






          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1645772836_image_cover.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
            PACKAGE

            </div>
            <div className={styles.des}>
          Stargaze & Enjoy A Picnic In The Hills As You At A Unique A-Framed Cottage | Urna Boutique Stay
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>
                <i class="fa-solid fa-location-dot"></i>
                    </span> <span className={styles.byname}>Mukteshwar
</span>
<span className={styles.spbtn}>
                        <Button className={styles.btn}>3D{" "}-{" "}2N</Button>
                    </span>
                    <div className={styles.pri}>
                      <div className={styles.prdiv}>
                      <span className={styles.pr}>₹ {" "} 6,899 <span className={styles.per}>{" "}/ person </span></span>
                      </div>
                      <div className={styles.smbox} style={{marginRight:"1rem"}}>
                       Book Now
                      </div>
                      
                   </div>
                 
          </div>
          <div style={{width:"23rem"}}>
            <hr/>
          </div>
          <div className={styles.ls}>
               
                    <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg' 
                    className={styles.lsimg} />
                    <span className={styles.lstex}>
                        Tripoto Verified Partner
                    </span>
               
             
            </div>
          </div>





          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2163002/Image/1640323403_image_cover_b.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
            PACKAGE

            </div>
            <div className={styles.des}>
          Learn Yoga While Unwinding Amidst Nature & Hike To A Gorgeous WaterFall | Nature Care Village
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>
                <i class="fa-solid fa-location-dot"></i>
                    </span> <span className={styles.byname}>Rishikesh
</span>
<span className={styles.spbtn}>
                        <Button className={styles.btn}>3D{" "}-{" "}2N</Button>
                    </span>
                    <div className={styles.pri}>
                      <div className={styles.prdiv}>
                      <span className={styles.pr}>₹ {" "} 4,799 <span className={styles.per}>{" "}/ person </span></span>
                      </div>
                      <div className={styles.smbox} style={{marginRight:"1rem"}}>
                        Book Now
                      </div>
                      
                   </div>
                 
          </div>
          <div style={{width:"23rem"}}>
            <hr/>
          </div>
          <div className={styles.ls}>
               
                    <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg' 
                    className={styles.lsimg} />
                    <span className={styles.lstex}>
                        Tripoto Verified Partner
                    </span>
               
             
            </div>
          </div>





          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657204838_omya_img_cover_b.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
            PACKAGE

            </div>
            <div className={styles.des}>
          Take A Dip In River And Ride On A Toy Train Amidst Mountains | Omya Forest Camps, Bir
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>
                <i class="fa-solid fa-location-dot"></i>
                    </span> <span className={styles.byname}>Bir
</span>
<span className={styles.spbtn}>
                        <Button className={styles.btn}>3D{" "}-{" "}2N</Button>
                    </span>
                    <div className={styles.pri}>
                      <div className={styles.prdiv}>
                      <span className={styles.pr}>₹ {" "} 8,599 <span className={styles.per}>{" "}/ person </span></span>
                      </div>
                      <div className={styles.smbox} style={{marginRight:"1rem"}}>
                        Book Now
                      </div>
                      
                   </div>
                 
          </div>
          <div style={{width:"23rem"}}>
            <hr/>
          </div>
          <div className={styles.ls}>
               
                    <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg' 
                    className={styles.lsimg} />
                    <span className={styles.lstex}>
                        Tripoto Verified Partner
                    </span>
               
             
            </div>
          </div>






          <div className={styles.box}>
          <div>
            <img src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1653394847_nw_c2.jpg'
          className={styles.imge} />
            </div>
            <div className={styles.title}>
            PACKAGE

            </div>
            <div className={styles.des}>
          Stargaze & Pluck Your Own Herbs For Tea At This Kumaoni Retreat | Once Upon A Forest, Hariyal
          </div>
          <div className={styles.bydiv}>
                <span className={styles.by}>
                <i class="fa-solid fa-location-dot"></i>
                    </span> <span className={styles.byname}>Nainital
</span>
<span className={styles.spbtn}>
                        <Button className={styles.btn}>3D{" "}-{" "}2N</Button>
                    </span>
                    <div className={styles.pri}>
                      <div className={styles.prdiv}>
                      <span className={styles.pr}>₹ {" "} 5,199 <span className={styles.per}>{" "}/ person </span></span>
                      </div>
                      <div className={styles.smbox} style={{marginRight:"1rem"}}>
                        Book Now
                      </div>
                      
                   </div>
                 
          </div>
          <div style={{width:"23rem"}}>
            <hr/>
          </div>
          <div className={styles.ls}>
               
                    <img src='https://cdn1.tripoto.com/media/filter/mss/img/1358539/UserPhoto/1553849222_logo.jpg' 
                    className={styles.lsimg} />
                    <span className={styles.lstex}>
                        Tripoto Verified Partner
                    </span>
               
             
            </div>
          </div>





         
        </Slider>
        </div>
    </div>
  )
}
