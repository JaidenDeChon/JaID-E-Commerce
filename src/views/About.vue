<template>
  <div class="about">
    <h1>Route is working</h1>
    <vue-about-hero />
    <vue-quote />
    <vue-slider />
    <vue-goals />
    <vue-team />
  </div>
</template>

<script>
// @ is an alias to /src
import VueAboutHero from "@/components/about/VueAboutHero.vue";
import VueQuote from "@/components/about/VueQuote.vue";
import VueSlider from "@/components/about/VueSlider.vue";
import VueGoals from "@/components/about/VueGoals.vue";
import VueTeam from "@/components/about/VueTeam.vue";
import VueFooter from "@/components/VueFooter.vue";

export default {
  name: "About",
  components: {
    VueAboutHero,
    VueQuote,
    VueSlider,
    VueGoals,
    VueTeam,
    VueFooter
  }
};
</script>
