// To do
// 
// Change more than just 1 image when color is chosen
// Allow image changes when more than 1 image is held in the selected color

<template>
  <div id="thing">
    <div v-for="category in this.$store.state.catelogue.categories" v-if="category.name === $route.params.categoryName" :key="category">
      <div v-for="item in category.items" v-if="item.title === $route.params.itemTitle" :key="item.title">

        <div class="carousel-wrapper">

          <div class="carousel-container">
            <div class="image-container">
              <img :src="item.mainImage" id="main-image"/>
            </div>

            <div v-for="image in item.images" v-if="item.title === $route.params.itemTitle" :key="image" class="image-container">
              <img :src="image"/>
            </div>
          </div>

          <div class="panel-container">
            <div class="panel"
                  :data-title="item.title"
                  :data-price="item.price"
                  :data-image="item.mainImage">
              <h1 class="product-name">{{ item.title }}</h1>
              <h3 class="product-price">{{ item.price }}</h3>

              <div v-if="item.colors.length > 0" class="colors">
                <template v-for="color in item.colors">
                  <button v-for="(key, value) in color" class="button" :data-pic="key" :key="key">
                    <h2>{{ value }}</h2>
                  </button>
                </template>
              </div>
              <div v-else="" class="colors">
                <h3>There are no color options for this item. </h3>
              </div>

              <div v-if="item.sizes.length > 0" class="sizes">
                <template v-for="size in item.sizes">
                  <button class="button" :key="size">
                    <h2>{{ size }}</h2>
                  </button>
                </template>
              </div>
              <div v-else="" class="sizes">
                <h3>There are no size options for this item. </h3>
              </div>

              <form class="quantity" id="counter-form" action="#" method="POST">
                <button class="qty-button qtyminus" field="quantity">-</button>
                <input class="qty" tpye="number" name="quantity" value="1"/>
                <button class="qty-button qtyplus" field="quantity">+</button>
              </form>
              <div class="add-to-cart-container">
                <button class="button add-to-cart-button"> 
                  <h2>Add to Cart</h2>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="description-wrapper">
          <div class="description-header">
            <h1>Time to walk on clouds. </h1>
          </div>
          <div class="description-body">
            <p>{{ item.description }}</p>
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

    name: "VueItem",

    components: { Slick },

    mounted: function() {

      $(document).ready(function () {

          $(".carousel-container").slick({
              // setting-name: setting-value
              arrows: true,
              dots: true,
              cssEase: "ease-out",
              speed: 200,
              useTransform: true,
          });

          // let initialPic = $(".colors")
          //     .find(".selected")
          //     .data("pic");

          // $("#main-image").attr("src", initialPic);
      });

        // Button Selecting:

        // When .button is clicked,
        $(".button").click(function () {

            // Find the other .buttons within this parent and remove .selected
            $(this)
                .parent()
                .find(".button")
                .not(this)
                .removeClass("selected");

            // If the button clicked is the cart button...
            if ($(this).hasClass("add-to-cart-button")) {

                // If the item is not in cart...
                if (!$(this).hasClass("in-cart")) {

                    // (Add to cart);

                    // Change button text to show it's in the cart
                    $(this)
                        .find("h2")
                        .html("Remove from Cart");

                    // Give class 'in-cart' to set status of item
                    $(this).addClass("in-cart");

                // otherwise...
                } else if ($(this).hasClass("in-cart")) {

                    // (Remove from cart);

                    // Change button text to show it's not in the cart
                    $(this)
                        .find("h2")
                        .html("Add to Cart");

                    // Remove 'in-cart' class to set status of item
                    $(this).removeClass("in-cart");
                }

            // Otherwise, if it's a color button...
            } else if ($(this).parent().hasClass("colors")) {

                // Get the button's custom data-pic attribute
                let pic = $(this).data("pic");

                // Change the main image source to the one from data-pic
                $("#main-image").attr("src", pic);
            }

              // Toggle .active for the button clicked
              $(this).toggleClass("selected");
          });

          // Quantity Counter
          jQuery(document).ready(function () {

            // This button will increment the value
            $(".qtyplus").click(function (e) {
                // Stop acting like a button
                e.preventDefault();

                // Get the field name
                let fieldName = $(this).attr("field");

                // Get its current value
                var currentVal = parseInt($("input[name=" + fieldName + "]").val());

                // If is not undefined
                if (!isNaN(currentVal)) {
                    // Increment
                    $("input[name=" + fieldName + "]").val(currentVal + 1);

                } else {

                    // Otherwise put a 0 there
                    $("input[name=" + fieldName + "]").val(0);
                }
            });

            // This button will decrement the value till 0
            $(".qtyminus").click(function (e) {

                // Stop acting like a button
                e.preventDefault();

                // Get the field name
                let fieldName = $(this).attr("field");

                // Get its current value
                var currentVal = parseInt($("input[name=" + fieldName + "]").val());

                // If it isn't undefined or its greater than 0
                if (!isNaN(currentVal) && currentVal > 0) {

                    // Decrement one
                    $("input[name=" + fieldName + "]").val(currentVal - 1);
                } else {

                    // Otherwise put a 0 there
                    $("input[name=" + fieldName + "]").val(0);
                }
            });

            // Add to cart (using Web Storage API)
            $(".add-to-cart-button").click(function () {

                function getQuantityValue() {
                    return $(document).find(".qty").val()
                };

                // Get relevant item data
                let itemTitle = $(this).closest(".panel").data("title")
                let itemPrice = $(this).closest(".panel").data("price")
                let itemImage = $(this).closest(".panel").data("image")
                let itemQuantity = getQuantityValue()

                // Create Object out of item data
                let cartEntry = [{
                    "Title": itemTitle,
                    "Price": itemPrice,
                    "Image": itemImage,
                    "Amount": itemQuantity
                }]

                // Fetch cart from localStorage, convert to object
                let cart = localStorage.getItem("Cart")
                let cartObject = JSON.parse(cart)

                cartObject.push(cartEntry)

                // Convert cart back to string & send back to localStorage
                let newCart = JSON.stringify(cartObject)
                localStorage.setItem("Cart", newCart)
            })
        });
    }
};

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway|Montserrat");

body {
  margin: 0;
  padding: 0;
}

#thing {
  margin-bottom: 100px;
}

@media (min-width: 0px) {
  .carousel-wrapper {
    width: 80vw;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
}

@media (min-width: 0px) and (min-width: 0px) {
  .carousel-wrapper {
    flex-direction: column;
  }
}

@media (min-width: 0px) and (min-width: 1000px) {
  .carousel-wrapper {
    flex-direction: row;
    justify-content: space-between;
  }
}

@media (min-width: 0px) {
  .carousel-container {
    box-sizing: border-box;
    width: 100%;
    height: 500px;
    margin-bottom: 40px;
  }
}

@media (min-width: 0px) and (min-width: 1000px) {
  .carousel-container {
    width: 150%;
    height: 1000px;
  }
}

@media (min-width: 0px) {
  .slick-prev:before,
  .slick-next:before {
    color: #333;
  }
  .image-container {
    outline: none;
  }
  .image-container img {
    width: 100%;
    height: 500px;
    object-fit: contain;
  }
}

@media (min-width: 0px) and (min-width: 1000px) {
  .image-container {
    height: 1000px;
  }
}

@media (min-width: 0px) {
  .panel-container {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 0px) and (min-width: 1000px) {
  .panel-container {
    width: 30%;
  }
}

@media (min-width: 0px) {
  .panel {
    z-index: 1;
    min-width: 350px;
    max-width: 350px;
    padding: 0 20px;
    background: #fff;
    box-sizing: border-box;
  }
  .panel .product-name {
    color: #333;
    font-family: "Raleway";
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;
    margin: 40px 0 -20px;
  }
  .panel .product-price {
    color: #333;
    font-family: "Montserrat";
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
    margin: 40px 0 -20px;
  }
  .colors,
  .sizes,
  .quantity,
  .add-to-cart-container,
  .social {
    margin: 70px 0;
    box-sizing: border-box;
    display: grid;
    justify-content: space-between;
    column-gap: 20px;
    row-gap: 20px;
  }
  .colors {
    grid-template-columns: 50fr 50fr;
  }
  .sizes {
    grid-template-columns: repeat(4, 20fr);
  }
  .colors h3,
  .sizes h3 {
    color: #333;
    font-family: "Montserrat";
    text-align: center;
    min-width: 302px;
    min-width: 302px;
    /* border: solid red; */
    padding: 0;
    margin: 0;
  }
  .quantity {
    grid-template-columns: 60px 100px 60px;
  }
  .add-to-cart-container {
    grid-template-columns: 100%;
  }
  .button {
    z-index: 3;
    position: relative;
    height: 60px;
    min-width: 60px;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: "Raleway", sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    color: #333;
    background: #e8e8e8;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .button.selected {
    background-color: #333;
    color: #e8e8e8;
  }
}

@media (min-width: 0px) and (min-width: 1000px) {
  .button:hover {
    background-color: #333;
    color: #e8e8e8;
  }
}

@media (min-width: 0px) {
  .qty-button {
    height: 60px;
    width: 60px;
    border: none;
    outline: none;
    border-radius: 50%;
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    font-size: 40px;
    line-height: 55px;
    transition: all 0.1s;
    background-color: #e8e8e8;
    color: #333;
    cursor: pointer;
  }
  .qty-button:active {
    background-color: #333;
    color: #fff;
  }
  .quantity input {
    font-size: 25px;
    color: #333;
    text-align: center;
    background-color: #fff;
    border: 3px solid #e8e8e8;
    border-radius: 5px;
    padding: 5px 0 0 0;
    -moz-appearance: textfield;
  }
  .button-red {
    color: #ba6b6c;
  }
  .button-red.selected {
    background: #ef9a9a;
    color: #fff;
  }
}

@media (min-width: 0px) and (min-width: 1000px) {
  .button-red:hover {
    background: #ef9a9a;
    color: #fff;
  }
}

@media (min-width: 0px) {
  .button-green {
    color: #75a478;
  }
  .button-green.selected {
    background: #75a478;
    color: #fff;
  }
}

@media (min-width: 0px) and (min-width: 1000px) {
  .button-green:hover {
    background: #75a478;
    color: #fff;
  }
}

@media (min-width: 0px) {
  .button-green:active {
    background: #75a478;
    color: #fff;
  }
  .button-black {
    color: #333;
  }
  .button-black.selected {
    background: #333;
    color: #999;
  }
}

@media (min-width: 0px) and (min-width: 1000px) {
  .button-black:hover {
    background: #333;
    color: #999;
  }
}

@media (min-width: 0px) {
  .button-black:active {
    background: #333;
    color: #999;
  }
}

@media (min-width: 0px) and (min-width: 1000px) {
  .button-fieg:hover {
    background: #90caf9;
    color: #fff;
  }
}

@media (min-width: 0px) {
  .button-fieg:active {
    background: 90caf9;
    color: #fff;
  }
  .description-wrapper {
    flex: 1;
    max-width: 100%;
    margin: 50px 0;
    padding: 0 12%;
    text-align: center;
    color: #444;
  }
  .description-wrapper * {
    margin: 20px 0;
  }
  .description-wrapper .description-header h1 {
    font-family: "Raleway", sans-serif;
    font-size: 200%;
  }
  .description-wrapper .description-body p {
    font-family: "Montserrat";
    font-size: 110%;
    line-height: 150%;
  }
}

@media (min-width: 568px) {
  .carousel-container {
    height: 300px;
  }
  .image-container img {
    height: 300px;
  }
}

@media (min-width: 750px) {
  .carousel-container {
    height: 400px;
    width: 65%;
  }
  .image-container img {
    height: 400px;
    width: 100%;
  }
}

@media (min-width: 801px) {
  .carousel-container {
    height: 70vh;
    width: 50%;
  }
  .image-container img {
    height: 70vh;
  }
}

.slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-list {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.slick-list:focus {
  outline: none;
}

.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.slick-track:before,
.slick-track:after {
  display: table;
  content: "";
}

.slick-track:after {
  clear: both;
}

.slick-loading .slick-track {
  visibility: hidden;
}

.slick-slide {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}

[dir="rtl"] .slick-slide {
  float: right;
}

.slick-slide img {
  display: block;
}

.slick-slide.slick-loading img {
  display: none;
}

.slick-slide.dragging img {
  pointer-events: none;
}

.slick-initialized .slick-slide {
  display: block;
}

.slick-loading .slick-slide {
  visibility: hidden;
}

.slick-vertical .slick-slide {
  display: block;
  height: auto;
  border: 1px solid transparent;
}

.slick-arrow.slick-hidden {
  display: none;
}
</style>
