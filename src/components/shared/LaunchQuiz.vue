<template>
  <section class="bg-quizLaunchBg py-7 lg:py-[50px] px-4 overflow-hidden">
    <div
      class="max-w-[1176px] mx-auto flex flex-col md:flex-row justify-between md:items-center gap-[99px]"
    >
      <div
        class="flex flex-col gap-4 lg:gap-[48px]"
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div class="flex flex-col gap-3 lg:gap-[18px]">
          <h2
            class="text-white font-inter font-bold text-xl md:text-[30px] lg:text-29xl leading-[140%] lg:leading-[52.8px]"
          >
            Launch Your Quiz Adventure!
          </h2>
          <p
            class="text-primary-color-200 text-sm md:text-xl font-inter leading-[18.2px] md:leading-7"
          >
            Elevate Your Knowledge: Take the Quiz Now and Unleash the Power of
            <br class="hidden lg:block" />
            Learning!
          </p>
        </div>
        <div>
          <button
            class="btn-primary-main h-full capitalize text-base md:text-lg"
          >
            Start Quizzing Now!
          </button>
        </div>
      </div>
      <div
        class="shrink-0 hidden md:block"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <img :src="quizframe" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import { quizframe } from "../../assets/getAssets";
export default {
  data() {
    return {
      quizframe,
    };
  },
};
</script>

<style scoped></style>
