<template>
  <section class="pt-6 lg:pt-[40px]">
    <div class="max-w-[1305px] mx-auto">
      <!-- bread cumb  -->
      <div
        class="flex flex-wrap gap-1 lg:gap-2 items-center mb-4 lg:mb-[60px] px-4"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <span
          class="font-inter text-xs md:text-base text-black-low-emp cursor-pointer"
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
        <span
          v-if="second"
          class="font-inter text-xs md:text-base text-black-medium-emp font-normal"
          >Documentation</span
        >
        <span
          v-else
          class="font-inter text-xs md:text-base text-color-primary-color-900 font-semibold"
          >Documentation</span
        >
        <div v-if="first" class="flex gap-2 items-center">
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
          <span
            class="font-inter text-xs md:text-base whitespace-nowrap text-ellipsis"
            :class="
              currentPage == first
                ? 'text-primary-color-900 font-semibold'
                : 'text-black-medium-emp font-normal'
            "
            >{{ first }}</span
          >
        </div>
        <div v-if="second" class="flex gap-2 items-center">
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
          <span
            class="font-inter text-xs md:text-base whitespace-nowrap text-ellipsis"
            :class="
              currentPage == second
                ? 'text-primary-color-900 font-semibold'
                : 'text-black-medium-emp font-normal'
            "
            >{{ second }}</span
          >
        </div>
      </div>

      <!-- layout -->

      <div
        class="w-full h-full flex flex-col lg:flex-row gap-4 lg:gap-[60px] items-start px-4"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <MobileDocSideBar
          :isShowDocMenu="isShowDocMenu"
          :handleShowDocMenu="handleShowDocMenu"
          :currentPage="currentPage"
          :handleView="handleView"
        ></MobileDocSideBar>
        <DocSidebar
          :handleView="handleView"
          :currentPage="currentPage"
        ></DocSidebar>

        <!-- small search bar -->
        <div class="w-full lg:hidden flex items-center gap-4">
          <button
            class="rounded-xl p-3 border border-neutratl-border-color"
            @click="handleShowDocMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M5.83333 24H27.1667C27.9 24 28.5 23.4 28.5 22.6667C28.5 21.9333 27.9 21.3333 27.1667 21.3333H5.83333C5.1 21.3333 4.5 21.9333 4.5 22.6667C4.5 23.4 5.1 24 5.83333 24ZM5.83333 17.3333H27.1667C27.9 17.3333 28.5 16.7333 28.5 16C28.5 15.2667 27.9 14.6667 27.1667 14.6667H5.83333C5.1 14.6667 4.5 15.2667 4.5 16C4.5 16.7333 5.1 17.3333 5.83333 17.3333ZM4.5 9.33333C4.5 10.0667 5.1 10.6667 5.83333 10.6667H27.1667C27.9 10.6667 28.5 10.0667 28.5 9.33333C28.5 8.6 27.9 8 27.1667 8H5.83333C5.1 8 4.5 8.6 4.5 9.33333Z"
                fill="#252525"
              />
            </svg>
          </button>
          <SearchBar></SearchBar>
        </div>

        <div class="pb-10 lg:pb-20">
          <Install v-if="currentPage == 'Install'"></Install>
          <SpinAndWin v-if="currentPage == 'Spin n Win'"></SpinAndWin>
          <ScratchAndWin v-if="currentPage == 'Scratch n Win'"></ScratchAndWin>
          <Upgrade v-if="currentPage == 'Upgrade'"></Upgrade>
          <PopUp v-if="currentPage == 'Popup'"></PopUp>
          <ImageQuiz v-if="currentPage == 'Image Quiz'"></ImageQuiz>
          <DragAndMatch v-if="currentPage == 'Drag n Match'"></DragAndMatch>
          <CreateCampaign
            v-if="currentPage == 'Create Campaign'"
          ></CreateCampaign>
          <CustomCampaign
            v-if="currentPage == 'Custom Campaign'"
          ></CustomCampaign>
          <SystemRequirements
            v-if="currentPage == 'System Requirements'"
          ></SystemRequirements>
          <AdminDashboard
            v-if="currentPage == 'Admin Dashboard'"
          ></AdminDashboard>
          <Installtion v-if="currentPage == 'Installation'"></Installtion>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DocSidebar from "../../components/shared/DocSidebar.vue";
import MobileDocSideBar from "../../components/shared/MobileDocSideBar.vue";
import SearchBar from "../../components/ui/SearchBar.vue";

//pages

import Install from "../../components/pages/documentation/Install.vue";

import SpinAndWin from "../../components/pages/documentation/SpinAndWin.vue";
import ScratchAndWin from "../../components/pages/documentation/ScratchAndWin.vue";
import Upgrade from "../../components/pages/documentation/Upgrade.vue";
import PopUp from "../../components/pages/documentation/PopUp.vue";
import ImageQuiz from "../../components/pages/documentation/ImageQuiz.vue";
import DragAndMatch from "../../components/pages/documentation/DragAndMatch.vue";
import CreateCampaign from "../../components/pages/documentation/CreateCampaign.vue";
import CustomCampaign from "../../components/pages/documentation/CustomCampaign.vue";
import SystemRequirements from "../../components/pages/documentation/SystemRequirements.vue";
import AdminDashboard from "../../components/pages/documentation/AdminDashboard.vue";
import Installtion from "../../components/pages/documentation/Installtion.vue";

import { setPageTitle } from "../../util/utils";
export default {
  data() {
    return {
      currentPage: "System Requirements",
      first: "",
      second: "",
      isShowDocMenu: false,
    };
  },

  created() {
    // Set the page title when the component is created
    setPageTitle("Trivialy | Documentation");
  },

  components: {
    DocSidebar,
    Install,
    SpinAndWin,
    ScratchAndWin,
    Upgrade,
    PopUp,
    ImageQuiz,
    DragAndMatch,
    CreateCampaign,
    CustomCampaign,
    SystemRequirements,
    AdminDashboard,
    Installtion,
    MobileDocSideBar,
    SearchBar,
  },
  methods: {
    handleRouting(path) {
      this.$router.push(path);
    },
    handleBreadCumb(view) {
      if (view == "Create Campaign" || view == "Custom Campaign") {
        this.first = "Text Quiz";
        this.second = view;
      } else if (
        view == "System Requirements" ||
        view == "Installation" ||
        view == "Admin Dashboard"
      ) {
        this.first = "Getting Started";
        this.second = view;
      } else {
        this.first = "";
        this.second = view;
      }
    },
    handleView(view) {
      this.handleBreadCumb(view);
      this.currentPage = view;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    handleShowDocMenu() {
      this.isShowDocMenu = !this.isShowDocMenu;
    },
  },
};
</script>

<style scoped></style>
