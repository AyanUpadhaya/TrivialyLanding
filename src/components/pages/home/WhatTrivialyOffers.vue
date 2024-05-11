<template>
  <section class="bg-darkslateblue px-4">
    <div
      class="pb-[60px] lg:pb-[110px]"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div
        class="max-w-[1176px] mx-auto text-center flex flex-col gap-[18px] pb-7 lg:pb-[110px]"
      >
        <h2
          class="text-white-high-emp font-inter text-[32px] lg:text-45xl font-bold leading-[36px] lg:leading-[70.4px]"
        >
          What Trivialy Offers
        </h2>
        <p
          class="text-white-medium-emp font-inter text-sm lg:text-xl font-normal leading-[18.2px] lg:leading-7 max-w-[320px] md:max-w-full mx-auto"
        >
          Embark on a Journey of Infinite Learning Possibilities with Our Vast
          Spectrum of Quiz Variety, Where Curiosity Thrives, and Learning Knows
          No Boundaries!
        </p>
      </div>
      <!-- card section -->
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        class="max-w-[1305px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:gap-x-12 gap-y-4 lg:gap-y-[60px]"
      >
        <!-- card 1 -->
        <div
          class="bg-dark-grayish-900 p-4 lg:p-8 rounded-2xl lg:rounded-3xl shadow-cardShadow flex flex-col  w-full"
        >
          <!-- top text -->

          <div class="flex flex-col gap-1">
            <div class="flex flex-col gap-2 lg:gap-[18px]">
              <h3
                class="text-white font-bold font-inter text-xl lg:text-21xl leading-7 lg:leading-[44px]"
              >
                Text Quiz
              </h3>
              <p
                class="font-inter text-white text-sm md:text-base lg:text-lg leading-[18px] lg:leading-[23px]"
              >
                Transforming Static Content into Dynamic Learning Experiences.
              </p>
            </div>
            <div class="p-4">
              <button class="flex items-center gap-2">
                <span
                  class="font-inter text-base text-color-primary-color-300 font-semibold text-primary-color-300"
                  >See Details</span
                >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.34017 10.8342H13.6485L9.58184 14.9009C9.25684 15.2259 9.25684 15.7592 9.58184 16.0842C9.90684 16.4092 10.4318 16.4092 10.7568 16.0842L16.2485 10.5926C16.5735 10.2676 16.5735 9.74258 16.2485 9.41758L10.7652 3.91758C10.4402 3.59258 9.91517 3.59258 9.59017 3.91758C9.26517 4.24258 9.26517 4.76758 9.59017 5.09258L13.6485 9.16758H4.34017C3.88184 9.16758 3.50684 9.54258 3.50684 10.0009C3.50684 10.4592 3.88184 10.8342 4.34017 10.8342Z"
                      fill="#A9B2F8"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <!-- image -->
          <div class="w-full">
            <img
              :src="textquiz"
              alt=""
              class="lg:hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        <!-- card 2 -->
        <div
          class="bg-dark-grayish-900 p-4 lg:p-8 rounded-2xl lg:rounded-3xl shadow-cardShadow flex flex-col  w-full"
        >
          <!-- top text -->

          <div class="flex flex-col gap-1">
            <div class="flex flex-col gap-2 lg:gap-[18px]">
              <h3
                class="text-white font-bold font-inter text-xl lg:text-21xl leading-7 lg:leading-[44px]"
              >
                Image Quiz
              </h3>
              <p
                class="font-inter text-white text-sm md:text-base lg:text-lg leading-[18px] lg:leading-[23px]"
              >
                Interactive Learning Through Visual Engagement.
              </p>
            </div>
            <div class="p-4">
              <button class="flex items-center gap-2">
                <span
                  class="font-inter text-base text-color-primary-color-300 font-semibold text-primary-color-300"
                  >See Details</span
                >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.34017 10.8342H13.6485L9.58184 14.9009C9.25684 15.2259 9.25684 15.7592 9.58184 16.0842C9.90684 16.4092 10.4318 16.4092 10.7568 16.0842L16.2485 10.5926C16.5735 10.2676 16.5735 9.74258 16.2485 9.41758L10.7652 3.91758C10.4402 3.59258 9.91517 3.59258 9.59017 3.91758C9.26517 4.24258 9.26517 4.76758 9.59017 5.09258L13.6485 9.16758H4.34017C3.88184 9.16758 3.50684 9.54258 3.50684 10.0009C3.50684 10.4592 3.88184 10.8342 4.34017 10.8342Z"
                      fill="#A9B2F8"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <!-- image -->
          <div class="w-full">
            <img
              :src="imagequiz"
              alt=""
              class="lg:hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
        <!-- card 3 -->
        <div
          class="bg-dark-grayish-900 p-4 lg:p-8 rounded-2xl lg:rounded-3xl shadow-cardShadow flex flex-col  w-full"
        >
          <!-- top text -->

          <div class="flex flex-col gap-1">
            <div class="flex flex-col gap-2 lg:gap-[18px]">
              <h3
                class="text-white font-bold font-inter text-xl lg:text-21xl leading-7 lg:leading-[44px]"
              >
                Spin n Win
              </h3>
              <p
                class="font-inter text-white text-sm md:text-base lg:text-lg leading-[18px] lg:leading-[23px]"
              >
                Elevate User Engagement with Interactive and Exciting Fun
              </p>
            </div>
            <div class="p-4">
              <button class="flex items-center gap-2">
                <span
                  class="font-inter text-base text-color-primary-color-300 font-semibold text-primary-color-300"
                  >See Details</span
                >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.34017 10.8342H13.6485L9.58184 14.9009C9.25684 15.2259 9.25684 15.7592 9.58184 16.0842C9.90684 16.4092 10.4318 16.4092 10.7568 16.0842L16.2485 10.5926C16.5735 10.2676 16.5735 9.74258 16.2485 9.41758L10.7652 3.91758C10.4402 3.59258 9.91517 3.59258 9.59017 3.91758C9.26517 4.24258 9.26517 4.76758 9.59017 5.09258L13.6485 9.16758H4.34017C3.88184 9.16758 3.50684 9.54258 3.50684 10.0009C3.50684 10.4592 3.88184 10.8342 4.34017 10.8342Z"
                      fill="#A9B2F8"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <!-- image -->
          <div class="w-full">
            <img
              :src="spinnwincard"
              alt=""
              class="lg:hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        <!-- card 4 -->
        <div
          class="bg-dark-grayish-900 p-4 lg:p-8 rounded-2xl lg:rounded-3xl shadow-cardShadow flex flex-col  w-full "
        >
          <!-- top text -->

          <div class="flex flex-col gap-1 ">
            <div class="flex flex-col gap-2 lg:gap-[18px]">
              <h3
                class="text-white font-bold font-inter text-xl lg:text-21xl leading-7 lg:leading-[44px]"
              >
                Scratch n Win
              </h3>
              <p
                class="font-inter text-white text-sm md:text-base lg:text-lg leading-[18px] lg:leading-[23px]"
              >
                User will get exciting PROMO on scratching the card
              </p>
            </div>
            <div class="p-4">
              <button class="flex items-center gap-2">
                <span
                  class="font-inter text-base text-color-primary-color-300 font-semibold text-primary-color-300"
                  >See Details</span
                >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.34017 10.8342H13.6485L9.58184 14.9009C9.25684 15.2259 9.25684 15.7592 9.58184 16.0842C9.90684 16.4092 10.4318 16.4092 10.7568 16.0842L16.2485 10.5926C16.5735 10.2676 16.5735 9.74258 16.2485 9.41758L10.7652 3.91758C10.4402 3.59258 9.91517 3.59258 9.59017 3.91758C9.26517 4.24258 9.26517 4.76758 9.59017 5.09258L13.6485 9.16758H4.34017C3.88184 9.16758 3.50684 9.54258 3.50684 10.0009C3.50684 10.4592 3.88184 10.8342 4.34017 10.8342Z"
                      fill="#A9B2F8"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <!-- image -->
          <div class="w-full mt-auto">
            <img
              :src="scratchnwincard"
              alt=""
              class="lg:hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <!-- big card -->
    </div>
  </section>
</template>

<script>
import {
  textquiz,
  imagequiz,
  spinwin,
  spinnwincard,
  scratchnwincard,
} from "../../../assets/getAssets";
import BigCard from "../../cards/BigCard.vue";
export default {
  data() {
    return {
      textquiz,
      imagequiz,
      spinwin,
      spinnwincard,
      scratchnwincard,
    };
  },
  components: { BigCard },
};
</script>

<style scoped></style>
