<template>
  <div class="category">
    <!-- <vue-breadcrumbs /> -->
    <vue-card />
    <vue-footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import VueBreadcrumbs from '@/components/VueBreadcrumbs.vue'
import VueCard from '@/components/VueCard.vue'
import VueFooter from '@/components/VueFooter.vue'

export default {
  name: 'category',
  components: {
    // VueBreadcrumbs,
    VueCard,
    VueFooter
  }
}
</script>