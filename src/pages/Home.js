import React from 'react'
import SwiperBanner from '../content/SwiperBanner'
import Boradlist from '../content/Boradlist'

import allData from '../data/allData.json';

export default function Home() {
  return (
    <div>
      <SwiperBanner datakey={ allData.bannerData }></SwiperBanner>
      <Boradlist datakey={ allData.mainPagetitle }></Boradlist>
    </div>
  )
}
