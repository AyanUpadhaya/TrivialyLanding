<template>
  
  <div class="relative">
    <PageLoader></PageLoader>
    <MobileNavbar
      :isShowMenu="isShowMenu"
      :handleShowMenu="handleShowMenu"
      :currentBackground="currentBackground"
      :handleColorChange="handleColorChange"
    ></MobileNavbar>
    <NavbarLight
      v-if="
        activePath === 'documentation' ||
        activePath === 'pricing' ||
        activePath === 'contact' ||
        activePath === 'faq' ||
        activePath === 'common-queries' ||
        activePath === 'terms-conditions' ||
        activePath === 'about'
      "
      :handleShowMenu="handleShowMenu"
      :handleColorChange="handleColorChange"
    ></NavbarLight>
    <Navbar
      :handleShowMenu="handleShowMenu"
      :handleColorChange="handleColorChange"
      v-else
    ></Navbar>
    <router-view></router-view>
    <LaunchQuiz></LaunchQuiz>
    <Footer :handleColorChange="handleColorChange"></Footer>
  </div>
</template>

<script>
import LaunchQuiz from "../components/shared/LaunchQuiz.vue";
import Footer from "../components/shared/Footer.vue";
import MobileNavbar from "../components/shared/MobileNavbar.vue";
import Navbar from "../components/shared/Navbar.vue";
import NavbarLight from "../components/shared/NavbarLight.vue";
import { getActivePath } from "../util/getActivePath";
import PageLoader from "../components/ui/PageLoader.vue";
export default {
  data() {
    return {
      activePath: "",
      isShowMenu: false,
      currentBackground: "",
    };
  },

  watch: {
    "$route.name"(newValue) {
      this.activePath = newValue;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.activePath = getActivePath(this.$route.name);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
    handleShowMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
    handleColorChange(color) {
      this.currentBackground = color;
    },
  },

  components: {
    Navbar,
    NavbarLight,
    MobileNavbar,
    LaunchQuiz,
    Footer,
    PageLoader,
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
