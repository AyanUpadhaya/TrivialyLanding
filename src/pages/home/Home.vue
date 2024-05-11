<template>
  <main class="overflow-x-hidden">
    <Hero></Hero>
    <HowItWorks></HowItWorks>
    <WhatTrivialyOffers></WhatTrivialyOffers>
    <VideoSection></VideoSection>
    <MoreFunctions></MoreFunctions>
    <Packages></Packages>
    <SuccessStories></SuccessStories>
    <CommonQueries></CommonQueries>
  </main>
</template>

<script>
import Hero from "../../components/pages/home/Hero.vue";
import HowItWorks from "../../components/pages/home/HowItWorks.vue";
import WhatTrivialyOffers from "../../components/pages/home/WhatTrivialyOffers.vue";
import VideoSection from "../../components/pages/home/VideoSection.vue";
import Packages from "../../components/pages/home/Packages.vue";
import SuccessStories from "../../components/pages/home/SuccessStories.vue";
import CommonQueries from "../../components/pages/home/CommonQueries.vue";
import MoreFunctions from "../../components/pages/home/MoreFunctions.vue";

export default {
  components: {
    Hero,
    HowItWorks,
    WhatTrivialyOffers,
    VideoSection,
    Packages,
    SuccessStories,
    CommonQueries,
    MoreFunctions,
  },
};
</script>

<style>
/* Define the scrollbar track */
::-webkit-scrollbar {
  width: 10px; /* Set the width of the scrollbar */
}

/* Define the scrollbar handle or thumb */
::-webkit-scrollbar-thumb {
  background-color: #4E43A7; /* Set the color of the scrollbar handle */
  border-radius: 5px; /* Set the border-radius for a rounded handle */
}

/* Define the scrollbar track on hover */
::-webkit-scrollbar-track{
  background-color: #4E43A7; /* Set the background color on hover */
}

/* Define the scrollbar handle on hover */
::-webkit-scrollbar-thumb {
  background-color: #EFF1FE; /* Set the handle color on hover */
}


/* Define the scrollbar track in a pressed state */
::-webkit-scrollbar-thumb:active {
  background-color: #EFF1FE; /* Set the handle color when pressed */
}
  
</style>
