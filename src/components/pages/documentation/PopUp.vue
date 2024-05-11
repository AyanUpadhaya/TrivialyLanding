<template>
  <div
    class="w-full relative flex flex-col items-center justify-start gap-4 lg:gap-[60px_0px] text-left text-21xl text-color-primary-color-900 font-inter pb-6 lg:pb-0"
    id="popup"
  >
    <!-- title  -->

    <div
      class="self-stretch flex flex-col items-start justify-center gap-2 lg:gap-[12px_0px]"
    >
      <div
        class="self-stretch relative tracking-[-0.04em] leading-[120%] lg:leading-[110%] text-[32px] lg:text-[40px] text-color-primary-color-900 font-bold py-2 lg:py-0"
      >
        Popup
      </div>
      <div
        class="self-stretch relative text-sm md:text-base lg:text-lg leading-[130%] text-color-text-colors-600-black-low-emp"
      >
        Step-by-step instructions on how to create a Popup campaign!
      </div>
    </div>

    <!-- body -->
    <div
      class="self-stretch flex flex-col items-start justify-start gap-4 lg:gap-8 text-xl text-color-text-colors-600-black-low-emp"
    >
      <!-- form one -->
      <div class="flex flex-col gap-3 lg:gap-8">
        <img
          class="relative rounded-2xl object-cover"
          alt=""
          :src="popupFrameOne"
        />
        <div class="self-stretch relative leading-[140%]">
          <ul
            class="m-0 text-inherit pl-[27px] list-disc font-normal flex flex-col gap-3 lg:gap-8"
          >
            <li class="mb-0">
              <p
                class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
              >
                The <span class="font-semibold">Create Campaign</span> is the
                basic campaign-building tool that is available for all users,
                both free and pro. It allows you to create the entire campaign
                right from this page, making the process hassle-free.
              </p>
            </li>
            <li
              class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
            >
              <span
                >To reach the create campaign builder, log in to the WordPress backend of your website, and then navigate to
              </span>
              <b class="font-inter">Trivialy &gt; Popup </b>
              <span class="font-inter"> to start adding a new campaign. </span>
            </li>

            <li class="mb-0">
              <p
                class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
              >
                <span class="font-inter font-bold">Pop up Settings :</span>
                Extending the customization options, administrators in the popup  can customize the popup. They can set Title, description and image of the popup, as well as can set the campaign time and popup timing. Here the administrators can configure the popup based on what they want on the popup a button, a coupon code or both.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { popupFrameOne } from "../../../assets/getAssets";

export default {
  data() {
    return {
      popupFrameOne,
    };
  },
};
</script>
