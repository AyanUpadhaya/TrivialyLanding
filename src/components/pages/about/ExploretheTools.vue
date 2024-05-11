<template>
  <div
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500"
    class="w-full bg-color-primary-color-100 rounded-[20px] lg:rounded-[40px] py-6 lg:py-[90px] px-4 lg:px-[64px] grid grid-cols-1 xl:grid-cols-2 items-center gap-4 md:gap-8 lg:gap-[80px]"
    id="Ourfeatures"
  >
    <div class="flex flex-col gap-2 lg:gap-4 text-center xl:text-left">
      <h4
        class="text=sm lg:text-[28px] text-black-low-emp leading-[125%] lg:leading-[115%]"
      >
        Our features
      </h4>
      <h2
        class="text-[24px] lg:text-[48px] text-black-low-emp font-bold leading-[120%] lg:leading-[110%]"
      >
        Explore the Tools That Set Us Apart
      </h2>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-6 py-5 px-4 md:px-0 md:py-0"
    >
      <!-- text quiz 1 -->
      <div
        class="bg-white-high-emp p-4 rounded-2xl shadow-exploreCardsShadow flex flex-col gap-4 w-full lg:hover:scale-110 transition-transform duration-200"
      >
        <!-- top -->
        <div class="flex flex-col gap-2">
          <h3
            class="text-primary-color-900 font-bold font-inter text-lg lg:text-xl leading-[18px] lg:leading-7"
          >
            Text Quiz
          </h3>
          <p
            class="font-inter text-black-low-emp text-xs md:text-sm leading-[15px] lg:leading-[18px]"
          >
            Transforming Static Content into Dynamic Learning Experiences.
          </p>
        </div>
        <!-- bottom -->
        <div class="w-full">
          <img :src="textquiz" alt="" />
        </div>
      </div>

      <!-- Drag & Match -->
      <div
        class="bg-white-high-emp p-4 rounded-2xl flex flex-col gap-4 w-full shadow-exploreCardsShadow lg:hover:scale-110 transition-transform duration-200"
      >
        <!-- top -->
        <div class="flex flex-col gap-2">
          <h3
            class="text-primary-color-900 font-bold font-inter text-lg lg:text-xl leading-[18px] lg:leading-7"
          >
            Drag & Match
          </h3>
          <p
            class="font-inter text-black-low-emp text-xs md:text-sm leading-[15px] lg:leading-[18px]"
          >
            Embark on the Ultimate Brain Teaser Adventure with Drag and Match
            Challenge.
          </p>
        </div>
        <!-- bottom -->
        <div class="w-full">
          <img :src="dragmatch" alt="" />
        </div>
      </div>

      <!-- Image Quiz-->
      <div
        class="bg-white-high-emp p-4 rounded-2xl shadow-exploreCardsShadow flex flex-col gap-4 w-full lg:hover:scale-110 transition-transform duration-200"
      >
        <!-- top -->
        <div class="flex flex-col gap-2">
          <h3
            class="text-primary-color-900 font-bold font-inter text-lg lg:text-xl leading-[18px] lg:leading-7"
          >
            Image Quiz
          </h3>
          <p
            class="font-inter text-black-low-emp text-xs md:text-sm leading-[15px] lg:leading-[18px]"
          >
            Interactive Learning Through Visual Engagement.
          </p>
        </div>
        <!-- bottom -->
        <div class="w-full">
          <img :src="textquiz" alt="" />
        </div>
      </div>

      <!-- Popup-->
      <div
        class="bg-white-high-emp p-4 rounded-2xl shadow-exploreCardsShadow flex flex-col gap-4 w-full lg:hover:scale-110 transition-transform duration-200"
      >
        <!-- top -->
        <div class="flex flex-col gap-2">
          <h3
            class="text-primary-color-900 font-bold font-inter text-lg lg:text-xl leading-[18px] lg:leading-7"
          >
            Popup
          </h3>
          <p
            class="font-inter text-black-low-emp text-xs md:text-sm leading-[15px] lg:leading-[18px]"
          >
            Elevate Engagement with Irresistible Pop-Up CTAs
          </p>
        </div>
        <!-- bottom -->
        <div class="w-full">
          <img :src="popup" alt="" class="w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  textquiz,
  imagequiz,
  spinwin,
  dragmatch,
  popup,
} from "../../../assets/getAssets";
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
};
</script>

<style scoped>
.hover\:scale-110:hover {
  transform: scale(1.1);
}
</style>
