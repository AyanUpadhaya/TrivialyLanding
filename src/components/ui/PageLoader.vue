<template>
  <div class="page-loader" :class="!loading ? 'slide-out' : ''">
    <div class="loader-content">
      <!-- Place your image placeholder here -->
      <img
        :src="logo"
        alt="Loading"
        class="animate-pulse"
        
      />
    </div>
  </div>
</template>

<script>
import { logo } from "../../assets/getAssets.js";
export default {
  data() {
    return {
      loading: true,
      logo,
    };
  },
  methods: {
    afterLeave(el) {
      el.style.transform = "translateX(0)";
    },
  },
  mounted() {
    // Listen for the window's load event to determine when the page has fully loaded
    window.onload = () => {
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    };
  },
};
</script>

<style scoped>
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #252050;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
  transition: all 0.75s ease-in-out;
  opacity: 1;
}

.slide-out {
  transform: translateX(-100%);
  opacity: 0;
  transition: all 0.75s ease-in;
}
</style>
