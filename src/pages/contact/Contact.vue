<template>
  <section class="pt-6 lg:pt-0">
    <div class="max-w-[1305px] mx-auto">
      <!-- bread cumb  -->
      <BreadCumb
        :name="'Contact'"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        :addmarginTop="true"
      ></BreadCumb>

      <ContactForm
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        :showColor="false"
      ></ContactForm>
    </div>
  </section>
</template>

<script>
import ContactForm from "../../components/pages/contact/ContactForm.vue";
import BreadCumb from "../../components/ui/BreadCumb.vue";
import { setPageTitle } from "../../util/utils";

export default {
  components: { ContactForm, BreadCumb },
  created() {
    // Set the page title when the component is created
    setPageTitle('Trivialy | Contact');
  },
  methods: {
    handleRouting(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped></style>
