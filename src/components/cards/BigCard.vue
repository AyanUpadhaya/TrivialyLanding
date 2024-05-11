<template>
  <div class="max-w-[1305px] mx-auto">
    <!-- card 1 -->
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      class="bg-primary-color-100 p-4 lg:px-8 lg:pt-[92px] pb-4 lg:pb-[62px] rounded-2xl lg:rounded-3xl shadow-cardShadow w-full"
    >
      <div class="max-w-[1176px] mx-auto flex flex-col gap-5">
        <!-- top -->
        <div
          class="flex flex-col lg:items-center lg:text-center gap-2 lg:gap-4"
        >
          <h3
            class="text-primary-color-900 font-bold font-inter text-xl lg:text-21xl leading-7 lg:leading-[52px]"
          >
            {{ title }}
          </h3>
          <p
            class="font-inter text-black-low-emp text-sm md:text-base lg:text-lg leading-[18px] lg:leading-[28px]"
          >
            {{ description }}
          </p>
        </div>
        <!-- bottom -->
        <div class="w-full">
          <img :src="spinwin" alt="" class="w-full " />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { textquiz, imagequiz, spinwin } from "../../assets/getAssets";
export default {
  data() {
    return {
      textquiz,
      imagequiz,
      spinwin,
    };
  },
  props: {
    title: String,
    description: String,
  },
};
</script>

<style scoped></style>
