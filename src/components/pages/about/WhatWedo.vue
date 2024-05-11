<template>
  <div
  data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    class="py-6 md:py-8 xl:py-[90px] px-4 md:px-6 xl:px-[64px] grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-6 lg:gap-20"
    id="WhatWeDo"
  >
    <div class="w-full">
      <img
        :src="spinnerthree"
        alt=""
        class=" max-w-[190px] mx-auto sm:max-w-[350px] lg:max-w-full"
      />
    </div>
    <div
      class="s flex flex-col gap-2 lg:gap-4 text-center md:text-left max-w-[448px] mx-auto lg:max-w-full"
    >
      <h4
        class="text-sm md:text-base lg:text-[28px] text-black-low-emp leading-[125%] md:leading-8"
      >
        What we do
      </h4>
      <h2
        class="text-2xl lg:text-[48px] text-black-low-emp font-bold xl:leading-[110%]"
      >
        B2B Quiz service provider
      </h2>
      <p
        class="text-xs sm:text-base text-black-low-emp leading-[22px] font-normal"
      >
        nvolve a range of tasks and processes aimed at delivering high-quality
        quiz experiences tailored to the needs of business clients. Design and
        develop customized quizzes tailored to the client's goals, target
        audience, and branding guidelines. This may include creating questions,
        designing layouts, and incorporating multimedia elements.
      </p>
    </div>
  </div>
</template>

<script>
import { spinnerthree } from "../../../assets/getAssets";
export default {
  data() {
    return {
      spinnerthree,
    };
  },
};
</script>

<style scoped></style>
