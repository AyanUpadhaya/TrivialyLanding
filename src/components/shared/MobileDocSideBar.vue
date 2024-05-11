<template>
  <div class="overflow-hidden lg:hidden">
    <div
      class="fixed top-0 left-0 z-[1000] w-full h-screen  flex flex-col items-start justify-start text-left text-xl text-color-text-colors-disabled font-inter bg-[#0000006c] duration-300"
      @click="handleShowDocMenu"
      :class="isShowDocMenu ? 'opacity-100 visible ' : 'opacity-0 invisible'"
    ></div>

    <!-- view handlers -->
    <div
      class="fixed top-0 left-0 z-[1200] w-80 h-screen overflow-auto bg-color-neutral-colors-50 box-border flex flex-col gap-8 items-start justify-start border text-black-medium-emp py-6 pl-[36px] pr-5 duration-300"
      :class="{
        'slide-in': isShowDocMenu,
        'slide-out': !isShowDocMenu,
      }"
    >
      <div class="flex justify-end w-full">
        <button @click="handleShowDocMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M24.4009 7.61427C23.8809 7.09427 23.0409 7.09427 22.5209 7.61427L16.0009 14.1209L9.48094 7.60094C8.96094 7.08094 8.12094 7.08094 7.60094 7.60094C7.08094 8.12094 7.08094 8.96094 7.60094 9.48094L14.1209 16.0009L7.60094 22.5209C7.08094 23.0409 7.08094 23.8809 7.60094 24.4009C8.12094 24.9209 8.96094 24.9209 9.48094 24.4009L16.0009 17.8809L22.5209 24.4009C23.0409 24.9209 23.8809 24.9209 24.4009 24.4009C24.9209 23.8809 24.9209 23.0409 24.4009 22.5209L17.8809 16.0009L24.4009 9.48094C24.9076 8.97427 24.9076 8.12094 24.4009 7.61427Z"
              fill="#5E6064"
            />
          </svg>
        </button>
      </div>
      <div
        class="self-stretch flex flex-col items-center justify-start gap-[4px_0px]"
      >
        <!-- Getting started -->
        <div
          class="overflow-hidden self-stretch bg-color-neutral-colors-50 cursor-pointer"
          @click="handleToggleDropdown('getting-started', false)"
        >
          <div
            class="flex flex-row items-center justify-start py-3 gap-[4px]"
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
            <div class="flex-1 relative leading-[140%] text-lg">
              Getting Started
            </div>
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
                class="text-black-medium-emp text-[18px] py-[6px] cursor-pointer"
                @click="
                  () => {
                    handleView('System Requirements');
                    handleToggleDropdown('getting-started', false);
                    handleShowDocMenu();
                  }
                "
                :class="currentPage == 'System Requirements' ? 'active' : ''"
              >
                <div class="pl-4 text-base">System Requirements</div>
              </div>
              <!-- installation -->
              <div
                class="text-black-medium-emp text-[18px] py-[6px] cursor-pointer"
                @click="
                  () => {
                    handleView('Installation');
                    handleToggleDropdown('getting-started', false);
                    handleShowDocMenu();
                  }
                "
                :class="currentPage == 'Installation' ? 'active' : ''"
              >
                <div class="pl-4 text-base">Installation</div>
              </div>
              <!-- Admin Dashboard -->
              <div
                class="text-black-medium-emp text-[18px] py-[6px] cursor-pointer"
                @click="
                  () => {
                    handleView('Admin Dashboard');
                    handleToggleDropdown('getting-started', false);
                    handleShowDocMenu();
                  }
                "
                :class="currentPage == 'Admin Dashboard' ? 'active' : ''"
              >
                <div class="pl-4 text-base">Admin Dashboard</div>
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
              handleShowDocMenu();
            }
          "
          :class="currentPage == 'Upgrade' ? 'active' : ''"
          class="self-stretch flex flex-row items-center justify-start py-3 gap-[4px] cursor-pointer"
        >
          <img
            class="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            :src="folder"
          />
          <div class="flex-1 relative leading-[140%] text-lg">Upgrade</div>
        </div>

        <!-- text-quiz -->
        <div
          class="overflow-hidden self-stretch rounded-xl bg-color-neutral-colors-50 cursor-pointer"
          @click="handleToggleDropdown('text-quiz', false)"
        >
          <div
            class="flex flex-row items-center justify-start py-3 gap-[4px] cursor-pointer"
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
            <div class="flex-1 relative leading-[140%] text-lg">Text Quiz</div>
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
                class="text-black-medium-emp text-[18px] py-[6px] cursor-pointer"
                @click="
                  () => {
                    handleView('Create Campaign');
                    handleToggleDropdown('text-quiz', false);
                    handleShowDocMenu();
                  }
                "
                :class="currentPage == 'Create Campaign' ? 'active' : ''"
              >
                <div class="pl-4 text-base">Create Campaign</div>
              </div>

              <div
                class="text-black-medium-emp text-[18px] py-[6px] cursor-pointer"
                @click="
                  () => {
                    handleView('Custom Campaign');
                    handleToggleDropdown('text-quiz', false);
                    handleShowDocMenu();
                  }
                "
                :class="currentPage == 'Custom Campaign' ? 'active' : ''"
              >
                <div class="pl-4 text-base">Custom Campaign</div>
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
              handleShowDocMenu();
            }
          "
          :class="currentPage == 'Image Quiz' ? 'active' : ''"
          class="self-stretch flex flex-row items-center justify-start py-3 gap-[4px] cursor-pointer"
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
              handleShowDocMenu();
            }
          "
          :class="currentPage == 'Spin n Win' ? 'active' : ''"
          class="self-stretch flex flex-row items-center justify-start py-3 gap-[4px] cursor-pointer"
        >
          <img
            class="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            :src="folder"
          />
          <div class="flex-1 relative leading-[140%] text-lg">Spin n Win</div>
        </div>
        <!-- Scratch n Win -->
        <div
          @click="
            () => {
              handleView('Scratch n Win');
              handleToggleDropdown('context', false);
              handleShowDocMenu();
            }
          "
          :class="currentPage == 'Scratch n Win' ? 'active' : ''"
          class="self-stretch flex flex-row items-center justify-start py-3 gap-[4px] cursor-pointer"
        >
          <img
            class="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            :src="folder"
          />
          <div class="flex-1 relative leading-[140%] text-lg">
            Scratch n Win
          </div>
        </div>
        <!-- Drag n Match -->
        <div
          @click="
            () => {
              handleView('Drag n Match');
              handleToggleDropdown('context', false);
              handleShowDocMenu();
            }
          "
          :class="currentPage == 'Drag n Match' ? 'active' : ''"
          class="self-stretch flex flex-row items-center justify-start py-3 cursor-pointer gap-[4px]"
        >
          <img
            class="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            :src="folder"
          />
          <div class="flex-1 relative leading-[140%] text-lg">Drag n Match</div>
        </div>
        <!-- Popup -->
        <div
          @click="
            () => {
              handleView('Popup');
              handleToggleDropdown('context', false);
              handleShowDocMenu();
            }
          "
          :class="currentPage == 'popup' ? 'active' : ''"
          class="self-stretch flex flex-row items-center justify-start py-3 cursor-pointer gap-[4px]"
        >
          <img
            class="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            :src="folder"
          />
          <div class="flex-1 relative leading-[140%] text-lg">Pop up</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { folder } from "../../assets/getAssets";
export default {
  data() {
    return {
      folder,
      activeDropdown: "",
      showSidebar: true,
    };
  },
  props: {
    isShowDocMenu: {
      type: Boolean,
      default: false,
    },
    handleShowDocMenu: Function,
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
    handleRouting(path) {
      this.$router.push(path);
    },
  },
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
