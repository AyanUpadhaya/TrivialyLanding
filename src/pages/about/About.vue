<template>
  <section class="pt-6 lg:pt-0 pb-6 lg:pb-0 ">
    <div class="max-w-[1305px] mx-auto" :name="'Pricing'" :addmarginTop="false">
      <!-- bread cumb  -->
      <BreadCumb  data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" :name="'About'" :addmarginTop="true"></BreadCumb>

      <!-- center -->
      <!-- container -->
      <div class="mb-[60px] lg:mb-[110px] font-inter px-4">
        <div class="flex flex-col">
          <!-- top -->
          <div
            class="flex flex-col w-full"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <div
              class="flex flex-col justify-center gap-4 md:gap-[18px] w-full mb-11"
            >
              <h3
                class="text-center tracking-[-0.02em] leading-[105%] inline-block font-bold text-[25px] xs:text-13xl lg:text-37xl py-2 lg:py-0"
                :class="
                  isHeadingWhite ? 'text-white' : 'text-color-primary-color-900'
                "
              >
                About Trivialy
              </h3>
              <div
                class="self-stretch text-sm md:text-xl leading-[140%] text-center max-w-[296px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-full mx-auto"
                :class="
                  isParaWhite
                    ? 'text-white-medium-emp'
                    : 'text-sm leading-[130%] text-color-text-colors-600-black-low-emp '
                "
              >
                Connecting with Our Vision
              </div>
            </div>

            <!-- rest starts -->

            <!-- center sticky nav -->
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2000"
              class="hidden lg:flex justify-center w-full h-full sticky-navbar mb-[90px] py-2"
            >
              <ul class="flex flex-row gap-10">
                <li
                  class="font-inter text-xl font-semibold leading-7 text-black-medium-emp cursor-pointer"
                  @click="() => scrollTo('weAreInteractive')"
                >
                  Who we are
                </li>
                <li
                  class="font-inter text-xl font-semibold leading-7 text-black-medium-emp cursor-pointer"
                  @click="() => scrollTo('WhatWeDo')"
                >
                  What we do
                </li>

                <li
                  class="font-inter text-xl font-semibold leading-7 text-black-medium-emp cursor-pointer"
                  @click="() => scrollTo('Ourfeatures')"
                >
                  Our features
                </li>
                <li
                  class="font-inter text-xl font-semibold leading-7 text-black-medium-emp cursor-pointer"
                  @click="() => scrollTo('WhatTheySay')"
                >
                  What they say
                </li>
              </ul>
            </div>

            <!-- bottom -->

            <div class="space-y-[60px] lg:space-y-[40px]">
              <!-- We are Interactive -->
              <WeAreInteractive></WeAreInteractive>
              <!-- What we do -->
              <WhatWedo></WhatWedo>

              <!-- Explore the Tools  -->
              <ExploretheTools></ExploretheTools>

              <DiscovertheSolutions />
            </div>

            <!--rest ends -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WeAreInteractive from "../../components/pages/about/WeAreInteractive.vue";
import WhatWedo from "../../components/pages/about/WhatWedo.vue";
import ExploretheTools from "../../components/pages/about/ExploretheTools.vue";
import ContactForm from "../../components/pages/contact/ContactForm.vue";
import BreadCumb from "../../components/ui/BreadCumb.vue";
import DiscovertheSolutions from "../../components/pages/about/DiscovertheSolutions.vue";
import { setPageTitle } from "../../util/utils";
export default {
  components: {
    ContactForm,
    BreadCumb,
    WeAreInteractive,
    WhatWedo,
    ExploretheTools,
    DiscovertheSolutions,
  },
  created() {
    // Set the page title when the component is created
    setPageTitle("Trivialy | About");
  },
  methods: {
    handleRouting(path) {
      this.$router.push(path);
    },
    scrollTo(id) {
      // Get the target element using its id
      const targetElement = document.getElementById(`${id}`);

      // Scroll smoothly to the target element
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
  },
};
</script>

<style scoped>
.sticky-navbar {
  position: sticky;
  top: 96px; /* Adjust this value based on your design */
  background-color: white;
  z-index: 500; /* Adjust the z-index if necessary */
}
</style>
