
// To Do: 
//     only show so many "other items in this category" so as to not overload the page in the event of tons of items 

<template>
  
    <!-- If path is root... -->
    
    <div  id="center-container"
          v-if="$route.path == '/'" >

        <div  id="category-header">

            <div id="container">

                <div  id="label-container">

                    <p id="label">All Categories</p>

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

        <div class="big" id="cards-container" >

            <!-- ...For each category in the catelogue... -->
            <div  class="card"
                  v-for="(category, a) in this.$store.state.catelogue.categories" 
                  :key="`${a}-${category.name}`" >

                <!-- ...Create a card anchored to that category -->
                <router-link :to="{ name: 'category', params: { categoryName: category.name } }">

                    <!-- Category's main image  -->
                    <div class="img-overflow-container">
                      <img v-bind:src="category.card">
                    </div>

                    <!-- Bottom part of card containing text -->
                    <div class="text-container">
                        <p class="header">{{ category.name }}</p>
                        <p class="subtitle">
                            <div class="lower">
                                <i class="fa fa-tags" aria-hidden="true" ></i>
                                <p class="subtitle-text">{{ category.items.length }}</p>
                            </div>
                        </p>
                    </div>

                </router-link>
            </div>
        </div>
    </div>

    <!-- Else if path is category... -->
    <div  id="center-container"
          v-else-if="['category'].indexOf($route.name) > -1" >

        <div  id="category-header">

            <div id="container">

                <div  id="label-container" 
                      v-for="(category, b) in this.$store.state.catelogue.categories" 
                      v-if="category.name === $route.params.categoryName"
                      :key="`${b}-${category.name}`" >

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

        <div class="big" id="cards-container" >

            <!-- ...For the category which matches this route... -->
            <template   v-for="category in this.$store.state.catelogue.categories" 
                        v-if="category.name === $route.params.categoryName" >

                <!-- ...For each item in this category... -->
                <div  class="card"
                      v-for="(item, c) in category.items"
                      :key="`${c}-${item.title}`">

                    <!-- ...Create a card anchored to that item -->
                    <router-link :to="{ name: 'item', params: { categoryName: category.name, itemTitle: item.title } }">

                        <!-- Item's main image -->
                        <div class="img-overflow-container">
                          <img v-bind:src="item.mainImage">
                        </div>

                        <!-- Bottom part of card containing text -->
                        <div class="text-container">

                            <p class="header">{{ item.title }}</p>

                            <p class="subtitle">
                                <div class="lower">
                                    <i class="fa fa-tags" aria-hidden="true" ></i>
                                    <p class="subtitle-text">{{ item.price }}</p>
                                </div>
                            </p>

                        </div>

                    </router-link>
                </div>
            </template>
        </div>
    </div>

    <!-- Else if path is item... -->
    <div  id="center-container"
          v-else-if="['item'].indexOf($route.name) > -1" >

        <div  id="category-header">

            <div id="container">

                <div  id="label-container" 
                      v-for="(category, d) in this.$store.state.catelogue.categories" 
                      v-if="category.name === $route.params.categoryName"
                      :key="`${d}-${category.name}`" >

                    <div id="breadcrumbs">
                        <router-link to="/">Home</router-link>
                        <p>&bull;</p>
                        <p>{{ category.name }}</p>
                    </div>

                    <p id="label">Popular items in {{ category.name }}</p>

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

        <div  class="big" id="cards-container">

            <!-- ...For the category which matches this route... -->
            <template   v-for="category in this.$store.state.catelogue.categories" 
                        v-if="category.name === $route.params.categoryName" >

                <!-- ...For each item in this category, if it's not the item currently being viewed... -->
                <div  class="card"
                      v-for="(item, e) in category.items" 
                      v-if="item.title != $route.params.itemTitle"
                      :key="`${e}-${item.title}`" >

                    <!-- ...Create a card anchored to that item -->
                    <router-link :to="{ name: 'item', params: { categoryName: category.name, itemTitle: item.title } }" >

                        <!-- Item's main image -->
                        <div class="img-overflow-container">
                          <img v-bind:src="item.mainImage">
                        </div>

                        <!-- Bottom part of card containing text -->
                        <div class="text-container">

                            <p class="header">{{ item.title }}</p>

                            <p class="subtitle">
                                <div class="lower">
                                    <i class="fa fa-tags" aria-hidden="true" ></i>
                                    <p class="subtitle-text">{{ item.price }}</p>
                                </div>
                            </p>

                        </div>

                    </router-link>
                </div>
            </template>
        </div>
    </div>

</template>


<script>
export default {
  mounted: function() {
    // Make only one button active at a time
    $("#buttons")
      .children("button")
      .click(function() {
        $(this).addClass("active");
        $(this)
          .siblings()
          .removeClass("active");
      });

    // Make cards big
    $("#large").on("click", function() {
      $("body")
        .find("#cards-container")
        .addClass("big");
    });

    // Make cards small
    $("#small").on("click", function() {
      $("body")
        .find("#cards-container")
        .removeClass("big");
    });

    // Testing cookies and shit
    $('.card').on("click", function() {
      var thisCard = $(this)
      var productName = thisCard.find(".header").text()
      var productPrice = thisCard.find(".subtitle-text").text()
    })
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway");

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
  margin: 0 0 20px 0;
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
  text-align: center;
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
    text-align: left;
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

#center-container {
  width: 100vw;

  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#cards-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  width: 90%;
  margin: 0 auto;
}

#cards-container.big .card .img-overflow-container,
#cards-container .card .img-overflow-container {
  margin: 0;
  padding: 0;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
}

#cards-container.big .card .img-overflow-container img,
#cards-container.big .card .img-overflow-container {
  min-height: 200px;
  max-height: 200px;
}
#cards-container .card {
  box-sizing: border-box;
  overflow: hidden;
}
#cards-container .card a {
  margin: 0;
  padding: 0;
  display: block;
  color: #333;
  text-decoration: none;
}
#cards-container .card a:visited {
  color: #333;
}
#cards-container .card * {
  transition: all 0.4s;
}
#cards-container .card:hover > a > .text-container {
  background-color: #e8e8e8;
}
#cards-container .card:hover > a > .img-overflow-container img {
  border-radius: 10px 10px 0 0;
  transform: scale(1.1);
}

#cards-container .card .img-overflow-container {
  max-height: 150px;
  min-height: 150px;
}

#cards-container .card .img-overflow-container img {
  max-height: 150px;
  min-height: 150px;
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
  margin: 0;
  padding: 0;
}
#cards-container .card .text-container {
  padding: 15px;
  margin: -4px 0 0 0;
  text-align: center;
  box-sizing: border-box;
  border-radius: 0 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#cards-container .card .text-container .lower {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
#cards-container .card .text-container p {
  margin: 7px;
  color: #333;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
}
#cards-container .card .text-container p.header {
  text-transform: uppercase;
}

@media (min-width: 280px) {
  #cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
  #cards-container.big {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (min-width: 400px) {
  #cards-container {
    grid-template-columns: repeat(3, 1fr);
  }
  #cards-container.big {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 568px) {
  #cards-container {
    grid-template-columns: repeat(4, 1fr);
  }
  #cards-container.big {
    /* margin: 10px; */
    grid-gap: 10px;
  }
}
@media (min-width: 750px) {
  #cards-container.big {
    /* margin: 15px; */
    grid-gap: 15px;
  }
  #cards-container.big .card .img-overflow-container img,
  #cards-container.big .card .img-overflow-container {
    max-height: 280px;
    min-height: 280px;
  }
  #cards-container.big .card .text-container p {
    font-size: 18px;
  }
}
@media (min-width: 801px) {
  #center-container {
    margin: 0;
  }

  #cards-container {
    grid-template-columns: repeat(5, 1fr);
  }
}
@media (min-width: 1000px) {
  #cards-container {
    grid-template-columns: repeat(5, 1fr);
  }
  #cards-container.big {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 -20px;
  }
  #cards-container.big .card {
    /* margin: 20px; */
    grid-gap: 20px;
  }
  #cards-container.big .card .img-overflow-container img,
  #cards-container.big .card .img-overflow-container {
    max-height: 300px;
    min-height: 300px;
  }
}
@media (min-width: 1400px) {
  #cards-container.big {
    margin: 0 -25px;
  }

  #cards-container.big {
    /* margin: 25px 0; */
    grid-gap: 50px;
  }
  #cards-container.big .card .text-container {
    padding: 25px;
  }
}
@media (min-width: 1920px) {
  #cards-container.big .card .text-container {
    padding: 32px;
  }
}
</style>
