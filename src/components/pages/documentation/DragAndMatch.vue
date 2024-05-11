<template>
  <div
    class="w-full relative flex flex-col items-center justify-start gap-4 lg:gap-[60px_0px] text-left text-21xl text-color-primary-color-900 font-inter pb-6 lg:pb-0"
    id="dragandmatch"
  >
    <!-- title  -->

    <div
      class="self-stretch flex flex-col items-start justify-center gap-2 lg:gap-[12px_0px]"
    >
      <div
        class="self-stretch relative tracking-[-0.04em] leading-[120%] lg:leading-[110%] text-[32px] lg:text-[40px] text-color-primary-color-900 font-bold py-2 lg:py-0"
      >
        Drag n Match
      </div>
      <div
        class="self-stretch relative text-sm md:text-base lg:text-lg leading-[130%] text-color-text-colors-600-black-low-emp"
      >
        Step-by-step instructions on how to create a Drag n Match campaign!
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
          :src="dragmatchFrameOne"
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
                >To reach the create campaign builder, log in to the WordPress
                backend of your website, and then navigate to
              </span>
              <b class="font-inter">Trivialy &gt; Drag n Match </b>
              <span class="font-inter"> to start adding a new campaign. </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- form two -->
      <div class="flex flex-col gap-3 lg:gap-8">
        <img
          class="relative rounded-2xl object-cover"
          alt=""
          :src="dragmatchFrameTwo"
        />
        <div class="self-stretch relative leading-[140%]">
          <ul
            class="m-0 text-inherit pl-[27px] list-disc font-normal flex flex-col gap-3 lg:gap-8"
          >
            <li class="mb-0">
              <p
                class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
              >
                <span class="font-inter font-bold"
                  >Upload file :
                </span>
                In the Drag and Match Section, administrators can engage users
                by uploading images onto a board with dimensions of either 3 by
                3 or 4 by 4. The images are strategically placed in a random
                arrangement, resembling a jigsaw puzzle. This feature provides a
                visually stimulating and interactive experience, challenging
                users to match and arrange the elements correctly. The
                drag-and-match functionality adds an engaging twist to
                image-based activities, fostering user participation and
                enjoyment within the specified board dimensions.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <!-- form three -->
      <div class="flex flex-col gap-3 lg:gap-8">
        <img
          class="relative rounded-2xl object-cover"
          alt=""
          :src="dragmatchFrameThree"
        />
        <div class="self-stretch relative leading-[140%]">
          <ul
            class="m-0 text-inherit pl-[27px] list-disc font-normal flex flex-col gap-3 lg:gap-8"
          >
            <li class="mb-0">
              <p
                class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
              >
                <span class="font-inter font-bold"
                  >Drag n Match Settings :
                </span>
                Extending the customization options, administrators in the Drag and Match Section can not only upload images for users but also tailor the experience further. They can set the board size to either 3 by 3 or 4 by 4, define campaign duration for time-limited engagements, control popup timings for strategic interaction, and incorporate a "Shop Now" link for seamless integration with promotional activities. This feature-rich section offers administrators a comprehensive toolkit to create dynamic and engaging drag-and-match experiences, combining visual appeal with strategic campaign management.

              </p>
            </li>
            <li class="mb-0">
              <p
                class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
              >
                <span class="font-inter font-bold">Rewards :</span>
                In the Drag and Match Reward Section, administrators can motivate users by offering percentage-off rewards for successful completion. This adds a gamified element, providing users with incentives tied to discounts on any products.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  dragmatchFrameOne,
  dragmatchFrameTwo,
  dragmatchFrameThree,
} from "../../../assets/getAssets";

export default {
  data() {
    return {
      dragmatchFrameOne,
      dragmatchFrameTwo,
      dragmatchFrameThree,
    };
  },
};
</script>
