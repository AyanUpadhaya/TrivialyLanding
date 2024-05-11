<template>
  <section class="bg-darkslateblue px-4 ">
    <div class="pb-[60px] lg:pb-[110px]">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        class="max-w-[1176px] mx-auto text-center flex flex-col gap-[18px] mb-7 lg:mb-[60px]"
      >
        <h2
          class="text-white-high-emp font-inter text-[32px] leading-[36.8px] lg:text-[56px] font-bold lg:leading-[58.8px] max-w-[328px] mx-auto md:max-w-full text-center"
        >
          Quiz Success Stories
        </h2>
        <p
          class="text-white-medium-emp font-inter text-sm leading-[18.2px] lg:text-xl font-normal lg:leading-7 max-w-[328px] mx-auto md:max-w-full text-center"
        >
          Explore Quiz Success Stories and discover how Trivialy has empowered
          users <br class="hidden lg:block" />
          to create engaging quizzes, elevate learning experiences, and drive
          impactful results.
        </p>
      </div>

      <div
        class="max-w-[1176px] mx-auto"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <Slider :reviews="reviews"></Slider>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from "../../sliders/Slider.vue";
import { alexted, evan, pine } from "../../../assets/getAssets";
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
  components: { Slider },
};
</script>
