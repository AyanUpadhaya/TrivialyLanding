<template>
  <div
    class="w-full relative flex flex-col items-center justify-start gap-4 lg:gap-[60px_0px] text-left text-21xl text-color-primary-color-900 font-inter pb-6 lg:pb-0"
    id="scratchandwin"
  >
    <!-- title  -->

    <div
      class="self-stretch flex flex-col items-start justify-center gap-2 lg:gap-[12px_0px]"
    >
      <div
        class="self-stretch relative tracking-[-0.04em] leading-[120%] lg:leading-[110%] text-[32px] lg:text-[40px] text-color-primary-color-900 font-bold py-2 lg:py-0"
      >
        Scratch n Win
      </div>
      <div
        class="self-stretch relative text-sm md:text-base lg:text-lg leading-[130%] text-color-text-colors-600-black-low-emp"
      >
        Step-by-step instructions on how to create a Scratch n Win campaign!
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
          :src="scratchwinFrameOne"
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
              <b class="font-inter">Trivialy &gt; Scratch n Win </b>
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
          :src="scratchwinFrameTwo"
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
                  >Scratch n Win Settings :
                </span>
                In the Scratch and Win Section, administrators have the ability to determine the number of scratch coupons allocated to users for each campaign, with the restriction that users receive only one coupon per campaign. This feature allows for controlled distribution, enhancing the exclusivity of each scratch coupon. Additionally, administrators can set campaign duration, control popup timings for strategic engagement, and incorporate a "Shop Now" link for seamless integration with promotional initiatives. The Scratch and Win Section provides administrators with a versatile tool to manage coupon distribution effectively while optimizing user interaction and participation through well-timed popups and promotional links.
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
          :src="scratchwinFrameThree"
        />
        <div class="self-stretch relative leading-[140%]">
          <ul
            class="m-0 text-inherit pl-[27px] list-disc font-normal flex flex-col gap-3 lg:gap-8"
          >
            <li class="mb-0">
              <p
                class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
              >
                <span class="font-inter font-bold">Scratch n Win Rewards : </span>
                In the Scratch and Win Reward Section, administrators can offer users rewards for every coupon they scratch. This feature adds a dynamic and engaging element to the experience, providing users with incentives each time they participate in the Scratch and Win campaign.
              </p>
            </li>
            <li class="mb-0">
              <p
                class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
              >
                <span class="font-inter font-bold">Status :</span>
                In the Status Section, administrators have the flexibility to select the current status of a campaign—whether it's published, pending, or completed. This feature allows for easy and effective campaign management, enabling admins to control the visibility and progress of their campaigns based on their specific timelines and objectives.
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
  spinwinFrameOne,
  spinwinFrameTwo,
  spinwinFrameThree,
  spinwinFrameFour,
  scratchwinFrameOne,
  scratchwinFrameTwo,
  scratchwinFrameThree,
} from "../../../assets/getAssets";

export default {
  data() {
    return {
      spinwinFrameOne,
      spinwinFrameTwo,
      spinwinFrameThree,
      spinwinFrameFour,
      scratchwinFrameOne,
      scratchwinFrameTwo,
      scratchwinFrameThree,
    };
  },
};
</script>
