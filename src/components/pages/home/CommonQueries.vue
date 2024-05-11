<template>
  <section :class="isFaq?'':'bg-darkslateblue'" class="px-4 overflow-hidden">
    <div class="max-w-[1305px] mx-auto " :class="isFaq?'lg:pb-[88px] pb-[60px] ':'pb-[60px] lg:pb-[117px]'">
      <!-- card 1 -->
      <div
        class="w-full"
        :class="
        showColor?'bg-primary-color-100':'',
        isFaq?'py-6 lg:p-0  rounded-[20px] lg:rounded-[40px] lg:bg-transparent ':'py-6 lg:py-20 shadow-cardShadow px-4 lg:px-8 rounded-[28px] lg:rounded-[40px]'
        "
        
      >
        <div class="max-w-[1176px] mx-auto flex flex-col gap-4 lg:gap-[60px]" :class="isFaq?'max-w-full mx-0':''">
          <!-- top -->
          <div class="flex flex-col gap-4 lg:gap-[18px] items-center" data-aos="fade-down"
        data-aos-duration="1500">
            <h3
              class=" font-bold font-inter text-[20px] text-center xs:text-[32px] lg:text-[56px] leading-[36.8px] lg:leading-[58.8px] py-2 lg:py-0"
              :class="isHeadingWhite?'text-white':'text-color-primary-color-900'"
            >
              Common Queries
            </h3>
            <p 
            class="font-inter text-black-low-emp text-xs xs:text-sm lg:text-xl leading-[18.2px]  lg:leading-7 text-center max-w-[296px] md:max-w-full"
            :class="isParaWhite?'text-white-medium-emp':'text-black-low-emp'"
            >
              Dive in to find straightforward solutions, helpful tips, and make
              the most of your journey with Trivally.
            </p>
          </div>
          <!-- middle -->
          <div data-aos="fade-up"
        data-aos-duration="1500" class="flex flex-col lg:flex-row gap-2 lg:gap-10" :class="isFaq&&'py-5 px-4 lg:py-20  lg:px-[64px] rounded-[20px] lg:rounded-[40px] bg-neutral-40'">
            <div class="flex flex-col gap-2 lg:gap-6 w-full">
              <div
             
                class="collapse bg-white cursor-pointer rounded-2xl lg:rounded-xl"
                v-for="(item, index) in questions.slice(0, 3)"
              >
                <input
                  type="checkbox"
                  :checked="activeAccordion === item?.id"
                  @click="changeAccorion(item?.id)"
                />
                <div
                  class="collapse-title flex justify-between items-start gap-6 w-full p-4 lg:py-8 lg:px-6"
                >
                  <div
                    class="w-full flex justify-between items-center text-primary-color-900 font-inter font-semibold text-sm xs:text-base lg:text-[20px]"
                  >
                    {{ item?.question }}
                  </div>

                  <div class="flex justify-end flex-1">
                    <!-- svgs -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M17.0896 9.0036L17.7929 9.70687L12.5 14.9998L7.20711 9.70687L7.91039 9.0036L12.1468 13.2308L12.5 13.5832L12.8532 13.2308L17.0896 9.0036Z"
                        
                        :class="
                        activeAccordion === item?.id?'fill-[#8789F2] stroke-[#706AEA]':'fill-[#CAD1FB] stroke-[#CAD1FB]'
                        "
                      />
                    </svg>
                  </div>
                </div>
                <div class="collapse-content p-0">
                  <p class="text-black-low-emp font-inter text-xs xs:text-sm lg:text-lg px-4 lg:px-6">
                    {{ item?.answer }}
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-2 lg:gap-6 w-full">
              <div
              
                class="collapse bg-white cursor-pointer ounded-2xl lg:rounded-xl"
                v-for="(item, index) in questions.slice(3, 6)"
              >
                <input
                  type="checkbox"
                  :checked="activeAccordion === item?.id"
                  @click="changeAccorion(item?.id)"
                />
                <div
                  class="collapse-title flex justify-between items-start gap-6 w-full p-4 lg:py-8 lg:px-6 "
                >
                  <div
                    class="w-full flex justify-between items-center text-primary-color-900 font-inter font-semibold text-sm xs:text-base lg:text-[20px]"
                  >
                    {{ item?.question }}
                  </div>

                  <div class="flex justify-end flex-1">
                    <!-- svgs -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M17.0896 9.0036L17.7929 9.70687L12.5 14.9998L7.20711 9.70687L7.91039 9.0036L12.1468 13.2308L12.5 13.5832L12.8532 13.2308L17.0896 9.0036Z"
                        
                        :class="
                        activeAccordion === item?.id?'fill-[#8789F2] stroke-[#706AEA]':'fill-[#CAD1FB] stroke-[#CAD1FB]'
                        "

                      />
                    </svg>
                  </div>
                </div>
                <div class="collapse-content p-0">
                  <p class="text-black-low-emp font-inter text-xs xs:text-sm lg:text-lg px-4 lg:px-6">
                    {{ item?.answer }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- bottom -->

          <div class="flex flex-col gap-6 justify-center items-center" data-aos="fade-down"
        data-aos-duration="1500">
            <div class="flex flex-col gap-[18px] items-center" >
              <h3
                class="font-bold font-inter text-sm xs:text-2xl lg:text-[40px] leading-[28.8px] lg:leading-[44px] text-center"
                :class="isHeadingWhite?'text-white':'text-primary-color-900 '"
              >
                Still have questions?
              </h3>
              <p class="font-inter text-xs xs:text-sm lg:text-xl leading-[18px] lg:leading-7 text-center max-w-[296px] md:max-w-full"
              :class="isParaWhite?'text-white-medium-emp':'text-black-medium-emp'"
              >
                Can’t find the answer you’re looking for?
                Please chat to our friendly team.
              </p>
            </div>
            <button  class="btn-secondary-main text-base font-semibold" @click="()=>handleRouting('/contact')">Get in touch</button>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props:{
    showColor: {
      type:Boolean,
      default: true,
    },
    isHeadingWhite:{
      type:Boolean,
      default: false,
    },
    isParaWhite:{
      type:Boolean,
      default: false,
    },
    isFaq:{
      type:Boolean,
      default: false,
    }
  },
  data() {
    return {
      activeAccordion: null,
      questions: [
        {
          id: "accordion_one",
          question: "How do I create a quiz using the plugin?",
          answer:
            "Creating a quiz is simple! Navigate to the dashboard, click on Create Quiz, and follow the intuitive interface to add questions, multimedia elements, and set up interactive features.",
        },
        {
          id: "accordion_two",
          question: "How can I track user engagement with my quizzes?",
          answer:
            "Creating a quiz is simple! Navigate to the dashboard, click on Create Quiz, and follow the intuitive interface to add questions, multimedia elements, and set up interactive features.",
        },
        {
          id: "accordion_three",
          question: "Can I customize the appearance of my quizzes?",
          answer:
            "Creating a quiz is simple! Navigate to the dashboard, click on Create Quiz, and follow the intuitive interface to add questions, multimedia elements, and set up interactive features.",
        },
        {
          id: "accordion_four",
          question: "Is it possible to embed quizzes on my website or blog?",
          answer:
            "Creating a quiz is simple! Navigate to the dashboard, click on Create Quiz, and follow the intuitive interface to add questions, multimedia elements, and set up interactive features.",
        },
        {
          id: "accordion_five",
          question: "Are there different types of quiz questions supported?",
          answer:
            "Creating a quiz is simple! Navigate to the dashboard, click on Create Quiz, and follow the intuitive interface to add questions, multimedia elements, and set up interactive features.",
        },
        {
          id: "accordion_six",
          question: "Is there a limit to the number of quizzes I can create?",
          answer:
            "Creating a quiz is simple! Navigate to the dashboard, click on Create Quiz, and follow the intuitive interface to add questions, multimedia elements, and set up interactive features.",
        },
      ],
    };
  },
  methods: {
    changeAccorion(value) {
      if (value === this.activeAccordion) {
        this.activeAccordion = null;
      } else {
        this.activeAccordion = value;
      }
    },
    handleRouting(path) {
      this.$router.push(path);
    },
   
  },
};
</script>

<style scoped>
input:checked + .collapse-title svg {
  transform: rotate(180deg);
}
</style>
