<template>
  <div
    class="h-full sticky top-[150px] hidden  w-full max-w-[320px] lg:flex flex-col items-start justify-start gap-[40px_0px] text-left text-xl text-color-text-colors-disabled font-inter mb-[106px]"
  >
    <SearchBar/>


    <!-- view handlers -->
     <!-- view handlers -->
     <div
      class="w-80 rounded-3xl bg-color-neutral-colors-50 box-border hidden lg:flex flex-col items-start justify-start p-6 text-black-medium-emp border-[1px] border-solid border-color-neutral-colors-200"
    >
      <div
        class="self-stretch flex flex-col items-center justify-start gap-[4px_0px]"
      >
        <!-- Getting started -->
        <div
          class="overflow-hidden self-stretch rounded-xl bg-color-neutral-colors-50 cursor-pointer"
          @click="handleToggleDropdown('getting-started', false)"
        >
          <div
            class="flex flex-row items-center justify-start py-4 px-5 gap-2"
            :class="
              currentPage == 'Admin Dashboard' ||
              currentPage == 'System Requirements' ||
              currentPage == 'Installation'
                ? ' text-color-primary-color-500 active'
                : 'text-black-medium-emp'
            "
          >
            <!-- getting started -->
            <img
              class="w-8 relative h-8 overflow-hidden shrink-0"
              alt=""
              :src="folder"
            />
            <div class="flex-1 relative leading-[140%]">Getting Started</div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                class="duration-300"
                :class="
                  activeDropdown == 'getting-started'
                    ? '  -rotate-180'
                    : '  -rotate-0'
                "
              >
                <path
                  d="M10.8331 19.9994L16.0065 14.826L21.1798 19.9994C21.6998 20.5194 22.5398 20.5194 23.0598 19.9994C23.5798 19.4794 23.5798 18.6394 23.0598 18.1194L16.9398 11.9994C16.4198 11.4794 15.5798 11.4794 15.0598 11.9994L8.9398 18.1194C8.4198 18.6394 8.4198 19.4794 8.9398 19.9994C9.4598 20.506 10.3131 20.5194 10.8331 19.9994Z"
                  :class="
                    activeDropdown == 'getting-started'
                      ? ' fill-[#706AEA] '
                      : ' fill-[#A0A0A0] '
                  "
                />
              </svg>
            </span>
          </div>

          <!-- sub menus -->
          <div
            ref="gettinStartedRef"
            class="duration-300"
            :style="{
              maxHeight:
                activeDropdown == 'getting-started' && showSidebar
                  ? this.gettinStartedRef?.scrollHeight + 'px'
                  : '0',
            }"
          >
            <!-- sys requirements -->
            <div class="flex flex-col font-inter">
              <!-- sys requirements -->
              <div
                class="text-black-medium-emp text-[18px] py-3 px-6 cursor-pointer"
                @click="
                  () => {
                    handleView('System Requirements');
                    handleToggleDropdown('getting-started', false);
                  }
                "
                :class="currentPage == 'System Requirements' ? 'active' : ''"
              >
                <div class="pl-10">System Requirements</div>
              </div>
              <!-- installation -->
              <div
                class="text-black-medium-emp text-[18px] py-3 px-6 cursor-pointer"
                @click="
                  () => {
                    handleView('Installation');
                    handleToggleDropdown('getting-started', false);
                  }
                "
                :class="currentPage == 'Installation' ? 'active' : ''"
              >
                <div class="pl-10">Installation</div>
              </div>
              <!-- Admin Dashboard -->
              <div
                class="text-black-medium-emp text-[18px] py-3 px-6 cursor-pointer"
                @click="
                  () => {
                    handleView('Admin Dashboard');
                    handleToggleDropdown('getting-started', false);
                  }
                "
                :class="currentPage == 'Admin Dashboard' ? 'active' : ''"
              >
                <div class="pl-10">Admin Dashboard</div>
              </div>
            </div>
          </div>
        </div>

    
        <!-- upgrade -->
        <div
          @click="
            () => {
              handleView('Upgrade');

              handleToggleDropdown('context', false);
            }
          "
          :class="currentPage == 'Upgrade' ? 'active' : ''"
          class="self-stretch flex flex-row items-center justify-start py-3 px-5 cursor-pointer gap-2"
        >
          <img
            class="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            :src="folder"
          />
          <div class="flex-1 relative leading-[140%]">Upgrade</div>
        </div>

        <!-- text-quiz -->
        <div
          class="overflow-hidden self-stretch rounded-xl bg-color-neutral-colors-50 cursor-pointer"
          @click="handleToggleDropdown('text-quiz', false)"
        >
          <div
            class="flex flex-row items-center justify-start py-4 px-5 gap-2"
            :class="
              currentPage == 'Create Campaign' ||
              currentPage == 'Custom Campaign'
                ? ' text-color-primary-color-500 active'
                : 'text-black-medium-emp'
            "
          >
            <!-- text-quiz -->
            <img
              class="w-8 relative h-8 overflow-hidden shrink-0"
              alt=""
              :src="folder"
            />
            <div class="flex-1 relative leading-[140%]">Text Quiz</div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                class="duration-300"
                :class="
                  activeDropdown == 'text-quiz'
                    ? '  -rotate-180'
                    : '  -rotate-0'
                "
              >
                <path
                  d="M10.8331 19.9994L16.0065 14.826L21.1798 19.9994C21.6998 20.5194 22.5398 20.5194 23.0598 19.9994C23.5798 19.4794 23.5798 18.6394 23.0598 18.1194L16.9398 11.9994C16.4198 11.4794 15.5798 11.4794 15.0598 11.9994L8.9398 18.1194C8.4198 18.6394 8.4198 19.4794 8.9398 19.9994C9.4598 20.506 10.3131 20.5194 10.8331 19.9994Z"
                  :class="
                    activeDropdown == 'text-quiz'
                      ? ' fill-[#706AEA] '
                      : ' fill-[#A0A0A0] '
                  "
                />
              </svg>
            </span>
          </div>

          <!-- sub menus -->
          <div
            ref="textQuizRef"
            class="duration-300"
            :style="{
              maxHeight:
                activeDropdown == 'text-quiz' && showSidebar
                  ? this.textQuizRef?.scrollHeight + 'px'
                  : '0',
            }"
          >
            <div class="flex flex-col font-inter">
              <div
                class="text-black-medium-emp text-[18px] py-3 px-6 cursor-pointer"
                @click="
                  () => {
                    handleView('Create Campaign');
                    handleToggleDropdown('text-quiz', false);
                  }
                "
                :class="currentPage == 'Create Campaign' ? 'active' : ''"
              >
                <div class="pl-10">Create Campaign</div>
              </div>

              <div
                class="text-black-medium-emp text-[18px] py-3 px-6 cursor-pointer"
                @click="
                  () => {
                    handleView('Custom Campaign');
                    handleToggleDropdown('text-quiz', false);
                  }
                "
                :class="currentPage == 'Custom Campaign' ? 'active' : ''"
              >
                <div class="pl-10">Custom Campaign</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Image Quiz -->

        <div
          @click="
            () => {
              handleView('Image Quiz');
              handleToggleDropdown('context', false);
            }
          "
          :class="currentPage == 'Image Quiz' ? 'active' : ''"
          class="self-stretch flex flex-row items-center justify-start py-3 px-5 cursor-pointer gap-2"
        >
          <img
            class="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            :src="folder"
          />
          <div class="flex-1 relative leading-[140%]">Image Quiz</div>
        </div>
        <!-- Spin n Win -->
        <div
          @click="
            () => {
              handleView('Spin n Win');
              handleToggleDropdown('context', false);
            }
          "
          :class="currentPage == 'Spin n Win' ? 'active' : ''"
          class="self-stretch flex flex-row items-center justify-start py-3 px-5 cursor-pointer gap-2"
        >
          <img
            class="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            :src="folder"
          />
          <div class="flex-1 relative leading-[140%]">Spin n Win</div>
        </div>
        <!-- Scratch n Win -->
        <div
          @click="
            () => {
              handleView('Scratch n Win');
              handleToggleDropdown('context', false);
            }
          "
          :class="currentPage == 'Scratch n Win' ? 'active' : ''"
          class="self-stretch flex flex-row items-center justify-start py-3 px-5 cursor-pointer gap-2"
        >
          <img
            class="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            :src="folder"
          />
          <div class="flex-1 relative leading-[140%]">Scratch n Win</div>
        </div>
        <!-- Drag n Match -->
        <div
          @click="
            () => {
              handleView('Drag n Match');
              handleToggleDropdown('context', false);
            }
          "
          :class="currentPage == 'Drag n Match' ? 'active' : ''"
          class="self-stretch flex flex-row items-center justify-start py-3 px-5 cursor-pointer gap-2"
        >
          <img
            class="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            :src="folder"
          />
          <div class="flex-1 relative leading-[140%]">Drag n Match</div>
        </div>
        <!-- Popup -->
        <div
          @click="
            () => {
              handleView('Popup');
              handleToggleDropdown('context', false);
            }
          "
          :class="currentPage == 'Popup' ? 'active' : ''"
          class="w-[273px] flex flex-row items-center justify-start py-3 px-5 cursor-pointer box-border gap-2"
        >
          <img
            class="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            :src="folder"
          />
          <div class="flex-1 relative leading-[140%]">Popup</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { folder } from "../../assets/getAssets";
import SearchBar from "../ui/SearchBar.vue";
export default {
  data() {
    return {
      folder,
      activeDropdown: "",
      showSidebar: true,
    };
  },
  props: {
    handleView: Function,
    currentPage: String,
  },

  mounted() {
    this.textQuizRef = this.$refs.textQuizRef;
    this.gettinStartedRef = this.$refs.gettinStartedRef;
  },
  methods: {
    scrollTo(id) {
      // Using $nextTick to ensure the DOM has been updated
      this.$nextTick(() => {
        // Get the target element using its id
        const targetElement = document.getElementById(`${id}`);

        // Scroll smoothly to the target element
        if (targetElement) {
          // Calculate the target position, considering the offset

          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }
      });
    },
    handleToggleDropdown(value, submenu) {
      if (this.showSidebar) {
        if (value === this.activeDropdown && !submenu) {
          this.activeDropdown = "";
          if (this.sidebar == true) {
          }
        } else {
          this.activeDropdown = value;
        }
      } else {
        this.activeDropdown = value;
      }
    },
  },
  components:{
    SearchBar
  }
};
</script>

<style scoped>
.active {
  color: #706aea;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%; /* 28px */
}
</style>
