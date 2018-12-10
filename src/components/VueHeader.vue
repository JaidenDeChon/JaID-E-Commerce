
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

<template>
  
<div id="category-header">
  <div id="container">
    <div id="label-container" v-for="category in this.$store.state.catelogue.categories" v-if="category.name === $route.params.categoryName">
      <div id="breadcrumbs">
        <router-link to="/">Home</router-link>
        <p>&bull;</p>
        <p>{{ category.name }}</p>
      </div>
      <p id="label">{{ category.name }}</p>
    </div>
    <div id="buttons-container">
      <p>Page Layout</p>
      <div id="buttons">
        <button class="active" id="large"><i class="fas fa-th-large"></i></button>
        <button id="small"><i class="fas fa-th"></i></button>
      </div>
    </div>
  </div>
</div>

</template>


<script>
export default {
  name: "VueHero",
  mounted: function() {
    $("#buttons")
      .children("button")
      .click(function() {
        $(this).addClass("active");
        $(this)
          .siblings()
          .removeClass("active");
      });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Advent+Pro|Raleway");
html,
body {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

#category-header {
  width: 100vw;
  min-height: 200px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  color: #555;
  font-size: 30px;
  font-weight: bold;
  background: #e8e8e8;
}
#category-header #container {
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#category-header #container #label-container {
  flex-grow: 1;
  min-height: 120px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#category-header #container #label-container #breadcrumbs,
#category-header #container #label-container #label {
  margin: 5px;
}
#category-header #container #label-container #breadcrumbs {
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#category-header #container #label-container #breadcrumbs a,
#category-header #container #label-container #breadcrumbs p {
  margin-right: 10px;
  font-size: 12px;
  font-weight: normal;
  color: #555;
}
#category-header #container #buttons-container {
  flex-grow: 1;
  min-height: 120px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#category-header #container #buttons-container p,
#category-header #container #buttons-container #buttons {
  margin: 5px 0;
}
#category-header #container #buttons-container #buttons {
  display: flex;
}
#category-header #container #buttons-container p {
  font-size: 15px;
}
#category-header #container #buttons-container button {
  background: #d8d8d8;
  border: none;
  padding: 15px 25px;
  transition: all 0.4s;
  cursor: pointer;
  outline: none;
}
#category-header #container #buttons-container button:last-child {
  border-radius: 0 8px 8px 0;
}
#category-header #container #buttons-container button:first-child {
  border-radius: 8px 0 0 8px;
}
#category-header #container #buttons-container button.active {
  box-shadow: inset 0 0px 7px #555;
}
#category-header #container #buttons-container button.active i {
  color: #6893dd;
}
#category-header #container #buttons-container button.active:hover {
  cursor: default;
}
#category-header #container #buttons-container button:not(.active):hover {
  background-color: #c8c8c8;
}
#category-header #container #buttons-container button:focus {
  outline: default;
}
#category-header #container #buttons-container button i {
  color: #555;
  font-size: 25px;
  transition: all 0.4s;
}

@media (min-width: 568px) {
  #category-header #container {
    flex-direction: row;
  }
  #category-header #container #label-container {
    align-items: flex-start;
    max-width: 50%;
  }
  #category-header #container #label-container #breadcrumbs {
    justify-content: flex-start;
    /* max-width: 50%; */
  }
  #category-header #container #buttons-container {
    align-items: flex-end;
    max-width: 50%;
  }
}
</style>
