<template>
  <section class="bg-darkslateblue px-4 font-inter overflow-hidden">
    <!-- big card section -->

    <div class="max-w-[1305px] mx-auto pt-6 pb-[60px] lg:pb-[110px]">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        class="bg-dark-grayish-900 py-6 md:py-8 lg:py-[120px] rounded-3xl lg:rounded-10 shadow-cardShadow w-full px-4 md:px-10 lg:px-[132px]"
      >
        <div class="flex flex-col gap-4 lg:gap-[90px]">
          <!-- top -->
          <div
            class="flex flex-col gap-[18px] items-center max-w-[1041px] mx-auto"
          >
            <div
              class="py-2 text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h3
                class="text-white font-bold font-inter text-[32px] lg:text-[56px] leading-9 lg:leading-[58.8px]"
              >
                How it works
              </h3>
            </div>
            <div
              class="text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <p
                class="font-inter text-white text-sm lg:text-lg leading-[18px] md:leading-7 max-w-[400px] md:max-w-full"
              >
                Embark on a Journey of Infinite Learning Possibilities with Our
                Vast Spectrum of Quiz Variety,<br class="hidden lg:block" />
                Where Curiosity Thrives, and Learning Knows No Boundaries!
              </p>
            </div>
          </div>
          <!-- bottom cards -->
          <div
            class="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-6"
            
          >
            <Card
              v-for="card in cards"
              :key="card.id"
              :heading="card.heading"
              :description="card.description"
              :imagePath="card.imagePath"
            ></Card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  textquiz,
  imagequiz,
  spinwin,
  integration,
  barchart,
  edit,
  help,
} from "../../../assets/getAssets";
import Card from "../../cards/Card.vue";
export default {
  data() {
    return {
      textquiz,
      imagequiz,
      spinwin,
      cards: [
        {
          id: "one",
          heading: "Integration",
          description:
            "Easily integrate plugin into your platform, following simple installation steps provided.",
          imagePath: integration,
        },
        {
          id: "two",
          heading: "Configuration",
          description:
            "Tailor the plugin to fit your brand and user preferences with easy customization.",
          imagePath: edit,
        },
        {
          id: "three",
          heading: "Content",
          description:
            "Effortlessly customize quizzes with the plugin's intuitive interface.",
          imagePath: barchart,
        },
        {
          id: "four",
          heading: "Tracking",
          description:
            "Track engagement, monitor, and optimize with built-in analytics.",
          imagePath: help,
        },
      ],
    };
  },
  components: { Card },
};
</script>

<style scoped></style>
