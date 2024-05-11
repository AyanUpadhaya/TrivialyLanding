<template>
  <div
    class="fixed w-full h-screen py-2 md:py-4 lg:py-6 z-[1000] shadow-navShadow px-8 bg-darkslateblue overflow-hidden duration-300 lg:hidden"
    :class="{
      'slide-in': isShowMenu,
      'slide-out': !isShowMenu,
      'white-bg': isWhiteBackground,
    }"
  >
    <div class="mb-[51px] flex justify-end relative -right-4">
      <button @click="handleShowMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M27.4501 8.56508C26.8651 7.98008 25.9201 7.98008 25.3351 8.56508L18.0001 15.8851L10.6651 8.55008C10.0801 7.96508 9.13508 7.96508 8.55008 8.55008C7.96508 9.13508 7.96508 10.0801 8.55008 10.6651L15.8851 18.0001L8.55008 25.3351C7.96508 25.9201 7.96508 26.8651 8.55008 27.4501C9.13508 28.0351 10.0801 28.0351 10.6651 27.4501L18.0001 20.1151L25.3351 27.4501C25.9201 28.0351 26.8651 28.0351 27.4501 27.4501C28.0351 26.8651 28.0351 25.9201 27.4501 25.3351L20.1151 18.0001L27.4501 10.6651C28.0201 10.0951 28.0201 9.13508 27.4501 8.56508Z"
            :class="currentBackground == 'white' ? 'fill-black' : 'fill-white'"
          />
        </svg>
      </button>
    </div>
    <nav class="flex flex-col items-center justify-between h-[calc(100%-80px)]">
      <!-- links -->
      <div class="block">
        <ul class="flex flex-col gap-10 justify-center items-center">
          <!-- home -->
          <li
            class="uppercase"
            :class="
              currentBackground == 'blue'
                ? activePath == 'home'
                  ? ' text-primary-color-500 font-inter text-base font-bold flex flex-col gap-y-[6px] duration-100'
                  : 'text-white  font-inter text-base font-normal flex flex-col gap-0 duration-100'
                : 'text-black-medium-emp'
            "
          >
            <router-link
              :to="{ name: 'home' }"
              @click="
                () => {
                  handleColorChange('blue');
                  handleShowMenu();
                }
              "
              >Home</router-link
            >
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
            class="uppercase"
            :class="
              currentBackground == 'white'
                ? activePath == 'documentation'
                  ? ' text-primary-color-500 font-inter text-base font-bold flex flex-col gap-y-[6px] duration-100'
                  : 'text-black-medium-emp  font-inter text-base font-normal flex flex-col gap-0 duration-100'
                : 'text-white'
            "
          >
            <router-link
              :to="{ name: 'documentation' }"
              @click="
                () => {
                  handleColorChange('white');
                  handleShowMenu();
                }
              "
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
            class="uppercase"
            :class="
              currentBackground == 'white'
                ? activePath == 'pricing'
                  ? ' text-primary-color-500 font-inter text-base font-bold flex flex-col gap-y-[6px] duration-100'
                  : 'text-black-medium-emp  font-inter text-base font-normal flex flex-col gap-0 duration-100'
                : 'text-white'
            "
          >
            <router-link
              :to="{ name: 'pricing' }"
              @click="
                () => {
                  handleColorChange('white');
                  handleShowMenu();
                }
              "
              >Pricing</router-link
            >
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
            class="uppercase"
            :class="
              currentBackground == 'white'
                ? activePath == 'contact'
                  ? ' text-primary-color-500 font-inter text-base font-bold flex flex-col gap-y-[6px] duration-100'
                  : 'text-black-medium-emp  font-inter text-base font-normal flex flex-col gap-0 duration-100'
                : 'text-white'
            "
          >
            <router-link
              :to="{ name: 'contact' }"
              @click="
                () => {
                  handleColorChange('white');
                  handleShowMenu();
                }
              "
              >Contact</router-link
            >
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
      <div class="mb-10 w-full flex justify-center">
        <button
          class="btn border-2 border-color-primary-color-900 rounded-xl w-full max-w-[240px] text-center bg-transparent lg:hover:bg-color-primary-color-900 lg:hover:text-white lg:hover:border-none"
          :class="
            currentBackground == 'white'
              ? 'text-color-primary-color-900'
              : 'text-white'
          "
        >
          Download
        </button>
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
      activePath: "",
      // currentBackground: "",
    };
  },
  computed: {
    isWhiteBackground() {
      return (
        this.activePath === "documentation" ||
        this.activePath === "pricing" ||
        this.activePath === "contact" ||
        this.activePath === "faq" ||
        this.activePath === "terms-conditions" ||
        this.activePath === "about" ||
        this.activePath === "common-queries"
      );
    },
  },
  props: {
    isShowMenu: {
      type: Boolean,
      default: false,
    },
    handleShowMenu: Function,
    currentBackground: String,
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
    window.removeEventListener("resize", this.closeMenuOnResize);
  },
};
</script>

<style scoped>
/* ... existing styles ... */

/* Add new styles for the sliding effect */
.slide-in {
  transform: translateX(0);
}

.slide-out {
  transform: translateX(-100%);
}

.transition-transform {
  transition: transform 0.3s ease-out;
}

.white-bg {
  background-color: white;
}
</style>
