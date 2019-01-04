
<template>
    <div id="app">
        <div id="nav-spacer"></div>
        <div id="nav">
          <div id="left">
            <div id="hamburger"><i class="fas fa-bars"></i></div>
          </div>
          <div id="center">
            <router-link to="/">
              <div id="logo"> 
                <h1>yosemite</h1>
                <p>open e-commerce by Jaiden DeChon</p>
              </div>
            </router-link>
          </div>
          <div id="right">
            <div id="cart-button"><i class="fas fa-shopping-cart"></i></div>
          </div>
          <div id="overlay"></div>

          <div id="menu">

              <div class="option" id="close-menu">
                <div class="cover"><i class="fas fa-times"></i></div>
              </div>

              <router-link to="/">
                  <div class="option">
                      <div class="cover">
                            <p>Home</p>
                      </div>
                  </div>
              </router-link>

              <div class="option" v-for="category in this.$store.state.catelogue.categories" :key="category.name">

                  <div class="cover">
                    <p>{{ category.name }}</p>
                    <i class="fas fa-caret-down"></i>
                  </div>

                  <div class="submenu">

                      <router-link :to="{ name: 'category', params: { categoryName: category.name } }">
                          <div class="option">All {{ category.name }}</div>
                      </router-link>

                      <router-link :to="{ name: 'item', params: { categoryName: category.name, itemTitle: item.title } }" v-for="item in category.items" :key="item.title">
                          <div class="option">{{ item.title }}</div>
                      </router-link>

                  </div>

              </div>

          </div>

          <div id="cart">
            <div class="option" id="close-cart">
                <div class="cover"><i class="fas fa-times"></i></div>
              </div>
          </div>

        </div>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>


<script>
export default {
  mounted: function() {
    // hide darkened menu overlay
    $("#overlay").hide();

    // Define openMenu function
    function openMenu() {
      $("body").css("overflow-y", "hidden");
      $("#nav")
        .children("#overlay")
        .fadeIn(300);
      $("#overlay")
        .siblings("#menu")
        .delay(100)
        .animate({ left: "0" }, 300);
    }

    // Define closeMenu function
    function closeMenu() {
      if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
        $("body").css("overflow-y", "auto");
      } else {
        $("body").css("overflow-y", "overlay");
      }
      $("#overlay")
        .siblings("#menu")
        .animate({ left: "-420px" }, 300);
      $("#nav")
        .children("#overlay")
        .delay(100)
        .fadeOut(300);
    }

    // Define openCart function
    function openCart() {
      $("body").css("overflow-y", "hidden");
      $("#nav")
        .children("#overlay")
        .fadeIn(300);
      $("#overlay")
        .siblings("#cart")
        .delay(100)
        .animate({ right: "0" }, 300);
    }

    // Define closeCart function
    function closeCart() {
      if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
        $("body").css("overflow-y", "auto");
      } else {
        $("body").css("overflow-y", "overlay");
      }
      $("#overlay")
        .siblings("#cart")
        .animate({ right: "-420px" }, 300);
      $("#nav")
        .children("#overlay")
        .delay(100)
        .fadeOut(300);
    }

    // Show dark overlay and expand menu when hamburger is clicked
    $("#hamburger").click(function() {
      openMenu();
    });

    // Close menu when menu's "close" button is clicked
    $("#close-menu").click(function() {
      closeMenu();
    });

    // Show dark overlay and expand cart when cart button is clicked
    $("#cart-button").click(function() {
      openCart();
    });

    // Close cart when cart's "close" button is clicked
    $("#close-cart").click(function() {
      closeCart();
    });

    // Close menu when dark overlay is clicked
    $("#overlay").click(function() {
      closeMenu();
      closeCart();
    });

    // Close menu when a link is clicked
    $("#menu")
      .find("a")
      .click(function() {
        closeMenu();
      });

    // Expand submenu when its' parent is clicked
    $(".cover").click(function() {
      $(this)
        .siblings(".submenu")
        .stop()
        .animate(
          {
            height: "toggle"
          },
          350
        ),
        $(this)
          .children(".fas")
          .toggleClass("rotate");
    });
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Advent+Pro|Raleway");

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: overlay;
}

a {
  text-decoration: none;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar:hover {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #c4c4c4;
  border-radius: 10px;
  margin: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 10px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav-spacer {
  height: 100px;
  width: 100vw;
}

#nav {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
  height: 100px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.85);
  color: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  z-index: 1000;
}

#nav a {
  color: #555;
}

#nav #left,
#nav #center,
#nav #right {
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
  margin: 5px 0;
}
#nav #center #logo p {
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  margin: 5px 0;
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
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.7);
}
#nav #menu {
  position: absolute;
  top: 0;
  left: -420px;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  background: white;
}

#nav #cart {
  position: absolute;
  top: 0;
  right: -420px;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  background: white;
}

#nav div .option {
  box-sizing: inherit;
  min-height: 60px;
  font-family: "Raleway", sans-serif;
  font-size: 27px;
  cursor: pointer;
  border-top: 1px solid #e8e8e8;
}
#nav div .option .cover {
  min-height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.25s ease-in-out;
}
#nav div .option .cover .fas {
  transition: 0.25s ease-in-out;
}
#nav div .option .cover .fas.rotate {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
#nav div .option .cover:hover {
  background: #e8e8e8;
}
#nav div .option .submenu {
  display: none;
  border-bottom: 1px solid #e8e8e8;
}
#nav div .option .submenu a {
  text-decoration: none;
  color: #555;
}
#nav div .option .submenu .option {
  padding: 0 40px;
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: 0.2s ease-in-out;
}
#nav div .option .submenu .option:hover {
  padding: 0 40px 0 50px;
}
#nav div #close-menu,
#nav div #close-cart {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#nav div #close-menu .fas,
#nav div #close-cart .fas {
  transition: 0.25s ease-in-out;
}
#nav div #close-menu:hover,
#nav div #close-cart:hover {
  background: #e8e8e8;
}
#nav div #close-menu:hover .fas,
#nav div #close-cart:hover .fas {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

@media (min-width: 400px) {
  #nav #menu {
    min-width: 400px;
    max-width: 420px;
  }
  #nav #cart {
    min-width: 400px;
    max-width: 420px;
  }
  #nav #menu #close-menu {
    font-size: 20px;
  }
}
@media (min-width: 1000px) {
  #nav #left #hamburger i,
  #nav #right #cart-button i {
    font-size: 20px;
  }
}
</style>
