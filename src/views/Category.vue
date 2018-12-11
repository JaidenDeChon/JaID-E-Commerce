<template>
  <div class="category">
    <vue-card />
    <vue-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import VueCard from "@/components/VueCard.vue";
import VueFooter from "@/components/VueFooter.vue";

export default {
  name: "Category",
  components: {
    VueCard,
    VueFooter
  }
};
</script>
