import React from 'react';
import './HomePageDetails'

import DetailsRigthSide from '../DetailsRigthSide/DetailsRigthSide';

const HomePageDetails = () => {
  return (
    <div>
    <div className="main_DetailsPage">
      <div className="details_left">
          <div className="flexClass">
              <img src="https://cdn1.tripoto.com/assets/2.9/img/logo/mini-logo.png"  className="logo_icon"/>
               <p className="textP">India Travel Guide  {">"} </p>
               <p className="textP">India Trips {">"}</p>
               <p className="textP">Experience The Best Of Monsoon With These Trendy Gostops Stays Under Rs 2,000</p>
          </div>
          <div className="mainContent">
            <div>
              <p style={{textAlign:'left', marginLeft:'1.5rem',fontSize:'1.8rem',fontWeight:'bold',width:'92%'}}>Experience the Best of Monsoon With These Trendy goSTOPS Stays Under Rs 2,000</p>
            </div>
            <div className="Small_ImageDiv">
              <div className="flexClass">
                <img src="https://static2.tripoto.com/media/filter/mss/img/533625/UserPhoto/1599576177_69586176_10157567830354521_3906833201699487744_n.jpg" className="smallImage_div"/>
                <p style={{marginLeft:'1rem',marginTop:'1.2rem'}}>By lla Reddy</p>
              </div>
              <div className="flexClass" style={{marginRight:'3rem'}}>
                <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='36' height='32'%3e %3cpath fill='%23FF855C' fill-rule='evenodd' d='M25.485 0c5.584 0 10.1278 4.5407 10.1278 10.1285 0 2.6548-1.0192 5.1654-2.8727 7.0665L20.0685 30.992C19.4702 31.6401 18.669 32 17.8053 32c-.8608 0-1.665-.3568-2.2632-1.0079L2.8644 17.189C1.017 15.2886 0 12.7802 0 10.1285 0 4.5437 4.5415 0 10.1255 0c2.9738 0 5.7644 1.2968 7.6798 3.5215C19.7177 1.2968 22.5029 0 25.485 0zM9.6998 2.937c-3.7014 0-6.7101 3.011-6.7101 6.7125 0 .5604.4572 1.0177 1.0177 1.0177.5572 0 1.0144-.4573 1.0144-1.0177 0-2.5797 2.0975-4.678 4.678-4.678.5604 0 1.0168-.4564 1.0168-1.0177 0-.5604-.4564-1.0168-1.0168-1.0168z'/%3e %3c/svg%3e" alt="logo"  className="heart_logo"/>
                <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70'%3e %3cg fill='%233b5998'%3e %3cpath d='M44.8 69L59 69C64.5 69 69 64.5 69 59L69 11C69 5.5 64.5 1 59 1L11 1 11 1C5.5 1 1 5.5 1 11L1 11 1 59C1 64.5 5.5 69 11 69L36.3 69 36.3 48.5 29.2 48.5 29.2 40.3 36.3 40.3 36.3 34.2C36.3 27.2 40.6 23.3 46.9 23.3 49.9 23.3 52.5 23.6 53.2 23.7L53.2 31 48.9 31C45.5 31 44.8 32.7 44.8 35L44.8 40.3 53 40.3 51.9 48.5 44.8 48.5 44.8 69Z'/%3e %3c/g%3e %3c/svg%3e" alt=""  width="30" height="30" style={{marginRight:'0.5rem',marginTop:'13px'}}/>
                <div style={{borderLeft:'1px solid black', backgroundColor:'black',marginLeft:'0.5rem', height:'30px',marginTop:'1.2rem'}}></div>
                <div style={{marginTop:'0.5rem', marginLeft:'1rem'}}>
                <div >
                    <p>490 </p>
                    <p style={{marginTop:'-0.2rem'}}>Views</p>
                </div>
                </div>
              </div>
            </div>
            <div className="ArticleClass">
              <div className="Article_first">
              <img src="https://static2.tripoto.com/media/filter/nl/img/533625/Image/1659596283_cover.jpeg" width="85%" alt="" />
              <p className="articleText">The monsoons are here in full force and if you thought you had to spend it stationed indoors with a cup of coffee, you’re mistaken. Travel doesn’t have to take a backseat this August because the monsoon season is one of the best times to explore nature in all its glory! Lush green forests, beautiful waterfalls, natural plunge pools, abundant rivers, misty mountains, and quiet beaches - you can have it all!
              <br /> <br />
              What’s more, with goSTOPS properties located in some of the most breathtaking monsoon destinations in India, you don’t need to burn a hole in your pocket or think twice about packing your bags and heading out for your next adventure. Here’s everything you need to know about enjoying the magic of the monsoon on a budget!
            </p>
            </div>
            <div className="Article_Sec">
              <p style={{textAlign:'left',marginTop:'1.5rem',marginBottom:'2rem',fontWeight:'bold', fontSize:'24px'}}>MUNNAR</p>
              <img src="https://cdn1.tripoto.com/media/filter/nl/img/533625/Image/1659596310_munnar.jpeg" width="90%" height="400px"
              style={{width:"98%"}}
              alt="munar" />
              <p className="articleText">
              Escape to the sprawling tea gardens of Munnar this monsoon to experience the serene South Indian hill town in all its beauty. Complete with lush green valleys, magnificent waterfalls, and picturesque lakes that will leave you spell-bound, it’s the ideal nature getaway to bask in the morning mist with a cup of freshly-brewed chai. Walk through endless tea plantations, learn how tea is plucked and manufactured, taste different kinds of brews, and enjoy the gorgeous weather of Kerala’s Western Ghats.
              </p>
            </div>
            <div className="Article_Sec">
              <img src="https://cdn1.tripoto.com/media/filter/nl/img/533625/Image/1659596092_munnar.jpeg" 
                style={{width:"98%"}}
              width="90%" height="400px" alt="" />
              <p className="articleText">
              goSTOPS Munnar is located in Anachal, merely 30 minutes away from the main town of Munnar, which stands at 6000 ft in the Idukki region of Kerala. Away from the crowds and yet, equipped with all amenities, the property stands amidst tropical plantations and close to all the main attractions: the Mattupetty dam, Pothamedu viewpoint, and the Top Station viewpoint - the highest point in Munnar. Learn about the diverse flora and fauna during your morning and evening walks, take a Shikara ride on Kundala Lake, and soak in views of the lush green foliage around you.
              </p>
              <p className="articleText">
               <b> How to get there: </b> Fly to Cochin International Airport (110 km away by car) or Madurai International Airport (140 km away by car). Alternatively, you can take a train to Ernakulam or Madurai; Aluva is the nearest stop to Munnar (110km away). Munnar is also well-connected by bus from several locations in Kerala and Tamil Nadu.
              </p>
              <p className="articleText">
                <b>Cost: </b> Dorms starting at Rs 399 per night and private rooms starting at Rs 1,299 per night.
              </p>
              <p className="articleText">
                <b>More information</b> <label className="blueLink">here</label>
              </p>
            </div>
            <div className="Article_Sec">
              <p className="Heading_blog">GOA</p>
              <img src="https://cdn1.tripoto.com/media/filter/nl/img/533625/Image/1659596436_goa.jpeg"
                style={{width:"98%"}}
              width="90%" height="400px" alt="munar" />
              <p className="articleText">
              A true Goa-lover knows that monsoons are a world-apart in the coastal state. Empty, drenched beaches, pristine greens, swelling waterfalls, and off-season pricing – what’s not to love?
              <br/><br/>
              Explore Goa’s art and culture scene, the heritage buildings in the South, or go find your own private plunge pool. There’s more to Goa than its beaches and this is best explored in the rainy season! Fort Aguada, Dudhsagar Falls, and Chapora Fort are just some of the many options.
              <br/> <br/>
              The best part? goSTOPS has not one but TWO properties here to choose from in North Goa — one at Baga and the other at Calangute.
              </p>
            </div>
            <div className="Article_Sec">
              <img src="https://cdn1.tripoto.com/media/filter/nl/img/533625/Image/1659596664_screenshot_2022_08_04_at_12_34_13_pm.png"
                style={{width:"98%"}}
              width="90%" height="400px" alt="munar" />
              <p className="articleText">
              Both are great locations for beach-hopping, nightlife, water sports, and restaurants, and have all the amenities you would need in a hostel!
              </p>
            </div>
            <div className="Article_Sec">
              <img src="https://cdn1.tripoto.com/media/filter/nl/img/533625/Image/1659596172_screenshot_2022_08_04_at_12_26_00_pm.png"
                style={{width:"98%"}}
              width="90%" height="400px" alt="munar" />
              <p className="articleText">
              <b>How to get there: </b> Fly to Goa International Airport and take a taxi to the property.
                <br/><br/>
              <b>Cost: </b> Dorm charges are Rs 449 per night. Private rooms are priced at Rs 1,599 per night.
              <br/><br/>
               <b>More information </b> <label className="blueLink">here</label>.
              </p>
            </div>
            </div>
        </div>
      </div>
      <div className="details_right">
        <DetailsRigthSide />
      </div>
    </div>
    <div className="Details_footer">
    {/* <Footer /> */}
   </div>
   </div>
  )
}

export default HomePageDetails