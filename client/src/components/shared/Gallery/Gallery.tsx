import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import './style.scss';
const GalleryControlIcon = require('../../../assets/icons/galleryControlIcon.svg').default;

const params = {
  slidesPerView: 'auto',
  spaceBetween: 30,
  effect: 'slide',
}

const Gallery = (props: any) => {
  const { photos } = props;
  const [swiper, updateSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <div className="gallery-swiper">
      <Swiper {...params} getSwiper={updateSwiper}>
        {photos.map((photo: any) => {
          return (
            <img key={photo} src={photo} />
          )
        })}
      </Swiper>
      <div className="gallery-swiper__control gallery-swiper__control--prev" onClick={goPrev}>
        <GalleryControlIcon />
      </div>
      <div className="gallery-swiper__control gallery-swiper__control--next" onClick={goNext}>
        <GalleryControlIcon />
      </div>
    </div>
  )
};

export default Gallery;
