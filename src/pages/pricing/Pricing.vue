<template>
  <section class="pt-[40px] relative overflow-hidden">
    <div class="max-w-[1305px] mx-auto">
      <BreadCumb
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        :name="'Pricing'"
        :addmarginTop="false"
      ></BreadCumb>

      <div>
        <div class="hidden lg:block">
          <TrivialyLargePackage
            :showColor="false"
            :isPricingPage="true"
          ></TrivialyLargePackage>
        </div>
        <div class="block lg:hidden px-4 pb-[60px]">
          <TrivialyMobilePackages
            :isPricingPage="true"
            :showColor="false"
          ></TrivialyMobilePackages>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TrivialyLargePackage from "../../components/pages/home/TrivialyLargePackage.vue";
import TrivialyMobilePackages from "../../components/pages/home/TrivialyMobilePackages.vue";
import BreadCumb from "../../components/ui/BreadCumb.vue";
import { setPageTitle } from "../../util/utils";
export default {
  components: {
    // LaunchQuiz,
    // Footer,
    TrivialyLargePackage,
    TrivialyMobilePackages,
    BreadCumb,
  },
  created() {
    // Set the page title when the component is created
    setPageTitle("Trivialy | Pricing");
  },
  methods: {
    handleRouting(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped></style>
