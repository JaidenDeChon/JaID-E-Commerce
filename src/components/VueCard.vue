
// To Do: 
//   - Make this component usable in other contexts, not just on the index page
//     That means it should take URL parameters
//     Such as show categories if on index page
//     Or show items in category if on category page
//     Or show OTHER items in same category if on product customization page
//     But only so many so as to not overload the page in the event of tons of items 

<template>
    <!-- If path is root -->
    <div v-if="$route.path == '/'" id="squares-container">

        <!-- Show categories in cards -->
        <router-link v-for="category in this.$store.state.catelogue.categories" :to="{ name: 'category', params: { categoryName: category.name } }" :key="category.name">
            <div class="square">
                <div class="img-container">
                    <img v-bind:src="category.image" alt="Category Image">
                </div>
                <div class="meta-data">
                    <h3>{{ category.name }}</h3>
                    <h5><i class="fa fa-tags" aria-hidden="true"></i> {{ category.items.length }}</h5>
                </div>
            </div>
        </router-link>

    </div>

    <!-- Else if path is category or item -->
    <div v-else-if="['category', 'item'].indexOf($route.name) > -1" id="squares-container">

      <!-- Show category items in cards -->
        <!-- {{ theCategory }} -->
        <!-- {{ this.$route.params.categoryName }} -->
        <template v-for="category in this.$store.state.catelogue.categories" v-if="category.name === $route.params.categoryName">
          <router-link v-for="item in category.items" :to="{ name: 'item', params: { categoryName: category.name, itemTitle: item.title } }" :key="item.title">
              <div class="square">
                  <div class="img-container">
                      <img v-bind:src="item.image" alt="Category Image">
                  </div>
                  <div class="meta-data">
                      <h3>{{ item.title }}</h3>
                      <h5><i class="fa fa-tags" aria-hidden="true"></i> {{ item.price }}</h5>
                  </div>
              </div>
          </router-link>
        </template>

    </div>
</template>

<script>
export default {
  computed: {
    catelogue() {
      return this.$store.state.catelogue
        ? this.$store.state.catelogue
        : "Loading...";
    }
  }
};
</script>

<style scoped>
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
  margin: 0;
  padding: 0;
}

/* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
@media (min-width: 0) {
  #squares-container {
    padding: 0;

    width: 90vw;

    margin: 20px auto;

    display: grid;
    grid-gap: 20px;
    grid-column-gap: 40px;
    grid-row-gap: 50px;
    grid-template-columns: repeat(auto-fit, 90vw);
    justify-content: center;
  }

  #breadcrumbs-container {
    height: 75px;
    width: 88vw;

    margin: 5vh auto 5vh;
  }

  #breadcrumbs {
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    color: #333;
  }

  #breadcrumbs * {
    display: inline;
    text-decoration: none;
  }

  #breadcrumbs a:visited {
    color: #333;
  }

  #breadcrumbs-container #label {
    font-family: "Righteous", serif;
    font-size: 50px;
    text-transform: lowercase;
    text-align: center;

    color: #fff;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #333;
  }

  .square {
    background: #e8e8e8;

    width: 90vw;

    overflow: hidden;

    font-family: "Raleway", sans-serif;
    color: #333;
    text-transform: uppercase;
    text-align: center;

    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #squares-container a {
    text-decoration: none;
    color: #333;
  }

  .img-container {
    overflow: hidden;

    margin: 0;
    padding: 0;

    width: 100%;
    height: 200px;

    border-radius: 10px 10px 0 0;
  }

  .img-container img {
    margin: 0;
    padding: 0;

    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  .square .meta-data {
    height: 100px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
}

/*  Higher resolution portrait mobile devices  */
@media (min-width: 400px) {
}

/* Landscape iPhones */
@media (min-width: 568px) {
  #breadcrumbs-container {
    margin: 10vh auto;
  }

  #squares-container {
    grid-template-columns: repeat(auto-fit, 250px);
  }

  #squares-container .square {
    width: 250px;
  }

  .img-container {
    overflow: hidden;

    margin: 0;
    padding: 0;

    width: 100%;
  }
}

/* portrait iPad */
@media (min-width: 750px) {
  #breadcrumbs-container {
    margin: 0 auto 5vh;
  }
}

/* landscape standard tablets, lo-res laptops and desktops */
@media (min-width: 801px) {
  #squares-container {
    grid-template-columns: repeat(auto-fit, 250px);
  }

  #breadcrumbs-container {
    height: 100px;
    line-height: 100px;

    display: flex;
    justify-content: space-between;

    margin: 3vh auto 9vh;
  }

  #breadcrumbs {
    font-size: 90%;
  }

  #breadcrumbs-container #label {
    font-size: 60px;
  }

  #squares-container .square {
    width: 250px;
  }

  .img-container {
    overflow: hidden;

    margin: 0;
    padding: 0;

    width: 100%;
  }
}

/* For full-HD laptops and desktops, and landscape big tablets */
@media (min-width: 1000px) {
}

/*  Full HD laptops & desktops, big tablets   */
@media (min-width: 1920px) {
  #squares-container {
    /*   border: 2px solid red; */

    padding: 0;

    width: 90vw;

    display: grid;
    grid-gap: 20px;
    grid-column-gap: 100px;
    grid-row-gap: 100px;
    grid-template-columns: repeat(auto-fit, 500px);
    justify-content: space-between;
  }

  #squares-container .square {
    background: #fff;

    width: 500px;

    color: #333;

    font-family: "Raleway", sans-serif;
    color: #333;
    text-transform: uppercase;
    text-align: center;

    display: flex;
    justify-content: center;

    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
  }

  #squares-container .square a {
    text-decoration: none;
    color: #333;
  }

  .img-container {
    margin: 0;
    padding: 0;

    height: 300px;
    width: 100%;
    object-fit: cover;

    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
  }

  .img-container img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px 10px;

    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
  }

  .square .meta-data {
    height: 120px;
    padding: 10px 0;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
  }

  .square:hover .meta-data {
    background: #e8e8e8;
  }

  .square:hover .img-container img {
    transform: scale(1.1);
  }

  .square:hover .img-container {
    border-radius: 10px 10px 0 0;
  }
}
</style>
