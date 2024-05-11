<template>
  <div
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500"
    class="w-full bg-color-primary-color-100 rounded-[20px] lg:rounded-[40px] py-6 lg:py-[90px] px-4 lg:px-[64px] grid grid-cols-1 xl:grid-cols-2 items-center gap-4 lg:gap-[80px]"
    id="weAreInteractive"
  >
    <div class="flex flex-col gap-2 lg:gap-4 text-center xl:text-left">
      <h4
        class="text=sm lg:text-[28px] text-black-low-emp leading-[125%] lg:leading-[115%]"
      >
        Who we are
      </h4>
      <h2
        class="text-[24px] lg:text-[40px] text-black-low-emp font-bold leading-[120%] lg:leading-[110%]"
      >
        We are <span class="text-primary-color-500">Interactive</span>
      </h2>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-6 py-5 px-4 md:px-0 md:py-0"
    >
      <!-- trivially -->
      <div
        class="p-6 bg-white rounded-xl shadow-intShadow flex flex-col items-start gap-2 lg:hover:scale-110 transition-transform duration-200"
      >
        <h3
          class="text-black-medium-emp text-lg lg:text-xl font-semibold leading-[23px] lg:leading-7 font-inter"
        >
          Trivialy
        </h3>
        <p
          class="text-black-low-emp leading-[15px] lg:leading-[22px] font-normal text-xs lg:text-base"
        >
          At Trivialy, we specialize in delivering engaging and interactive quiz
          experiences for businesses of all sizes. You can captivate your
          audience, boost engagement, and drive results through the power of
          quizzes.
        </p>
      </div>

      <!-- engagement -->

      <div
        class="p-6 bg-white rounded-xl shadow-intShadow flex flex-col items-start gap-2 lg:hover:scale-110 transition-transform duration-200"
      >
        <h3
          class="text-black-medium-emp text-lg lg:text-xl font-semibold leading-[23px] lg:leading-7 font-inter"
        >
          Engagement
        </h3>
        <p
          class="text-black-low-emp leading-[15px] lg:leading-[22px] font-normal text-xs lg:text-base"
        >
          We prioritize audience engagement and interaction. Our quizzes are
          crafted to captivate and entertain, driving participation and
          retention.
        </p>
      </div>

      <!-- customization -->

      <div
        class="p-6 bg-white rounded-xl shadow-intShadow flex flex-col items-start gap-2 lg:hover:scale-110 transition-transform duration-200"
      >
        <h3
          class="text-black-medium-emp text-lg lg:text-xl font-semibold leading-[23px] lg:leading-7 font-inter"
        >
          Customization
        </h3>
        <p
          class="text-black-low-emp leading-[15px] lg:leading-[22px] font-normal text-xs lg:text-base"
        >
          We understand that every client is unique. Our quiz service is
          tailored to meet the specific needs and objectives of each business
          partner.
        </p>
      </div>

      <!-- customer support -->

      <div
        class="p-6 bg-white rounded-xl shadow-intShadow flex flex-col items-start gap-2 lg:hover:scale-110 transition-transform duration-200"
      >
        <h3
          class="text-black-medium-emp text-lg lg:text-xl font-semibold leading-[23px] lg:leading-7 font-inter"
        >
          Customer Support
        </h3>
        <p
          class="text-black-low-emp leading-[15px] lg:leading-[22px] font-normal text-xs lg:text-base"
        >
          Our dedicated customer support team is always available to address any
          questions or concerns, ensuring a smooth and satisfactory experience
          for our B2B partners.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hover\:scale-110:hover {
  transform: scale(1.1);
}
</style>
