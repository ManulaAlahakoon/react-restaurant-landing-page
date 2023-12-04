import React from 'react'
import Navbar from './Navbar'
import BannerBackground from '../Assets/home-banner-background.png'
import BannerImage from '../Assets/home-banner-image.png'
import {FiArrowRight} from 'react-icons/fi'

export default function Home() {
  return (
      <div className='home-container'>
        <Navbar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, laboriosam. Vitae harum nihil praesentium iure possimus, illum nemo quod eaque similique sed accusamus in fuga? Rerum dolores, modi ab a reiciendis ut nihil reprehenderit nisi ad quos et cumque esse dolorem assumenda, vero facere numquam commodi harum omnis optio illum?
          </p>
          <button className='secondary-button'>
            Order Now <FiArrowRight/>
          </button>
        </div>
        
        <div className="home-image-container">
          <img src={BannerImage} alt="" />
        </div>
        </div>
      </div>
  )
}
