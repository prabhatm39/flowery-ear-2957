import React from 'react';
import './HomePageDetails'
import {Container} from '@chakra-ui/react'
import DetailsRigthSide from './DetailsRigthSide';

const HomePageDetails = () => {
  return (
    <div className="main_DetailsPage">
      <div className="details_left">
          <div className="flexClass">
              <img src="https://cdn1.tripoto.com/assets/2.9/img/logo/mini-logo.png" width="20" height="20"/>
               <p className="textP">India Travel Guide  {">"} </p>
               <p className="textP">India Trips {">"}</p>
               <p className="textP">Experience The Best Of Monsoon With These Trendy Gostops Stays Under Rs 2,000</p>
          </div>
          <div className="mainContent">
            <div>
              <h1 style={{textAlign:'left'}}>Experience the Best of Monsoon With These Trendy goSTOPS Stays Under Rs 2,000</h1>
            </div>
            <div className="ArticleClass">
              <div className="Article_first">
              <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg" alt="" />
              <p className="articleText">The monsoons are here in full force and if you thought you had to spend it stationed indoors with a cup of coffee, you’re mistaken. Travel doesn’t have to take a backseat this August because the monsoon season is one of the best times to explore nature in all its glory! Lush green forests, beautiful waterfalls, natural plunge pools, abundant rivers, misty mountains, and quiet beaches - you can have it all!
              What’s more, with goSTOPS properties located in some of the most breathtaking monsoon destinations in India, you don’t need to burn a hole in your pocket or think twice about packing your bags and heading out for your next adventure. Here’s everything you need to know about enjoying the magic of the monsoon on a budget!
            </p>
            </div>
            <div className="Article_Sec">
              <h2>MUNNAR</h2>
              <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg" alt="" />
              <p>
              Escape to the sprawling tea gardens of Munnar this monsoon to experience the serene South Indian hill town in all its beauty. Complete with lush green valleys, magnificent waterfalls, and picturesque lakes that will leave you spell-bound, it’s the ideal nature getaway to bask in the morning mist with a cup of freshly-brewed chai. Walk through endless tea plantations, learn how tea is plucked and manufactured, taste different kinds of brews, and enjoy the gorgeous weather of Kerala’s Western Ghats.
              </p>
            </div>
            </div>
        </div>
      </div>
      <div className="details_right">
        <DetailsRigthSide />
      </div>
    </div>
  )
}

export default HomePageDetails
