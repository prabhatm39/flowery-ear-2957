import React, { useEffect } from 'react'
import Styles from '../style/dubai.module.css'
import { useDispatch,useSelector } from 'react-redux'
import { getData1 } from '../Redux/action';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "../style/styles.css";
import { AiFillPlaySquare } from "react-icons/ai";

const VisitDubai = () => {
  const dispatch = useDispatch();
  const heading = useSelector((store)=>store.heading)

  console.log(heading)
  useEffect(()=>{
    dispatch(getData1())
  },[dispatch])
  return (
    <div>
          {/* the top video part */}
     <div style={{ overflow:'hidden', width:'100%'}}>
       <video width="100%" height='270px' controls autoPlay={true} muted >
       <source
          src="https://stream.mux.com/XdWcF8Xx02ekQt772XFZgIZXGNlr5BdXO/high.mp4"
          type="video/mp4"
        />
       </video>
     </div>

     {/* body get starts here */}
        <div className={Styles.bodyHead}>
            {/* first heading part */}
            <div className={Styles.padding30}>
                <img src="https://cdn1.tripoto.com/assets/2.9/img/logo/mini-logo.png" alt="" style={{height:"15px"}} />
            {`>`}Collectionschevron {`>`} Explore Dubai With Tripoto
            </div>
            <div style={{ paddingTop:"10px" }}>
               <h1>Explore Dubai with Tripoto</h1>
               <div className={Styles.toppart}>
                {
                    heading.map((item)=>{
                        return <div key={item.id} className={Styles.cursor}>
                            <img src={item.img} alt="" className={Styles.topImg} />
                        </div>
                    })
                }
               </div>
            </div>

            {/*  second part of the page*/}
            <div className={Styles.padding10}>
                <h1 className={Styles.head2}>Watch the Ultimate Dubai Challenge feat. Aisha Ahmed and Ayush Mehra</h1>
                <div style={{ marginBottom:'100px' }}>
                        <Swiper slidesPerView={3}
                                spaceBetween={30}
                                slidesPerGroup={3}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                pagination={{
                                clickable: false
                                }}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                            <SwiperSlide>
                                <div>
                                <img src="https://img.youtube.com/vi/QmSd8XidTAo/sddefault.jpg" alt="" />
                                <AiFillPlaySquare className={Styles.playicon}></AiFillPlaySquare>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                            <img src="https://img.youtube.com/vi/QmSd8XidTAo/sddefault.jpg" alt="" />                                
                            </SwiperSlide>

                            <SwiperSlide>
                            <img src="https://img.youtube.com/vi/QmSd8XidTAo/sddefault.jpg" alt="" />
                            </SwiperSlide>

                            <SwiperSlide>
                            <img src="https://img.youtube.com/vi/QmSd8XidTAo/sddefault.jpg" alt="" />
                            </SwiperSlide>

                            <SwiperSlide>
                            <img src="https://img.youtube.com/vi/QmSd8XidTAo/sddefault.jpg" alt="" />
                            </SwiperSlide>

                            <SwiperSlide>
                            <img src="https://img.youtube.com/vi/QmSd8XidTAo/sddefault.jpg" alt="" />
                            </SwiperSlide>
                        </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VisitDubai