<template>
  <section
    class="pt-[24.79px] lg:pt-[74px] pb-[33px] md:pb-[74.5px] relative overflow-hidden bg-darkslateblue px-8"
  >
    <div
      class="max-w-[1176px] mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4 sm:gap-6 md:gap-8 relative z-50"
    >
      <!-- left side -->
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        class="w-full md:max-w-full lg:max-w-[647px] flex flex-col justify-center items-center md:items-start text-center md:text-start lg;shrink-0"
      >
        <!-- Common Queries -->
        <div class="mb-6 lg:mb-10 l">
          <button
            @click="() => handleRouting('/common-queries')"
            class="bg-primary-color-800 h-8 md:h-[54px] lg:hover:bg-primary-color-900 border border-primary-color-700 lg:hover:border-primary-color-700 rounded-[100px] text-[10px] md:text-base text-white font-inter font-normal md:font-semibold flex justify-center items-center gap-2 py-2 px-3 md:py-4 md:px-6"
          >
            <span class="flex-1 leading-[13px] md:leading-6">
              Common Queries
            </span>
            <span>
              <svg
                class="w-4 h-4 md:w-7 md:h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M7.50059 13.7292L10.7339 10.4958L7.50059 7.2625C7.17559 6.9375 7.17559 6.4125 7.50059 6.0875C7.82559 5.7625 8.35059 5.7625 8.67559 6.0875L12.5006 9.9125C12.8256 10.2375 12.8256 10.7625 12.5006 11.0875L8.67559 14.9125C8.35059 15.2375 7.82559 15.2375 7.50059 14.9125C7.18392 14.5875 7.17559 14.0542 7.50059 13.7292Z"
                  fill="#EFF1FE"
                />
              </svg>
            </span>
          </button>
        </div>

        <h3
          class="text-white-high-emp font-inter text-[32px] lg:text-[50px] xl:text-[72px] font-extrabold leading-9 lg:leading-[normal] mb-4 lg:mb-6"
        >
          Engaging <span class="text-primary-color-500"> Trivia</span> <br />
          to increase sales.
        </h3>

        <p
          class="max-w-[296px] sm:max-w-[647px] text-neutral-50 font-inter text=base lg:text-xl leading-[22px] lg:leading-7 mb-6 lg:mb-[60px]"
        >
          "Optimize campaign configurations such as Spin n Win, Drag n Match,
          Quizzes, and Scratch n Win to enhance engagement and drive sales.
          Extend exclusive PROMO codes or direct purchasing links to the highest
          achievers to incentivize purchases and amplify revenue."
        </p>

        <!-- button part -->
        <div class="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
          <button
            class="btn max-h-[54px] w-full max-w-[296px] md:max-w-[190px] mx-auto md:mx-0 bg-primary-color-500 lg:hover:bg-primary-color-800 capitalize flex justify-center items-center gap-2 p-4 rounded-xl h-full text-white font-inter font-semibold border-none"
          >
            <span class="shrink-0 h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <g clip-path="url(#clip0_1731_1336)">
                  <path
                    d="M1.41797 10.5005C1.41797 13.896 3.39558 16.8345 6.25006 18.2244L2.16424 7.01172C1.68849 8.07515 1.41797 9.25985 1.41797 10.5005Z"
                    fill="white"
                  />
                  <path
                    d="M15.793 10.0616C15.793 8.99819 15.4106 8.27058 15.0841 7.69222C14.6456 6.98327 14.2445 6.38625 14.2445 5.6773C14.2445 4.88439 14.8415 4.15677 15.6811 4.15677C15.7184 4.15677 15.7557 4.1661 15.793 4.1661C14.2632 2.76685 12.2296 1.91797 10.0001 1.91797C7.00571 1.91797 4.36579 3.45715 2.83594 5.77991C3.04116 5.78924 3.22773 5.78924 3.38631 5.78924C4.28183 5.78924 5.67176 5.6773 5.67176 5.6773C6.13818 5.64931 6.18482 6.33028 5.72773 6.38625C5.72773 6.38625 5.26131 6.44222 4.74825 6.47021L7.87325 15.7613L9.74825 10.1269L8.40497 6.47954C7.93855 6.45155 7.50944 6.39558 7.50944 6.39558C7.04303 6.3676 7.099 5.65864 7.56541 5.68663C7.56541 5.68663 8.98332 5.79857 9.82288 5.79857C10.7184 5.79857 12.1083 5.68663 12.1083 5.68663C12.5747 5.65864 12.6214 6.33961 12.1643 6.39558C12.1643 6.39558 11.6979 6.45155 11.1848 6.47954L14.2818 15.696L15.14 12.8415C15.5038 11.6568 15.793 10.7986 15.793 10.0616Z"
                    fill="white"
                  />
                  <path
                    d="M10.1488 11.2461L7.57422 18.7274C8.33914 18.9513 9.15071 19.0726 9.99959 19.0726C10.9977 19.0726 11.9585 18.8953 12.8447 18.5875C12.8261 18.5502 12.7981 18.5129 12.7794 18.4662L10.1488 11.2461Z"
                    fill="white"
                  />
                  <path
                    d="M17.5269 6.38672C17.5642 6.65724 17.5828 6.95575 17.5828 7.27291C17.5828 8.14045 17.4243 9.11993 16.9299 10.3419L14.3086 17.9166C16.8552 16.4334 18.5717 13.6628 18.5717 10.5005C18.5717 9.00799 18.1985 7.60873 17.5269 6.38672Z"
                    fill="white"
                  />
                  <path
                    d="M10 0.5C4.48694 0.5 0 4.98694 0 10.5C0 16.0131 4.48694 20.5 10 20.5C15.5131 20.5 20 16.0131 20 10.5C20 4.98694 15.5131 0.5 10 0.5ZM10 20.0429C4.73881 20.0429 0.45709 15.7612 0.45709 10.5C0.45709 5.23881 4.73881 0.95709 10 0.95709C15.2612 0.95709 19.5429 5.23881 19.5429 10.5C19.5429 15.7612 15.2612 20.0429 10 20.0429Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1731_1336">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span class="shrink-0 leading-[22.4px] text-base"
              >Download Plugin</span
            >
          </button>
          <button
            class="btn max-h-[54px] w-full max-w-[296px] md:max-w-[190px] mx-auto md:mx-0 bg-transparent group lg:hover:bg-white duration-600 lg:hover:text-black-medium-emp capitalize flex justify-center items-center gap-2 p-4 rounded-xl h-full text-white font-inter font-semibold border border-primary-color-300"
          >
            <span class="shrink-0 border border-transparent">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                <path
                  d="M10.0003 2.16797C5.40033 2.16797 1.66699 5.9013 1.66699 10.5013C1.66699 15.1013 5.40033 18.8346 10.0003 18.8346C14.6003 18.8346 18.3337 15.1013 18.3337 10.5013C18.3337 5.9013 14.6003 2.16797 10.0003 2.16797ZM8.33366 13.418V7.58464C8.33366 7.24297 8.72533 7.04297 9.00033 7.2513L12.892 10.168C13.117 10.3346 13.117 10.668 12.892 10.8346L9.00033 13.7513C8.72533 13.9596 8.33366 13.7596 8.33366 13.418Z"
                  fill="white"
                  class="lg:group-hover:fill-black duration-300"
                />
              </svg>
            </span>
            <span class="shrink-0 leading-[22.4px] text-base">Quick Setup</span>
          </button>
        </div>
      </div>

      <!-- right side -->
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        class="w-full md:max-w-[500px] xl:max-w-[582px] lg:shrink-0 z-[200] flex justify-center md:justify-end"
      >
        <img
          :src="spinner"
          alt=""
          class="hidden w-full max-w-[296px] md:max-w-full md:block"
        />
        <img :src="spinnertwo" alt="" class="w-full max-w-[300px] md:hidden" />
      </div>
    </div>
  </section>
</template>
<script>
import { spinner, spinnertwo } from "../../../assets/getAssets";
export default {
  data() {
    return {
      spinner,
      spinnertwo,
    };
  },

  methods: {
    handleRouting(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.topbtn {
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 100px;
  border: 1px solid #513fc3;
  background: #43359e;
}
</style>
