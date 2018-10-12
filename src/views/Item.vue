<template>
  <div class="item">
    <!-- <vue-breadcrumbs /> -->
    <vue-item />
    <!-- <vue-card /> [Will be used to show other items from same category] -->
    <vue-footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import VueBreadcrumbs from '@/components/VueBreadcrumbs.vue'
import VueItem from '@/components/VueItem.vue'
import VueCard from '@/components/VueCard.vue'
import VueFooter from '@/components/VueFooter.vue'

export default {
  name: 'category',
  components: {
    // VueBreadcrumbs,
    VueHero,
    VueCard,
    VueFooter
  }
}
</script>