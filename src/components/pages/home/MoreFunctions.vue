<template>
  <section class="bg-darkslateblue px-4">
    <div class="pb-[60px] lg:pb-[110px]">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        class="max-w-[1176px] mx-auto text-center flex flex-col gap-[18px] mb-7 lg:mb-[64px]"
      >
        <h2
          class="text-white-high-emp font-inter text-[32px] lg:text-45xl font-bold leading-[36.8px] lg:leading-[70.4px]"
        >
          More Functions
        </h2>
        <p
          class="text-white-medium-emp font-inter text-sm md:text-xl font-normal leading-[18.2px] md:leading-7 max-w-[320px] md:max-w-full mx-auto"
        >
          Elevate User Engagement with Interactive and Exciting Fun.
        </p>
      </div>
      <!-- card section -->
      <div
        class="max-w-[1305px] mx-auto flex flex-col sm:flex-row gap-4 lg:gap-12"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <!-- card 1 -->
        <div
          class="bg-dark-grayish-900 p-4 lg:py-10 lg:px-8 rounded-2xl lg:rounded-3xl shadow-cardShadow flex flex-col gap-4 lg:gap-11 w-full"
        >
          <!-- top -->
          <div class="flex flex-col gap-2 lg:gap-4">
            <h3
              class="text-white font-bold font-inter text-xl lg:text-21xl leading-7 lg:leading-[44px]"
            >
              Drag & Match
            </h3>
            <p
              class="font-inter text-white text-sm md:text-base lg:text-lg leading-[18px] lg:leading-[23px]"
            >
              Embark on the Ultimate Brain Teaser Adventure with Drag and Match
              Challenge.
            </p>
          </div>
          <!-- bottom -->
          <div class="w-full">
            <img
              :src="dragmatch"
              alt=""
              class="lg:hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        <!-- card 2 -->
        <div
          class="bg-dark-grayish-900 p-4 lg:py-10 lg:px-8 rounded-2xl lg:rounded-3xl shadow-cardShadow flex flex-col gap-4 justify-between lg:gap-11 w-full"
        >
          <!-- top -->
          <div class="flex flex-col gap-2 lg:gap-4">
            <h3
              class="text-white font-bold font-inter text-xl lg:text-21xl leading-7 lg:leading-[44px]"
            >
              Popup
            </h3>
            <p
              class="font-inter text-white text-sm md:text-base lg:text-lg leading-[18px] lg:leading-[23px]"
            >
              Elevate Engagement with Irresistible <br />
              Pop-Up CTAs
            </p>
          </div>

          <!-- bottom -->
          <div class="w-full">
            <img
              :src="popup"
              alt=""
              class="lg:hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  textquiz,
  imagequiz,
  spinwin,
  dragmatch,
  popup,
} from "../../../assets/getAssets";
import BigCard from "../../cards/BigCard.vue";
export default {
  data() {
    return {
      textquiz,
      imagequiz,
      spinwin,
      dragmatch,
      popup,
    };
  },
  components: { BigCard },
};
</script>

<style scoped></style>
