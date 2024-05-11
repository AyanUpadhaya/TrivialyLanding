<template>
  <section class="pt-6 lg:pt-0">
    <div class="max-w-[1305px] mx-auto px-4">
      <!-- bread cumb  -->
      <BreadCumb :name="'Terms'" :addmarginTop="true"></BreadCumb>

      <div class="w-full flex flex-col gap-4 lg:gap-[60px] pb-[60px] lg:pb-[74px] ">
        <div class="max-w-[1176px] mx-auto font-inter px-4 ">
          <div class="w-full flex flex-col justify-center gap-4 md:gap-[18px]">
            <h3
              class="text-center tracking-[-0.02em] leading-[105%] inline-block font-bold text-[25px] xs:text-13xl lg:text-37xl text-color-primary-color-900"
            >
              Terms & Conditions
            </h3>
            <div
              class="self-stretch md:text-xl text-center max-w-[296px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-full mx-auto text-sm leading-[130%] text-color-text-colors-600-black-low-emp"
            >
              User-friendly terms: Know your rights
            </div>
          </div>
        </div>
        <div
          class="w-full h-full px-4 lg:px-[64px] flex flex-col gap-2 md:gap-6 mb-6 lg:mb-0"
        >
          <div
            v-for="(item, index) in terms"
            :key="index"
            class="lg:py-8 lg:px-6 p-4 bg-white rounded-2xl md:rounded-xl flex flex-col gap-3 md:gap-4 font-inter"
          >
            <div
              class="flex gap-2 font-bold text-base md:text-[40px] font-inter text-primary-color-900"
            >
              <span>{{ index + 1 }}.</span>
              <span>{{ item?.title }}</span>
            </div>
            <div class="text-xs md:text-xl font-inter text-black-low-emp">
              <span>{{ item?.description }}</span>
            </div>
          </div>
        
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
import BreadCumb from '../../components/ui/BreadCumb.vue';



export default {
    data() {
        return {
            terms: [
                {
                    title: "Terms & Conditions",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
                },
                {
                    title: "Data that we collect",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
                },
                {
                    title: "Competitions",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
                },
                {
                    title: "Cookies",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
                },
            ],
        };
    },
    methods: {
        handleRouting(path) {
            this.$router.push(path);
        },
    },
    components: { BreadCumb }
};
</script>

<style scoped></style>
