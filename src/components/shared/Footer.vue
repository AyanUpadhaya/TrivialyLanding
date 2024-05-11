<template>
  <footer class="relative bg-primary-color-100 py-10 lg:py-20 px-6">
    <div
      class="max-w-[1176px] mx-auto flex flex-col gap-10 lg:gap-20"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <!-- top -->
      <div class="flex flex-col md:flex-row gap-10 md:gap-6 md:items-center">
        <!-- links -->
        <div
          class="flex flex-col md:flex-row gap-10 md:gap-6 items-start flex-1"
        >
          <!-- products -->
          <div class="flex flex-col gap-4 md:gap-5 w-full">
            <div
              class="font-semibold text-primary-color-900 font-inter text-[18px] lg:text-xl"
            >
              Product
            </div>
            <ul class="flex flex-col gap-4 md:gap-3">
              <li>
                <router-link to="!#" class="text-black-medium-emp font-inter"
                  >Quiz</router-link
                >
              </li>
              <li>
                <router-link to="!#" class="text-black-medium-emp font-inter"
                  >Spin n Win</router-link
                >
              </li>
              <li>
                <router-link to="!#" class="text-black-medium-emp font-inter"
                  >Drag n Match</router-link
                >
              </li>
            </ul>
          </div>

          <!-- Information -->
          <div class="flex flex-col gap-4 md:gap-5 w-full">
            <div
              class="font-semibold text-primary-color-900 font-inter text-[18px] lg:text-xl"
            >
              Information
            </div>
            <ul class="flex flex-col gap-4 md:gap-3">
              <li>
                <router-link
                  :to="{ name: 'common-queries' }"
                  class="text-black-medium-emp font-inter"
                  >Common Queries</router-link
                >
              </li>

              <li>
                <router-link to="!#" class="text-black-medium-emp font-inter"
                  >Support</router-link
                >
              </li>
            </ul>
          </div>

          <!-- Company -->
          <div class="flex flex-col gap-4 md:gap-5 w-full">
            <div
              class="font-semibold text-primary-color-900 font-inter text-[18px] lg:text-xl"
            >
              Company
            </div>
            <ul class="flex flex-col gap-4 md:gap-3">
              <li>
                <router-link
                  :to="{ name: 'about' }"
                  class="text-black-medium-emp font-inter"
                  >About us</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{ name: 'contact' }"
                  class="text-black-medium-emp font-inter"
                  >Contact us</router-link
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- download -->
        <div class="flex-shrink-0 p-6 bg-white rounded-3xl md:max-w-[296px]">
          <!-- top -->
          <div
            class="font-semibold text-primary-color-900 font-inter text-base mb-4"
          >
            Subscribe
          </div>

          <!-- input box -->
          <div
            class="bg-color-primary-color-100 flex justify-between items-center gap-6 rounded-xl py-1 pr-1 pl-4 mb-6 w-full"
          >
            <input
              type="email"
              class="w-full bg-transparent outline-0 border-0 focus:outline-none focus:border-none text-primary-color-900 text-sm font-inter placeholder:text-primary-color-900"
              placeholder="Email address"
            />

            <button
              class="btn bg-white lg:hover:bg-white lg:hover:border-none rounded-2xl p-3 flex justify-center items-center h-full flex-shrink-0"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4.34017 10.8323H13.6485L9.58184 14.899C9.25684 15.224 9.25684 15.7573 9.58184 16.0823C9.90684 16.4073 10.4318 16.4073 10.7568 16.0823L16.2485 10.5906C16.5735 10.2656 16.5735 9.74063 16.2485 9.41563L10.7652 3.91563C10.4402 3.59062 9.91517 3.59062 9.59017 3.91563C9.26517 4.24063 9.26517 4.76563 9.59017 5.09063L13.6485 9.16563H4.34017C3.88184 9.16563 3.50684 9.54063 3.50684 9.99896C3.50684 10.4573 3.88184 10.8323 4.34017 10.8323Z"
                    fill="#2F2F2F"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div class="text-xs font-inter text-primary-color-900">
            🚀 Be the first to know about new releases, success stories, and
            creative quiz ideas. Don't miss out on the fun.
          </div>
        </div>
      </div>

      <!-- bottom -->
      <div
        class="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 flex-wrap"
      >
        <!-- logo -->
        <div>
          <router-link :to="{ name: 'home' }">
            <img :src="logodark" alt=""
          /></router-link>
        </div>

        <div class="flex justify-between items-center gap-10">
          <!-- links -->
          <div class="block">
            <ul class="flex justify-center items-center gap-4 md:gap-[40px]">
              <li
                class="text-primary-color-900 font-inter font-normal text-sm cursor-pointer"
              >
                <router-link
                  :to="{ name: 'terms-conditions' }"
                  @click="() => handleColorChange('white')"
                  class="text-primary-color-900 font-inter"
                  >Terms</router-link
                >
              </li>
              <li
                class="text-primary-color-900 font-inter font-normal text-sm cursor-pointer"
              >
                <a>Privacy</a>
              </li>
              <li
                class="text-primary-color-900 font-inter font-normal text-sm cursor-pointer"
              >
                <a>Cookies</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- button part -->
        <div class="flex justify-start md:justify-center gap-4 items-center">
          <!-- linkedin -->
          <div
            class="w-[36px] h-[36px] rounded-full flex justify-center items-center"
          >
            <a href="!#" target="_blank">
              <span>
                <img :src="linkedin" alt="" />
              </span>
            </a>
          </div>
          <!-- facebook -->
          <div
            class="w-[36px] h-[36px] rounded-full flex justify-center items-center"
          >
            <a href="!#" target="_blank">
              <span>
                <img :src="facebook" alt="" />
              </span>
            </a>
          </div>

          <!-- twitter -->
          <div
            class="w-[36px] h-[36px] rounded-full flex justify-center items-center"
          >
            <a href="!#" target="_blank">
              <span>
                <img :src="twitter" alt="" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-to-top" @click="scrollToTop">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        class="rotate-180 w-10 h-10"
      >
        <path
          d="M15.8751 8.99953L11.9951 12.8795L8.1151 8.99953C7.7251 8.60953 7.0951 8.60953 6.7051 8.99953C6.3151 9.38953 6.3151 10.0195 6.7051 10.4095L11.2951 14.9995C11.6851 15.3895 12.3151 15.3895 12.7051 14.9995L17.2951 10.4095C17.6851 10.0195 17.6851 9.38953 17.2951 8.99953C16.9051 8.61953 16.2651 8.60953 15.8751 8.99953Z"
          class="fill-white"
        />
      </svg>
    </div>
  </footer>
</template>

<script>
import { logodark, twitter, facebook, linkedin } from "../../assets/getAssets";
import { getActivePath } from "../../util/getActivePath";
export default {
  data() {
    return {
      logodark,
      twitter,
      facebook,
      linkedin,
      activePath: "",
    };
  },

  watch: {
    "$route.name"(newValue) {
      this.activePath = getActivePath(newValue);
    },
  },
  methods: {
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

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },

  props: {
    handleColorChange: Function,
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.activePath = getActivePath(this.$route.name);
    if (this.activePath !== "home" || this.activePath == "/") {
      this.handleColorChange("white");
    }
  },
};
</script>

<style scoped>
/* Add the styling for the floating arrow button */
.scroll-to-top {
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 999;
  transition: opacity 0.3s ease-in-out;
}

.scroll-to-top svg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #007bff;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.scroll-to-top:hover {
  opacity: 0.8;
}
</style>
