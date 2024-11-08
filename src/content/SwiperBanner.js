import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function SwiperBanner({ datakey }) {
  React.useEffect(() => {
    console.log(datakey);
  }, [datakey]);

  return (
    <Swiper
      modules={[Autoplay]}           // Autoplay 모듈 추가
      spaceBetween={50}
      slidesPerView={1.8}            // 기본 슬라이드 수 설정
      centeredSlides={true}          // 센터 모드 활성화
      autoplay={{
        delay: 3000,                 // 3초마다 자동 슬라이드
        disableOnInteraction: false, // 유저 상호작용 후에도 자동 롤링 유지
      }}
      breakpoints={{
        991: {
          slidesPerView: 1.5,        // 너비 991px 이하일 때 1.5개 슬라이드 표시
        },
        768: {
          slidesPerView: 1.2,        // 너비 768px 이하일 때 1.2개 슬라이드 표시
        },
      }}
    >
      {datakey.map((v, i) => (
        <SwiperSlide key={i}>
          <img src={v.src} alt={v.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
