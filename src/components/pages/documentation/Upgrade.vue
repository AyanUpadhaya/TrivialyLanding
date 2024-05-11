<template>
  <div
    class="w-full relative flex flex-col items-center justify-start gap-[44px_0px] text-left text-21xl text-color-primary-color-900 font-inter"
    id="upgrade"
  >
    <div
      class="self-stretch flex flex-col items-start justify-center gap-2 lg:gap-[12px_0px]"
    >
      <div
        class="self-stretch relative tracking-[-0.04em] leading-[120%] lg:leading-[110%] text-2xl md:text-[30px] lg:text-[40px] text-color-primary-color-900 font-bold py-2 lg:py-0"
      >
        Upgrade
      </div>
      <div
        class="self-stretch relative text-sm md:text-base lg:text-lg leading-[130%] text-color-text-colors-600-black-low-emp"
      >
        Step-by-step instructions on how to create a Upgrade campaign!
      </div>
    </div>

    <div
      class="self-stretch flex flex-col items-start justify-start gap-[48px_0px] text-xl text-color-text-colors-600-black-low-emp"
    >
      <img
        class="relative rounded-2xl w-full object-cover"
        alt=""
        :src="campaignFormOne"
      />
      <div class="self-stretch relative leading-[140%]">
        <ul class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl pl-[27px] list-disc flex flex-col gap-8">
          <li class="mb-0">
            <span
              >The create campaign builder is the basic quiz campaign-building
              tool that is available for all users, both free and pro. It allows
              you to create the entire campaign right from this page, making the
              process hassle-free.</span
            >
          </li>
          <li>
            <span
              >To reach the create campaign builder, log in to the WordPress
              backend of your website, and then navigate to
            </span>
            <b class="font-inter">Trivialy &gt; Quiz &gt; Custom Campaign</b>
            <span class="font-inter"> to start adding a new campaign. </span>
          </li>
        </ul>
      </div>
      <img
        class="relative rounded-2xl object-cover"
        alt=""
        :src="campaignFormTwo"
      />
      <div class="self-stretch relative leading-[140%]">
        <ul class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl pl-[27px] list-disc">
          <li>
            <b class="font-inter">Quiz Description: </b>
            <span
              >In the Custom Create Quiz section, administrators have the tools
              to quickly design personalized quizzes. They can specify a unique
              quiz title, set strategic popup timings, and determine the number
              of questions for user engagement. This streamlined feature offers
              flexibility for crafting diverse quizzes tailored to educational,
              entertainment, or promotional purposes, providing a user-friendly
              experience for administrators.</span
            >
          </li>
        </ul>
      </div>
      <img
        class="relative rounded-2xl w-full object-cover"
        alt=""
        :src="campaignFormThree"
      />
      <div class="self-stretch relative leading-[140%]">
        <ul class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl pl-[27px] list-disc">
          <li>
            <b class="font-inter">Add Question & Answer:</b>
            <span>
              The Custom Create Quiz section now enables administrators to take
              quiz personalization a step further by allowing them to create
              specific questions, designate correct answers, and save the quiz
              configuration seamlessly. Admins can effortlessly tailor the
              content of each quiz by crafting questions that align with the
              intended theme or purpose. The ability to specify correct answers
              ensures accuracy and relevance, providing a well-rounded quiz
              creation experience. This feature streamlines the process for
              administrators, empowering them to efficiently curate engaging
              quizzes with precision and ease.</span
            >
          </li>
        </ul>
      </div>
      <img
        class="relative rounded-2xl object-cover"
        alt=""
        :src="campaignFormFour"
      />
      <div class="self-stretch relative leading-[140%]">
        <ul class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl pl-[27px] list-disc">
          <li>
            <b class="font-inter">Add Rewards:</b>
            <span>
              Expanding on the customization options, administrators in the
              Custom Create Quiz section can now implement an incentive system
              by offering rewards, such as coupons, for every correct answer.
              This gamification element not only enhances user engagement but
              also adds a rewarding dimension to the quiz experience.
              Additionally, administrators can orchestrate quiz campaigns,
              allowing them to create and deploy a series of quizzes with ease.
              This feature amplifies user participation by presenting a dynamic
              and rewarding quiz environment, making the quiz section a
              versatile tool for both user interaction and promotional
              initiatives.</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {
  campaignFormOne,
  campaignFormTwo,
  campaignFormThree,
  campaignFormFour,
} from "../../../assets/getAssets";

export default {
  data() {
    return {
      campaignFormOne,
      campaignFormTwo,
      campaignFormThree,
      campaignFormFour,
    };
  },
};
</script>
