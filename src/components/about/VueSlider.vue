<template>
    <div class="about-slider">
        <div id="slick-container">
            <div class="slide"><img src="https://goo.gl/6hKaPS"/></div>
            <div class="slide"><img src="https://goo.gl/NhCune"/></div>
            <div class="slide"><img src="https://goo.gl/yxfc4r"/></div>
            <div class="slide"><img src="https://goo.gl/c1fECH"/></div>
            <div class="slide"><img src="https://goo.gl/mo7SSw"/></div>
            <div class="slide"><img src="https://goo.gl/eYjhAr"/></div>
        </div>
    </div>
</template>

<script>
import jQuery from "jquery";
import Slick from "vue-slick";

export default {
  name: "VueSlider",
  components: { Slick },
  mounted: function() {
    $(document).ready(function() {
      $("#slick-container").slick({
        // setting-name: setting-value
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        centerMode: true,
        // dots: true,
        focusOnSelect: true,
        lazyLoad: "progressive",
        mobileFirst: true,
        pauseOnDotsHover: true,
        swipeToSlide: true,
        variableWidth: true
      });
    });
  }
};
</script>

<style scoped>
.about-slider {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: url("https://goo.gl/3symXc");
  background-attachment: fixed;
}
.about-slider #slick-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-slider #slick-container .slide {
  box-sizing: border-box;
  height: 100px;
  background-size: cover;
}
.about-slider #slick-container .slide img {
  margin: 0 5px;
  max-height: 100%;
  max-width: 100%;
}

@media (min-width: 280px) {
  .about-slider #slick-container .slide {
    height: 150px;
  }
  .about-slider #slick-container .slide img {
    margin: 0 8px;
  }
}
@media (min-width: 400px) {
  .about-slider #slick-container .slide {
    height: 200px;
  }
  .about-slider #slick-container .slide img {
    margin: 0 10px;
  }
}
@media (min-width: 568px) {
  .about-slider #slick-container .slide {
    height: 250px;
  }
}
@media (min-width: 750px) {
  .about-slider #slick-container .slide {
    height: 350px;
  }
  .about-slider #slick-container .slide img {
    margin: 0 15px;
  }
}
@media (min-width: 801px) {
  .about-slider #slick-container .slide {
    height: 420px;
  }
  .about-slider #slick-container .slide img {
    margin: 0 15px;
  }
}
</style>
