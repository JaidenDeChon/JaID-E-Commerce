<template>
  <div class="home">
    <vue-hero />
    <vue-header />
    <vue-card />
    <vue-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import VueHero from "@/components/VueHero.vue";
import VueHeader from "@/components/VueHeader.vue";
import VueCard from "@/components/VueCard.vue";
import VueFooter from "@/components/VueFooter.vue";

export default {
  name: "Home",
  components: {
    VueHero,
    VueHeader,
    VueCard,
    VueFooter
  }
};
</script>
