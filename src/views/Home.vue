<template>
  <div class="home">
    <vue-hero />
    <vue-card />
    <vue-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import VueHero from "@/components/VueHero.vue";
import VueCard from "@/components/VueCard.vue";
import VueFooter from "@/components/VueFooter.vue";

export default {
  name: "home",
  components: {
    VueHero,
    VueCard,
    VueFooter
  }
};
</script>
