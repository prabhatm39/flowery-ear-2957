import React, { useEffect } from 'react'
import Styles from '../style/dubai.module.css'
import { useDispatch,useSelector } from 'react-redux'
import { getData1,
         getData2, 
         getData3, 
         getData4, 
         getData5, 
         getData6, 
         getData7, 
         getData8,
         getData9} from '../Redux/action';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "../style/styles.css";
import { BsPlayFill } from "react-icons/bs";
import {IoLocationSharp} from 'react-icons/io5'
const VisitDubai = () => {
  const dispatch = useDispatch();
  const heading = useSelector((store)=>store.heading)
   const data2 = useSelector((store)=>store.data2)
   const data3 = useSelector((store)=>store.data3)
   const data4 = useSelector((store)=>store.data4)
   const data5 = useSelector((store)=>store.data5)
   const data6 = useSelector((store)=>store.data6)
   const data7 = useSelector((store)=>store.data7)
   const data8 = useSelector((store)=>store.data8)
   const data9 = useSelector((store)=>store.data9)
//   console.log(data2)
  console.log(heading)
  useEffect(()=>{
    dispatch(getData1())
  },[dispatch])

  useEffect(()=>{
    dispatch(getData2())
  },[dispatch])

  useEffect(()=>{
    dispatch(getData3())
  },[dispatch])

  useEffect(()=>{
    dispatch(getData4())
  },[dispatch])

  useEffect(()=>{
    dispatch(getData5())
  },[dispatch])

  useEffect(()=>{
    dispatch(getData6())
  },[dispatch])

  useEffect(()=>{
    dispatch(getData7())
  },[dispatch])

  useEffect(()=>{
    dispatch(getData8())
  },[dispatch])

  useEffect(()=>{
    dispatch(getData9())
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

            {/* most top heading part */}
            <div className={Styles.padding30}>
                <img src="https://cdn1.tripoto.com/assets/2.9/img/logo/mini-logo.png" alt="" style={{height:"15px"}} />
            {`>`}Collectionschevron {`>`} Explore Dubai With Tripoto
            </div>

            {/* part 1 of the page with img */}
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
                                <img src="https://img.youtube.com/vi/QmSd8XidTAo/sddefault.jpg" alt=""/>
                                <BsPlayFill className={Styles.playicon}></BsPlayFill>
                            </div>
                            </SwiperSlide>

                            <SwiperSlide>
                            <div>
                                <img src="https://img.youtube.com/vi/JFHnH4p4Mn4/sddefault.jpg" alt="" />
                                <BsPlayFill className={Styles.playicon}></BsPlayFill>
                            </div>                               
                            </SwiperSlide>

                            <SwiperSlide>
                            <div>
                                <img src="https://img.youtube.com/vi/LMZIVF6mCNM/sddefault.jpg" alt="" />
                                <BsPlayFill className={Styles.playicon}></BsPlayFill>
                            </div>
                            </SwiperSlide>

                            <SwiperSlide>
                            <div>
                                <img src="https://img.youtube.com/vi/LMZIVF6mCNM/sddefault.jpg" alt="" />
                                <BsPlayFill className={Styles.playicon}></BsPlayFill>
                            </div>
                            </SwiperSlide>

                            <SwiperSlide>
                            <div>
                                <img src="https://img.youtube.com/vi/J9sfPFfnE1w/sddefault.jpg" alt="" />
                                <BsPlayFill className={Styles.playicon}></BsPlayFill>
                            </div>
                            </SwiperSlide>

                            <SwiperSlide>
                            <div>
                                <img src="https://img.youtube.com/vi/_qpjqX8lcX0/sddefault.jpg" alt=""/>
                                <BsPlayFill className={Styles.playicon}></BsPlayFill>
                            </div>
                            </SwiperSlide>
                        </Swiper>
                </div>
            </div>

            {/* part 3 of the page */}
            <div className={Styles.marginTop}>
              <h1 className={Styles.head2}>What's Trending</h1>
              <p className={Styles.topdis}>Dubai transforms with every season and we know that it can be challenging to keep up with all its new experiences and hidden gems! So we've done all the research for you. Here are our top recommendations for all of you who will be making your way to Dubai in 2022.</p>

                  <div style={{ marginBottom:'70px' }}>
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
                            {
                              data2.map((pro)=>{
                                return <SwiperSlide key={pro.id}>
                                  <div className={Styles.slid2}>
                                    <img src={pro.img} alt="" className={Styles.slider1img} style={{ height:"200px" }}/>
                                     <div className={Styles.innerBox}>
                                       <p className={Styles.slidhead1}>{pro.dis}</p>
                                       <p className={Styles.sl1by}>By <a href="#" className={ Styles.by }>{pro.by}</a> </p>
                                     </div>
                                  </div>
                                </SwiperSlide>
                              })
                            }
                            </Swiper>
                  </div>
            </div>

            {/* part 4 of the page */}
            <div className={Styles.marginTop1}>
              <h1 className={Styles.head2}>Events in Dubai You Can't Miss!</h1>
              <p className={Styles.topdis}>The greatest cultural spectacle is now live in Dubai. Learn about Expo 2020 and other events happening around you.</p>

                  <div style={{ marginBottom:'50px' }}>
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
                            {
                              data3.map((pro)=>{
                                return <SwiperSlide key={pro.id}>
                                  <div className={Styles.slid2}>
                                    <img src={pro.img} alt="" className={Styles.slider2img} style={{ height:"200px",width:"330px" }}/>
                                    <div className={Styles.innerBox}>
                                       <p className={Styles.slidhead1}>{pro.dis}</p>
                                       <p className={Styles.sl2by}>{pro.by}</p>
                                     </div>
                                  </div>
                                </SwiperSlide>
                              })
                            }
                            </Swiper>
                  </div>
            </div>

            {/* Heading part */}
            <div>
              <img src="https://cdn1.tripoto.com/media/filter/nxxl/img/311219/Image/1640869884_explore_web.jpg" alt="" style={{ width:'100%'}}  className={Styles.marginTop2}/>
              <img src="https://cdn1.tripoto.com/media/filter/nxxl/img/1745358/Image/1644391843_quiz_2.jpg" alt="" style={{ width:'100%'}} />
            </div>

            {/* part 5 in the page with slider*/}
            <div>
              <h1 className={Styles.head2}>Chasing Adventure in Dubai</h1>
              <p className={Styles.topdis}>From skydiving over the Palm Jumeirah to swimming with sharks – find your fill of adventure in Dubai.</p>

                  <div style={{ marginBottom:'100px' }}>
                            <Swiper slidesPerView={4}
                                spaceBetween={30}
                                slidesPerGroup={4}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                pagination={{
                                clickable: false
                                }}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                            {
                              data4.map((prod)=>{
                                return <SwiperSlide key={prod.id}>
                                  <div className={Styles.slid2}>
                                    <img src={prod.img} alt="" className={Styles.slider2img} style={{ height:"180px",width:"230px" }}/>
                                    <div className={Styles.innerBox}>
                                       <p className={Styles.slidhead1}>{prod.dis}</p>
                                       <p className={Styles.sl1by}>By <a href="#" className={ Styles.by }>{prod.by}</a> </p>
                                     </div>
                                  </div>
                                </SwiperSlide>
                              })
                            }
                            </Swiper>
                  </div>
            </div>

            {/* part 6 in the page with img */}
           <div className={Styles.marginTop} style={{marginBottom:"70px"}}>
              <h1 className={Styles.head2}>Where to go Shopping in Dubai</h1>
              <p className={Styles.topdis}>The shopping capital of the world has something for everyone – you just need to know where to go!</p>
              <div className={Styles.shop}>
                  {
                    data5.map((shops)=>{
                      return <div key={shops.id}>
                        <img src={shops.img} alt="" className={Styles.slider3img}/>
                        <p className={Styles.slidhead1}>{shops.dis}</p>
                        <p className={Styles.sl1by}>By <a href="#" className={ Styles.by }>{shops.by}</a> </p>
                      </div>
                    })
                  }
              </div>
           </div>

           {/*part 7 in the page with slider*/}
           <div className={Styles.marginTop1}>
              <h1 className={Styles.head2}>Top Things to Do</h1>
              <p className={Styles.topdis}>Read guides written by travellers like you so you know what to expect in Dubai.</p>
              <div style={{ marginBottom:'100px' }}>
                            <Swiper slidesPerView={4}
                                spaceBetween={30}
                                slidesPerGroup={4}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                pagination={{
                                clickable: false
                                }}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                            {
                              data6.map((prod)=>{
                                return <SwiperSlide key={prod.id}>
                                  <div className={Styles.slid2}>
                                    <img src={prod.img} alt="" className={Styles.slider2img} style={{ height:"200px",width:"230px" }}/>
                                    <div className={Styles.innerBox}>
                                       <p className={Styles.slidhead2}>{prod.dis}</p>
                                       <p className={Styles.sl1by}>By <a href="#" className={ Styles.by }>{prod.by}</a> </p>
                                     </div>
                                  </div>
                                </SwiperSlide>
                              })
                            }
                            </Swiper>
                  </div>
           </div>

           {/* part 8 of the page with an img*/}
           <div>
              <img src="https://cdn1.tripoto.com/media/filter/nxxl/img/1339961/Image/1640936875_guide.jpg" alt="" className={Styles.singleImg}/>
           </div>

           {/* part 9 of the page with slider */}
            <div className={Styles.marginTop1}>
              <h1 className={Styles.head2}>Art & Culture</h1>
              <p className={Styles.topdis}>Desert activities, boutique hotels, a thriving art scene, culture centres – explore Dubai’s best gems before you go.</p>
                  <div style={{ marginBottom:'100px' }}>
                            <Swiper slidesPerView={4}
                                spaceBetween={30}
                                slidesPerGroup={4}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                pagination={{
                                clickable: false
                                }}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                            {
                              data7.map((prods)=>{
                                return <SwiperSlide key={prods.id}>
                                  <div className={Styles.slid2}>
                                    <img src={prods.img} alt="" className={Styles.slider2img} style={{ height:"200px",width:"230px" }}/>
                                    <div className={Styles.innerBox}>
                                       <p className={Styles.slidhead2}>{prods.dis}</p>
                                       <p className={Styles.sl1by}>{prods.by}<a href="#" className={Styles.by}>{prods.bydis}</a> </p>
                                     </div>
                                  </div>
                                </SwiperSlide>
                              })
                            }
                            </Swiper>
                  </div>
             </div>
            {/*Part 10 of the page */}
            <div className={Styles.marginTop}>
              <h1 className={Styles.head2}>Culinary Experiences You Can’t Miss in Dubai</h1>
              <p className={Styles.topdis}>Find out what it’s street vendors and Michelin-starred chefs are up to and carve your own food trail in Dubai!</p>
                  <div style={{ marginBottom:'80px' }}>
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
                            {
                              data8.map((prods)=>{
                                return <SwiperSlide key={prods.id}>
                                  <div className={Styles.slid2}>
                                    <img src={prods.img} alt="" className={Styles.slider2img} style={{ height:"230px",width:"105%" }}/>
                                    <div className={Styles.innerBox}>
                                       <p className={Styles.slidhead2}>{prods.dis}</p>
                                       <p className={Styles.sl1by}>{prods.by}<a href="#" className={Styles.by}>{prods.bydis}</a> </p>
                                     </div>
                                  </div>
                                </SwiperSlide>
                              })
                            }
                            </Swiper>
                  </div>
             </div>
             {/*final part of the webpage  */}
             <div className={Styles.marginTop}>
              <h1 className={Styles.head2}>Book A Dubai Package For A Special Trip</h1>
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
                            {
                              data9.map((prods)=>{
                                return <SwiperSlide key={prods.id}>
                                  <div className={Styles.slid2}>
                                    <img src={prods.img} alt="" className={Styles.slider2img} style={{ height:"230px",width:"105%" }}/>
                                    <div className={Styles.innerBox1}>
                                      <p className={ Styles.pack }>PACKAGE</p>
                                       <p className={Styles.slidhead2}>{prods.dis}</p>
                                       <div className={Styles.detailbox}>
                                          <div className={Styles.innerBox2}>
                                            <IoLocationSharp className={Styles.loca}/>
                                            <p className={Styles.dubai}>Dubai</p>
                                          </div>
                                          <button className={Styles.day}>{prods.days}</button>
                                       </div>

                                       <div className={Styles.detailbox}>
                                        <p  className={Styles.amountsty}>₹ {prods.amount}<span className={Styles.label}>/ Person</span></p>
                                        <button className={Styles.amountDet}>get quoters</button>
                                       </div>

                                       <hr style={{color:"grey"}}/>
                                       <div className={Styles.lastbox}>
                                        <img src={prods.com} alt="" style={{ height:"20px",width:"20px",borderRadius:"50%" }}/>
                                        <p className={Styles.company}>{prods.comName}</p>
                                       </div>
                                     </div>
                                  </div>
                                </SwiperSlide>
                              })
                            }
                            </Swiper>
                  </div>
             </div>

        </div>
    </div>
  )
}

export default VisitDubai