<template>
  <div class="item">
    <vue-crumbs />
    <vue-item />
    <vue-card /> <!-- [Will be used to show other items from same category] -->
    <vue-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import VueCrumbs from "@/components/VueCrumbs.vue";
import VueItem from "@/components/VueItem.vue";
import VueCard from "@/components/VueCard.vue";
import VueFooter from "@/components/VueFooter.vue";

export default {
  name: "Item",
  components: {
    VueCrumbs,
    VueItem,
    VueCard,
    VueFooter
  }
  // data() {
  //   item: this.$route.params.item
  // },
  // created() {
  //   console.log(item)
  // }
};
</script>
