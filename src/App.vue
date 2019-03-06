
<template>

    <div id="app">

        <!-- Spacer for navbar -->
        <div id="nav-spacer"></div>

        <!-- Wrapper for entire navbar -->
        <div id="nav">

            <!-- Left section; contains hamburger menu -->
            <div id="left">
                <div id="hamburger"><i class="fas fa-bars"></i></div>
            </div>

            <!-- Center section; contains clickable logo -->
            <div id="center">
                <div id="logo"> 
                    <h1>yosemite</h1>
                    <p>open e-commerce by Jaiden DeChon</p>
                </div>
            </div>


            <!-- Right section; contains cart button -->
            <div id="right">
                <div id="cart-button"><i class="fas fa-shopping-cart"></i></div>
            </div>

            <!-- Dark overlay for when menus are opened -->
            <div id="overlay"></div>



            <!-- Navigation menu -->
            <div class="sidebar" id="menu">

                <!-- Close button -->
                <div class="option close-sidebar">
                    <div class="faceplate red"><span></span>
                        <h3>Close menu</h3><i class="fas fa-times"></i>
                    </div>
                </div>

                <!-- Home button -->
                <router-link to="/" class="close-on-click">
                    <div class="option">
                        <div class="faceplate">
                            <h3>Home</h3>
                        </div>
                    </div>
                </router-link>

                <!-- FOR LOOP: A dropdown button for each category -->
                <div class="option" v-for="category in this.$store.state.catelogue.categories" :key="category.name">

                  <!-- Faceplate is the element you see; is a flexbox -->
                  <div class="faceplate">
                    <h3>{{ category.name }}</h3><i class="fas fa-caret-down"></i>
                  </div>

                  <!-- Ivisible at first; contains dropdown options (droptions) -->
                  <div class="droptions-container" >

                    <!-- Link to given category's page -->
                    <router-link 
                      :to="{ name: 'category', params: { categoryName: category.name } }"
                       class="close-on-click">
                      <div class="droption option">
                        <div class="faceplate">
                          <h3>All {{ category.name }}</h3><span></span>
                        </div>
                      </div>
                    </router-link>

                    <!-- FOR LOOP: A button/link for each item in category -->
                    <router-link 
                      :to="{ name: 'item', params: { categoryName: category.name, itemTitle: item.title } }" 
                      v-for="item in category.items" 
                      :key="item.title"
                      class="close-on-click">
                      <div class="droption option">
                        <div class="faceplate">
                          <h3>{{ item.title }}</h3><span></span>
                        </div>
                      </div>
                    </router-link>

                  </div>
                </div>
            </div>



            <!-- Cart -->
            <div class="sidebar" id="cart">

                <!-- Close button -->
                <div class="option close-sidebar">
                  <div class="faceplate red"><span></span>
                    <h3>Close cart</h3><i class="fas fa-times"></i>
                  </div>
                </div>
            </div>
        </div>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>




<script>

export default {

  mounted: function() {

    var overlay = $("#nav").children("#overlay")
    var menu = $("#nav").children("#menu")
    var cart = $("#nav").children("#cart")


    function showOverlay() {
        overlay.addClass("toggled")
        $("body").css("overflow-y", "hidden");  // hide overflow on body
        overlay.fadeIn(200)                     // show overlay, start delay for timing
    }


    function hideOverlay() {

        overlay.removeClass("toggled")

        if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
          $("body").css("overflow-y", "auto");
        } else {
          $("body").css("overflow-y", "overlay");  // use overlay property on overflow if Chrome
        }

        overlay.fadeOut(200)
    }


    function showMenu() {

        showOverlay()

        setTimeout(function() {
          menu.animate({ left: 0 }, 200)
        }, 250)
    }


    function hideMenu() {
        setTimeout(function() {
          hideOverlay()
        }, 250)
        menu.animate({ left: "-420px" }, 200)
    }


    function showCart() {

        showOverlay()

        setTimeout(function() {
          cart.animate({ right: "0" }, 200)
        }, 250)
    }


    function hideCart() {	
        setTimeout(function() {
          hideOverlay()
        }, 250)

        cart.animate({ right: "-420px" }, 200)
    }


    // if overlay is clicked, toggleOverlay()
    $("#overlay").click(function(event) {
        hideOverlay();
        hideMenu()
        hideCart()
    })

    // hamburger icon
    $("#hamburger").click(function() {
        showMenu()
    })

    // cart icon
    $("#cart-button").click(function() {
        showCart()
    })

    // close buttons
    $(".close-sidebar").click(function() {
        hideCart()
        hideMenu()
    })

    // Close menu upon clicking on menu link
    $(".close-on-click").click(function() {
        hideMenu();
    })

    $(".option").click(function() {

        // Find droptions-container child of option
        let droptionsContainer = $(this).children(".droptions-container");

        // Find the dropdown-container children of sibling options
        let siblings = $(this).siblings().children(".droptions-container");

        // give display: visible to slider, done with sliding animation
        droptionsContainer.slideToggle(200);

        siblings.slideUp(200);

    })

    // Initialize array for cart
    while (localStorage.getItem("Cart") == null) {        // If there is no cart
        let newCart = []                                  // Create empty array
        let newCartStringified = JSON.stringify(newCart)  // Stringify the array
        localStorage.setItem("Cart", newCartStringified)  // Add Stringy array to localStorage
    }
  
    // Fill the cart menu with carted items
    function fillCart() {

        $(".cart-entry").remove();

        // Locate cart side menu for adding divs (carted items)
        let cartDiv = $("#cart")

        // Get cart contents form localStorage, convert to object
        let cart = localStorage.getItem("Cart")
        let cartObject = JSON.parse(cart)

        // For carted item...
        for (var i = 0; i < cartObject.length; i++) {

            // Create variable out of carted item
            let entry = cartObject[i]

            // For detail in carted item... (title, price, etc)
            for (var j = 0; j < entry.length; j++) {

                //  Create variable out of detail
                let detail = entry[j]

                // Pull cart details for injecting into HTML
                let entryTitle = detail["Title"]
                let entryPrice = detail["Price"]
                let entryImage = detail["Image"]
                let entryAmount = detail["Amount"]

                function createCartEntry() {

                  // create overall container div for a cart entry
                  let container = document.createElement("div")
                  container.classList.add("option", "cart-entry")



                  // PRIMARY CHILD DIV | shows image and title of item

                      let faceplate = document.createElement("div")
                      faceplate.classList.add("faceplate")

                      // create + prepend image element
                      let image = document.createElement("img")
                      $(image).attr('src', entryImage)
                      faceplate.prepend(image)

                      // create + append title element
                      let titleH3 = document.createElement("h3")
                      let titleContent = document.createTextNode(entryTitle)
                      titleH3.appendChild(titleContent)
                      titleH3.classList.add("item-title")
                      faceplate.append(titleH3)

                      // create + append dropdown arrow
                      let arrow = document.createElement("i")
                      arrow.classList.add("fas", "fa-caret-down")
                      faceplate.append(arrow)



                  // DROPDOWN CONTAINER

                      // create droptions-container div, append to container
                      let droptionsContainer = document.createElement("div")
                      droptionsContainer.classList.add("droptions-container")
                      container.append(droptionsContainer)



                  // DROPDOWN CHILDREN | shows item info (price, quantity), link to item, button to remove item

                      // create option/info divs: price, quantity, link to item, and remove button
                      let outerPriceDiv = document.createElement("div")
                      let outerAmountDiv = document.createElement("div")
                      let outerRemoveDiv = document.createElement("div")

                      // add option class to each of the 4 divs created above
                      outerPriceDiv.classList.add("option")
                      outerAmountDiv.classList.add("option")
                      outerRemoveDiv.classList.add("option")

                      // append each of the 4 divs to the droptions-container div
                      droptionsContainer.append(outerPriceDiv)
                      droptionsContainer.append(outerAmountDiv)
                      droptionsContainer.append(outerRemoveDiv)



                      // DROPDOWN CHILDREN CONTENTS

                          // create div for showing pricing
                          let innerPriceDiv = document.createElement("div")
                          innerPriceDiv.classList.add("faceplate", "noclick")
                          outerPriceDiv.appendChild(innerPriceDiv)

                              // create price label
                              let priceIndicator = document.createElement("h3")
                              let priceIndicatorContent = document.createTextNode("Price")
                              priceIndicator.appendChild(priceIndicatorContent)
                              innerPriceDiv.prepend(priceIndicator)

                              // create h3 with actual price value
                              let priceValue = document.createElement("h3")
                              let priceValueContent = document.createTextNode(entryPrice)
                              priceValue.appendChild(priceValueContent)
                              innerPriceDiv.append(priceValue)

                          // create div for showing quantity in cart
                          let innerAmountDiv = document.createElement("div")
                          innerAmountDiv.classList.add("faceplate", "noclick")
                          outerAmountDiv.appendChild(innerAmountDiv)

                              // create quantity label
                              let amountIndicator = document.createElement("h3")
                              let amountIndicatorContent = document.createTextNode("Quantity")
                              amountIndicator.appendChild(amountIndicatorContent)
                              innerAmountDiv.prepend(amountIndicator)

                              // create h3 with actual price value
                              let amountValue = document.createElement("h3")
                              let amountValueContent = document.createTextNode(entryAmount)
                              amountValue.appendChild(amountValueContent)
                              innerAmountDiv.append(amountValue)

                          // create div for removing item
                          let innerRemoveDiv = document.createElement("div")
                          innerRemoveDiv.classList.add("faceplate", "red")
                          outerRemoveDiv.appendChild(innerRemoveDiv)

                              // create removal "button"
                              let itemRemove = document.createElement("h3")
                              let itemRemoveContent = document.createTextNode("Remove")
                              itemRemove.appendChild(itemRemoveContent)
                              innerRemoveDiv.prepend(itemRemove)

                              let itemRemoveIcon = document.createElement("i")
                              itemRemoveIcon.classList.add("fas", "fa-times")
                              innerRemoveDiv.append(itemRemoveIcon)



                  // Put the faceplate containing the image, text and arrow into container
                  container.prepend(faceplate)

                  // Put the container into the cart div for displaying on page
                  cartDiv.append(container)

                  $(container).click(function() {
                      // Find droptions-container child of option
                      let droptionsContainer = $(this).children(".droptions-container");

                      // Find the dropdown-container children of sibling options
                      let siblings = $(this).siblings().children(".droptions-container");

                      // give display: visible to slider, done with sliding animation
                      droptionsContainer.slideToggle(200);

                      siblings.slideUp(200);
                  })

                  $(".option .red").click(function() {
                      let cartItemTitle = $(this).parent().parent().siblings(".faceplate").children("h3").text()
                      removeCartItem(cartItemTitle)
                  })

                  function removeCartItem(insert) {

                      // Get cart contents form localStorage, convert to object
                      let cart = localStorage.getItem("Cart")
                      let cartObject = JSON.parse(cart)

                      for ( var product = 0; product < cartObject.length; product++ ) {
                          let individualItem = cartObject[product]
                          let itemIndex = cartObject.indexOf(individualItem)
                          
                          for ( var feature = 0; feature < individualItem.length; feature++) {
                              let detail = individualItem[feature]
                              let title = detail["Title"]

                              if (title === insert) {
                                cartObject.splice(itemIndex, 1)
                                let cartString = JSON.stringify(cartObject)
                                localStorage.setItem("Cart", cartString)
                                fillCart()
                              }

                          }
                      }
                  }

                }

                createCartEntry()
            }
        }
    }

    if(localStorage.getItem("Cart") != null) {
      fillCart()
    }

  }

}
</script>




<style>

@import url("https://fonts.googleapis.com/css?family=Advent+Pro|Raleway");
html, body {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

body {
  overflow-x: hidden;
  overflow-y: overlay;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
}

#nav-spacer {
  width: 100%;
  height: 100px;
}

#nav {
  box-sizing: border-box;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
  height: 100px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  color: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

#nav a {
  text-decoration: none;
  color: #555;
}
#nav #left, #nav #center, #nav #right {
  box-sizing: inherit;
  width: 20%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
#nav #left #hamburger {
  box-sizing: inherit;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.1s ease-in-out;
}
#nav #left #hamburger:hover {
  background: #e8e8e8;
}
#nav #center {
  width: 60% !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
#nav #center #logo {
  box-sizing: inherit;
  text-align: center;
}
#nav #center #logo h1 {
  font-family: Advent Pro, sans-serif;
  font-size: 30px;
}
#nav #center #logo p {
  font-family: "Raleway", sans-serif;
  font-size: 15px;
}
#nav #right #cart-button {
  box-sizing: inherit;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
}
#nav #right #cart-button:hover {
  background: #e8e8e8;
}
#nav #overlay {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.5);
}
#nav .sidebar {
  min-height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
}
#nav .sidebar .option {
  background: ffffff;
  cursor: pointer;
  width: 100%;
  min-height: 80px;
  margin: 0;
}
#nav .sidebar .option .droptions-container {
  display: none;
  overflow: hidden;
}
#nav .sidebar .option .droptions-container .option {
  background: #e8e8e8;
}
#nav .sidebar .option .faceplate {
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Raleway", sans-serif;
  font-size: 22px;
  transition: 0.2s;
  z-index: 100;
}
#nav .sidebar .option .faceplate.noclick {
  background-color: #f2f2f2;
  cursor: default;
}
#nav .sidebar .option .faceplate img {
  border-radius: 6px;
  margin-right: 5px;
  min-height: 60px;
  max-height: 60px;
  min-width: 60px;
  max-width: 60px;
  object-fit: cover;
}
#nav .sidebar .option .faceplate h3 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 5px;
  line-height: 80px;
}
#nav .sidebar .option .faceplate i {
  margin-left: 5px;
  transition: 0.2s;
}
#nav .sidebar .option .faceplate.red:hover {
  background-color: #e89999;
}
#nav .sidebar .option .faceplate.red:hover h3, #nav .sidebar .option .faceplate.red:hover i {
  color: #ffffff;
}
#nav .sidebar#menu {
  left: -100vw;
}
#nav .sidebar#cart {
  right: -100vw;
}

@media (min-width: 400px) {
  #nav .sidebar {
    min-width: 400px;
    max-width: 420px;
  }
}
@media (min-width: 801px) {
  .faceplate {
    padding: 0 20px 0 10px;
    box-sizing: border-box;
    border-left: 10px solid transparent;
  }
  .faceplate.noclick {
    border-left: none;
    padding: 0 20px;
  }
  .faceplate.noclick:hover {
    border-left: none;
  }
  .faceplate:hover {
    border-left: 10px solid #4286f4;
  }
  .faceplate:hover.red {
    border-left: 10px solid #f44242;
  }
  .faceplate i.fa-times {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  #nav .sidebar {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 0 10px rgba(0, 0, 0, 0.22);
  }

  i.rotated {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
</style>
