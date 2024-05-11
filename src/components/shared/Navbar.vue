<template>
  <div
    class="sticky top-0 w-full py-2 md:py-6 z-[999] shadow-navShadow px-4"
    :class="
      isScrolled ? 'bg-darkslateblue' : 'backdrop-blur-md bg-darkslateblue'
    "
  >
    <nav
      class="max-w-[1176px] mx-auto flex justify-between items-center gap-6 flex-wrap"
    >
      <div class="flex justify-between w-full lg:w-max">
        <!-- logo -->
        <div
          @click="
            () => {
              handleRouting('/');
              handleColorChange('blue');
            }
          "
          class="cursor-pointer"
        >
          <img
            :src="logo"
            alt=""
            class="w-full duration-200 max-w-[112px] md:max-w-[176px]"
          />
        </div>
        <button class="lg:hidden" @click="handleShowMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M28 13H4C3.448 13 3 12.552 3 12C3 11.448 3.448 11 4 11H28C28.552 11 29 11.448 29 12C29 12.552 28.552 13 28 13ZM29 20C29 19.448 28.552 19 28 19H4C3.448 19 3 19.448 3 20C3 20.552 3.448 21 4 21H28C28.552 21 29 20.552 29 20Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <!-- links -->
      <div class="hidden lg:block">
        <ul class="flex justify-center items-center gap-10">
          <!-- home -->
          <li
            :class="
              activePath == 'home'
                ? ' text-primary-color-500 font-inter text-base font-bold flex flex-col gap-y-[6px] duration-100'
                : 'text-white  font-inter text-base font-normal flex flex-col gap-0 duration-100'
            "
          >
            <router-link :to="{ name: 'home' }">Home</router-link>
            <!-- underline -->
            <span
              :class="
                activePath == 'home'
                  ? 'bg-primary-color-500 rounded-full transition-transform transform scale-x-100 h-[5px] duration-100'
                  : ''
              "
            ></span>
          </li>
          <!-- doc -->
          <li
            :class="
              activePath == 'documentation'
                ? ' text-primary-color-500 font-inter text-base font-bold flex flex-col gap-y-[6px] duration-100'
                : 'text-white  font-inter text-base font-normal flex flex-col gap-0 duration-100'
            "
          >
            <router-link :to="{ name: 'documentation' }"
              >Documentation</router-link
            >
            <!-- underline -->
            <span
              :class="
                activePath == 'documentation'
                  ? 'bg-primary-color-500 rounded-full transition-transform transform scale-x-100 h-[5px] duration-100'
                  : ''
              "
            ></span>
          </li>
          <!-- pricing -->
          <li
            :class="
              activePath == 'pricing'
                ? ' text-primary-color-500 font-inter text-base font-bold flex flex-col gap-y-[6px] duration-100'
                : 'text-white font-inter text-base font-normal flex flex-col gap-0 duration-100'
            "
          >
            <router-link :to="{ name: 'pricing' }">Pricing</router-link>
            <!-- underline -->
            <span
              :class="
                activePath == 'pricing'
                  ? 'bg-primary-color-500 rounded-full transition-transform transform scale-x-100 h-[5px] duration-100'
                  : ''
              "
            ></span>
          </li>

          <!-- contact -->
          <li
            :class="
              activePath == 'contact'
                ? ' text-primary-color-500 font-inter text-base font-bold flex flex-col gap-y-[6px] duration-100'
                : 'text-white font-inter text-base font-normal flex flex-col gap-0 duration-100'
            "
          >
            <router-link :to="{ name: 'contact' }">Contact</router-link>
            <!-- underline -->
            <span
              :class="
                activePath == 'contact'
                  ? 'bg-primary-color-500 rounded-full transition-transform transform scale-x-100 h-[5px] duration-100'
                  : ''
              "
            ></span>
          </li>
        </ul>
      </div>

      <!-- button part -->
      <div class="hidden lg:block">
        <button class="btn-main text-base font-semibold w-[148px] h-[52px]">Download</button>
      </div>
    </nav>
  </div>
</template>

<script>
import { logo } from "../../assets/getAssets";
import { getActivePath } from "../../util/getActivePath";
export default {
  data() {
    return {
      logo: logo,
      isScrolled: false,
      isShowMenu: false,
      activePath: "",
      isShowMenu: true,
    };
  },
  props: {
    handleShowMenu: Function,
    handleColorChange: Function,
  },
  watch: {
    "$route.name"(newValue) {
      this.activePath = getActivePath(newValue);
    },
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
    handleMenu(value) {
      this.isShowMenu = value;
    },
    handleRouting(path) {
      this.$router.push(path);
    },
    
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.activePath = getActivePath(this.$route.name);
    if (this.activePath == "home" || this.activePath == "/") {
      this.handleColorChange("blue");
    } else {
      this.handleColorChange("white");
    }
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
