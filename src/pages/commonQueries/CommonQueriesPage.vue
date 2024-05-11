<template>
  <section class="pt-6 md:pt-[40px]">
    <div class="max-w-[1305px] mx-auto">
      <!-- bread cumb  -->
      <div class="lg:flex gap-2 items-center mb-[61px] hidden px-4">
        <span
          class="font-inter text-base text-black-low-emp cursor-pointer"
          @click="() => handleRouting('/')"
          >Home</span
        >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8.99953 15.8746L12.8795 11.9946L8.99953 8.11461C8.60953 7.72461 8.60953 7.09461 8.99953 6.70461C9.38953 6.31461 10.0195 6.31461 10.4095 6.70461L14.9995 11.2946C15.3895 11.6846 15.3895 12.3146 14.9995 12.7046L10.4095 17.2946C10.0195 17.6846 9.38953 17.6846 8.99953 17.2946C8.61953 16.9046 8.60953 16.2646 8.99953 15.8746Z"
              fill="#C9C9CE"
            />
          </svg>
        </span>
        <span class="font-inter text-base text-primary-color-900 font-semibold"
          >Common Queries</span
        >
      </div>
      <div>
        <CommonQueries :showColor="false" :isFaq="true"></CommonQueries>
      </div>
    </div>
  </section>
</template>

<script>
import CommonQueries from "../../components/pages/home/CommonQueries.vue";
import { setPageTitle } from "../../util/utils";
export default {
  created() {
    // Set the page title when the component is created
    setPageTitle("Trivialy | Common Queries");
  },
  components: {
    CommonQueries,
  },
  methods: {
    handleRouting(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped></style>
