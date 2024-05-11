<template>
  <div
    class="w-full relative flex flex-col items-center justify-start gap-4 lg:gap-[60px_0px] text-left text-21xl text-color-primary-color-900 font-inter pb-6 lg:pb-0"
    id="spinandwin"
  >
    <!-- title  -->

    <div
      class="self-stretch flex flex-col items-start justify-center gap-2 lg:gap-[12px_0px]"
    >
      <div
        class="self-stretch relative tracking-[-0.04em] leading-[120%] lg:leading-[110%] text-[32px] lg:text-[40px] text-color-primary-color-900 font-bold py-2 lg:py-0"
      >
        Spin n Win
      </div>
      <div
        class="self-stretch relative text-sm md:text-base lg:text-lg leading-[130%] text-color-text-colors-600-black-low-emp"
      >
        Step-by-step instructions on how to create a Spin n Win campaign!
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
          :src="spinwinFrameOne"
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
              <b class="font-inter">Trivialy &gt; Spin n Win</b>
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
          :src="spinwinFrameTwo"
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
                  >Spin n Win Quadrants Selection:
                </span>
                In the Spin and Win Section, administrators can select the
                number of quadrants for the spinning wheel, choosing between two
                options: 5 quadrants or 7 quadrants. This customization feature
                allows for flexibility in designing the interactive spinning
                wheel, providing administrators with the ability to tailor the
                user experience based on their preferences and objectives.
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
          :src="spinwinFrameThree"
        />
        <div class="self-stretch relative leading-[140%]">
          <ul
            class="m-0 text-inherit pl-[27px] list-disc font-normal flex flex-col gap-3 lg:gap-8"
          >
            <li class="mb-0">
              <p
                class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
              >
                <span class="font-inter font-bold">Spin n Win Settings : </span>
                Extending the customization capabilities, administrators in the
                Spin and Win Section can not only choose the number of quadrants
                (5 or 7) for the spinning wheel but also personalize the
                experience further. They can add a title to the Spin and Win
                game, set campaign duration for time-limited promotions, control
                popup timings for strategic engagement, and include a "Shop Now"
                link for seamless integration with promotional activities. This
                feature-rich section offers administrators a comprehensive
                toolkit to create dynamic and engaging spinning wheel
                experiences tailored to their specific goals.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <!-- form four -->
      <div class="flex flex-col gap-3 lg:gap-8">
        <img
          class="relative rounded-2xl object-cover"
          alt=""
          :src="spinwinFrameFour"
        />
        <div class="self-stretch relative leading-[140%]">
          <ul
            class="m-0 text-inherit pl-[27px] list-disc font-normal flex flex-col gap-3 lg:gap-8"
          >
            <li class="mb-0">
              <p
                class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
              >
                <span class="font-inter font-bold">Spin n Win Rewards: </span>
                In the Spin and Win Reward Section, administrators can enhance
                user participation by offering rewards, such as coupons, in each
                quadrant of the spinning wheel. This gamified approach ensures
                that users receive an enticing incentive each time they spin the
                wheel, adding an element of excitement and surprise to the
                interactive experience. The ability to assign specific rewards
                to individual quadrants allows administrators to tailor the
                prize distribution, making the Spin and Win feature a compelling
                and rewarding engagement tool for users.
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
} from "../../../assets/getAssets";

export default {
  data() {
    return {
      spinwinFrameOne,
      spinwinFrameTwo,
      spinwinFrameThree,
      spinwinFrameFour,
    };
  },
};
</script>
