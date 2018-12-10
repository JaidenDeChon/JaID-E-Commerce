<template>
  <div class="category">
    <vue-header />
    <vue-card />
    <vue-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import VueHeader from "@/components/VueHeader.vue";
import VueCard from "@/components/VueCard.vue";
import VueFooter from "@/components/VueFooter.vue";

export default {
  name: "Category",
  components: {
    VueHeader,
    VueCard,
    VueFooter
  }
};
</script>
