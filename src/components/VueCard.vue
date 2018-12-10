
// To Do: 
//     only show so many "other items in this category" so as to not overload the page in the event of tons of items 

<template>
  
    <!-- If path is root... -->
    <div  id="center-container"
          v-if="$route.path == '/'" >

        <div class="big" id="cards-container" >

            <!-- ...For each category in the catelogue... -->
            <div  class="card"
                  v-for="category in this.$store.state.catelogue.categories" 
                  :key="category.name" >

                <!-- ...Create a card anchored to that category -->
                <router-link :to="{ name: 'category', params: { categoryName: category.name } }">

                    <!-- Category's main image  -->
                    <img v-bind:src="category.card">

                    <!-- Bottom part of card containing text -->
                    <div class="text-container">
                        <p class="header">{{ category.name }}</p>
                        <p class="subtitle">
                            <div class="lower">
                                <i class="fa fa-tags" aria-hidden="true" ></i>
                                {{ category.items.length }}
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

        <div  class="big" id="cards-container" >

            <!-- ...For the category which matches this route... -->
            <template   v-for="category in this.$store.state.catelogue.categories" 
                        v-if="category.name === $route.params.categoryName" >

                <!-- ...For each item in this category... -->
                <div  class="card"
                      v-for="item in category.items"
                      :key="item.title">

                    <!-- ...Create a card anchored to that item -->
                    <router-link :to="{ name: 'item', params: { categoryName: category.name, itemTitle: item.title } }">

                        <!-- Item's main image -->
                        <img v-bind:src="item.mainImage">

                        <!-- Bottom part of card containing text -->
                        <div class="text-container">

                            <p class="header">{{ item.title }}</p>

                            <p class="subtitle">
                                <div class="lower">
                                    <i class="fa fa-tags" aria-hidden="true" ></i>
                                    {{ item.price }}
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

        <div  class="big" id="cards-container">

            <!-- ...For the category which matches this route... -->
            <template   v-for="category in this.$store.state.catelogue.categories" 
                        v-if="category.name === $route.params.categoryName" >

                <!-- ...For each item in this category, if it's not the item currently being viewed... -->
                <div  class="card"
                      v-for="item in category.items" 
                      v-if="item.title != $route.params.itemTitle"
                      :key="item.title" >

                    <!-- ...Create a card anchored to that item -->
                    <router-link :to="{ name: 'item', params: { categoryName: category.name, itemTitle: item.title } }" >

                        <!-- Item's main image -->
                        <img v-bind:src="item.mainImage">

                        <!-- Bottom part of card containing text -->
                        <div class="text-container">

                            <p class="header">{{ item.title }}</p>

                            <p class="subtitle">
                                <div class="lower">
                                    <i class="fa fa-tags" aria-hidden="true" ></i>
                                    {{ item.price }}
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
export default {};
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

#center-container {
  width: 100vw;

  margin: 20px 0 0 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

#cards-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  width: 90%;
  margin: 0 auto;
}

#cards-container.big .card img {
  min-height: 200px;
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
#cards-container .card:hover > a > img {
  border-radius: 10px 10px 0 0;
}
#cards-container .card img {
  max-height: 150px;
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
  margin: 0;
  padding: 0;
}
#cards-container .card .text-container {
  padding: 15px;
  margin: -4px 0 0 0;
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
  #cards-container.big .card img {
    max-height: 280px;
    min-height: 280px;
  }
  #cards-container.big .card .text-container p {
    font-size: 18px;
  }
}
@media (min-width: 801px) {
  #center-container {
    margin: 40px 0 0 0;
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
  #cards-container.big .card img {
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
