<template>
  <div class="category">
    <!-- <vue-breadcrumbs /> -->
    <vue-item />
    <vue-card />
    <vue-footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import VueBreadcrumbs from '@/components/VueBreadcrumbs.vue'
import VueItem from "@/components/VueItem.vue";
import VueCard from "@/components/VueCard.vue";
import VueFooter from "@/components/VueFooter.vue";

export default {
  name: "Category",
  components: {
    // VueBreadcrumbs,
    VueItem,
    VueCard,
    VueFooter
  }
};
</script>
