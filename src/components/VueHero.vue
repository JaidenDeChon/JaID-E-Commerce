
<template>

  <div v-if="$route.path == '/'" id="hero-container" v-bind:style="{ background: 'url(' + this.$store.state.catelogue.banner + ')'}">
    <div id="hero-text">
      <h1 id="hero-big">yosemite</h1>
      <p id="hero-small">open-source e-commerce by Jaiden DeChon</p>
    </div>
  </div>

  <div v-else-if="['category', 'item'].indexOf($route.name) > -1" id="hero-outside-container">
    <template v-for="category in this.$store.state.catelogue.categories" v-if="category.name === $route.params.categoryName">
      <div :key="category" id="hero-container" v-bind:style="{background: 'url(' + category.banner + ')'}">
        <div id="hero-text">
          <h1 id="hero-big">{{ category.name }}</h1>
          <p v-if="category.desc" id="hero-small">{{ category.desc }}</p>
        </div>
      </div>
    </template>
  </div>

</template>

<script>
export default {
  name: "VueHero"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Advent+Pro|Raleway");

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

#hero-container {
  background-size: cover !important;
  background-position: center center !important;
  border-radius: 10px;
  width: 90vw;
  margin: 35px auto;
  display: flex;
}

#hero-text {
  width: 100%;
  height: 100%;
  margin: 0 10vw;
  text-shadow: 0 0 20px black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#hero-big {
  font-family: Advent Pro, sans-serif;
  font-size: 80px;
  letter-spacing: -5px;
  color: white;
  margin: 10px 0;
}

#hero-small {
  color: white;
  font-family: "Raleway", sans-serif;
  text-align: center;
  margin: 10px 0;
}

@media (min-width: 280px) {
  #hero-container {
    height: 650px;
  }
}

@media (min-width: 568px) {
  #hero-big {
    font-size: 100px;
  }
}

@media (min-width: 750px) {
  #hero-big {
    font-size: 125px;
    letter-spacing: -8px;
  }
}

@media (min-width: 801px) {
  #hero-big {
    font-size: 150px;
  }
}

@media (min-width: 1000px) {
  #hero-big {
    font-size: 170px;
  }
  #hero-container {
    margin: 0 auto 35px auto;
  }
  #hero-container {
    height: 780px;
  }
}

@media (min-width: 1920px) {
  #hero-big {
    font-size: 200px;
  }
}
</style>
