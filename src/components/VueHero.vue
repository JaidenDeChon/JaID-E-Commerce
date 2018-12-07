
<template>

  <div id="hero">
    <div id="slick-container">
      <div class="slide" v-for="hero in this.$store.state.catelogue.heros" :key="hero">
        <div class="background-image" v-bind:style="{ backgroundImage: 'url(' + hero.background + ')'}">
          <div class="text-container" v-bind:class="hero.position">
            <div class="text">
              <p class="header">{{ hero.header }}</p>
              <p class="subtitle">{{ hero.subtitle }}</p>
              <router-link v-if="hero.item" :to="{ name: 'item', params: { categoryName: hero.category, itemTitle: hero.item } }">
                <button class="call-to-action">{{ hero.button }}</button>
              </router-link>
              <router-link v-else-if="!(hero.item)" :to="{ name: 'category', params: { categoryName: hero.category } }">
                <button class="call-to-action">{{ hero.button }}</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
import jQuery from "jquery";
import Slick from "vue-slick";

export default {
  name: "VueHero",
  components: { Slick },
  mounted: function() {
    $(document).ready(function(){
      $('#slick-container').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 7000,
        mobileFirst: true
      });
    });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Advent+Pro|Raleway");
html, body {
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
}

#hero {
  padding: 0;
  margin: 0 0 40px 0;
  width: 100vw;
  height: 630px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}
#hero #slick-container {
  margin: 0;
  padding: 0;
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
}
#hero #slick-container .slide {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
#hero #slick-container .slide .background-image {
  background-position: center !important;
  background-size: cover !important;
}
#hero #slick-container .slide .text-container {
  height: 100vh;
  width: 100%;
  color: #fff;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.3);
}
#hero #slick-container .slide .text-container .text {
  max-width: 568px;
}
#hero #slick-container .slide .text-container .text * {
  margin: 10px;
}
#hero #slick-container .slide .text-container .header {
  font-family: Advent Pro, sans-serif;
  font-size: 40px;
  text-shadow: 0 0 20px black;
}
#hero #slick-container .slide .text-container .subtitle {
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  text-shadow: 0 0 20px black;
}
#hero #slick-container .slide .text-container .call-to-action {
  padding: 20px;
  border: none;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: #555;
  font-weight: bold;
  cursor: pointer;
}
#hero #slick-container .slide .text-container .call-to-action:hover {
  background: #e8e8e8;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

@media (min-width: 400px) {
  #hero #slick-container .slide .text-container .header {
    font-size: 50px;
  }
  #hero #slick-container .slide .text-container .subtitle {
    font-size: 25px;
  }
  #hero #slick-container .slide .text-container .call-to-action {
    font-size: 15px;
  }
}
@media (min-width: 568px) {
  #hero {
    min-height: 700px;
  }
  #hero #slick-container .slide .text-container.left {
    align-items: flex-start;
  }
  #hero #slick-container .slide .text-container.right {
    align-items: flex-end;
  }
  #hero #slick-container .slide .text-container .text {
    padding: 0 40px;
    max-width: 70%;
  }
  #hero #slick-container .slide .text-container .text * {
    margin: 30px 0;
  }
  #hero #slick-container .slide .text-container .text .header {
    font-size: 60px;
  }
  #hero #slick-container .slide .text-container .text .subtitle {
    font-size: 30px;
  }
}
@media (min-width: 750px) {
  #hero #slick-container .slide .text-container .text {
    max-width: 60%;
  }
}
@media (min-width: 801px) {
  #hero #slick-container .slide .text-container .text {
    padding: 0 60px;
    max-width: 65%;
  }
  #hero #slick-container .slide .text-container .text .header {
    font-size: 75px;
  }
  #hero #slick-container .slide .text-container .text .subtitle {
    font-size: 35px;
  }
  #hero #slick-container .slide .text-container .text .call-to-action {
    font-size: 17px;
  }
}
@media (min-width: 1000px) {
  #hero #slick-container .slide .text-container .text {
    max-width: 60%;
  }
  #hero #slick-container .slide .text-container .text .header {
    font-size: 80px;
  }
  #hero #slick-container .slide .text-container .text .subtitle {
    font-size: 40px;
  }
}
@media (min-width: 1400px) {
  #hero #slick-container .slide .text-container .text {
    max-width: 50%;
    padding: 0 150px;
  }
}
@media (min-width: 1920px) {
  #hero {
    min-height: 850px;
  }
  #hero #slick-container .slide .text-container .text {
    max-width: 40%;
    padding: 0 200px;
  }
}

</style>
