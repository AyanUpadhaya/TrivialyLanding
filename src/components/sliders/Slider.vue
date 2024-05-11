<template>
  <swiper
    :slidesPerView="'3'"
    :spaceBetween="40"
    :pagination="{
      clickable: true,
    }"
    :centerSlide="true"
    :breakpoints="{
      [0]: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      [520]: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      [950]: {
        slidesPerView: 3,
      },
    }"
    :autoplay="true"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
    :loop="true"
  >
    <swiper-slide v-for="(card, index) in reviews" :key="index">
      <div
        class="flex flex-col gap-[17px] md:gap-6 h-full bg-dark-grayish-900 border border-primary-color-500  p-[29.78px] shadow-cardShadow sm:p-10 rounded-3xl w-full select-none"
      >
        <div class="self-stretch flex flex-col gap-[11px] md:gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-11 h-11 lg:w-[60px] lg:h-[60px]"
            viewBox="0 0 61 60"
            fill="none"
          >
            <g clip-path="url(#clip0_1731_2672)">
              <path
                d="M40.5 50H50.5C53.1522 50 55.6957 48.9464 57.5711 47.0711C59.4464 45.1957 60.5 42.6522 60.5 40V30C60.5 28.6739 59.9732 27.4021 59.0355 26.4645C58.0979 25.5268 56.8261 25 55.5 25H43C43.004 21.686 44.3222 18.5089 46.6656 16.1655C49.0089 13.8222 52.186 12.504 55.5 12.5C56.4946 12.5 57.4484 12.1049 58.1517 11.4016C58.8549 10.6984 59.25 9.74456 59.25 8.75C59.25 7.75544 58.8549 6.80161 58.1517 6.09835C57.4484 5.39509 56.4946 5 55.5 5C50.1975 5.00595 45.1139 7.11501 41.3644 10.8644C37.615 14.6139 35.506 19.6975 35.5 25V45C35.5 46.3261 36.0268 47.5979 36.9645 48.5355C37.9022 49.4732 39.1739 50 40.5 50Z"
                fill="#CAD1FB"
              />
              <path
                d="M5.5 50H15.5C18.1522 50 20.6957 48.9464 22.5711 47.0711C24.4464 45.1957 25.5 42.6522 25.5 40V30C25.5 28.6739 24.9732 27.4021 24.0355 26.4645C23.0979 25.5268 21.8261 25 20.5 25H8C8.00397 21.686 9.3222 18.5089 11.6655 16.1655C14.0089 13.8222 17.186 12.504 20.5 12.5C21.4946 12.5 22.4484 12.1049 23.1517 11.4016C23.8549 10.6984 24.25 9.74456 24.25 8.75C24.25 7.75544 23.8549 6.80161 23.1517 6.09835C22.4484 5.39509 21.4946 5 20.5 5C15.1975 5.00595 10.1139 7.11501 6.36444 10.8644C2.61501 14.6139 0.505959 19.6975 0.500002 25V45C0.500002 46.3261 1.02679 47.5979 1.96447 48.5355C2.90215 49.4732 4.17392 50 5.5 50Z"
                fill="#CAD1FB"
              />
            </g>
            <defs>
              <clipPath id="clip0_1731_2672">
                <rect
                  width="60"
                  height="60"
                  fill="white"
                  transform="matrix(-1 0 0 -1 60.5 60)"
                />
              </clipPath>
            </defs>
          </svg>
          <div class="w-full">
            <div class="flex items-end"></div>
            <p
              class="text-xs md:text-base font-inter text-white leading-[22px]"
            >
              {{ truncateReview(card?.review, 120) }}
            </p>
          </div>
        </div>

        <div class="flex gap-[18px] mt-auto shrink-0">
          <div
            class="w-9 h-9 lg:w-[50px] lg:h-[50px] rounded-full bg-[#E9E8FF] shrink-0"
          >
            <img
              :src="card?.img"
              alt=""
              class="w-9 h-9 lg:w-[50px] lg:h-[50px] rounded-full object-cover"
            />
          </div>
          <div class="flex flex-col gap-[2px] lg:gap-1 w-full">
            <p
              class="text-primary-color-500 font-inter text-sm leading-[19.6px] lg:text-xl lg:leading-7 uppercase lg:capitalize"
            >
              {{ card?.reviewName }}
            </p>
            <p
              class=" font-inter text-xs lg:text-sm leading-[15.6px] lg:leading-[18px] w-full whitespace-nowrap text-ellipsis text-white"
            >
              {{ card?.reviewPosition }}
            </p>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  props: {
    reviews: Array,
  },
  methods: {
    truncateReview(review, limit) {
      if (review.length > limit) {
        return review.substring(0, limit) + "...";
      } else {
        return review;
      }
    },
  },
};
</script>
<style>

:root{
  --pagination-bullet-color:#fff
}

.swiper {
  width: 100%;
  padding-bottom: 80px;
}

.swiper-wrapper {
  height: 320px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.swiper-pagination-bullet {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--pagination-bullet-color) !important;
  margin: 0 5px;
  cursor: pointer;
  opacity: 1;
  transition: all 0.3s;
}
.swiper-pagination-bullet-active {
  width: 40px;
  height: 18px;
  border-radius: 100px;
  background: #706aea !important;
}

@media screen and (max-width: 576px) {
  .swiper-wrapper {
    height: 237px;
  }
  .swiper {
    width: 100%;
    padding-bottom: 60px;
  }
}
</style>
