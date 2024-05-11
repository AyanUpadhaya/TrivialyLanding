<template>
  <div
    class="relative w-full flex flex-col items-start justify-center gap-[60px_0px] text-left text-29xl text-color-text-colors-600-black-low-emp font-inter"
    id="install"
  >
    <div
      class="self-stretch flex flex-col items-start justify-center gap-[12px_0px]"
    >
      <b class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900"
        >Installation Guide</b
      >
      <div
        class="self-stretch relative text-lg leading-[130%] text-color-text-colors-600-black-low-emp"
      >
      Step-by-step instructions on how to get started and make everything good to go!
      </div>
    </div>
    <div
      class="w-[979px] flex flex-col items-start justify-start box-border text-xl"
    >
      <div
        class="self-stretch flex flex-col items-start justify-start gap-[24px_0px]"
      >
        <b
          class="self-stretch relative text-13xl tracking-[-0.02em] leading-[115%]"
          >Step 1: Download</b
        >
        <div class="self-stretch relative rounded-3xl h-[409px]">
          <img :src="install" alt="" />
        </div>
        <div class="self-stretch relative leading-[140%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took
        </div>
        <div
          class="self-stretch relative rounded-3xl h-[409px]"
        >
          <div class="self-stretch relative rounded-3xl h-[409px]">
            <img :src="install" alt="" />
          </div>
        </div>
        <div
          class="self-stretch flex flex-col items-start justify-start gap-[4px_0px]"
        >
          <div class="self-stretch relative leading-[140%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </div>
          <div class="self-stretch relative leading-[140%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </div>
        </div>
        <div
          class="self-stretch relative rounded-3xl h-[409px] "
        >
          <div class="self-stretch relative rounded-3xl h-[409px]">
            <img :src="install" alt="" />
          </div>
        </div>
        <div
          class="self-stretch flex flex-col items-start justify-start gap-[4px_0px]"
        >
          <div class="self-stretch relative leading-[140%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </div>
          <div class="self-stretch relative leading-[140%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </div>
          <div class="self-stretch relative leading-[140%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </div>
          <div class="self-stretch relative leading-[140%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </div>
          <div class="self-stretch relative leading-[140%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { install } from "../../../assets/getAssets";

export default {
  data() {
    return {
      install,
    };
  },

};
</script>
