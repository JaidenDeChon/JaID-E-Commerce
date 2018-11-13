// To Do
// Style the breadcrumbs

<template>
<div id="breadcrumbs">
    <router-link :to="{ name: 'home' }" >Home</router-link>
    &bull;
    <router-link :to="{ name: 'category', params: { categoryName: $route.params.categoryName } }" >{{ $route.params.categoryName }}</router-link>
    &bull;
    <p>{{ $route.params.itemTitle }}</p>
</div>
</template>

<script>
export default {
  name: "VueCrumbs"
};
</script>

<style>
/* Reset for mobile browsers */

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

/* smartphones, portrait iPhone, portrait 480x320 phones (Android) */

@media (min-width: 280px) {
  #breadcrumbs {
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    color: #333;
    line-height: 50px;
    font-size: 14px;
    width: 90vw;
    height: 50px;
    margin: 0 auto;
    /* border: 1px solid red; */
  }
  #breadcrumbs a,
  #breadcrumbs p {
    display: inline;
  }
  #breadcrumbs a {
    text-decoration: underline !important;
  }
  #breadcrumbs a:visited {
    color: #333;
  }
}

/*  Higher resolution portrait mobile devices  */

@media (min-width: 400px) {
}

/* Landscape iPhones */

@media (min-width: 568px) {
  #breadcrumbs a,
  #breadcrumbs p {
    font-size: 15px;
  }
}

/* portrait iPad */

@media (min-width: 750px) {
}

/* landscape standard tablets, lo-res laptops and desktops */

@media (min-width: 801px) {
}

/* For laptops and desktops, and landscape big tablets */

@media (min-width: 1000px) {
}

/*  Full HD laptops & desktops, big tablets   */

@media (min-width: 1920px) {
}

/* 4K Screens */

@media (min-width: 1400px) {
}
</style>
