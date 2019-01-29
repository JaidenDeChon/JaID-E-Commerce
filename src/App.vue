
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

                <!-- FOR LOOP: A dropdown button for each category -->
                <div class="option" v-for="category in this.$store.state.catelogue.categories" :key="category.name">

                  <!-- Faceplate is the element you see; is a flexbox -->
                  <div class="faceplate">
                    <h3>{{ category.name }}</h3><i class="fas fa-caret-down"></i>
                  </div>

                  <!-- Ivisible at first; contains dropdown options (droptions) -->
                  <div class="droptions-container" >

                    <!-- Link to given category's page -->
                    <div class="droption option">
                      <div class="faceplate">
                        <h3>All {{ category.name }}</h3><span></span>
                      </div>
                    </div>

                    <!-- FOR LOOP: A button/link for each item in category -->
                    <div class="droption option" v-for="item in category.items" :key="item.title">
                      <div class="faceplate">
                        <h3>{{ item.title }}</h3><span></span>
                      </div>
                    </div>

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


              <div class="option">
                <div class="faceplate"><img src="https://image.freepik.com/free-icon/abraham-lincoln_318-124865.jpg"/>
                  <h3>Lincoln's Wooden Teeth</h3><i class="fas fa-caret-down"></i>
                </div>
                <div class="droptions-container">
                  <div class="option">
                    <div class="faceplate noclick">
                      <h3>Price</h3>
                      <h3>$14.99</h3>
                    </div>
                  </div>
                  <div class="option">
                    <div class="faceplate noclick">
                      <h3>Quantity</h3>
                      <h3>3</h3>
                    </div>
                  </div>
                  <div class="option">
                    <div class="faceplate">
                      <h3>View item</h3>
                    </div>
                  </div>
                  <div class="option">
                    <div class="faceplate red">
                      <h3>Remove from Cart</h3><i class="fas fa-times"></i>
                    </div>
                  </div>
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

    // $("#overlay").hide();

    // define overlay and sidebars
    var overlay = $("#nav").children("#overlay")
    var menu = $("#nav").children("#menu")
    var cart = $("#nav").children("#cart")

    function showOverlay() {

        overlay.addClass("toggled")

        // hide overflow on body
        $("body").css("overflow-y", "hidden");

        // show overlay, start delay for timing
        overlay.fadeIn(200)

    }

function hideOverlay() {

	overlay.removeClass("toggled")

	// this if-else statement manages reallowing body overflow
	// overflow is set to overlay so that page doesn't jump left/right upon menu toggling
	// Chrome supports overlay scrollbar, so we use that if user is in Chome

	if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
		$("body").css("overflow-y", "auto");
	} else {
		$("body").css("overflow-y", "overlay");
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

$(".option").click(function() {

	if ($(this).children('div.droptions-container').length != 0) {

		// find droptions-container child of option
		var slider = $(this).children(".droptions-container")

		// give display: visible to slider, done with sliding animation
		slider.slideToggle(200, function() {
			slider.toggleClass("expanded");
		})

		// if it is already open, give white background on click (once closed)
		if (slider.hasClass("expanded")) {
			this.style.backgroundColor = "#ffffff"

		// otherwise give it a grey background
		} else {
			this.style.backgroundColor = "#e8e8e8"
		}
	} else {
		return;
	}
})

  }
}
</script>




<style scoped>

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
  height: 100vh;
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
}
#nav .sidebar .option {
  background: white;
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
  background: #f2f2f2;
}
#nav .sidebar .option .droptions-container.expanded {
  display: visible;
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
}
#nav .sidebar .option .faceplate.noclick {
  background-color: #ffffff;
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
