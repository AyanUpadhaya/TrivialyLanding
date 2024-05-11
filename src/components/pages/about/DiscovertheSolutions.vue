<template>
  <div class="max-w-[1305px] mx-auto py-0 lg:py-20">
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      class="flex flex-col gap-[18px] text-center mb-[28px] lg:mb-[60px]"
      id="WhatTheySay"
    >
      <h4
        class="text=sm lg:text-[28px] text-black-low-emp leading-[125%] lg:leading-[115%]"
      >
        What they say
      </h4>
      <h2
        class="text-[24px] lg:text-[48px] text-black-low-emp font-bold leading-[120%] lg:leading-[110%]"
      >
        Discover the Solutions
      </h2>
    </div>
    <AboutSlider
      data-aos="fade-up"
      data-aos-duration="1500"
      :reviews="reviews"
    ></AboutSlider>
  </div>
</template>

<script>
import { alexted, evan, pine } from "../../../assets/getAssets";
import AboutSlider from "../../sliders/AboutSlider.vue";
import Slider from "../../sliders/Slider.vue";

export default {
  data() {
    return {
      reviews: [
        {
          review:
            "Powerful quiz plugin with impressive features. The quiz creation process is straightforward, and the customization options are great. My only suggestion would be to enhance the reporting features for more in-depth insights. Overall, it's a fantastic tool for educators and content creators. Overall, it's a fantastic tool for educators and content creators.",
          reviewName: "Alex Ted",
          reviewPosition: "Executive Director - Orange",
          img: `${alexted}`,
        },
        {
          review:
            "Trivally makes quiz creation easy and engaging. A must-have for boosting audience interaction!",
          reviewName: "Pine Evans",
          reviewPosition: "CEO - Strawberry",
          img: `${pine}`,
        },
        {
          review:
            "It’s a game-changer for our marketing strategy. We've seen a significant increase in lead capture and customer engagement since incorporating interactive quizzes into our campaigns. The plugin seamlessly integrates with our website, and the customer support is top-notch. Highly recommended for marketers looking to drive results!",
          reviewName: "Evan Frank",
          reviewPosition: "CMO - Mango",
          img: `${evan}`,
        },
        {
          review:
            "Powerful quiz plugin with impressive features. The quiz creation process is straightforward, and the customization options are great. My only suggestion would be to enhance the reporting features for more in-depth insights. Overall, it's a fantastic tool for educators and content creators.",
          reviewName: "Alex Ted",
          reviewPosition: "Executive Director - Orange",
          img: `${alexted}`,
        },
        {
          review:
            "Trivally makes quiz creation easy and engaging. A must-have for boosting audience interaction!",
          reviewName: "Pine Evans",
          reviewPosition: "CEO - Strawberry",
          img: `${pine}`,
        },
        {
          review:
            "It’s a game-changer for our marketing strategy. We've seen a significant increase in lead capture and customer engagement since incorporating interactive quizzes into our campaigns. The plugin seamlessly integrates with our website, and the customer support is top-notch. Highly recommended for marketers looking to drive results!",
          reviewName: "Evan Frank",
          reviewPosition: "CMO - Mango",
          img: `${evan}`,
        },
      ],
    };
  },
  components: { Slider, AboutSlider },
};
</script>

<style scoped></style>
