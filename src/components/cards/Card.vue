<template>
  <!-- bottom cards -->
  <div
    class="p-4 md:py-[60px] md:px-6 rounded-[24px] bg-neutral-50 flex flex-col items-center gap-4 shadow-cardShadowTwo lg:hover:scale-110 transition-transform duration-200"
  >
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      class="bg-neutral-50 shadow-iconShadow w-[42px] h-[42px] md:w-20 md:h-20 rounded-full flex justify-center items-center"
    >
      <img :src="imagePath" alt="" class="w-[25px] h-[25px] lg:w-12 lg:h-12" />
    </div>
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      class="flex flex-col gap-3 text-center"
    >
      <h4
        class="text-primary-color-900 text-xl md:text-2xl font-inter leading-7 font-bold"
      >
        {{ heading }}
      </h4>
      <p class="font-inter text-white-low-emp text-sm leading-[18px]">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    description: String,
    imagePath: String,
  },
};
</script>

<style scoped>
.hover\:scale-110:hover {
  transform: scale(1.1);
}
</style>
