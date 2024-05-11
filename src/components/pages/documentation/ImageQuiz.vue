<template>
  <div
    class="w-full  relative flex flex-col items-center justify-start gap-4 lg:gap-[60px_0px] text-left text-21xl text-color-primary-color-900 font-inter pb-6 lg:pb-0"
    id="imgQuiz"
  >
    <!-- title  -->

    <div
      class="self-stretch flex flex-col items-start justify-center gap-2 lg:gap-[12px_0px]"
    >
      <div
        class="self-stretch relative tracking-[-0.04em] leading-[120%] lg:leading-[110%] text-[32px] lg:text-[40px] text-color-primary-color-900 font-bold py-2 lg:py-0"
      >
      Image Quiz
      </div>
      <div
        class="self-stretch relative text-sm md:text-base lg:text-lg leading-[130%] text-color-text-colors-600-black-low-emp"
      >
      Step-by-step instructions on how to create a image quiz campaign!
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
        :src="imageQuizFormOne"
      />
      <div class="self-stretch relative leading-[140%]">
        <ul
          class="m-0 text-inherit pl-[27px] list-disc font-normal flex flex-col gap-3 lg:gap-8"
        >
          <li class="mb-0">
            <p class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl">
              The <span class="font-semibold">Create Campaign</span> is the basic quiz campaign-building tool that is available for all users, both free and pro. It allows you to create the entire campaign right from this page, making the process hassle-free.
            </p>
          </li>
          <li class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl">
            <span
              >To reach the create campaign builder, log in to the WordPress backend of your website, and then navigate to
            </span>
            <b class="font-inter">Trivialy &gt; Quiz &gt; Create Image Quiz</b>
            <span class="font-inter">  to start adding a new campaign. </span>
          </li>
        </ul>
      </div>
      </div>
      
      <!-- form two -->
      <div class="flex flex-col gap-3 lg:gap-8">
        <img
          class="relative rounded-2xl object-cover"
          alt=""
          :src="imageQuizFormTwo"
        />
        <div class="self-stretch relative leading-[140%]">
          <ul
            class="m-0 text-inherit pl-[27px] list-disc font-normal flex flex-col gap-3 lg:gap-8"
          >
            <li class="mb-0">
              <p
                class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
              >
                <span class="font-inter font-bold">Image Quiz Title: </span>
                Set a title for the Quiz. Make sure that it defines exactly what the Quiz is about while also being concise and catchy. Try including keywords to improve its visibility on SERPs.

              </p>
            </li>
            <li class="mb-0">
              <p
                class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
              >
                <span class="font-inter font-bold">Image Quiz Settings: </span>
                In these fields, The image quiz plugin provides a dynamic quiz creation experience with customizable features. Users can select image quiz categories like sports or general knowledge, set location preferences, and define quiz durations. The plugin allows for adjusting difficulty levels and crafting diverse questions. Strategic popup timing enhances the user experience with well-timed hints or offers. This versatility ensures engaging and tailored quizzes for diverse audiences.

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
        :src="imageQuizFormThree"
      />
      <div class="self-stretch relative leading-[140%]">
        <ul class="m-0 text-inherit pl-[27px] list-disc">
          <li class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl">
            <span class="font-inter font-bold">Image Quiz Reward: </span>
            <span>
              The reward section in the quiz plugin adds an exciting incentive for participants by offering a reward, such as coupons, for each correct answer. This feature enhances user engagement and motivation, creating a gamified experience. Participants are not only challenged by quiz questions but also have the opportunity to earn tangible benefits for their knowledge and efforts. The inclusion of rewards adds an extra layer of enjoyment to the quiz, making it a rewarding and interactive experience for users who successfully navigate and answer questions correctly.</span
            >
          </li>
        </ul>
      </div>
     </div>
    </div>
  </div>
</template>
<script>
import {
  imageQuizFormOne,
  imageQuizFormTwo,
  imageQuizFormThree,
} from "../../../assets/getAssets";

export default {
  data() {
    return {
      imageQuizFormOne,
      imageQuizFormTwo,
      imageQuizFormThree,
    };
  },
};
</script>
